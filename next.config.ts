import type { NextConfig } from "next";

const replitDomain = process.env.REPLIT_DEV_DOMAIN;
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd
    ? {
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  ...(replitDomain
    ? {
        allowedDevOrigins: [replitDomain, `*.${replitDomain}`],
      }
    : {}),
};

export default nextConfig;
