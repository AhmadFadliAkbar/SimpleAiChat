import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ganti kembali ke 'standalone' untuk kebutuhan Docker
  output: 'export',
};

export default nextConfig;