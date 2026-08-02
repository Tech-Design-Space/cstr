import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name must be at least 2 characters long")
    .max(100, "Full Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(20, "Phone number is too long"),
  subject: z
    .string()
    .min(1, "Please select a subject for your inquiry"),
  preferredMethod: z
    .string()
    .min(1, "Please specify your preferred contact method"),
  message: z
    .string()
    .optional(),
  turnstileToken: z
    .string()
    .min(1, "Anti-spam verification incomplete. Please try again."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;