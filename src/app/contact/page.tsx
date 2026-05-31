"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, Clock } from "lucide-react";
import { FadeInView } from "@/components/Animations";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/263780000000?text=Hello%20Makoti%20Detergents!%20I%20would%20like%20to%20inquire%20about%20your%20products.", "_blank");
  };

  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Get In Touch</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-3">
              Let&apos;s <span className="text-brand-green">talk</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              We would love to hear from you. Contact us for product inquiries, wholesale
              orders, partnerships, or customer support.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <FadeInView>
                <h2 className="text-2xl font-bold text-brand-deep mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: <Phone size={20} />, title: "Phone", detail: "+263 78 000 0000", sub: "Monday – Friday, 8am – 5pm" },
                    { icon: <Mail size={20} />, title: "Email", detail: "info@makotidetergents.co.zw", sub: "We respond within 24 hours" },
                    { icon: <MapPin size={20} />, title: "Location", detail: "Harare, Zimbabwe", sub: "Serving all provinces" },
                    { icon: <Clock size={20} />, title: "Business Hours", detail: "Mon – Fri: 8:00 AM – 5:00 PM", sub: "Sat: 8:00 AM – 1:00 PM" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-deep">{item.title}</p>
                        <p className="text-brand-charcoal/70">{item.detail}</p>
                        <p className="text-xs text-brand-gray mt-0.5">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-medium text-white hover:bg-green-600 transition-all active:scale-95"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </button>
              </FadeInView>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <FadeInView direction="left">
                <div className="p-8 lg:p-10 rounded-3xl bg-white border border-brand-deep/5 shadow-xl shadow-black/5">
                  <h2 className="text-2xl font-bold text-brand-deep mb-2">Send us a message</h2>
                  <p className="text-sm text-brand-charcoal/50 mb-8">Fill in the form below and we&apos;ll get back to you as soon as possible.</p>

                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-brand-green" />
                      </div>
                      <h3 className="text-2xl font-bold text-brand-deep">Message Sent!</h3>
                      <p className="mt-3 text-brand-charcoal/50 max-w-md mx-auto">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                      <button onClick={() => setSubmitted(false)} className="mt-6 text-sm font-medium text-brand-green hover:text-brand-green-dark transition-colors">
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { label: "Full Name", type: "text", placeholder: "Your full name" },
                          { label: "Phone Number", type: "tel", placeholder: "+263 77 000 0000" },
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
                        <label className="block text-sm font-medium text-brand-deep mb-1.5">Subject</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors">
                          <option>Product Inquiry</option>
                          <option>Wholesale / Bulk Order</option>
                          <option>Become a Distributor</option>
                          <option>Partnership</option>
                          <option>Customer Support</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-deep mb-1.5">Message</label>
                        <textarea rows={5} placeholder="Tell us how we can help..." required className="w-full px-4 py-3 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors resize-none" />
                      </div>
                      <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-deep px-6 py-3.5 text-sm font-medium text-white hover:bg-brand-deep/90 transition-all active:scale-[0.98]">
                        <Send size={16} /> Send Message
                      </button>
                    </form>
                  )}
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden bg-brand-light h-[300px] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={40} className="mx-auto text-brand-green mb-3" />
              <p className="font-bold text-brand-deep">Harare, Zimbabwe</p>
              <p className="text-sm text-brand-charcoal/50">Serving customers nationwide</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
