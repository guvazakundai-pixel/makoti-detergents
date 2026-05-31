"use client";

import Link from "next/link";
import { ArrowUpRight, Shield, Star, Heart, Zap, Users, Leaf } from "lucide-react";
import { Reveal, StaggerWrap, StaggerChild, SectionLabel, SectionHeading } from "@/components/Animations";

const values = [
  { icon: <Shield size={22} />, title: "Quality", desc: "We never compromise on product quality and performance." },
  { icon: <Star size={22} />, title: "Reliability", desc: "Consistent results you can count on, every time." },
  { icon: <Users size={22} />, title: "Customer Satisfaction", desc: "Your needs drive everything we do." },
  { icon: <Zap size={22} />, title: "Innovation", desc: "Continuously improving our formulas and products." },
  { icon: <Heart size={22} />, title: "Affordability", desc: "Quality cleaning that fits your budget." },
  { icon: <Leaf size={22} />, title: "Sustainability", desc: "Responsible manufacturing for cleaner communities." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="blob-red w-[300px] h-[300px] bottom-0 left-20" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            <SectionLabel>About Us</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Zimbabwe&apos;s trusted{" "}
              <span className="gradient-brand">cleaning partner</span>
            </h1>
            <p className="mt-8 text-xl text-snow/40 max-w-2xl leading-relaxed">
              Makoti Detergents delivers high-quality, affordable, and effective
              cleaning solutions for homes, offices, schools, hotels, restaurants,
              hospitals, and industrial environments across Zimbabwe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-ink py-24 lg:py-32 clip-diagonal-tl">
        <div className="blob-blue w-[400px] h-[400px] -bottom-20 left-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden">
                <img src="/images/makoti-img-3.jpg" alt="Makoti" className="w-full h-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <SectionLabel>Our Story</SectionLabel>
              <SectionHeading>
                Built on <span className="text-red">quality</span> & trust
              </SectionHeading>
              <div className="mt-8 space-y-4 text-snow/40 leading-relaxed">
                <p>Makoti Detergents was founded with a simple mission: to provide affordable, high-performance cleaning products that improve hygiene and everyday living.</p>
                <p>We supply a wide range of detergents and hygiene products designed for homes, offices, schools, hotels, restaurants, and commercial environments.</p>
                <p>We operate within the growing Southern African detergents and chemical manufacturing industry, delivering products that combine strong cleaning performance, freshness, and value.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-ink-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerWrap className="grid md:grid-cols-2 gap-8">
            <StaggerChild>
              <div className="p-10 bg-ink border border-snow/5 h-full">
                <SectionLabel>Mission</SectionLabel>
                <p className="text-xl text-snow/60 leading-relaxed mt-6">
                  To provide affordable, high-performance, and reliable cleaning products that improve hygiene, cleanliness, and everyday living for homes and businesses across Zimbabwe and Southern Africa.
                </p>
              </div>
            </StaggerChild>
            <StaggerChild>
              <div className="p-10 bg-ink border border-snow/5 h-full relative">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red to-red-bright" />
                <SectionLabel>Vision</SectionLabel>
                <p className="text-xl text-snow/60 leading-relaxed mt-6">
                  To become one of Zimbabwe&apos;s leading and most trusted detergent and hygiene brands through quality products, innovation, customer satisfaction, and sustainable growth.
                </p>
              </div>
            </StaggerChild>
          </StaggerWrap>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-ink py-24 lg:py-32 clip-diagonal-both">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <SectionLabel>Core Values</SectionLabel>
            <SectionHeading>What drives us <span className="text-stroke">every day</span></SectionHeading>
          </Reveal>
          <StaggerWrap className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <StaggerChild key={v.title}>
                <div className="p-8 bg-ink-light border border-snow/5 hover:border-red/30 transition-colors h-full group">
                  <span className="text-red group-hover:text-red-bright transition-colors">{v.icon}</span>
                  <h3 className="text-lg font-black text-snow mt-4 mb-2">{v.title}</h3>
                  <p className="text-sm text-snow/30 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-ink py-24 text-center border-t border-snow/5">
        <Reveal className="mx-auto max-w-3xl px-6">
          <SectionHeading>Want to learn more?</SectionHeading>
          <p className="mt-6 text-lg text-snow/40">Get in touch or explore our product range.</p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="group inline-flex items-center gap-2 bg-snow px-7 py-4 text-sm font-bold text-ink hover:bg-white transition-all">
              View Products <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link href="/contact" className="group inline-flex items-center gap-2 border border-snow/20 px-7 py-4 text-sm font-bold text-snow hover:border-red/50 hover:text-red transition-all">
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
