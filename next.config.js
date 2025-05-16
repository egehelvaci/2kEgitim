/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone', // Vercel için optimize edilmiş derleme
  images: {
    unoptimized: false, // Resimlerin optimize edilmesini sağlar
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Tüm hostlardan resimleri kabul eder
      },
    ],
  },
  reactStrictMode: true, // Strict mode aktif
  poweredByHeader: false, // X-Powered-By header'ı kaldır
};

module.exports = nextConfig;
