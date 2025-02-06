import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: "all",
      // minSize: 20 * 1024,
      // maxSize: 600 * 1024,
      minSize: 0,
      maxSize: Infinity,
      cacheGroups: {
        node_modules: {
          test: /[\\/]node_modules[\\/]/,
          name: "node_modules",
        },
        // nextClient: {
        //   test: /[\\/]node_modules[\\/]next[\\/]dist[\\/]client[\\/]/,
        //   name: "next-client",
        //   chunks: "initial",
        // },
        // nextCompiled: {
        //   test: /[\\/]node_modules[\\/]next[\\/]dist[\\/]compiled[\\/]/,
        //   name: "next-compiled",
        //   chunks: "initial",
        // },
      },
    };
    return config;
  },
  experimental: {
    staleTimes: {
      dynamic: 300, // 5 minutes do not refetch page data
    },
  },
};

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

export default withBundleAnalyzerConfig(nextConfig);
