"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const toggleDropdown = (title: string) => {
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const isLinkActive = (href?: string, dropdownItems?: { href: string }[]) => {
    if (href && pathname === href) return true;
    if (dropdownItems) {
      return dropdownItems.some((item) => pathname === item.href);
    }
    return false;
  };

  const isCtaActive = pathname === data.ctaButton.href;

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-brand-dark border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          
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
                    className="h-14 sm:h-16 lg:h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-brand-dark group-hover:text-brand-primary transition-colors">
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
                link.dropdownItems && link.dropdownItems.length > 0
              );
              const active = isLinkActive(link.href, link.dropdownItems);

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
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide transition-colors py-2 cursor-pointer ${
                        active
                          ? "text-brand-primary font-bold"
                          : "text-brand-dark hover:text-brand-primary"
                      }`}
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
                        <ChevronDown
                          className={`w-4 h-4 ${
                            active
                              ? "text-brand-primary"
                              : "text-slate-500 group-hover:text-brand-primary"
                          }`}
                        />
                      </motion.div>
                    </button>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className={`text-sm font-semibold tracking-wide transition-colors py-2 block ${
                        active
                          ? "text-brand-primary font-bold"
                          : "text-brand-dark hover:text-brand-primary"
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === link.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 mt-1 w-56 rounded-lg shadow-lg bg-white border border-slate-100 z-50 overflow-hidden ring-1 ring-black/5"
                      >
                        <div className="py-2">
                          {link.dropdownItems?.map((subItem, idx) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={`${link.id}-sub-${idx}`}
                                href={subItem.href}
                                className={`block px-4 py-2.5 text-sm transition-colors ${
                                  isSubActive
                                    ? "bg-slate-50 text-brand-primary font-bold"
                                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-primary"
                                }`}
                              >
                                {subItem.title}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={data.ctaButton.href}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brand-primary hover:bg-brand-primary-dark text-white font-bold text-xs uppercase tracking-widest transition-colors shadow-sm hover:shadow-md"
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
              className="p-2 rounded-lg text-brand-dark hover:text-brand-primary hover:bg-slate-100 focus:outline-none z-50 transition-colors"
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

      {/* Mobile Drawer & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white border-l border-slate-200 z-50 lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6 pt-24 space-y-4">
                {data.navLinks.map((link) => {
                  const hasDropdown = Boolean(
                    link.dropdownItems && link.dropdownItems.length > 0
                  );
                  const isOpen = activeDropdown === link.title;
                  const active = isLinkActive(link.href, link.dropdownItems);

                  return (
                    <div
                      key={`mobile-${link.id}`}
                      className="border-b border-slate-100 pb-3"
                    >
                      {hasDropdown ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleDropdown(link.title)}
                            className={`w-full flex justify-between items-center py-2 text-base font-semibold cursor-pointer transition-colors ${
                              active
                                ? "text-brand-primary font-bold"
                                : "text-brand-dark hover:text-brand-primary"
                            }`}
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
                                {link.dropdownItems?.map((subItem, idx) => {
                                  const isSubActive = pathname === subItem.href;
                                  return (
                                    <Link
                                      key={`mobile-sub-${idx}`}
                                      href={subItem.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={`block py-1.5 text-sm transition-colors ${
                                        isSubActive
                                          ? "text-brand-primary font-bold"
                                          : "text-slate-600 hover:text-brand-primary"
                                      }`}
                                    >
                                      {subItem.title}
                                    </Link>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href || "#"}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block py-2 text-base font-semibold transition-colors ${
                            active
                              ? "text-brand-primary font-bold"
                              : "text-brand-dark hover:text-brand-primary"
                          }`}
                        >
                          {link.title}
                        </Link>
                      )}
                    </div>
                  );
                })}

                {/* Integrated Contact Us Menu Item */}
                <div className="pt-2">
                  <Link
                    href={data.ctaButton.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-center py-3 rounded-full bg-brand-primary text-white font-bold text-xs uppercase tracking-widest active:scale-95 transition-all shadow-sm hover:bg-brand-primary-dark ${
                      isCtaActive ? "ring-2 ring-brand-primary-dark" : ""
                    }`}
                  >
                    {data.ctaButton.label}
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}