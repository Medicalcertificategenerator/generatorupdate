"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";

const allCategories = ["All", ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

const accentColors = [
  "bg-primary",
  "bg-green-500",
  "bg-orange-500",
  "bg-purple-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-yellow-500",
  "bg-teal-500",
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16 w-full">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Blog & Resources</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            In-depth guides on medical certificates, sick leave documentation, workplace policies, Indian healthcare
            law, and responsible use of document generation tools. Written by Ziven Borceg.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allCategories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${activeCategory === cat ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border text-muted-foreground hover:text-foreground"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filtered.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer h-full flex flex-col">
                <div className={`h-1 ${accentColors[i % accentColors.length]}`} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                    {post.metaDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Create a Demo Certificate?</h2>
          <p className="text-muted-foreground mb-5 max-w-xl mx-auto">
            Generate a realistic handwritten-style medical certificate in seconds using our free tool.
            15+ Indian clinic and hospital formats, customisable fields, instant PNG and PDF download.
          </p>
          <Link href="/generator/formal-cert">
            <button className="bg-primary text-primary-foreground font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Create Certificate Now <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
