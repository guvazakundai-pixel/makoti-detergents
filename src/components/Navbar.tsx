"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Company",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/industries", label: "Industries Served" },
      { href: "/sustainability", label: "Sustainability" },
    ],
  },
  {
    label: "Products",
    children: [
      { href: "/products", label: "All Products" },
      { href: "/wholesale", label: "Wholesale" },
    ],
  },
  { href: "/distributor", label: "Become a Distributor" },
  { href: "/blog", label: "Blog" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const toggleDropdown = useCallback((label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🧼</span>
            <span className="text-xl font-bold tracking-tight text-brand-deep">
              Makoti<span className="text-brand-green">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.href ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-brand-green bg-brand-green/10"
                      : "text-brand-charcoal/80 hover:text-brand-deep hover:bg-brand-light"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-brand-green/10 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ) : (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-full text-brand-charcoal/80 hover:text-brand-deep hover:bg-brand-light transition-colors duration-300"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        openDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-52 glass rounded-2xl p-2 shadow-xl shadow-black/5"
                      >
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm rounded-xl transition-colors duration-200 ${
                              pathname === child.href
                                ? "bg-brand-green/10 text-brand-green font-medium"
                                : "text-brand-charcoal/70 hover:text-brand-deep hover:bg-brand-light"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center gap-2 rounded-full bg-brand-deep px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-deep/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-deep/20 active:scale-95"
            >
              <Sparkles size={14} />
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-brand-deep hover:bg-brand-light transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 pt-24 overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.href ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-brand-green/10 text-brand-green"
                          : "text-brand-charcoal hover:bg-brand-light"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <div key={link.label}>
                      <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-brand-gray mt-2">
                        {link.label}
                      </div>
                      {link.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-3 ml-2 rounded-xl text-sm transition-colors ${
                            pathname === child.href
                              ? "bg-brand-green/10 text-brand-green font-medium"
                              : "text-brand-charcoal/70 hover:bg-brand-light"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )
                )}
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-5 py-3 text-base font-medium text-white hover:bg-brand-deep/90 transition-all"
                >
                  <Sparkles size={16} />
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
