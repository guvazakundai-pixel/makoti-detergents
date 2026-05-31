"use client";

import Link from "next/link";
import { ArrowUpRight, Calendar, User } from "lucide-react";
import { Reveal, StaggerWrap, StaggerChild, SectionLabel, SectionHeading } from "@/components/Animations";

const posts = [
  { t: "How to Choose the Right Detergent for Your Home", e: "With so many products on the market, here's your guide to making the best choice for your household.", d: "May 15, 2026", a: "Makoti Team", img: "/images/makoti-img-1.jpg", cat: "Home Cleaning" },
  { t: "The Ultimate Guide to Commercial Kitchen Cleaning", e: "Discover the best practices and products for maintaining spotless hygiene in your food service business.", d: "May 10, 2026", a: "Makoti Team", img: "/images/makoti-img-2.jpg", cat: "Commercial" },
  { t: "Why Pine Gel is a Must-Have in Every Zimbabwean Home", e: "One of the most versatile cleaning products — here are 10 ways to use it effectively.", d: "May 5, 2026", a: "Makoti Team", img: "/images/makoti-img-3.jpg", cat: "Product Spotlight" },
  { t: "5 Cleaning Hacks That Will Save You Time and Money", e: "Professional cleaning doesn't have to be expensive. Try these simple hacks.", d: "April 28, 2026", a: "Makoti Team", img: "/images/makoti-img-4.jpg", cat: "Tips & Tricks" },
  { t: "The Importance of Proper Sanitization in Schools", e: "Schools are hotspots for germs. Learn why proper sanitization is essential.", d: "April 20, 2026", a: "Makoti Team", img: "/images/makoti-img-1.jpg", cat: "Education" },
  { t: "Starting a Cleaning Business in Zimbabwe: A Guide", e: "Everything you need to know — from equipment to finding your first clients.", d: "April 12, 2026", a: "Makoti Team", img: "/images/makoti-img-2.jpg", cat: "Business" },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Blog</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Cleaning tips &{" "}
              <span className="gradient-brand">insights</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-ink py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerWrap className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <StaggerChild key={p.t}>
                <article className="group bg-ink-light border border-snow/5 hover:border-red/30 transition-colors overflow-hidden h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={p.img} alt={p.t} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red">{p.cat}</span>
                    <h3 className="text-lg font-bold text-snow group-hover:text-red transition-colors mt-2 leading-snug">{p.t}</h3>
                    <p className="text-sm text-snow/30 mt-2 flex-1">{p.e}</p>
                    <div className="mt-4 pt-4 border-t border-snow/5 flex items-center gap-4 text-[10px] text-snow/20">
                      <span className="flex items-center gap-1"><Calendar size={10} /> {p.d}</span>
                      <span className="flex items-center gap-1"><User size={10} /> {p.a}</span>
                    </div>
                  </div>
                </article>
              </StaggerChild>
            ))}
          </StaggerWrap>
        </div>
      </section>

      <section className="relative bg-ink py-24 text-center border-t border-snow/5">
        <Reveal className="mx-auto max-w-3xl px-6">
          <SectionHeading>Subscribe for tips</SectionHeading>
          <p className="mt-4 text-snow/40">Get product updates and cleaning advice in your inbox.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-5 py-3.5 bg-ink-light border border-snow/10 text-sm text-snow placeholder:text-snow/20 focus:outline-none focus:border-red/50" />
            <button type="submit" className="bg-red px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white hover:bg-red-bright transition-all">Subscribe</button>
          </form>
        </Reveal>
      </section>
    </>
  );
}
