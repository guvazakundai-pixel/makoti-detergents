"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Send, TrendingUp, Package, Megaphone, ShieldCheck, Users } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader } from "@/components/Animations";

const perks = [
  { icon: <TrendingUp size={24} />, title: "Wholesale Pricing", desc: "Access exclusive distributor pricing that maximizes your profit margins." },
  { icon: <Package size={24} />, title: "Bulk Ordering", desc: "Order in the quantities you need with flexible minimum order requirements." },
  { icon: <Megaphone size={24} />, title: "Marketing Support", desc: "Get promotional materials, product samples, and brand assets to grow your sales." },
  { icon: <ShieldCheck size={24} />, title: "Reliable Supply", desc: "Consistent product availability — we keep our distributors well-stocked." },
  { icon: <Users size={24} />, title: "Dedicated Support", desc: "A dedicated account manager to help you succeed with Makoti products." },
  { icon: <Send size={24} />, title: "Fast Fulfillment", desc: "Quick order processing and dispatch to keep your customers happy." },
];

export default function DistributorPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Partner With Us</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-deep mt-3">
              Become a{" "}
              <span className="gradient-text">Makoti Distributor</span>
            </h1>
            <p className="mt-6 text-lg text-brand-charcoal/60 leading-relaxed">
              Partner with Makoti Detergents and grow your business with quality cleaning
              products trusted by homes and businesses across Zimbabwe.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label="Distributor Benefits" title="Why partner with Makoti?" description="Join a growing network of successful distributors and build a profitable business." />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p) => (
              <StaggerItem key={p.title}>
                <div className="p-8 rounded-3xl border border-brand-deep/5 glow-card h-full hover:border-brand-green/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-deep mb-2">{p.title}</h3>
                  <p className="text-sm text-brand-charcoal/50 leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label="How It Works" title="Start your journey in 4 simple steps" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", desc: "Fill in the distributor application form below with your details." },
              { step: "02", title: "Get Approved", desc: "Our team reviews your application and contacts you within 48 hours." },
              { step: "03", title: "Place Your Order", desc: "Start with a starter pack or place your first bulk order at distributor prices." },
              { step: "04", title: "Start Selling", desc: "Receive your stock, use our marketing materials, and start growing your business." },
            ].map((item, i) => (
              <FadeInView key={item.step} delay={i * 0.15} className="text-center relative">
                {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-brand-green/30 -z-10" />}
                <div className="w-16 h-16 rounded-full bg-brand-green text-black font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-brand-deep">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-charcoal/50">{item.desc}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SectionHeader label="Apply Now" title="Start your distributor application" />

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 bg-brand-light rounded-3xl">
              <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold text-brand-deep">Application Submitted!</h3>
              <p className="mt-3 text-brand-charcoal/50 max-w-md mx-auto">Thank you for your interest in becoming a Makoti distributor. Our team will review your application and contact you within 48 hours.</p>
            </motion.div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5 p-8 lg:p-10 rounded-3xl bg-white border border-brand-deep/5 shadow-xl shadow-black/5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: "Full Name", type: "text", placeholder: "Your full name" },
                  { label: "Phone Number", type: "tel", placeholder: "e.g. +263 77 000 0000" },
                  { label: "Email Address", type: "email", placeholder: "you@example.com" },
                  { label: "Company Name", type: "text", placeholder: "Your company (optional)" },
                ].map((f) => (
                  <div key={f.label}>
                    <label className="block text-sm font-medium text-brand-deep mb-1.5">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors" />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-deep mb-1.5">Location / City</label>
                <input type="text" placeholder="e.g. Harare, Bulawayo..." required className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-deep mb-1.5">Why do you want to become a distributor?</label>
                <textarea rows={3} placeholder="Tell us about your business and why you'd like to partner with Makoti..." className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-deep/90 transition-all active:scale-[0.98]">
                <Send size={16} /> Submit Application
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
