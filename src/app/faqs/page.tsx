"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Minus, Plus, HelpCircle } from "lucide-react";
import { Reveal, SectionLabel, SectionHeading } from "@/components/Animations";

const faqs = [
  { q: "Are your products safe for household use?", a: "Yes, all Makoti Detergents products are designed for safe and effective everyday cleaning when used as directed. Always follow usage instructions on the packaging." },
  { q: "Do you offer bulk purchasing?", a: "Yes, we supply both retail and wholesale customers. Visit our Wholesale page to learn about bulk pricing and submit an inquiry." },
  { q: "Can businesses become distributors?", a: "Absolutely. We welcome distributor and reseller partnerships. Visit our Become a Distributor page to apply." },
  { q: "Do you supply commercial clients?", a: "Yes, we supply homes, businesses, institutions, and industrial customers with products tailored for every sector." },
  { q: "Where can I buy Makoti products?", a: "Our products are available through our network of distributors across Zimbabwe. Contact us to find a stockist near you." },
  { q: "What is your minimum order quantity for wholesale?", a: "Minimum order quantities vary by product. Contact our sales team for a custom quote based on your needs." },
  { q: "Do you offer delivery?", a: "Yes, we offer delivery. Costs depend on your location and order size — our team will confirm details when you order." },
  { q: "What makes Makoti different from other brands?", a: "Makoti combines high-quality formulations with affordable pricing. We are proudly Zimbabwean and focused on reliable performance and excellent service." },
  { q: "Can I get samples before placing a bulk order?", a: "Yes, we provide product samples for serious wholesale and distributor inquiries. Contact our sales team." },
  { q: "How do I become a distributor?", a: "Visit our Become a Distributor page, fill in the application form, and our team will contact you within 48 hours." },
];

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Help Center</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Frequently <span className="gradient-brand">Asked</span> Questions
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ink py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="border border-snow/5"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-ink-light hover:bg-ink-lighter transition-colors"
                >
                  <span className="font-bold text-snow text-sm pr-4">{faq.q}</span>
                  {open === i ? (
                    <Minus size={16} className="text-red flex-shrink-0" />
                  ) : (
                    <Plus size={16} className="text-snow/30 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-snow/40 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-ink py-24 text-center border-t border-snow/5">
        <Reveal className="mx-auto max-w-3xl px-6">
          <HelpCircle size={40} className="mx-auto text-red mb-4" />
          <SectionHeading>Still have questions?</SectionHeading>
          <Link href="/contact" className="mt-8 group inline-flex items-center gap-2 bg-snow px-7 py-4 text-sm font-bold text-ink hover:bg-white transition-all">
            Contact Us <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
