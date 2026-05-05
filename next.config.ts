import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "riseatseven.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
