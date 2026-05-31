"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Package, Truck, Percent, Clock, Send } from "lucide-react";
import { Reveal, StaggerWrap, StaggerChild, SectionLabel, SectionHeading } from "@/components/Animations";

export default function WholesalePage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Wholesale</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Bulk cleaning at{" "}
              <span className="gradient-brand">competitive</span> prices
            </h1>
            <p className="mt-6 text-xl text-snow/40 max-w-2xl">
              Quality detergents in bulk for retailers, cleaning companies, hotels, and institutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {[
              { icon: <Percent size={22} />, t: "Wholesale Pricing", d: "Significant discounts on bulk orders." },
              { icon: <Package size={22} />, t: "Bulk Ordering", d: "Order in quantities that make business sense." },
              { icon: <Truck size={22} />, t: "Reliable Supply", d: "Consistent stock and dependable delivery." },
              { icon: <Clock size={22} />, t: "Fast Fulfillment", d: "Quick processing to keep you running." },
            ].map((b) => (
              <StaggerChild key={b.t}>
                <div className="p-8 bg-ink-light border border-snow/5 hover:border-red/30 transition-colors text-center h-full">
                  <span className="text-red inline-block mb-4">{b.icon}</span>
                  <h3 className="font-black text-snow">{b.t}</h3>
                  <p className="text-sm text-snow/30 mt-2">{b.d}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>

          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal>
              <SectionLabel>Who It&apos;s For</SectionLabel>
              <SectionHeading>Solutions for <span className="text-red">every industry</span></SectionHeading>
              <div className="mt-8 space-y-2">
                {["Retail Stores & Supermarkets", "Cleaning Companies", "Hotels & Guesthouses", "Restaurants & Food Service", "Schools & Universities", "Hospitals & Healthcare", "Manufacturing Companies", "Government Institutions"].map((item) => (
                  <div key={item} className="flex items-center gap-3 py-2 px-3 hover:bg-ink-light transition-colors">
                    <CheckCircle size={16} className="text-red flex-shrink-0" />
                    <span className="text-sm text-snow/50">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="p-8 bg-ink-light border border-snow/5">
                <h3 className="text-2xl font-black text-snow mb-2">Request a Quote</h3>
                <p className="text-sm text-snow/30 mb-8">We&apos;ll get back within 24 hours.</p>
                {sent ? (
                  <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-12">
                    <CheckCircle size={48} className="mx-auto text-red mb-4" />
                    <p className="text-xl font-black text-snow">Quote Request Sent!</p>
                    <p className="text-snow/30 mt-2">We&apos;ll be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                    {["Full Name", "Company", "Phone", "Email"].map((l) => (
                      <div key={l}>
                        <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">{l}</label>
                        <input type="text" className="w-full px-4 py-3 bg-ink border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">Products Interested In</label>
                      <textarea rows={3} className="w-full px-4 py-3 bg-ink border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors resize-none" />
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-red px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all">
                      <Send size={14} /> Request Quote
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
