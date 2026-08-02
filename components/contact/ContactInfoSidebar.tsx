"use client";

import React from "react";
import { Building2, Clock, Check } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { ContactSectionData } from "@/types/contact";

interface ContactInfoSidebarProps {
  data: ContactSectionData;
}

export default function ContactInfoSidebar({ data }: ContactInfoSidebarProps) {
  return (
    <div className="space-y-10">
      {/* Office Information Block */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xs bg-brand-primary/15 flex items-center justify-center text-brand-primary flex-shrink-0">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-brand-dark">
            {data.officeInfo.officeTitle}
          </h3>
        </div>

        <ul className="space-y-3 pt-2 text-sm sm:text-base text-slate-600">
          <li className="flex items-start">
            <Check className="w-4 h-4 text-brand-primary mt-1 mr-2 flex-shrink-0" />
            <span>
              <strong className="text-slate-800 font-semibold">Address:</strong>{" "}
              {data.officeInfo.address}
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-4 h-4 text-brand-primary mt-1 mr-2 flex-shrink-0" />
            <span>
              <strong className="text-slate-800 font-semibold">Phone:</strong>{" "}
              <a
                href={`tel:${data.officeInfo.phone}`}
                className="hover:text-brand-primary transition-colors"
              >
                {data.officeInfo.phone}
              </a>
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-4 h-4 text-brand-primary mt-1 mr-2 flex-shrink-0" />
            <span>
              <strong className="text-slate-800 font-semibold">Email:</strong>{" "}
              <a
                href={`mailto:${data.officeInfo.email}`}
                className="text-brand-primary font-medium hover:underline"
              >
                {data.officeInfo.email}
              </a>
            </span>
          </li>
          <li className="flex items-start">
            <Check className="w-4 h-4 text-brand-primary mt-1 mr-2 flex-shrink-0" />
            <span>
              <strong className="text-slate-800 font-semibold">Website:</strong>{" "}
              <a
                href={`https://${data.officeInfo.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-primary font-medium hover:underline"
              >
                {data.officeInfo.website}
              </a>
            </span>
          </li>
        </ul>
      </div>

      {/* Business Hours Block */}
      <div className="space-y-4 pt-4 border-t border-slate-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xs bg-brand-primary/15 flex items-center justify-center text-brand-primary flex-shrink-0">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-brand-dark">Business Hours:</h3>
        </div>

        <ul className="space-y-2 pt-2 text-sm sm:text-base text-slate-600">
          <li className="flex items-center">
            <Check className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
            <span>{data.businessHours.weekdays}</span>
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
            <span>{data.businessHours.saturday}</span>
          </li>
          <li className="flex items-center">
            <Check className="w-4 h-4 text-brand-primary mr-2 flex-shrink-0" />
            <span>{data.businessHours.sunday}</span>
          </li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="space-y-3 pt-4 border-t border-slate-100">
        <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark">
          Social Media
        </h4>
        <div className="flex items-center space-x-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xs bg-slate-100 hover:bg-brand-primary hover:text-brand-dark text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xs bg-slate-100 hover:bg-brand-primary hover:text-brand-dark text-slate-600 flex items-center justify-center transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xs bg-slate-100 hover:bg-brand-primary hover:text-brand-dark text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-xs bg-slate-100 hover:bg-brand-primary hover:text-brand-dark text-slate-600 flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}