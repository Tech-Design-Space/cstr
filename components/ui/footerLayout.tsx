'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Clock, ArrowUpRight, ChevronUp } from 'lucide-react';
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
    socialLinks = [],
    copyrightText,
  } = config;

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <footer className="relative w-full bg-brand-light text-slate-600 font-sans border-t-4 border-brand-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 pb-14 border-b border-slate-200">
          
          {/* Column 1: Brand Info & Bio */}
          <div className="space-y-4">
            <div>
              {logoType === 'image' && logoImageUrl ? (
                <Link href="/" className="inline-block focus:outline-none">
                  <Image
                    src={logoImageUrl}
                    alt={companyName || 'Company Logo'}
                    width={150}
                    height={150}
                    className="object-contain h-auto max-h-14 lg:max-h-22 w-auto"
                  />
                </Link>
              ) : (
                <Link href="/" className="inline-block focus:outline-none">
                  <h3 className="text-xl font-serif font-bold text-brand-dark tracking-wider uppercase">
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

            <p className="text-sm text-slate-600 leading-relaxed pt-1">
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
                    className="w-9 h-9 rounded-full bg-slate-100 text-brand-dark hover:bg-brand-primary hover:text-white flex items-center justify-center transition-all duration-300 border border-slate-200"
                  >
                    {renderSocialIcon(social.iconName)}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-base font-serif font-bold text-brand-dark tracking-wide uppercase mb-4 border-b border-brand-primary/40 pb-2 inline-block">
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

          {/* Column 3: Contact & Office Info */}
          <div>
            <h4 className="text-base font-serif font-bold text-brand-dark tracking-wide uppercase mb-4 border-b border-brand-primary/40 pb-2 inline-block">
              Head Office
            </h4>
            <ul className="space-y-3.5 text-sm">
              {officeAddress && (
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <span className="text-slate-600 leading-snug">{officeAddress}</span>
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
                  <span className="text-slate-600 leading-snug">{workingHours}</span>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{copyrightText}</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>

      {/* Floating Go To Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-sm bg-brand-primary text-white hover:bg-brand-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none cursor-pointer ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}