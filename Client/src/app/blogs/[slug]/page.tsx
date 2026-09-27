"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Clock, User, ArrowLeft, Tag, Calendar, Share2, Check } from "lucide-react";
import { API_URL, BlogItem } from "@/lib/api";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<BlogItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/api/blogs/${slug}`);
        const data = await res.json();
        if (data.success && data.blog) {
          setBlog(data.blog);
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-lightBg flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-legalDark transition mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to All Articles
          </Link>

          {loading ? (
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 animate-pulse space-y-6">
              <div className="h-6 bg-gray-200 rounded w-24"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-64 bg-gray-200 rounded-2xl"></div>
              <div className="space-y-3 pt-6">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          ) : !blog ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">Article Not Found</h2>
              <p className="text-sm text-gray-500 mb-6">The blog post you requested does not exist or has been removed.</p>
              <Link
                href="/blogs"
                className="bg-legalDark text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider"
              >
                Return to Blogs
              </Link>
            </div>
          ) : (
            <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-blue-50 text-[#1b75bb] rounded-full">
                  <Tag className="w-3.5 h-3.5" />
                  {blog.category}
                </span>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-legalDark border border-gray-200 px-3 py-1 rounded-full hover:bg-gray-50 transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Copied Link
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" /> Share Article
                    </>
                  )}
                </button>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-4xl font-serif font-bold text-legalDark mb-6 leading-tight">
                {blog.title}
              </h1>

              {/* Author & Timestamp */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 border-y border-gray-100 py-3.5 mb-8">
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <User className="w-4 h-4 text-[#1b75bb]" />
                  {blog.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Recently Published"}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                  {blog.readTime || "5 min read"}
                </span>
              </div>

              {/* Excerpt Lead */}
              <div className="bg-slate-50 border-l-4 border-[#1b75bb] p-4 rounded-r-xl mb-8 text-gray-700 font-serif italic text-base leading-relaxed">
                {blog.excerpt}
              </div>

              {/* Cover Image if present */}
              {blog.coverImage && (
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-sm">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Main Content (HTML support) */}
              <div
                className="prose prose-slate max-w-none text-gray-800 text-sm sm:text-base leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="border-t border-gray-100 pt-6 mt-10 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
                    Related Tags:
                  </span>
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
