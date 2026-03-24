import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.gamecp.com" },
    ],
  },
};

export default nextConfig;
