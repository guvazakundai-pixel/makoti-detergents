"use client";

import Link from "next/link";
import { ArrowRight, Home, Building2, GraduationCap, Utensils, Stethoscope, Factory, ShoppingBag, Hotel } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader } from "@/components/Animations";

const industries = [
  { icon: <Home size={28} />, title: "Residential Homes", desc: "Everyday cleaning essentials that keep homes fresh, hygienic, and welcoming.", products: "Washing powder, dishwashing liquid, pine gel, bleach, fabric softener, hand soap" },
  { icon: <Hotel size={28} />, title: "Hospitality Industry", desc: "High-performance cleaning for hotels, lodges, and guesthouses — from laundry to housekeeping.", products: "Bulk detergents, commercial laundry chemicals, sanitizers, multi-purpose cleaners" },
  { icon: <ShoppingBag size={28} />, title: "Retail Stores", desc: "Stock our branded products on your shelves — trusted quality that customers come back for.", products: "Full household range, retail-ready packaging" },
  { icon: <Stethoscope size={28} />, title: "Healthcare Facilities", desc: "Hospital-grade cleaning and disinfection products for clinics, hospitals, and care facilities.", products: "Thick bleach, surface sanitizers, disinfecting cleaners, hand soap" },
  { icon: <GraduationCap size={28} />, title: "Educational Institutions", desc: "Keep schools, colleges, and universities clean and safe for students and staff.", products: "Floor cleaners, toilet cleaners, hand soap, multi-purpose cleaners, bulk detergents" },
  { icon: <Factory size={28} />, title: "Manufacturing Companies", desc: "Heavy-duty industrial cleaning solutions for factories, warehouses, and production facilities.", products: "Industrial degreasers, heavy-duty chemicals, cleaning concentrates" },
  { icon: <Building2 size={28} />, title: "Cleaning Companies", desc: "Professional-grade products for janitorial and contract cleaning businesses.", products: "Full commercial range, bulk sizes, concentrates, sanitizers" },
  { icon: <Utensils size={28} />, title: "Food Service Businesses", desc: "Food-safe cleaning and sanitizing products for restaurants, cafes, and catering.", products: "Dishwashing liquid, surface sanitizers, degreasers, multi-purpose cleaners" },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Industries</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-3">
              Cleaning solutions for{" "}
              <span className="text-brand-green">every sector</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              From homes to heavy industry — Makoti Detergents delivers tailored cleaning and
              hygiene solutions for businesses and institutions of every size.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <StaggerItem key={ind.title}>
                <div className="p-8 rounded-3xl border border-brand-deep/5 glow-card h-full hover:border-brand-green/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                    {ind.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-deep mb-2">{ind.title}</h3>
                  <p className="text-sm text-brand-charcoal/50 leading-relaxed mb-4">{ind.desc}</p>
                  <div className="p-4 rounded-xl bg-brand-light">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-gray mb-1">Popular Products</p>
                    <p className="text-sm text-brand-charcoal/70">{ind.products}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-brand-light text-center">
        <FadeInView className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep">Don&apos;t see your industry?</h2>
          <p className="mt-4 text-brand-charcoal/60 text-lg">We create custom cleaning solutions for any sector. Get in touch and let&apos;s discuss your needs.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 font-medium text-white hover:bg-brand-deep/90 transition-all active:scale-95">
            Contact Us <ArrowRight size={18} />
          </Link>
        </FadeInView>
      </section>
    </>
  );
}
