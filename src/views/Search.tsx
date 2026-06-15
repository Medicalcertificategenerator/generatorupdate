"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, FileText, Stethoscope, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { TEMPLATES } from "@/types/certificate";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function SearchView() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const matchedPosts = q.trim().length > 0
    ? BLOG_POSTS.filter((p) =>
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.metaDescription.toLowerCase().includes(q.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(q.toLowerCase()))
      )
    : [];

  const matchedTemplates = q.trim().length > 0
    ? TEMPLATES.filter((t) =>
        t.name.toLowerCase().includes(q.toLowerCase()) ||
        t.category.toLowerCase().includes(q.toLowerCase()) ||
        t.description.toLowerCase().includes(q.toLowerCase())
      )
    : [];

  const totalResults = matchedPosts.length + matchedTemplates.length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Search className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-extrabold">Search Results</h1>
          </div>
          {q ? (
            <p className="text-muted-foreground">
              {totalResults === 0
                ? `No results found for "${q}"`
                : `Found ${totalResults} result${totalResults !== 1 ? "s" : ""} for "${q}"`}
            </p>
          ) : (
            <p className="text-muted-foreground">Enter a search query to find templates and articles.</p>
          )}
        </div>

        {matchedTemplates.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-primary" /> Templates ({matchedTemplates.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matchedTemplates.map((t) => (
                <Link
                  key={t.id}
                  href={`/generator/${t.id}`}
                  className="flex gap-4 p-4 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <img
                    src={t.previewImage}
                    alt={t.name}
                    className="w-16 h-20 object-cover object-top rounded-lg border border-border flex-shrink-0"
                    loading="lazy"
                    width={64}
                    height={80}
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm mb-1">{t.name}</p>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{t.description}</p>
                    <span className="inline-block text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">{t.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {matchedPosts.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" /> Articles ({matchedPosts.length})
            </h2>
            <div className="space-y-4">
              {matchedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block p-4 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <p className="font-semibold mb-1">{p.title}</p>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{p.metaDescription}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{p.date}</span>
                    <span>·</span>
                    <span>{p.readTime}</span>
                    <span>·</span>
                    <span className="text-primary font-medium">{p.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {q && totalResults === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg mb-2">No results found for "{q}"</p>
            <p className="text-sm text-muted-foreground mb-6">Try different keywords or browse our templates.</p>
            <div className="flex gap-3 justify-center">
              <Link href="/#templates"><Button variant="outline">Browse Templates</Button></Link>
              <Link href="/blog"><Button variant="outline">Read Blog</Button></Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
