"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, HelpCircle } from "lucide-react";
import { FadeInView, StaggerContainer } from "@/components/Animations";

const faqs = [
  { q: "Are your products safe for household use?", a: "Yes, all Makoti Detergents products are designed for safe and effective everyday cleaning when used as directed. Always follow the usage instructions on the packaging for best results and safety." },
  { q: "Do you offer bulk purchasing?", a: "Yes, we supply both retail and wholesale customers. Visit our Wholesale page to learn more about bulk pricing and submit an inquiry." },
  { q: "Can businesses become distributors?", a: "Absolutely. We welcome distributor and reseller partnerships. Visit our Become a Distributor page to learn about the benefits and submit an application." },
  { q: "Do you supply commercial clients?", a: "Yes, we supply homes, businesses, institutions, and industrial customers. We have products tailored for every sector — from households to heavy industry." },
  { q: "Where can I buy Makoti products?", a: "Our products are available through our network of distributors across Zimbabwe. Contact us to find a stockist near you or to place a direct order." },
  { q: "What is your minimum order quantity for wholesale?", a: "Minimum order quantities vary by product. Contact our sales team with your requirements and we'll provide a custom quote based on your needs." },
  { q: "Do you offer delivery?", a: "Yes, we offer delivery services. Delivery terms and costs depend on your location and order size. Our team will confirm details when you place an order." },
  { q: "What makes Makoti different from other brands?", a: "Makoti Detergents combines high-quality formulations with affordable pricing. We are a proudly Zimbabwean brand focused on delivering reliable cleaning performance and excellent customer service." },
  { q: "Can I get samples before placing a bulk order?", a: "Yes, we can provide product samples for serious wholesale and distributor inquiries. Contact our sales team to request samples." },
  { q: "How do I become a distributor?", a: "Visit our Become a Distributor page, fill in the application form, and our team will review your application and contact you within 48 hours." },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Help Center</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-deep mt-3">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="mt-6 text-lg text-brand-charcoal/60 leading-relaxed">
              Everything you need to know about Makoti Detergents products, ordering, and partnerships.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-brand-deep/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-light/50 transition-colors"
                >
                  <span className="font-semibold text-brand-deep pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center"
                  >
                    <ChevronDown size={16} className="text-brand-green" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-brand-charcoal/60 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-deep relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <FadeInView className="relative mx-auto max-w-3xl px-6">
          <HelpCircle size={48} className="mx-auto text-brand-green mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">Still have questions?</h2>
          <p className="mt-4 text-white/60 text-lg">We&apos;re here to help. Reach out and we&apos;ll get back to you promptly.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-medium text-black hover:bg-brand-green/90 transition-all active:scale-95">
            Contact Us <ArrowRight size={18} />
          </Link>
        </FadeInView>
      </section>
    </>
  );
}
