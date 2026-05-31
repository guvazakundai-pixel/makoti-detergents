"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Package, Truck, Percent, Clock, Send } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader } from "@/components/Animations";

const benefits = [
  { icon: <Percent size={24} />, title: "Wholesale Pricing", desc: "Significant discounts on bulk orders — the more you buy, the more you save." },
  { icon: <Package size={24} />, title: "Bulk Ordering", desc: "Order in quantities that make sense for your business — we handle large volumes." },
  { icon: <Truck size={24} />, title: "Reliable Supply", desc: "Consistent stock availability and dependable delivery across Zimbabwe." },
  { icon: <Clock size={24} />, title: "Fast Fulfillment", desc: "Quick order processing and dispatch to keep your business running smoothly." },
];

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Wholesale</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-3">
              Bulk cleaning products at{" "}
              <span className="text-brand-green">competitive prices</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Whether you run a retail store, cleaning company, hotel, or institution — we supply
              quality detergents in bulk at prices that make business sense.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label="Why Buy Wholesale" title="Save more with bulk purchasing" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <StaggerItem key={b.title}>
                <div className="p-8 rounded-3xl border border-brand-deep/5 text-center h-full hover:border-brand-green/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mx-auto mb-4">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-brand-deep mb-2">{b.title}</h3>
                  <p className="text-sm text-brand-charcoal/50">{b.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 lg:py-32 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Who It&apos;s For</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-deep mt-3">
                Wholesale solutions for <span className="gradient-text">every industry</span>
              </h2>
              <div className="mt-8 space-y-3">
                {["Retail Stores & Supermarkets", "Cleaning Companies & Janitorial Services", "Hotels, Lodges & Guesthouses", "Restaurants & Food Service", "Schools & Universities", "Hospitals & Healthcare Facilities", "Manufacturing Companies", "Government Institutions"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white transition-colors"
                  >
                    <CheckCircle size={18} className="text-brand-green flex-shrink-0" />
                    <span className="text-brand-charcoal/70">{item}</span>
                  </motion.div>
                ))}
              </div>
            </FadeInView>

            {/* Form */}
            <FadeInView direction="left">
              <div className="p-8 lg:p-10 rounded-3xl bg-white border border-brand-deep/5 shadow-xl shadow-black/5">
                <h3 className="text-2xl font-bold text-brand-deep mb-2">Request Wholesale Pricing</h3>
                <p className="text-sm text-brand-charcoal/50 mb-8">Fill in your details and we&apos;ll get back to you with a custom quote.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-brand-green" />
                    </div>
                    <h4 className="text-xl font-bold text-brand-deep">Quote Request Sent!</h4>
                    <p className="mt-2 text-brand-charcoal/50">We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { label: "Full Name", type: "text", placeholder: "Your full name" },
                      { label: "Company Name", type: "text", placeholder: "Your company (optional)" },
                      { label: "Phone Number", type: "tel", placeholder: "e.g. +263 77 000 0000" },
                      { label: "Email Address", type: "email", placeholder: "you@example.com" },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="block text-sm font-medium text-brand-deep mb-1.5">{field.label}</label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-brand-deep mb-1.5">Products Interested In</label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Washing Powder, Dishwashing Liquid, Pine Gel..."
                        className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-deep/90 transition-all active:scale-[0.98]"
                    >
                      <Send size={16} />
                      Request Quote
                    </button>
                  </form>
                )}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-deep relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <FadeInView className="relative mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Want to become a distributor?</h2>
          <p className="mt-4 text-white/60 text-lg">Build your business with Makoti products and earn great margins.</p>
          <Link href="/distributor" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-medium text-black hover:bg-brand-green/90 transition-all active:scale-95">
            Become a Distributor <ArrowRight size={18} />
          </Link>
        </FadeInView>
      </section>
    </>
  );
}
