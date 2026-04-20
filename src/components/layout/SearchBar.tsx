"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, FileText, Stethoscope } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";
import { TEMPLATES } from "@/types/certificate";

export function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const matchedPosts = query.trim().length > 1
    ? BLOG_POSTS.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 3)
    : [];

  const matchedTemplates = query.trim().length > 1
    ? TEMPLATES.filter((t) =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.category.toLowerCase().includes(query.toLowerCase()) ||
        t.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 3)
    : [];

  const hasResults = matchedPosts.length > 0 || matchedTemplates.length > 0;

  const open = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      close();
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, close]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen, close]);

  return (
    <div ref={containerRef} className="relative">
      {!isOpen ? (
        <button
          onClick={open}
          aria-label="Search templates and articles"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-md hover:bg-muted/60"
        >
          <Search className="w-4 h-4" />
          <span className="hidden md:inline">Search</span>
          <kbd className="hidden lg:inline-flex items-center gap-0.5 border border-border rounded text-[10px] px-1 py-0.5 text-muted-foreground">
            ⌘K
          </kbd>
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center">
          <div className="relative flex items-center">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates, articles…"
              className="w-56 md:w-72 pl-9 pr-9 py-1.5 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/30"
              aria-label="Search"
              autoComplete="off"
            />
            <button
              type="button"
              onClick={close}
              className="absolute right-2 text-muted-foreground hover:text-foreground"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}

      {isOpen && query.trim().length > 1 && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-popover border border-border rounded-xl shadow-xl z-50 overflow-hidden">
          {!hasResults ? (
            <p className="px-4 py-6 text-sm text-muted-foreground text-center">
              No results for <strong>"{query}"</strong>
            </p>
          ) : (
            <>
              {matchedTemplates.length > 0 && (
                <div>
                  <p className="px-3 pt-3 pb-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Templates</p>
                  {matchedTemplates.map((t) => (
                    <Link
                      key={t.id}
                      href={`/generator/${t.id}`}
                      onClick={close}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-muted/60 transition-colors"
                    >
                      <div className="w-8 h-8 rounded bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{t.name}</p>
                        <p className="text-[11px] text-muted-foreground truncate">{t.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              {matchedPosts.length > 0 && (
                <div>
                  <p className="px-3 pt-3 pb-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Articles</p>
                  {matchedPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      onClick={close}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-muted/60 transition-colors"
                    >
                      <div className="w-8 h-8 rounded bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium line-clamp-1">{p.title}</p>
                        <p className="text-[11px] text-muted-foreground">{p.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <div className="border-t border-border">
                <Link
                  href={`/search?q=${encodeURIComponent(query)}`}
                  onClick={close}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm text-primary hover:bg-primary/5 transition-colors font-medium"
                >
                  <Search className="w-3.5 h-3.5" />
                  See all results for "{query}"
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
