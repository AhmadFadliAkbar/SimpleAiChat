import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NEXT_OUTPUT as 'standalone' | 'export' | undefined || 'standalone',
  images: {
    unoptimized: true, // Diperlukan untuk static export
  },
  // Gunakan nama repository asli
  basePath: process.env.NEXT_OUTPUT === 'export' ? '/SimpleAiChat' : '',
  assetPrefix: process.env.NEXT_OUTPUT === 'export' ? '/SimpleAiChat/' : '',
};

export default nextConfig;