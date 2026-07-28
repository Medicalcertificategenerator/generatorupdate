import type { NextConfig } from "next";
import path from "path";

const replitDomain = process.env.REPLIT_DEV_DOMAIN;
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  ...(isProd
    ? {
        trailingSlash: true,
      }
    : {}),
  output: "standalone",
  ...(replitDomain
    ? {
        allowedDevOrigins: [replitDomain, `*.${replitDomain}`],
      }
    : {}),
  async redirects() {
    return [
      // Shipping & Delivery redirect
      { source: '/shipping', destination: '/contact', permanent: true },
      { source: '/shipping/', destination: '/contact', permanent: true },
      // Consolidation for "how to get" intent
      { source: '/blog/how-to-get-sick-leave-certificate', destination: '/blog/how-to-get-medical-certificate', permanent: true },
      { source: '/blog/how-to-get-medical-certificate-for-leave', destination: '/blog/how-to-get-medical-certificate', permanent: true },
      { source: '/blog/how-to-get-medical-certificate-government-hospital', destination: '/blog/how-to-get-medical-certificate', permanent: true },
      { source: '/blog/how-to-make-medical-certificate-online', destination: '/blog/how-to-get-medical-certificate', permanent: true },
      // Consolidation for "format" intent
      { source: '/blog/how-to-write-medical-certificate', destination: '/blog/medical-certificate-format-india', permanent: true },
      { source: '/blog/how-to-fill-medical-certificate', destination: '/blog/medical-certificate-format-india', permanent: true },
      { source: '/blog/how-medical-certificate-looks-like', destination: '/blog/medical-certificate-format-india', permanent: true },
      { source: '/blog/how-doctors-create-medical-certificates', destination: '/blog/medical-certificate-format-india', permanent: true },
      // Consolidation for "school" intent
      { source: '/blog/medical-certificate-for-school', destination: '/student-medical-certificate-format', permanent: true },
      { source: '/medical-certificate-for-school-absence', destination: '/student-medical-certificate-format', permanent: true },
      // Consolidation for "fitness" intent
      { source: '/blog/how-to-get-medical-fitness-certificate', destination: '/blog/what-is-medical-fitness-certificate', permanent: true },
      // Consolidation for "leave generator" intent
      { source: '/sick-leave-medical-certificate', destination: '/medical-certificate-for-leave', permanent: true },
      { source: '/medical-certificate-for-office-leave', destination: '/medical-certificate-for-leave', permanent: true },
      // Year removal URL
      { source: '/blog/ai-medical-certificate-generator-tools-2026', destination: '/blog/ai-medical-certificate-generator-tools', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="agent-skills", </.well-known/mcp/server-card.json>; rel="mcp-server-card", </auth.md>; rel="authorizations-documentation"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
