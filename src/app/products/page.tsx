"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Droplets, Zap, Leaf, ShieldCheck, HeartHandshake, Sparkles, ChevronRight } from "lucide-react";
import { FadeInView, SectionHeader } from "@/components/Animations";

const allProducts = [
  { category: "Household", icon: <Droplets size={20} />, name: "Washing Powder", desc: "Powerful stain-removing detergent formulated to leave clothes fresh, clean, and bright while being gentle on fabrics.", image: "/images/makoti-img-1.jpg", price: "From $3.50" },
  { category: "Household", icon: <Zap size={20} />, name: "Dishwashing Liquid", desc: "Cuts through grease effectively while leaving dishes sparkling clean with a refreshing fragrance.", image: "/images/makoti-img-2.jpg", price: "From $2.00" },
  { category: "Household", icon: <Leaf size={20} />, name: "Pine Gel", desc: "A thick multi-purpose disinfecting cleaner suitable for floors, bathrooms, kitchens, and commercial spaces.", image: "/images/makoti-img-3.jpg", price: "From $3.00" },
  { category: "Household", icon: <ShieldCheck size={20} />, name: "Thick Bleach", desc: "Strong disinfecting bleach designed to remove stains, whiten surfaces, and eliminate germs.", image: "/images/makoti-img-4.jpg", price: "From $2.50" },
  { category: "Household", icon: <HeartHandshake size={20} />, name: "Fabric Softener", desc: "Leaves clothes soft, fresh-smelling, and comfortable while reducing static cling.", image: "/images/makoti-img-2.jpg", price: "From $3.00" },
  { category: "Household", icon: <Sparkles size={20} />, name: "Hand Soap", desc: "Gentle yet effective hand cleansing soap suitable for homes, offices, and public facilities.", image: "/images/makoti-img-1.jpg", price: "From $1.50" },
  { category: "Household", icon: <Sparkles size={20} />, name: "Multi-Purpose Cleaner", desc: "Versatile all-surface cleaner for kitchens, bathrooms, and general household use.", image: "/images/makoti-img-3.jpg", price: "From $2.50" },
  { category: "Household", icon: <ShieldCheck size={20} />, name: "Toilet Cleaner", desc: "Powerful toilet bowl cleaner that removes limescale and kills germs on contact.", image: "/images/makoti-img-4.jpg", price: "From $2.00" },
  { category: "Household", icon: <Droplets size={20} />, name: "Floor Cleaner", desc: "Concentrated floor cleaning solution suitable for all floor types.", image: "/images/makoti-img-3.jpg", price: "From $3.00" },
  { category: "Household", icon: <ShieldCheck size={20} />, name: "Surface Sanitizer", desc: "Kills 99.9% of germs on all hard surfaces. Safe for kitchens and bathrooms.", image: "/images/makoti-img-1.jpg", price: "From $3.50" },
  { category: "Industrial", icon: <Zap size={20} />, name: "Industrial Degreasers", desc: "Heavy-duty degreasing solutions for industrial machinery and workshop environments.", image: "/images/makoti-img-2.jpg", price: "Bulk pricing" },
  { category: "Industrial", icon: <Droplets size={20} />, name: "Bulk Detergents", desc: "Economical bulk detergent solutions for large-scale commercial operations.", image: "/images/makoti-img-1.jpg", price: "Bulk pricing" },
  { category: "Industrial", icon: <ShieldCheck size={20} />, name: "Heavy Duty Chemicals", desc: "Professional-grade cleaning chemicals for the toughest industrial jobs.", image: "/images/makoti-img-4.jpg", price: "Bulk pricing" },
  { category: "Industrial", icon: <Sparkles size={20} />, name: "Sanitizing Solutions", desc: "Commercial sanitizing products for healthcare, hospitality, and food service.", image: "/images/makoti-img-3.jpg", price: "Bulk pricing" },
  { category: "Industrial", icon: <Leaf size={20} />, name: "Commercial Laundry Chemicals", desc: "High-performance laundry solutions for hotels, hospitals, and laundromats.", image: "/images/makoti-img-2.jpg", price: "Bulk pricing" },
  { category: "Industrial", icon: <Droplets size={20} />, name: "Cleaning Concentrates", desc: "Super-concentrated formulas that can be diluted for cost-effective large-area cleaning.", image: "/images/makoti-img-1.jpg", price: "Bulk pricing" },
];

const categories = ["All", "Household", "Industrial"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allProducts.filter((p) => {
    const catMatch = activeCategory === "All" || p.category === activeCategory;
    const searchMatch = p.name.toLowerCase().includes(search.toLowerCase());
    return catMatch && searchMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-brand-light overflow-hidden">
        <div className="absolute inset-0 bg-grid" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <FadeInView className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-green">Products</span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-deep mt-3">
              Complete{" "}
              <span className="gradient-text">cleaning range</span>
            </h1>
            <p className="mt-6 text-lg text-brand-charcoal/60 leading-relaxed">
              From everyday household essentials to industrial-grade solutions — explore
              our full range of cleaning products designed to deliver powerful results.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white sticky top-[72px] z-30 border-b border-brand-deep/5 backdrop-blur-xl bg-white/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-deep text-white shadow-lg shadow-brand-deep/20"
                      : "bg-brand-light text-brand-charcoal/60 hover:bg-brand-deep/5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-light border border-brand-deep/5 text-sm focus:outline-none focus:border-brand-green/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl bg-white border border-brand-deep/5 glow-card overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden bg-brand-light">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-brand-green mb-2">
                      {product.icon}
                      <span className="text-xs font-medium uppercase tracking-wider">{product.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-deep">{product.name}</h3>
                    <p className="mt-2 text-sm text-brand-charcoal/50 line-clamp-2">{product.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-semibold text-brand-deep">{product.price}</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-green hover:text-brand-green-dark transition-colors"
                      >
                        Inquire <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-charcoal/50 text-lg">No products found. Try a different search.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-deep relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <FadeInView className="relative mx-auto max-w-3xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Need bulk or wholesale?</h2>
          <p className="mt-4 text-white/60 text-lg">Get competitive pricing on bulk orders for your business.</p>
          <Link href="/wholesale" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-medium text-black hover:bg-brand-green/90 transition-all active:scale-95">
            Request Wholesale Pricing <ArrowRight size={18} />
          </Link>
        </FadeInView>
      </section>
    </>
  );
}
