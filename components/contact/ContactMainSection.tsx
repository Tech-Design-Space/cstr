"use client";

import ContactInfoSidebar from "@/components/contact/ContactInfoSidebar";
import ContactForm from "@/components/contact/ContactForm";
import { ContactSectionData } from "@/types/contact";
import { defaultContactSectionData } from "@/data/contactSection";

interface ContactMainProps {
  data?: ContactSectionData;
}

export default function ContactMainSection({
  data = defaultContactSectionData,
}: ContactMainProps) {
  return (
    <section className="py-16 sm:py-24 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Office Information & Business Hours */}
          <div className="lg:col-span-5">
            <ContactInfoSidebar data={data} />
          </div>

          {/* RIGHT COLUMN: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <ContactForm subjectOptions={data.subjectOptions} />
          </div>

        </div>
      </div>
    </section>
  );
}