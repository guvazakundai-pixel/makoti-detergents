"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Shield,
  Truck,
  Factory,
  Headphones,
  Star,
  Play,
} from "lucide-react";
import { Reveal, StaggerWrap, StaggerChild, SectionLabel, SectionHeading } from "@/components/Animations";

/* ── Product data ─────────────────────── */
const products = [
  { name: "Washing Powder", img: "/images/makoti-img-1.jpg", tag: "Bestseller", color: "#3048A0" },
  { name: "Dishwashing Liquid", img: "/images/makoti-img-2.jpg", tag: "Popular", color: "#E00000" },
  { name: "Pine Gel", img: "/images/makoti-img-3.jpg", tag: "Multi-use", color: "#204080" },
  { name: "Thick Bleach", img: "/images/makoti-img-4.jpg", tag: "Essential", color: "#6060C0" },
  { name: "Fabric Softener", img: "/images/makoti-img-2.jpg", tag: "Premium", color: "#1A3A6C" },
  { name: "Hand Soap", img: "/images/makoti-img-1.jpg", tag: "Daily Use", color: "#3B6FD4" },
];

const productMarquee = [
  "Washing Powder", "Dishwashing Liquid", "Pine Gel", "Thick Bleach",
  "Fabric Softener", "Hand Soap", "Multi-Purpose Cleaner", "Floor Cleaner",
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const heroImgRotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO — dramatic dark with red accent
          ═══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-ink overflow-hidden"
      >
        {/* Background glow blobs */}
        <div className="blob-blue w-[600px] h-[600px] -top-40 -right-40" />
        <div className="blob-red w-[400px] h-[400px] bottom-20 left-20" />

        {/* Dots pattern */}
        <div className="absolute inset-0 bg-dots opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Typography heavy */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-[2px] w-10 bg-red" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-red">
                    Zimbabwe&apos;s Trusted Cleaning Brand
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter text-snow leading-[0.95]"
              >
                POWERFUL
                <br />
                <span className="gradient-brand">CLEANING</span>
                <br />
                EVERYDAY
                <br />
                LIVING
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-8 text-lg text-snow/40 max-w-md leading-relaxed"
              >
                Premium detergents and hygiene products engineered for powerful
                performance, trusted by homes and businesses across Zimbabwe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 bg-snow px-7 py-4 text-sm font-bold text-ink hover:bg-white transition-all"
                >
                  Explore Products
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link
                  href="/distributor"
                  className="group inline-flex items-center gap-2 border border-snow/20 px-7 py-4 text-sm font-bold text-snow hover:border-red/50 hover:text-red transition-all"
                >
                  Become a Distributor
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right — Product showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ y: heroImgY, rotate: heroImgRotate }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main big product */}
                <div className="aspect-[3/4] max-w-sm mx-auto overflow-hidden relative z-10">
                  <img
                    src="/images/makoti-img-4.jpg"
                    alt="Makoti Products"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating smaller product */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-8 z-20 w-32 aspect-[3/4] overflow-hidden"
                >
                  <img src="/images/makoti-img-2.jpg" alt="Product" className="w-full h-full object-cover" />
                </motion.div>

                {/* Rating badge */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 z-20 bg-ink-light border border-snow/10 p-5"
                >
                  <div className="flex items-center gap-1 text-red mb-1">
                    {[...Array(5)].map((_, i) => (<Star key={i} size={14} className="fill-red" />))}
                  </div>
                  <p className="text-xs font-bold text-snow/60 uppercase tracking-widest">Trusted Quality</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border border-snow/20 flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-red" />
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          MARQUEE — product strip
          ═══════════════════════════════════════════ */}
      <section className="relative bg-ink-light border-y border-snow/5 py-6 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...productMarquee, ...productMarquee].map((name, i) => (
            <span
              key={i}
              className={`text-sm font-bold uppercase tracking-[0.15em] ${
                i % 3 === 0 ? "text-red" : "text-snow/30"
              }`}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ABOUT SPLIT
          ═══════════════════════════════════════════ */}
      <section className="relative bg-ink py-24 lg:py-32 overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -bottom-32 -left-32" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img src="/images/makoti-img-3.jpg" alt="Makoti" className="w-full h-full object-cover" />
                  {/* Overlay angle cut */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                </div>
                {/* Caption */}
                <div className="absolute -bottom-4 -right-4 bg-red px-5 py-3">
                  <p className="text-xs font-black text-white uppercase tracking-widest">Quality Since Day One</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <SectionLabel>About Makoti</SectionLabel>
              <SectionHeading>
                Cleaning solutions Zimbabwe <span className="text-red">depends on</span>
              </SectionHeading>
              <p className="mt-8 text-snow/40 text-lg leading-relaxed">
                Makoti Detergents is a proudly Zimbabwean brand delivering high-quality,
                affordable cleaning products for households, offices, schools, hotels,
                hospitals, and industrial environments.
              </p>
              <p className="mt-4 text-snow/40 text-lg leading-relaxed">
                We combine powerful formulas with value-for-money pricing to keep
                homes and businesses clean, fresh, and hygienic.
              </p>

              {/* Trust points */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield size={18} />, label: "Quality Assured" },
                  { icon: <Truck size={18} />, label: "Fast Delivery" },
                  { icon: <Factory size={18} />, label: "Bulk Supply" },
                  { icon: <Headphones size={18} />, label: "Great Support" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-snow/60">
                    <span className="text-red">{item.icon}</span>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-10 group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red hover:text-red-bright transition-colors"
              >
                Learn Our Story
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRODUCTS — Bento grid
          ═══════════════════════════════════════════ */}
      <section className="relative bg-ink-light py-24 lg:py-32 clip-diagonal-both">
        <div className="blob-red w-[400px] h-[400px] top-0 right-0" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <SectionLabel>Our Range</SectionLabel>
            <SectionHeading>
              Everything for a{" "}
              <span className="text-stroke">cleaner space</span>
            </SectionHeading>
          </Reveal>

          {/* Bento grid — different sized cards */}
          <StaggerWrap className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {products.map((product, i) => {
              const isLarge = i === 0 || i === 3;
              return (
                <StaggerChild
                  key={product.name}
                  className={`relative group overflow-hidden cursor-pointer ${
                    isLarge ? "lg:row-span-2 lg:col-span-2" : ""
                  }`}
                >
                  {/* Background image */}
                  <img
                    src={product.img}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity"
                    style={{
                      background: `linear-gradient(to top, ${product.color} 0%, ${product.color}00 70%)`,
                    }}
                  />
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                      {product.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-white mt-1">
                      {product.name}
                    </h3>
                    <Link
                      href="/products"
                      className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-white/70 hover:text-white transition-colors"
                    >
                      View Details <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </StaggerChild>
              );
            })}
          </StaggerWrap>

          <Reveal className="text-center mt-12">
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-snow px-8 py-4 text-sm font-bold text-ink hover:bg-white transition-all"
            >
              View All Products
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS — bold horizontal strip
          ═══════════════════════════════════════════ */}
      <section className="relative bg-ink py-16 border-y border-snow/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "500", unit: "+", label: "Happy Customers" },
              { num: "50", unit: "+", label: "Products" },
              { num: "10", unit: "", label: "Cities Served" },
              { num: "100", unit: "%", label: "Quality" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow">
                    {stat.num}
                    <span className="text-red">{stat.unit}</span>
                  </p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest text-snow/30">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          DISTRIBUTOR CTA — bold and urgent
          ═══════════════════════════════════════════ */}
      <section className="relative bg-ink py-24 lg:py-32 overflow-hidden">
        <div className="blob-blue w-[700px] h-[700px] -top-40 -right-40" />
        <div className="blob-red w-[300px] h-[300px] bottom-20 left-20" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <SectionLabel>Partner With Us</SectionLabel>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              BECOME A{" "}
              <span className="gradient-brand">DISTRIBUTOR</span>
            </h2>
            <p className="mt-8 text-lg text-snow/40 max-w-xl mx-auto">
              Join our growing network. Get wholesale pricing, marketing support,
              reliable supply, and build your business with trusted Makoti products.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/distributor"
                className="group inline-flex items-center gap-2 bg-red px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all pulse-glow"
              >
                Apply Now
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/wholesale"
                className="group inline-flex items-center gap-2 border border-snow/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-snow/70 hover:border-snow/50 hover:text-snow transition-all"
              >
                Wholesale Pricing
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          BLOG TEASER
          ═══════════════════════════════════════════ */}
      <section className="relative bg-ink-light py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <Reveal>
              <SectionLabel>Latest</SectionLabel>
              <SectionHeading>
                Cleaning tips &{" "}
                <span className="text-red">insights</span>
              </SectionHeading>
            </Reveal>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red hover:text-red-bright transition-colors"
            >
              All Articles <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <StaggerWrap className="grid md:grid-cols-3 gap-6">
            {[
              { title: "How to Choose the Right Detergent for Your Home", date: "May 15, 2026", img: "/images/makoti-img-1.jpg" },
              { title: "The Ultimate Guide to Commercial Kitchen Cleaning", date: "May 10, 2026", img: "/images/makoti-img-2.jpg" },
              { title: "Why Pine Gel is Essential in Every Zimbabwean Home", date: "May 5, 2026", img: "/images/makoti-img-3.jpg" },
            ].map((post) => (
              <StaggerChild key={post.title}>
                <Link href="/blog" className="group block">
                  <div className="aspect-[4/3] overflow-hidden mb-4">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-snow/30 mb-2">{post.date}</p>
                  <h3 className="text-lg font-bold text-snow group-hover:text-red transition-colors leading-snug">
                    {post.title}
                  </h3>
                </Link>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>
    </>
  );
}
