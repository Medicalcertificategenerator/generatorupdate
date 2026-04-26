"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Clock, ArrowLeft, ArrowRight, User, CheckCircle } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug || "";
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  const isRecentlyUpdated = () => {
    if (!post?.dateModifiedIso) return false;
    const modifiedDate = new Date(post.dateModifiedIso);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - modifiedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 60;
  };
  const recentlyUpdated = isRecentlyUpdated();

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">This blog post doesn't exist or may have been moved.</p>
          <Link href="/blog" className="text-primary hover:underline font-medium">← Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        {/* Article header */}
        <div className="bg-muted/30 border-b border-border">
          <div className="max-w-3xl mx-auto px-4 py-12">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Badge variant="secondary">{post.category}</Badge>
              
              {recentlyUpdated && (
                <Badge variant="outline" className="border-green-500/50 text-green-600 bg-green-500/10">
                  Updated recently
                </Badge>
              )}

              <span className="text-xs text-foreground/80 flex items-center gap-1.5 font-medium bg-muted px-2.5 py-1 rounded-md">
                <RefreshCw className="w-3.5 h-3.5" /> Last Updated: {post.dateModified || post.date}
              </span>
              
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <User className="w-3 h-3" /> {post.author}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">{post.title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">{post.metaDescription}</p>
            
            {/* Trust Line */}
            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 w-fit px-3 py-1.5 rounded-full border border-border/50">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Reviewed for accuracy as per latest guidelines</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {post.tags.map(tag => (
                <span key={tag} className="text-xs bg-background border border-border px-2.5 py-1 rounded-full text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 py-12">
          {post.content}

          {/* Mid / End CTA — appears automatically in every article */}
          <div className="my-10 rounded-2xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="p-6 sm:p-8">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Free Tool</p>
              <h2 className="text-2xl font-extrabold mb-3 leading-tight">Generate a Medical Certificate Now</h2>
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed max-w-lg">
                Create a realistic handwritten-style medical certificate in seconds. Choose from 15+ authentic Indian
                clinic and hospital templates — completely free, no sign-up required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/generator/formal-cert"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  Generate Medical Certificate →
                </Link>
                <Link
                  href="/#templates"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-background font-medium px-6 py-3 rounded-xl hover:bg-muted/50 transition-colors text-sm"
                >
                  Browse All 15+ Templates
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                No signup · No watermark · Instant PNG & PDF download
              </p>
            </div>
          </div>
        </article>

        {/* Author attribution */}
        <div className="max-w-3xl mx-auto px-4 pb-10">
          <div className="bg-card border border-border rounded-xl p-5 flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-lg flex-shrink-0">
              ZB
            </div>
            <div>
              <p className="font-bold">Written by <Link href="/author" className="text-primary hover:underline">Ziven Borceg</Link></p>
              <p className="text-sm text-muted-foreground">Software developer and creator of medicalcertificategenerator.co.in</p>
            </div>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="max-w-3xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`}>
                <div className="group p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow cursor-pointer">
                  <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><ArrowLeft className="w-3 h-3" /> Previous Article</p>
                  <p className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">{prevPost.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`}>
                <div className="group p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow cursor-pointer text-right">
                  <p className="text-xs text-muted-foreground mb-1 flex items-center justify-end gap-1">Next Article <ArrowRight className="w-3 h-3" /></p>
                  <p className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors">{nextPost.title}</p>
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* Related posts */}
        <div className="bg-muted/30 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 py-12">
            <h2 className="text-xl font-bold mb-6">More from the Blog</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 4).map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}>
                  <div className="group p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow cursor-pointer h-full">
                    <Badge variant="secondary" className="text-[10px] mb-2">{p.category}</Badge>
                    <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors mb-1">{p.title}</h3>
                    <p className="text-xs text-muted-foreground">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
