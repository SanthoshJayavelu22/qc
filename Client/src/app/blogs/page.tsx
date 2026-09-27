"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Clock, User, ArrowRight, Tag, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { API_URL, BlogItem } from "@/lib/api";

import sdltImg from "@/assets/blog-sdlt.png";
import leaseholdImg from "@/assets/blog-leasehold.png";
import timelineImg from "@/assets/blog-timeline.png";
import delaysImg from "@/assets/blog-delays.png";
import remortgageImg from "@/assets/blog-remortgage.png";
import newbuildImg from "@/assets/blog-newbuild.png";
import blogsHeroImg from "@/assets/blogs-hero-news.png";

const defaultCategoryImages: Record<string, any> = {
  "Property Law": sdltImg,
  "Leasehold": leaseholdImg,
  "Guides": timelineImg,
  "Conveyancing": delaysImg,
  "Remortgage": remortgageImg,
  "New Build": newbuildImg,
};

const categories = ["All", "Property Law", "Leasehold", "Guides", "Conveyancing", "Remortgage", "New Build"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, [selectedCategory]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const url =
        selectedCategory && selectedCategory !== "All"
          ? `${API_URL}/api/blogs?category=${encodeURIComponent(selectedCategory)}`
          : `${API_URL}/api/blogs`;

      const res = await fetch(url);
      const data = await res.json();
      if (data.success && Array.isArray(data.blogs)) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error("Failed to load blogs from API:", err);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-lightBg flex flex-col">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        {/* Blogs Hero */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12 mb-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                  <Tag className="w-3.5 h-3.5" /> Property Update & Legal News
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                  Property Update & Legal Guides
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
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm animate-pulse space-y-4">
                  <div className="h-44 bg-gray-200 rounded-xl"></div>
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <Sparkles className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 text-sm font-medium">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, idx) => {
                const cover = post.coverImage || defaultCategoryImages[post.category] || sdltImg;
                const isExternalImg = typeof cover === "string" && cover.startsWith("http");

                return (
                  <motion.article
                    key={post._id || post.slug}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Image */}
                      <div className="relative h-44 w-full overflow-hidden bg-warmGray">
                        {isExternalImg ? (
                          <img
                            src={cover}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        ) : (
                          <Image
                            src={cover}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        )}
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
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
