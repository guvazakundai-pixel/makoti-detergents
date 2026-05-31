"use client";

import Link from "next/link";
import { ArrowUpRight, Leaf, Recycle, Factory, Heart, Shield, Droplets } from "lucide-react";
import { Reveal, StaggerWrap, StaggerChild, SectionLabel, SectionHeading } from "@/components/Animations";

const commitments = [
  { icon: <Leaf size={22} />, t: "Eco-Conscious Formulas", d: "Developing biodegradable and environmentally friendly cleaning solutions." },
  { icon: <Recycle size={22} />, t: "Responsible Packaging", d: "Reducing packaging waste and exploring recyclable options." },
  { icon: <Factory size={22} />, t: "Sustainable Manufacturing", d: "Minimizing waste, water usage, and carbon footprint." },
  { icon: <Heart size={22} />, t: "Community Empowerment", d: "Creating jobs, distributor partnerships, and hygiene education." },
  { icon: <Shield size={22} />, t: "Safe Solutions", d: "Products safe for families, homes, and the environment." },
  { icon: <Droplets size={22} />, t: "Water Conservation", d: "Concentrated formulas require less water in production." },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Our Responsibility</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Committed to a{" "}
              <span className="gradient-brand">cleaner future</span>
            </h1>
            <p className="mt-6 text-xl text-snow/40 max-w-2xl">
              Responsible manufacturing, environmental awareness, and safe solutions for healthier communities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map((c) => (
              <StaggerChild key={c.t}>
                <div className="p-8 bg-ink-light border border-snow/5 hover:border-red/30 transition-colors h-full">
                  <span className="text-red">{c.icon}</span>
                  <h3 className="text-lg font-black text-snow mt-4 mb-2">{c.t}</h3>
                  <p className="text-sm text-snow/30">{c.d}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      <section className="relative bg-ink-light py-24 clip-diagonal-tl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/makoti-img-3.jpg" alt="Sustainable" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <SectionLabel>Our Promise</SectionLabel>
              <SectionHeading>Cleaning with <span className="text-red">conscience</span></SectionHeading>
              <div className="mt-8 space-y-4 text-snow/40 leading-relaxed">
                <p>At Makoti Detergents, our responsibility extends beyond making great cleaning products. We are committed to continuously improving our environmental and social impact.</p>
                <p>We aim to support healthier, cleaner communities through safe, effective cleaning solutions that families and businesses can trust.</p>
              </div>
              <Link href="/contact" className="mt-8 group inline-flex items-center gap-2 bg-red px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all">
                Partner With Us <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
