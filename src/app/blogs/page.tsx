"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, ArrowRight, Tag, Search } from "lucide-react";
import { motion } from "framer-motion";

import heroImg from "@/assets/Christ_the_Saviour,_Ealing_Broadway.webp";
import servicesImg from "@/assets/Our Services.png";
import ealingChurchImg from "@/assets/ph-Christ-The-Saviour-Church-Ealing.webp";

import blogsHeroImg from "@/assets/blogs-hero-news.png";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: any;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "stamp-duty-land-tax-changes-2026-guide",
    title: "Understanding Stamp Duty (SDLT) Changes for UK Homebuyers",
    excerpt: "Navigating the latest UK Stamp Duty Land Tax thresholds and relief options for first-time buyers and property movers.",
    category: "Property Law",
    author: "Sarah Jenkins",
    date: "July 20, 2026",
    readTime: "5 min read",
    image: heroImg,
  },
  {
    id: "2",
    slug: "leasehold-reform-act-what-it-means-for-flat-owners",
    title: "Leasehold Reform & Extension: What Flat Owners Need to Know",
    excerpt: "A comprehensive guide on recent lease extension laws, ground rent caps, and how to protect your property equity.",
    category: "Leasehold",
    author: "David Miller",
    date: "July 15, 2026",
    readTime: "7 min read",
    image: servicesImg,
  },
  {
    id: "3",
    slug: "step-by-step-residential-conveyancing-timeline",
    title: "The Step-by-Step Conveyancing Process: Offer to Completion",
    excerpt: "Demystifying the property conveyancing timeline in England & Wales—local searches, exchange of contracts, and completion day.",
    category: "Guides",
    author: "Elena Rostova",
    date: "July 08, 2026",
    readTime: "6 min read",
    image: ealingChurchImg,
  },
  {
    id: "4",
    slug: "top-5-common-conveyancing-delays-how-to-avoid-them",
    title: "5 Common Conveyancing Delays and How to Avoid Them",
    excerpt: "Learn how proactive legal preparation, digital ID checks, and swift search ordering can speed up your property purchase.",
    category: "Conveyancing",
    author: "Marcus Vance",
    date: "June 28, 2026",
    readTime: "4 min read",
    image: heroImg,
  },
  {
    id: "5",
    slug: "remortgaging-your-property-legal-checklist",
    title: "Essential Legal Checklist When Remortgaging Your Property",
    excerpt: "Key legal steps and requirements when switching mortgage lenders or transferring equity in your home.",
    category: "Remortgage",
    author: "Sarah Jenkins",
    date: "June 18, 2026",
    readTime: "4 min read",
    image: servicesImg,
  },
  {
    id: "6",
    slug: "new-build-property-conveyancing-key-considerations",
    title: "Buying a New Build Home: Legal Considerations & Pitfalls",
    excerpt: "Developer warranties, long-stop completion dates, and snagging inspection contracts explained by specialist solicitors.",
    category: "New Build",
    author: "David Miller",
    date: "June 10, 2026",
    readTime: "8 min read",
    image: ealingChurchImg,
  },
];

const categories = ["All", "Property Law", "Leasehold", "Guides", "Conveyancing", "Remortgage", "New Build"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-lightBg flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        {/* Blogs Hero (Matching Careers/Services Split Layout) */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12 mb-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                  <Tag className="w-3.5 h-3.5" /> Conveyancing Insights & Legal News
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                  UK Property Market & Legal Guides
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-xl font-light leading-relaxed mb-4">
                  Expert articles, conveyancing timelines, Stamp Duty advice, and property market updates from the Quality Conveyancing legal team.
                </p>
              </div>

              <div className="lg:col-span-5 relative h-64 md:h-72 lg:h-[320px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src={blogsHeroImg}
                  alt="Quality Conveyancing Insights & Legal News"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="container mx-auto px-6 lg:px-12 max-w-6xl mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-4 border-b border-gray-200">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedCategory === cat
                      ? "bg-legalDark text-white shadow-sm"
                      : "bg-white text-legalDark hover:bg-warmGray border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs text-legalDark focus:outline-none focus:border-tealAccent"
              />
            </div>
          </div>
        </section>

        {/* Blog Cards Grid */}
        <section className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-textMuted text-base">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, idx) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative h-44 w-full overflow-hidden bg-warmGray">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 bg-white/90 backdrop-blur-md text-legalDark rounded-full shadow-sm">
                          <Tag className="w-3 h-3 text-tealAccent" />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h2 className="text-lg font-bold font-serif text-legalDark mb-2 line-clamp-2 hover:text-tealAccent transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-textMuted text-xs leading-relaxed line-clamp-3 mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <div className="border-t border-gray-100 pt-3">
                      <div className="flex items-center justify-between text-[11px] text-textMuted mb-3">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3 text-tealAccent" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-tealAccent" />
                          {post.readTime}
                        </span>
                      </div>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-legalDark hover:text-tealAccent transition-colors group"
                      >
                        Read Full Article 
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
