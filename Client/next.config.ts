import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      { source: "/endorsement", destination: "/endorsements" },
      { source: "/our-services", destination: "/services" },
      { source: "/privacy-statement", destination: "/privacy" },
      { source: "/terms-conditions", destination: "/terms" },
      { source: "/terms-and-conditions", destination: "/terms" },
      { source: "/complaints-procedure", destination: "/complaints" },
      { source: "/contact-us", destination: "/contact" },
      { source: "/meet-the-team", destination: "/team" },
      { source: "/get-a-quote", destination: "/quote" },
      { source: "/disclaimer-of-liability-for-content", destination: "/disclaimer" },
    ];
  },
};

export default nextConfig;
