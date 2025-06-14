// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ini instruksi utama untuk menghasilkan output statis

  // OPSIONAL: Konfigurasi basePath dan assetPrefix
  // Gunakan ini jika situs GitHub Pages Anda di-host di sub-jalur,
  // misalnya: https://<USERNAME>.github.io/<NAMA_REPOSITORY_ANDA>/
  // GANTI <NAMA_REPOSITORY_ANDA> dengan nama repositori Anda.
  // Contoh: jika repo Anda 'my-app', maka '/my-app'
  // basePath: '/<NAMA_REPOSITORY_ANDA>',
  // assetPrefix: '/<NAMA_REPOSITORY_ANDA>/',

  // Direkomendasikan untuk export statis jika Anda menggunakan komponen Image dari Next.js
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;