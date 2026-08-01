"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarData } from "@/types/navbar";
import { defaultNavbarData } from "@/data/navbar";
import Image from "next/image";

interface NavbarProps {
  data?: NavbarData;
}

export default function Navbar({ data = defaultNavbarData }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-dark text-white border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-3 group">
              {data.logoImage ? (
                <div className="relative flex items-center">
                  <Image
                    src={data.logoImage.src}
                    alt={data.logoImage.alt}
                    width={data.logoImage.width}
                    height={data.logoImage.height}
                    priority
                    className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white group-hover:text-brand-primary transition-colors">
                    {data.logoText}
                  </span>
                  {data.rcNumber && (
                    <span className="text-[10px] tracking-widest text-brand-primary uppercase font-sans font-semibold">
                      {data.rcNumber}
                    </span>
                  )}
                </div>
              )}
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center space-x-6 xl:space-x-8"
            aria-label="Main Navigation"
          >
            {data.navLinks.map((link) => {
              const hasDropdown = Boolean(
                link.dropdownItems && link.dropdownItems.length > 0,
              );

              return (
                <div
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() =>
                    hasDropdown && setActiveDropdown(link.title)
                  }
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-slate-100 hover:text-brand-primary transition-colors py-2 cursor-pointer"
                      onClick={() => toggleDropdown(link.title)}
                      aria-expanded={activeDropdown === link.title}
                    >
                      {link.title}
                      <motion.div
                        animate={{
                          rotate: activeDropdown === link.title ? 180 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-primary" />
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className="text-sm font-semibold tracking-wide text-slate-100 hover:text-brand-primary transition-colors py-2 block"
                    >
                      {link.title}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu Animation */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === link.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-1 w-56 rounded-md shadow-xl bg-brand-dark border border-white/10 z-50 overflow-hidden"
                      >
                        <div className="py-2">
                          {link.dropdownItems?.map((subItem, idx) => (
                            <Link
                              key={`${link.id}-sub-${idx}`}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-brand-dark-soft hover:text-brand-primary transition-colors"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <Link
                href={data.ctaButton.href}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-bold text-xs uppercase tracking-widest transition-colors shadow-md hover:shadow-brand-primary/20"
              >
                {data.ctaButton.label}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-brand-dark-soft focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-brand-dark border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {data.navLinks.map((link) => {
                const hasDropdown = Boolean(
                  link.dropdownItems && link.dropdownItems.length > 0,
                );
                const isOpen = activeDropdown === link.title;

                return (
                  <div
                    key={`mobile-${link.id}`}
                    className="border-b border-white/5 pb-2"
                  >
                    {hasDropdown ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => toggleDropdown(link.title)}
                          className="w-full flex justify-between items-center py-2 text-base font-medium text-slate-200 hover:text-brand-primary cursor-pointer"
                        >
                          {link.title}
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 space-y-2 mt-1 overflow-hidden"
                            >
                              {link.dropdownItems?.map((subItem, idx) => (
                                <Link
                                  key={`mobile-sub-${idx}`}
                                  href={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block py-1.5 text-sm text-slate-300 hover:text-brand-primary transition-colors"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href || "#"}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-base font-medium text-slate-200 hover:text-brand-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                );
              })}

              <div className="pt-4">
                <Link
                  href={data.ctaButton.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center py-3 rounded-full bg-brand-primary text-brand-dark font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform"
                >
                  {data.ctaButton.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
