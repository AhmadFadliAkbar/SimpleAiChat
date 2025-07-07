import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ini buat exprt gihthub action
  output: process.env.NEXT_OUTPUT as 'standalone' | 'export' | undefined || 'standalone',
  images: {
    unoptimized: true, // Diperlukan untuk static export
  },
  // Gunakan nama repository asli buat export github action
  basePath: process.env.NEXT_OUTPUT === 'export' ? '/SimpleAiChat' : '',
  assetPrefix: process.env.NEXT_OUTPUT === 'export' ? '/SimpleAiChat/' : '',
};

export default nextConfig;