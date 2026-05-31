"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, Clock } from "lucide-react";
import { Reveal, SectionLabel, SectionHeading } from "@/components/Animations";

const info = [
  { icon: <Phone size={18} />, t: "Phone", d: "+263 78 000 0000", s: "Mon–Fri, 8am–5pm" },
  { icon: <Mail size={18} />, t: "Email", d: "info@makotidetergents.co.zw", s: "We respond within 24 hours" },
  { icon: <MapPin size={18} />, t: "Location", d: "Harare, Zimbabwe", s: "Serving all provinces" },
  { icon: <Clock size={18} />, t: "Business Hours", d: "Mon–Fri: 8AM–5PM", s: "Sat: 8AM–1PM" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Get In Touch</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Let&apos;s <span className="gradient-brand">talk</span>
            </h1>
            <p className="mt-6 text-xl text-snow/40 max-w-2xl">
              Product inquiries, wholesale orders, partnerships, or customer support — we would love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <Reveal>
              <div className="space-y-6">
                <h3 className="text-xl font-black text-snow mb-6">Contact Info</h3>
                {info.map((item) => (
                  <div key={item.t} className="flex gap-4">
                    <span className="text-red mt-0.5 flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-snow text-sm">{item.t}</p>
                      <p className="text-snow/50 text-sm">{item.d}</p>
                      <p className="text-[10px] text-snow/20 mt-0.5">{item.s}</p>
                    </div>
                  </div>
                ))}

                <a
                  href="https://wa.me/263780000000?text=Hello%20Makoti!%20I%20would%20like%20to%20inquire%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-green-600 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-green-500 transition-all"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal delay={0.15}>
                <div className="p-8 bg-ink-light border border-snow/5">
                  <h3 className="text-2xl font-black text-snow mb-2">Send a Message</h3>
                  <p className="text-sm text-snow/30 mb-8">Fill in the form and we&apos;ll get back to you promptly.</p>

                  {sent ? (
                    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-center py-16">
                      <CheckCircle size={48} className="mx-auto text-red mb-4" />
                      <p className="text-xl font-black text-snow">Message Sent!</p>
                      <p className="text-snow/30 mt-2">We&apos;ll get back within 24 hours.</p>
                      <button onClick={() => setSent(false)} className="mt-4 text-sm font-bold text-red hover:text-red-bright transition-colors">Send another</button>
                    </motion.div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {["Full Name", "Phone", "Email", "Company"].map((l) => (
                          <div key={l}>
                            <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">{l}</label>
                            <input type="text" className="w-full px-4 py-3 bg-ink border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">Subject</label>
                        <select className="w-full px-4 py-3 bg-ink border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors">
                          <option>Product Inquiry</option>
                          <option>Wholesale / Bulk Order</option>
                          <option>Become a Distributor</option>
                          <option>Partnership</option>
                          <option>Customer Support</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-snow/40 mb-1.5">Message</label>
                        <textarea rows={5} className="w-full px-4 py-3 bg-ink border border-snow/10 text-sm text-snow focus:outline-none focus:border-red/50 transition-colors resize-none" />
                      </div>
                      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-red px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all">
                        <Send size={14} /> Send Message
                      </button>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="relative bg-ink pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-[300px] bg-ink-light border border-snow/5 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={32} className="mx-auto text-red mb-3" />
              <p className="font-black text-snow">Harare, Zimbabwe</p>
              <p className="text-sm text-snow/30">Serving customers nationwide</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
