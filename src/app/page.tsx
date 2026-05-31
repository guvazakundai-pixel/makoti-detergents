"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, animate } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Factory,
  HeadphonesIcon,
  Star,
  Users,
  ChevronRight,
  CheckCircle,
  Zap,
  Droplets,
  Leaf,
  HeartHandshake,
} from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader } from "@/components/Animations";

const productImages = [
  { src: "/images/makoti-img-1.jpg", alt: "Makoti Washing Powder", name: "Washing Powder" },
  { src: "/images/makoti-img-2.jpg", alt: "Makoti Dishwashing Liquid", name: "Dishwashing Liquid" },
  { src: "/images/makoti-img-3.jpg", alt: "Makoti Pine Gel", name: "Pine Gel" },
  { src: "/images/makoti-img-4.jpg", alt: "Makoti Thick Bleach", name: "Thick Bleach" },
];

const products = [
  { icon: <Droplets size={24} />, name: "Washing Powder", desc: "Powerful stain removal, keeps clothes fresh and bright." },
  { icon: <Zap size={24} />, name: "Dishwashing Liquid", desc: "Cuts grease instantly, leaves dishes sparkling." },
  { icon: <Leaf size={24} />, name: "Pine Gel", desc: "Thick multi-purpose disinfectant for floors and surfaces." },
  { icon: <ShieldCheck size={24} />, name: "Thick Bleach", desc: "Strong disinfecting bleach, removes stains & germs." },
  { icon: <HeartHandshake size={24} />, name: "Fabric Softener", desc: "Soft, fresh-smelling clothes every wash." },
  { icon: <Sparkles size={24} />, name: "Hand Soap", desc: "Gentle cleansing for homes, offices & public spaces." },
];

const trustItems = [
  { icon: <ShieldCheck size={28} />, title: "Quality Assured", desc: "Carefully formulated for strong performance" },
  { icon: <Truck size={28} />, title: "Fast Delivery", desc: "Reliable supply chain across Zimbabwe" },
  { icon: <Factory size={28} />, title: "Bulk Supply", desc: "Wholesale & commercial quantities available" },
  { icon: <HeadphonesIcon size={28} />, title: "Great Support", desc: "Dedicated customer service team" },
];

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(0, end, {
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => setCount(Math.round(v)),
          });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div className="text-center">
      <span ref={ref} className="text-4xl lg:text-5xl font-bold text-white tabular-nums">
        {count}
        {suffix}
      </span>
      <p className="mt-1 text-sm text-white/60">{label}</p>
    </div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <>
      {/* ─── Hero ────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden bg-brand-light"
      >
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-deep/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-medium text-brand-green mb-6">
                  <Sparkles size={14} />
                  Zimbabwe&apos;s Trusted Cleaning Brand
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-brand-deep leading-[1.05]"
              >
                Professional{" "}
                <span className="gradient-text">Cleaning Solutions</span>{" "}
                for Homes & Businesses
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-lg lg:text-xl text-brand-charcoal/60 leading-relaxed max-w-lg"
              >
                Premium detergents and hygiene products designed to deliver powerful
                cleaning, freshness, and reliable performance every day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-4 flex-wrap"
              >
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-deep px-7 py-3.5 text-base font-medium text-white hover:bg-brand-deep/90 transition-all duration-300 hover:shadow-xl hover:shadow-brand-deep/25 active:scale-95"
                >
                  Shop Products
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/wholesale"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-brand-deep border-2 border-brand-deep/10 hover:border-brand-deep/30 transition-all duration-300 active:scale-95"
                >
                  Wholesale Pricing
                  <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/distributor"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-7 py-3.5 text-base font-medium text-brand-green hover:bg-brand-green/20 transition-all duration-300 active:scale-95"
                >
                  Become a Distributor
                  <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="mt-10 flex items-center gap-6 text-sm text-brand-charcoal/50 flex-wrap"
              >
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="ml-1 font-medium text-brand-charcoal/70">Trusted Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  <span className="font-medium text-brand-charcoal/70">500+ Happy Customers</span>
                </div>
              </motion.div>
            </div>

            {/* Product visual grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {productImages.map((img, i) => (
                  <motion.div
                    key={img.name}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -2 : 2 }}
                    className={`relative overflow-hidden rounded-3xl shadow-2xl shadow-black/10 bg-white p-4 ${i % 2 === 0 ? "mt-0" : "mt-8"}`}
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-brand-light">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-sm font-semibold text-brand-deep">{img.name}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl shadow-black/10 p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <CheckCircle size={20} className="text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-deep">Quality Guaranteed</p>
                  <p className="text-xs text-brand-charcoal/50">ISO Standard Cleaning</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── Trust Bar ──────────────────────────── */}
      <section className="relative -mt-1 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-brand-deep/5">
            {trustItems.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-3 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-brand-deep text-sm">{item.title}</h3>
                <p className="text-xs text-brand-charcoal/50 mt-1">{item.desc}</p>
              </div>
            ))}
          </FadeInView>
        </div>
      </section>

      {/* ─── Featured Products ─────────────────── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            label="Our Products"
            title="Everything you need for a cleaner space"
            description="From household essentials to industrial-grade solutions, we've got you covered."
          />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative p-8 rounded-3xl bg-white border border-brand-deep/5 glow-card cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-green to-brand-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-lg font-bold text-brand-deep mb-2">{product.name}</h3>
                  <p className="text-sm text-brand-charcoal/50 leading-relaxed">{product.desc}</p>
                  <Link
                    href="/products"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-green-dark transition-colors"
                  >
                    Learn more <ChevronRight size={14} />
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeInView className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-brand-light px-7 py-3 text-sm font-medium text-brand-deep hover:bg-brand-deep/10 transition-all duration-300 active:scale-95"
            >
              View All Products <ArrowRight size={16} />
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-brand-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            label="By the Numbers"
            title="Trusted across Zimbabwe"
            description="Our commitment to quality and service has made us a preferred cleaning partner."
            light
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 500, suffix: "+", label: "Happy Customers" },
              { end: 50, suffix: "+", label: "Product Varieties" },
              { end: 10, suffix: "", label: "Cities Served" },
              { end: 100, suffix: "%", label: "Quality Commitment" },
            ].map((stat) => (
              <Counter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Choose Us ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInView>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">
                Why Makoti
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-deep mt-3">
                Cleaning solutions you can{" "}
                <span className="gradient-text">depend on</span>
              </h2>
              <p className="mt-6 text-lg text-brand-charcoal/60 leading-relaxed">
                We combine powerful formulas, affordable pricing, and reliable
                service to deliver the best cleaning experience for homes and
                businesses across Zimbabwe.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "High quality, carefully formulated products",
                  "Affordable pricing for households & businesses",
                  "Trusted performance in everyday cleaning",
                  "Wide range for multiple applications",
                  "Customer-first approach, always improving",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-brand-green" />
                    </div>
                    <span className="text-brand-charcoal/70">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-deep px-6 py-3 text-sm font-medium text-white hover:bg-brand-deep/90 transition-all duration-300 active:scale-95"
              >
                About Makoti <ArrowRight size={16} />
              </Link>
            </FadeInView>

            <FadeInView direction="left">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-brand-light">
                  <img
                    src="/images/makoti-img-2.jpg"
                    alt="Makoti Products"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl shadow-black/10 p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center">
                      <Star size={20} className="text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brand-deep">4.9</p>
                      <p className="text-xs text-brand-charcoal/50">Customer Rating</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─────────────────────────── */}
      <section className="py-24 lg:py-32 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeInView>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-medium text-brand-green mb-6">
              <Sparkles size={14} />
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-deep">
              Ready to become a{" "}
              <span className="gradient-text">distributor</span>?
            </h2>
            <p className="mt-4 text-lg text-brand-charcoal/60 max-w-xl mx-auto">
              Join our growing network of distributors and build your business
              with quality cleaning products trusted across Zimbabwe.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/distributor"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 text-base font-medium text-black hover:bg-brand-green/90 transition-all duration-300 hover:shadow-xl hover:shadow-brand-green/30 active:scale-95"
              >
                Become a Distributor <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-brand-deep border-2 border-brand-deep/10 hover:border-brand-deep/30 transition-all duration-300 active:scale-95"
              >
                Contact Sales
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
