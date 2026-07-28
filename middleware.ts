import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function htmlToMarkdown(html: string): string {
  // Remove script, style, noscript, svg elements
  let cleanHtml = html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, "")
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, "");

  // Headings
  cleanHtml = cleanHtml
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "\n\n# $1\n\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "\n\n## $1\n\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "\n\n### $1\n\n")
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, "\n\n#### $1\n\n")
    .replace(/<h5[^>]*>(.*?)<\/h5>/gi, "\n\n##### $1\n\n")
    .replace(/<h6[^>]*>(.*?)<\/h6>/gi, "\n\n###### $1\n\n");

  // Links & formatting
  cleanHtml = cleanHtml
    .replace(/<a\b[^>]*href=["']([^"']*)["'][^>]*>(.*?)<\/a>/gi, " [$2]($1) ")
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*")
    .replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`");

  // Lists
  cleanHtml = cleanHtml
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "\n- $1")
    .replace(/<\/ul>/gi, "\n\n")
    .replace(/<\/ol>/gi, "\n\n");

  // Paragraphs & breaks
  cleanHtml = cleanHtml
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "\n\n$1\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<hr\s*\/?>/gi, "\n\n---\n\n");

  // Strip remaining HTML tags
  let text = cleanHtml.replace(/<[^>]+>/g, "");

  // Decode basic HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Clean up excessive empty lines
  text = text.replace(/\n{3,}/g, "\n\n").trim();

  return text;
}

export async function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get("accept") || "";

  // Only intercept if the client explicitly requests text/markdown
  if (!acceptHeader.includes("text/markdown")) {
    return NextResponse.next();
  }

  // Fetch the original HTML response
  const response = await fetch(request.url, {
    headers: {
      ...Object.fromEntries(request.headers),
      accept: "text/html",
    },
  });

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return NextResponse.next();
  }

  const html = await response.text();
  const markdown = htmlToMarkdown(html);

  // Approximate token count (roughly 1 token per 4 chars)
  const tokenEstimate = Math.ceil(markdown.length / 4);

  return new NextResponse(markdown, {
    status: response.status,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "vary": "Accept",
      "x-markdown-tokens": String(tokenEstimate),
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt, etc.
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js)$).*)",
  ],
};
