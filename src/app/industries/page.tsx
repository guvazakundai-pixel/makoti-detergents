"use client";

import Link from "next/link";
import { ArrowUpRight, Home, Building2, GraduationCap, Utensils, Stethoscope, Factory, ShoppingBag, Hotel } from "lucide-react";
import { Reveal, StaggerWrap, StaggerChild, SectionLabel, SectionHeading } from "@/components/Animations";

const industries = [
  { icon: <Home size={24} />, t: "Residential Homes", d: "Everyday cleaning essentials that keep homes fresh, hygienic, and welcoming.", p: "Washing powder, dishwashing liquid, pine gel, bleach, fabric softener, hand soap" },
  { icon: <Hotel size={24} />, t: "Hospitality", d: "High-performance cleaning for hotels, lodges, and guesthouses.", p: "Bulk detergents, commercial laundry chemicals, sanitizers, multi-purpose cleaners" },
  { icon: <ShoppingBag size={24} />, t: "Retail Stores", d: "Stock our branded products on your shelves — trusted quality that customers return for.", p: "Full household range, retail-ready packaging" },
  { icon: <Stethoscope size={24} />, t: "Healthcare", d: "Hospital-grade cleaning and disinfection products for clinics and hospitals.", p: "Thick bleach, surface sanitizers, disinfecting cleaners, hand soap" },
  { icon: <GraduationCap size={24} />, t: "Education", d: "Keep schools, colleges, and universities clean and safe for students and staff.", p: "Floor cleaners, toilet cleaners, hand soap, multi-purpose cleaners, bulk detergents" },
  { icon: <Factory size={24} />, t: "Manufacturing", d: "Heavy-duty industrial cleaning solutions for factories and warehouses.", p: "Industrial degreasers, heavy-duty chemicals, cleaning concentrates" },
  { icon: <Building2 size={24} />, t: "Cleaning Companies", d: "Professional-grade products for janitorial and contract cleaning businesses.", p: "Full commercial range, bulk sizes, concentrates, sanitizers" },
  { icon: <Utensils size={24} />, t: "Food Service", d: "Food-safe cleaning and sanitizing products for restaurants and catering.", p: "Dishwashing liquid, surface sanitizers, degreasers, multi-purpose cleaners" },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Industries</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Cleaning for{" "}
              <span className="gradient-brand">every sector</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerWrap className="grid md:grid-cols-2 gap-4">
            {industries.map((ind) => (
              <StaggerChild key={ind.t}>
                <div className="p-8 bg-ink-light border border-snow/5 hover:border-red/30 transition-colors h-full group">
                  <span className="text-red group-hover:text-red-bright transition-colors">{ind.icon}</span>
                  <h3 className="text-xl font-black text-snow mt-4 mb-2">{ind.t}</h3>
                  <p className="text-sm text-snow/30 mb-4">{ind.d}</p>
                  <div className="p-4 bg-ink border-l-2 border-red">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-snow/20 mb-1">Popular Products</p>
                    <p className="text-xs text-snow/40">{ind.p}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      <section className="relative bg-ink py-24 text-center border-t border-snow/5">
        <Reveal className="mx-auto max-w-3xl px-6">
          <SectionHeading>Don&apos;t see your industry?</SectionHeading>
          <p className="mt-6 text-lg text-snow/40">We create custom cleaning solutions for any sector.</p>
          <Link href="/contact" className="mt-8 group inline-flex items-center gap-2 bg-snow px-7 py-4 text-sm font-bold text-ink hover:bg-white transition-all">
            Contact Us <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
