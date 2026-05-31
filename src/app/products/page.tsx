"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search, Droplets, Zap, Leaf, Shield, Heart, Sparkles } from "lucide-react";
import { Reveal, SectionLabel, SectionHeading } from "@/components/Animations";

const allProducts = [
  { cat: "Household", icon: <Droplets size={16} />, name: "Washing Powder", desc: "Powerful stain removal, leaves clothes fresh and bright. Gentle on fabrics.", img: "/images/makoti-img-1.jpg", price: "From $3.50" },
  { cat: "Household", icon: <Zap size={16} />, name: "Dishwashing Liquid", desc: "Cuts through grease effectively — dishes sparkling clean with a refreshing fragrance.", img: "/images/makoti-img-2.jpg", price: "From $2.00" },
  { cat: "Household", icon: <Leaf size={16} />, name: "Pine Gel", desc: "Thick multi-purpose disinfecting cleaner for floors, bathrooms, and kitchens.", img: "/images/makoti-img-3.jpg", price: "From $3.00" },
  { cat: "Household", icon: <Shield size={16} />, name: "Thick Bleach", desc: "Strong disinfecting bleach — removes stains, whitens surfaces, eliminates germs.", img: "/images/makoti-img-4.jpg", price: "From $2.50" },
  { cat: "Household", icon: <Heart size={16} />, name: "Fabric Softener", desc: "Leaves clothes soft, fresh-smelling, and comfortable. Reduces static cling.", img: "/images/makoti-img-2.jpg", price: "From $3.00" },
  { cat: "Household", icon: <Sparkles size={16} />, name: "Hand Soap", desc: "Gentle yet effective hand cleansing for homes, offices, and public facilities.", img: "/images/makoti-img-1.jpg", price: "From $1.50" },
  { cat: "Household", icon: <Sparkles size={16} />, name: "Multi-Purpose Cleaner", desc: "Versatile all-surface cleaner — kitchens, bathrooms, and general household use.", img: "/images/makoti-img-3.jpg", price: "From $2.50" },
  { cat: "Household", icon: <Shield size={16} />, name: "Toilet Cleaner", desc: "Powerful toilet bowl cleaner that removes limescale and kills germs on contact.", img: "/images/makoti-img-4.jpg", price: "From $2.00" },
  { cat: "Household", icon: <Droplets size={16} />, name: "Floor Cleaner", desc: "Concentrated floor cleaning solution suitable for all floor types.", img: "/images/makoti-img-3.jpg", price: "From $3.00" },
  { cat: "Household", icon: <Shield size={16} />, name: "Surface Sanitizer", desc: "Kills 99.9% of germs on all hard surfaces. Safe for kitchens and bathrooms.", img: "/images/makoti-img-1.jpg", price: "From $3.50" },
  { cat: "Industrial", icon: <Zap size={16} />, name: "Industrial Degreasers", desc: "Heavy-duty degreasing solutions for machinery and workshop environments.", img: "/images/makoti-img-2.jpg", price: "Bulk pricing" },
  { cat: "Industrial", icon: <Droplets size={16} />, name: "Bulk Detergents", desc: "Economical bulk detergent solutions for large-scale commercial operations.", img: "/images/makoti-img-1.jpg", price: "Bulk pricing" },
  { cat: "Industrial", icon: <Shield size={16} />, name: "Heavy Duty Chemicals", desc: "Professional-grade cleaning chemicals for the toughest industrial jobs.", img: "/images/makoti-img-4.jpg", price: "Bulk pricing" },
  { cat: "Industrial", icon: <Sparkles size={16} />, name: "Sanitizing Solutions", desc: "Commercial sanitizing products for healthcare, hospitality, and food service.", img: "/images/makoti-img-3.jpg", price: "Bulk pricing" },
  { cat: "Industrial", icon: <Leaf size={16} />, name: "Commercial Laundry Chemicals", desc: "High-performance laundry solutions for hotels, hospitals, and laundromats.", img: "/images/makoti-img-2.jpg", price: "Bulk pricing" },
  { cat: "Industrial", icon: <Droplets size={16} />, name: "Cleaning Concentrates", desc: "Super-concentrated formulas — cost-effective large-area cleaning.", img: "/images/makoti-img-1.jpg", price: "Bulk pricing" },
];

export default function ProductsPage() {
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allProducts.filter((p) => {
    return (cat === "All" || p.cat === cat) && p.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <section className="relative pt-40 pb-16 bg-ink overflow-hidden">
        <div className="blob-blue w-[500px] h-[500px] -top-32 right-0" />
        <div className="absolute inset-0 bg-dots opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <SectionLabel>Products</SectionLabel>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-snow leading-none">
              Complete <span className="gradient-brand">cleaning</span> range
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[73px] z-30 bg-ink/95 backdrop-blur-md border-b border-snow/5 py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex gap-1">
            {["All", "Household", "Industrial"].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  cat === c ? "bg-red text-white" : "text-snow/40 hover:text-snow bg-ink-light"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-56">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-snow/30" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-ink-light border border-snow/10 text-sm text-snow placeholder:text-snow/20 focus:outline-none focus:border-red/50 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative bg-ink py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="group bg-ink-light border border-snow/5 hover:border-snow/20 transition-all overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-red">{p.cat}</span>
                    <h3 className="text-base font-black text-snow mt-1">{p.name}</h3>
                    <p className="text-xs text-snow/30 mt-1.5 line-clamp-2">{p.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-bold text-snow">{p.price}</span>
                      <Link href="/contact" className="text-xs font-bold text-red hover:text-red-bright transition-colors flex items-center gap-1">
                        Inquire <ArrowUpRight size={10} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && <p className="text-center text-snow/30 py-20">No products found.</p>}
        </div>
      </section>

      <section className="relative bg-ink py-24 text-center border-t border-snow/5">
        <Reveal className="mx-auto max-w-3xl px-6">
          <SectionHeading>Need bulk or wholesale?</SectionHeading>
          <Link href="/wholesale" className="mt-8 group inline-flex items-center gap-2 bg-snow px-7 py-4 text-sm font-bold text-ink hover:bg-white transition-all">
            Request Wholesale Pricing <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
