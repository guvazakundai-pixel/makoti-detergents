"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Zap, Star, Users, Leaf } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader } from "@/components/Animations";

const values = [
  { icon: <Shield size={24} />, title: "Quality", desc: "We never compromise on product quality and performance." },
  { icon: <Star size={24} />, title: "Reliability", desc: "Consistent results you can count on, every time." },
  { icon: <Users size={24} />, title: "Customer Satisfaction", desc: "Your needs drive everything we do." },
  { icon: <Zap size={24} />, title: "Innovation", desc: "Continuously improving our formulas and products." },
  { icon: <Heart size={24} />, title: "Affordability", desc: "Quality cleaning that fits your budget." },
  { icon: <Leaf size={24} />, title: "Sustainability", desc: "Responsible manufacturing for cleaner communities." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-deep overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">About Us</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mt-3">
              Zimbabwe&apos;s trusted{" "}
              <span className="text-brand-green">cleaning partner</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Makoti Detergents is a Zimbabwean cleaning products brand focused on delivering
              high-quality, affordable, and effective household and industrial cleaning solutions.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-light">
                <img src="/images/makoti-img-3.jpg" alt="Makoti Manufacturing" className="w-full h-full object-cover" />
              </div>
            </FadeInView>
            <FadeInView direction="left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-deep">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="mt-8 space-y-4 text-brand-charcoal/70 leading-relaxed">
                <p>
                  Makoti Detergents was founded with a simple mission: to provide affordable,
                  high-performance cleaning products that improve hygiene and everyday living
                  for homes and businesses across Zimbabwe and Southern Africa.
                </p>
                <p>
                  The company supplies a wide range of detergents and hygiene products designed
                  for homes, offices, schools, hotels, restaurants, and commercial environments.
                </p>
                <p>
                  We operate within the growing Southern African detergents and chemical
                  manufacturing industry, delivering products that combine strong cleaning
                  performance, freshness, hygiene, and value for money.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-brand-light">
                  <p className="text-3xl font-bold text-brand-deep">500+</p>
                  <p className="text-sm text-brand-charcoal/50 mt-1">Happy Customers</p>
                </div>
                <div className="p-6 rounded-2xl bg-brand-light">
                  <p className="text-3xl font-bold text-brand-deep">50+</p>
                  <p className="text-sm text-brand-charcoal/50 mt-1">Product Varieties</p>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-brand-light">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <div className="p-10 rounded-3xl bg-white border border-brand-deep/5 h-full">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Mission</span>
                <p className="mt-4 text-xl text-brand-charcoal/70 leading-relaxed">
                  To provide affordable, high-performance, and reliable cleaning products that
                  improve hygiene, cleanliness, and everyday living for homes and businesses
                  across Zimbabwe and Southern Africa.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-10 rounded-3xl bg-brand-deep text-white h-full">
                <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Vision</span>
                <p className="mt-4 text-xl text-white/70 leading-relaxed">
                  To become one of Zimbabwe&apos;s leading and most trusted detergent and
                  hygiene brands through quality products, innovation, customer satisfaction,
                  and sustainable growth.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader label="Core Values" title="What drives us every day" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-8 rounded-3xl border border-brand-deep/5 hover:border-brand-green/30 transition-colors duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-deep mb-2">{v.title}</h3>
                  <p className="text-sm text-brand-charcoal/50 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-deep relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <FadeInView className="relative mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Want to learn more?</h2>
          <p className="mt-4 text-white/60 text-lg">Get in touch or explore our product range.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-medium text-black hover:bg-brand-green/90 transition-all active:scale-95">
              View Products <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-medium text-white hover:bg-white/20 transition-all active:scale-95">
              Contact Us
            </Link>
          </div>
        </FadeInView>
      </section>
    </>
  );
}
