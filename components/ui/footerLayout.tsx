'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { 
  FaLinkedinIn, 
  FaXTwitter, 
  FaFacebookF, 
  FaInstagram 
} from 'react-icons/fa6';
import { FooterSectionData, SocialLinkItem } from '@/types/footer';
import { defaultFooterData } from '@/data/footerData';

interface FooterSectionProps {
  data?: Partial<FooterSectionData>;
}

export default function FooterSection({ data }: FooterSectionProps) {
  const config = { ...defaultFooterData, ...data };
  const {
    logoType = 'image',
    logoImageUrl,
 
    companyName,
    tagline,
    description,
    officeAddress,
    email,
    workingHours,
    quickLinks = [],
    // servicesLinks = [],
    socialLinks = [],
    copyrightText,
  } = config;

  const renderSocialIcon = (iconName: SocialLinkItem['iconName']) => {
    switch (iconName) {
      case 'linkedin':
        return <FaLinkedinIn className="w-4 h-4" />;
      case 'twitter':
        return <FaXTwitter className="w-4 h-4" />;
      case 'facebook':
        return <FaFacebookF className="w-4 h-4" />;
      case 'instagram':
        return <FaInstagram className="w-4 h-4" />;
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="w-full bg-brand-dark text-slate-300 font-sans border-t-4 border-brand-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-14 border-b border-brand-dark-soft/80">
          
          {/* Column 1: Brand Info & Bio */}
          <div className="space-y-4">
            
            {/* DYNAMIC LOGO HEADER (Image OR Text) */}
            <div>
              {logoType === 'image' && logoImageUrl ? (
                <Link href="/" className="inline-block focus:outline-none">
                  <Image
                    src={logoImageUrl}
                    alt={companyName || 'Company Logo'}
                    width={150}
                    height={150}
                    className="object-contain h-auto max-h-14 w-auto"
                  />
                </Link>
              ) : (
                <Link href="/" className="inline-block focus:outline-none">
                  <h3 className="text-xl font-serif font-bold text-white tracking-wider uppercase">
                    {companyName}
                  </h3>
                </Link>
              )}

              {tagline && (
                <p className="text-xs text-brand-primary font-medium tracking-wide uppercase mt-1.5">
                  {tagline}
                </p>
              )}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed pt-1">
              {description}
            </p>

            {/* Social Media Badges */}
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.platform}
                    className="w-9 h-9 rounded-full bg-brand-dark-soft text-slate-200 hover:bg-brand-primary hover:text-brand-dark flex items-center justify-center transition-all duration-300 border border-slate-700/50"
                  >
                    {renderSocialIcon(social.iconName)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-base font-serif font-bold text-white tracking-wide uppercase mb-4 border-b border-brand-primary/40 pb-2 inline-block">
              Company Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          {/* <div>
            <h4 className="text-base font-serif font-bold text-white tracking-wide uppercase mb-4 border-b border-brand-primary/40 pb-2 inline-block">
              Our Expertise
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Column 4: Contact & Office Info */}
          <div>
            <h4 className="text-base font-serif font-bold text-white tracking-wide uppercase mb-4 border-b border-brand-primary/40 pb-2 inline-block">
              Head Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              {officeAddress && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-snug">{officeAddress}</span>
                </li>
              )}

              {email && (
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                  <a href={`mailto:${email}`} className="hover:text-brand-primary transition-colors">
                    {email}
                  </a>
                </li>
              )}

              {workingHours && (
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-snug">{workingHours}</span>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>{copyrightText}</p>

          <div className="flex items-center gap-6">
         
            <Link href="/terms-of-service" className="hover:text-brand-primary transition-colors">
              Terms of Service
            </Link>
         
          </div>
        </div>

      </div>
    </footer>
  );
}