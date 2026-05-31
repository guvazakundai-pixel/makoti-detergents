"use client";

import Link from "next/link";
import { ArrowRight, Calendar, User, ChevronRight } from "lucide-react";
import { FadeInView, StaggerContainer, StaggerItem, SectionHeader } from "@/components/Animations";

const posts = [
  {
    title: "How to Choose the Right Detergent for Your Home",
    excerpt: "With so many cleaning products on the market, finding the right detergent can be overwhelming. Here's your guide to making the best choice for your household.",
    date: "May 15, 2026",
    author: "Makoti Team",
    image: "/images/makoti-img-1.jpg",
    category: "Home Cleaning",
  },
  {
    title: "The Ultimate Guide to Commercial Kitchen Cleaning",
    excerpt: "Running a restaurant or commercial kitchen? Discover the best practices and products for maintaining spotless hygiene standards in your food service business.",
    date: "May 10, 2026",
    author: "Makoti Team",
    image: "/images/makoti-img-2.jpg",
    category: "Commercial",
  },
  {
    title: "Why Pine Gel is a Must-Have in Every Zimbabwean Home",
    excerpt: "Pine gel is one of the most versatile cleaning products you can own. From floors to bathrooms, here are 10 ways to use it effectively.",
    date: "May 5, 2026",
    author: "Makoti Team",
    image: "/images/makoti-img-3.jpg",
    category: "Product Spotlight",
  },
  {
    title: "5 Cleaning Hacks That Will Save You Time and Money",
    excerpt: "Professional cleaning doesn't have to be expensive or time-consuming. Try these simple hacks to keep your space sparkling with less effort.",
    date: "April 28, 2026",
    author: "Makoti Team",
    image: "/images/makoti-img-4.jpg",
    category: "Tips & Tricks",
  },
  {
    title: "The Importance of Proper Sanitization in Schools",
    excerpt: "Schools are hotspots for germs. Learn why proper cleaning and sanitization protocols are essential for student health and attendance.",
    date: "April 20, 2026",
    author: "Makoti Team",
    image: "/images/makoti-img-1.jpg",
    category: "Education",
  },
  {
    title: "Starting a Cleaning Business in Zimbabwe: A Complete Guide",
    excerpt: "Thinking of starting your own cleaning company? Here's everything you need to know — from equipment to pricing and finding your first clients.",
    date: "April 12, 2026",
    author: "Makoti Team",
    image: "/images/makoti-img-2.jpg",
    category: "Business",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Blog</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-deep mt-3">
              Cleaning tips, insights &{" "}
              <span className="gradient-text">industry news</span>
            </h1>
            <p className="mt-6 text-lg text-brand-charcoal/60 leading-relaxed">
              Expert advice on cleaning, hygiene, and product tips for homes and businesses.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.title}>
                <article className="group rounded-3xl bg-white border border-brand-deep/5 glow-card overflow-hidden h-full flex flex-col">
                  <div className="aspect-[16/9] overflow-hidden bg-brand-light">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">{post.category}</span>
                    <h3 className="mt-2 text-xl font-bold text-brand-deep group-hover:text-brand-green transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-brand-charcoal/50 line-clamp-3 flex-1">{post.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-brand-deep/5 flex items-center justify-between text-xs text-brand-gray">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><User size={12} /> {post.author}</span>
                      </div>
                    </div>
                    <Link href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-green-dark transition-colors">
                      Read More <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-24 bg-brand-deep relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <FadeInView className="relative mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Subscribe for cleaning tips</h2>
          <p className="mt-4 text-white/60 text-lg">Get the latest product updates and cleaning advice delivered to your inbox.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input type="email" placeholder="Your email address" className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-green/50" />
            <button type="submit" className="rounded-full bg-brand-green px-7 py-3.5 font-medium text-black hover:bg-brand-green/90 transition-all active:scale-95">
              Subscribe
            </button>
          </form>
        </FadeInView>
      </section>
    </>
  );
}
