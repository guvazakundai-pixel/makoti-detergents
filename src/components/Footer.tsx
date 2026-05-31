"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Heart,
} from "lucide-react";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/industries", label: "Industries Served" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/blog", label: "Blog" },
  ],
  Products: [
    { href: "/products", label: "All Products" },
    { href: "/wholesale", label: "Wholesale" },
    { href: "/distributor", label: "Become a Distributor" },
  ],
  Support: [
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact Us" },
    { href: "/contact", label: "Get a Quote" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-brand-deep text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="py-16 border-b border-white/10"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Ready to experience{" "}
                <span className="text-brand-green">powerful cleaning</span>?
              </h2>
              <p className="mt-2 text-white/60 text-lg">
                Partner with Makoti Detergents today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 font-medium text-black hover:bg-brand-green/90 transition-all duration-300 hover:shadow-lg hover:shadow-brand-green/30 active:scale-95"
              >
                <Sparkles size={18} />
                Get a Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-medium text-white hover:bg-white/20 transition-all duration-300 active:scale-95"
              >
                Shop Products
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🧼</span>
              <span className="text-xl font-bold tracking-tight">
                Makoti<span className="text-brand-green">.</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premium detergents and hygiene products designed to deliver powerful cleaning,
              freshness, and reliable performance every day.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-green" />
                <span>+263 78 000 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-brand-green" />
                <span>info@makotidetergents.co.zw</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-green" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-brand-green transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} Makoti Detergents. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> in Zimbabwe
          </p>
        </div>
      </div>
    </footer>
  );
}
