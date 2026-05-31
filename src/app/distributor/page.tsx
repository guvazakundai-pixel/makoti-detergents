"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Send, TrendingUp, Package, Megaphone, Shield, Users } from "lucide-react";
import { Reveal, StaggerWrap, StaggerChild, SectionLabel, SectionHeading } from "@/components/Animations";

export default function DistributorPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-red w-[400px] h-[400px] -top-20 right-20" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Partner With Us</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Become a{" "}
              <span className="gradient-brand">Makoti Distributor</span>
            </h1>
            <p className="mt-6 text-xl text-snow/40 max-w-2xl">
              Partner with us and grow your business with quality cleaning products trusted across Zimbabwe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: <TrendingUp size={22} />, t: "Wholesale Pricing", d: "Exclusive distributor pricing that maximizes your profit margins." },
              { icon: <Package size={22} />, t: "Bulk Ordering", d: "Order in quantities you need with flexible minimums." },
              { icon: <Megaphone size={22} />, t: "Marketing Support", d: "Get promotional materials and brand assets to grow." },
              { icon: <Shield size={22} />, t: "Reliable Supply", d: "Consistent product availability — we keep distributors stocked." },
              { icon: <Users size={22} />, t: "Dedicated Support", d: "A dedicated account manager to help you succeed." },
              { icon: <Send size={22} />, t: "Fast Fulfillment", d: "Quick order processing and dispatch." },
            ].map((p) => (
              <StaggerChild key={p.t}>
                <div className="p-8 bg-ink-light border border-snow/5 hover:border-red/30 transition-colors h-full">
                  <span className="text-red">{p.icon}</span>
                  <h3 className="text-lg font-black text-snow mt-4 mb-2">{p.t}</h3>
                  <p className="text-sm text-snow/30">{p.d}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* How it works + Form */}
      <section className="relative bg-ink-light py-24 clip-diagonal-tl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <SectionLabel>How It Works</SectionLabel>
            <SectionHeading>4 steps to <span className="text-red">get started</span></SectionHeading>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-8 mb-24">
            {[
              { step: "01", t: "Apply", d: "Fill in the application form with your details." },
              { step: "02", t: "Get Approved", d: "Our team contacts you within 48 hours." },
              { step: "03", t: "Place Order", d: "Start with a starter pack or bulk order." },
              { step: "04", t: "Start Selling", d: "Receive stock and start growing your business." },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.1} className="text-center">
                <span className="text-5xl font-black text-snow/10">{s.step}</span>
                <h3 className="font-black text-snow mt-2">{s.t}</h3>
                <p className="text-sm text-snow/30 mt-1">{s.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="max-w-2xl mx-auto p-8 bg-ink border border-snow/5">
              <h3 className="text-2xl font-black text-snow mb-6">Start Your Application</h3>
              {sent ? (
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-12">
                  <CheckCircle size={48} className="mx-auto text-red mb-4" />
                  <p className="text-xl font-black text-snow">Application Submitted!</p>
                  <p className="text-snow/30 mt-2">We&apos;ll contact you within 48 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {["Full Name", "Phone", "Email", "Company"].map((l) => (
                      <div key={l}>
                        <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">{l}</label>
                        <input type="text" className="w-full px-4 py-3 bg-ink-light border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">Location / City</label>
                    <input type="text" className="w-full px-4 py-3 bg-ink-light border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">Why do you want to become a distributor?</label>
                    <textarea rows={3} className="w-full px-4 py-3 bg-ink-light border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-red px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all">
                    <Send size={14} /> Submit Application
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
