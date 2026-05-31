"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Recycle, Factory, Heart, ShieldCheck, Droplets } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader } from "@/components/Animations";

const commitments = [
  { icon: <Leaf size={28} />, title: "Eco-Conscious Formulas", desc: "We continuously work to develop biodegradable and environmentally friendly cleaning solutions that are tough on dirt but gentle on the planet." },
  { icon: <Recycle size={28} />, title: "Responsible Packaging", desc: "We are committed to reducing packaging waste and exploring recyclable and reusable packaging options for our products." },
  { icon: <Factory size={28} />, title: "Sustainable Manufacturing", desc: "Our production processes are designed to minimize waste, reduce water usage, and lower our carbon footprint." },
  { icon: <Heart size={28} />, title: "Community Empowerment", desc: "We support local communities through employment opportunities, distributor partnerships, and hygiene education initiatives." },
  { icon: <ShieldCheck size={28} />, title: "Safe Cleaning Solutions", desc: "All our products are developed with safety in mind — safe for your family, safe for your home, and safe for the environment when used as directed." },
  { icon: <Droplets size={28} />, title: "Water Conservation", desc: "Our concentrated formulas require less water in production and allow for efficient dilution, reducing overall water consumption." },
];

export default function SustainabilityPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Our Responsibility</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-3">
              Committed to a{" "}
              <span className="text-brand-green">cleaner future</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Makoti Detergents is committed to responsible manufacturing practices,
              environmental awareness, and safe cleaning solutions for healthier communities.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label="Our Commitments" title="Cleaning with conscience" description="We believe powerful cleaning shouldn't come at the cost of our environment or communities." />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((c) => (
              <StaggerItem key={c.title}>
                <div className="p-8 rounded-3xl border border-brand-deep/5 glow-card h-full hover:border-brand-green/30 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5">
                    {c.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-deep mb-3">{c.title}</h3>
                  <p className="text-sm text-brand-charcoal/50 leading-relaxed">{c.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white">
                <img src="/images/makoti-img-3.jpg" alt="Sustainable cleaning" className="w-full h-full object-cover" />
              </div>
            </FadeInView>
            <FadeInView direction="left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-deep">
                Our <span className="gradient-text">promise</span>
              </h2>
              <div className="mt-8 space-y-6 text-brand-charcoal/70 leading-relaxed">
                <p>
                  At Makoti Detergents, we understand that our responsibility extends beyond
                  making great cleaning products. We are committed to continuously improving
                  our environmental and social impact.
                </p>
                <p>
                  We aim to support healthier and cleaner communities through safe, effective
                  cleaning solutions that families and businesses can trust.
                </p>
                <p>
                  As we grow, we will continue to invest in more sustainable manufacturing
                  processes, better packaging solutions, and community-focused initiatives
                  across Zimbabwe and Southern Africa.
                </p>
              </div>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-medium text-black hover:bg-brand-green/90 transition-all active:scale-95">
                Partner With Us <ArrowRight size={18} />
              </Link>
            </FadeInView>
          </div>
        </div>
      </section>
    </>
  );
}
