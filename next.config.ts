import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 300, // 5 minutes do not refetch page data
    },
  },
};

export default nextConfig;
