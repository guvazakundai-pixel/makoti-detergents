"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/blog", label: "Blog" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products", label: "All Products" },
      { href: "/wholesale", label: "Wholesale" },
      { href: "/distributor", label: "Distributors" },
      { href: "/industries", label: "Industries" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Get in Touch" },
      { href: "/contact", label: "Request Quote" },
      { href: "/distributor", label: "Apply as Distributor" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink border-t border-snow/5">
      {/* Red divider */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-red to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
        {/* Large CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
            Ready to{" "}
            <span className="gradient-brand">clean better</span>?
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-red px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all"
            >
              Start a Conversation
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-snow/20 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-snow/70 hover:border-snow/50 hover:text-snow transition-all"
            >
              View Products
            </Link>
          </div>
        </motion.div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-red flex items-center justify-center">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <span className="text-lg font-black tracking-tighter text-snow">
                MAKOTI<span className="text-red">.</span>
              </span>
            </Link>
            <p className="text-snow/40 text-sm leading-relaxed max-w-xs">
              Premium detergents and hygiene products for homes and businesses across Zimbabwe.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-snow/30 mb-6">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-snow/50 hover:text-red transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="flex flex-wrap gap-6 py-8 border-t border-snow/5 text-xs text-snow/30">
          <span className="flex items-center gap-2"><Phone size={12} className="text-red" /> +263 78 000 0000</span>
          <span className="flex items-center gap-2"><Mail size={12} className="text-red" /> info@makotidetergents.co.zw</span>
          <span className="flex items-center gap-2"><MapPin size={12} className="text-red" /> Harare, Zimbabwe</span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 border-t border-snow/5 text-xs text-snow/20">
          <p>© {new Date().getFullYear()} Makoti Detergents. All rights reserved.</p>
          <p>Made in Zimbabwe 🇿🇼</p>
        </div>
      </div>
    </footer>
  );
}
