"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Send, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { contactFormSchema, ContactFormValues } from "@/lib/validation/contact";
import { CustomPhoneInput } from "../ui/phone-input";
import { CustomSelect } from "../ui/custom-select";

interface ContactFormProps {
  subjectOptions: string[];
}

export default function ContactForm({ subjectOptions }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      preferredMethod: "",
      message: "",
      turnstileToken: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || "Failed to send inquiry.");
      }

      setIsSubmitted(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xs border border-slate-200/80 shadow-sm">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="py-12 text-center space-y-4"
        >
          <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
          <h3 className="text-2xl font-bold text-brand-dark">
            Message Sent Successfully!
          </h3>
          <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base">
            Thank you for reaching out to Jiba Construction. Our technical sales
            team will review your inquiry and get back to you shortly.
          </p>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-6 py-2.5 bg-brand-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-dark-soft transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {serverError && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xs flex items-center space-x-3 text-rose-700 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              {...register("fullName")}
              placeholder="Full Name"
              className={`w-full px-4 py-3 rounded-xs border ${
                errors.fullName ? "border-rose-500" : "border-slate-300"
              } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-hidden text-sm text-slate-800 placeholder:text-slate-400 transition-colors`}
            />
            {errors.fullName && (
              <p className="text-xs text-rose-500 mt-1 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Email <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-xs border ${
                errors.email ? "border-rose-500" : "border-slate-300"
              } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-hidden text-sm text-slate-800 placeholder:text-slate-400 transition-colors`}
            />
            {errors.email && (
              <p className="text-xs text-rose-500 mt-1 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* International Phone Number Field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <Controller
              name="phone"
              control={control}
              rules={{
                validate: (value) =>
                  isValidPhoneNumber(value || "") ||
                  "Please enter a valid phone number",
              }}
              render={({ field }) => (
                <div
                  className={`flex items-center w-full rounded-xs border ${
                    errors.phone ? "border-rose-500" : "border-slate-300"
                  } focus-within:border-brand-primary focus-within:ring-1 focus-within:ring-brand-primary transition-colors bg-white overflow-hidden`}
                >
                  <CustomPhoneInput
                    value={field.value}
                    onChange={field.onChange}
                    defaultCountry="NG"
                    international
                  />
                </div>
              )}
            />
            {errors.phone && (
              <p className="text-xs text-rose-500 mt-1 font-medium">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Custom Subject Select Dropdown */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Subject <span className="text-rose-500">*</span>
            </label>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  value={field.value}
                  onValueChange={field.onChange}
                  options={subjectOptions}
                  placeholder="- Select Inquiry Type -"
                  error={!!errors.subject}
                />
              )}
            />
            {errors.subject && (
              <p className="text-xs text-rose-500 mt-1 font-medium">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Preferred Contact Method (Email, Phone, WhatsApp){" "}
              <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              {...register("preferredMethod")}
              placeholder="Email, Phone or Whatsapp"
              className={`w-full px-4 py-3 rounded-xs border ${
                errors.preferredMethod ? "border-rose-500" : "border-slate-300"
              } focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-hidden text-sm text-slate-800 placeholder:text-slate-400 transition-colors`}
            />
            {errors.preferredMethod && (
              <p className="text-xs text-rose-500 mt-1 font-medium">
                {errors.preferredMethod.message}
              </p>
            )}
          </div>

          {/* Project Brief / Message */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Project Brief / Message
            </label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder="Provide details about your project, timeline, or inquiries..."
              className="w-full px-4 py-3 rounded-xs border border-slate-300 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-hidden text-sm text-slate-800 placeholder:text-slate-400 transition-colors resize-y"
            />
          </div>

          {/* Cloudflare Turnstile Verification */}
          <div className="pt-1">
            <Turnstile
              siteKey={
                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                "1x00000000000000000000AA"
              }
              onSuccess={(token) => setValue("turnstileToken", token)}
              onError={() => setValue("turnstileToken", "")}
              onExpire={() => setValue("turnstileToken", "")}
            />
            {errors.turnstileToken && (
              <p className="text-xs text-rose-500 mt-1 font-medium">
                {errors.turnstileToken.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-3.5 bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 rounded-xs disabled:opacity-70 cursor-pointer"
          >
            <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
            <Send className="w-4 h-4 ml-1" />
          </button>
        </form>
      )}
    </div>
  );
}
