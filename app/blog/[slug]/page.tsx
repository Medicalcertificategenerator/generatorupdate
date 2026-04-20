import { Metadata } from "next";
import BlogPost from "@/views/BlogPost";
import { BLOG_POSTS } from "@/data/blogPosts";

const BASE_URL = "https://medicalcertificategenerator.co.in";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog | Medical Certificate Generator" };

  const url = `${BASE_URL}/blog/${post.slug}`;
  // If the post title already contains 'Medical Certificate', use it as-is to avoid keyword stuffing
  const titleValue = /medical certificate/i.test(post.title)
    ? { absolute: post.title }
    : post.title;

  return {
    title: titleValue,
    description: post.metaDescription,
    authors: [{ name: post.author, url: `${BASE_URL}/author` }],
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.metaDescription,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["/opengraph.jpg"],
    },
  };
}

export default BlogPost;
