"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/distributor", label: "Distributors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const now = window.scrollY;
      setVisible(now < 100 || now < lastScroll);
      setLastScroll(now);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-snow/10"
      >
        {/* Thin red accent line at top */}
        <div className="h-[2px] bg-gradient-to-r from-red via-red-bright to-transparent" />

        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          {/* Logo — bold and simple */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 bg-red flex items-center justify-center">
              <span className="text-white font-black text-sm">M</span>
            </div>
            <span className="text-lg font-black tracking-tighter text-snow">
              MAKOTI<span className="text-red">.</span>
            </span>
          </Link>

          {/* Desktop links — slim, industrial feel */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-red"
                    : "text-snow/50 hover:text-snow"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-red"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <Link
              href="/contact"
              className="ml-6 group inline-flex items-center gap-1 bg-red px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all duration-300"
            >
              Get Quote
              <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-snow hover:text-red transition-colors"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-ink"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-black uppercase tracking-widest ${
                      pathname === link.href ? "text-red" : "text-snow/60 hover:text-snow"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all"
                >
                  Get Quote <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
