import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep module resolution inside this app, even when a parent has a lockfile.
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
