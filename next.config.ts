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
  async redirects() {
    return [
      // Pillar A: Sick Leave Guide
      { source: "/medical-certificate-for-leave", destination: "/sick-leave-medical-certificate", permanent: true },
      { source: "/medical-certificate-for-office-leave", destination: "/sick-leave-medical-certificate", permanent: true },
      { source: "/blog/what-is-medical-certificate", destination: "/sick-leave-medical-certificate", permanent: true },
      { source: "/blog/how-to-get-sick-leave-certificate", destination: "/sick-leave-medical-certificate", permanent: true },
      { source: "/blog/rules-medical-certificate-leave-india", destination: "/sick-leave-medical-certificate", permanent: true },
      { source: "/blog/how-to-get-medical-certificate", destination: "/sick-leave-medical-certificate", permanent: true },
      { source: "/blog/how-to-get-medical-certificate-for-leave", destination: "/sick-leave-medical-certificate", permanent: true },
      
      // Pillar B: Student Medical Certificate
      { source: "/student-medical-certificate-format", destination: "/student-medical-certificate", permanent: true },
      { source: "/medical-certificate-for-school-absence", destination: "/student-medical-certificate", permanent: true },
      { source: "/blog/medical-certificate-for-school", destination: "/student-medical-certificate", permanent: true },
      { source: "/blog/how-to-make-medical-certificate-for-college", destination: "/student-medical-certificate", permanent: true },

      // Pillar C: Fitness Medical Certificate
      { source: "/blog/what-is-medical-fitness-certificate", destination: "/fitness-medical-certificate", permanent: true },
      { source: "/blog/how-to-get-medical-fitness-certificate", destination: "/fitness-medical-certificate", permanent: true },
      { source: "/blog/medical-certificate-vs-fitness-certificate", destination: "/fitness-medical-certificate", permanent: true },

      // Evergreen Cleanup
      { source: "/blog/ai-medical-certificate-generator-tools-2026", destination: "/blog/ai-medical-certificate-generator-tools", permanent: true },
    ];
  },
  ...(replitDomain
    ? {
        allowedDevOrigins: [replitDomain, `*.${replitDomain}`],
      }
    : {}),
};

export default nextConfig;
