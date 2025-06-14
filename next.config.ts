import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ganti kembali ke 'standalone' untuk kebutuhan Docker
  output: process.env.NEXT_OUTPUT as 'standalone' | 'export' | undefined || 'standalone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;