import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prevent dev-only double-mount that can look like a flicker/double reload
  // when using mount-triggered animations/effects.
  reactStrictMode: false,
};

export default nextConfig;
