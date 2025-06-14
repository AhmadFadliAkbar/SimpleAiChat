import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ganti kembali ke 'standalone' untuk kebutuhan Docker
  output: process.env.NEXT_OUTPUT as 'standalone' | 'export' | undefined || 'standalone',
  images: {
    unoptimized: true, // Diperlukan untuk static export
  },
  // Ganti 'repo' dengan nama repository kamu (misalnya 'SimpleAiChat')
  basePath: process.env.NEXT_OUTPUT === 'export' ? '/SimpleAiChat' : '',
  assetPrefix: process.env.NEXT_OUTPUT === 'export' ? '/SimpleAiChat/' : '',
};

export default nextConfig;