/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: 'standalone',

  experimental: {
    optimizePackageImports: ['gsap', 'lenis'],
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bondsadda.com'
      },
      {
        protocol: 'https',
        hostname: 'dimensionfinancial.co.in'
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1'
      }
    ]
  },

  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },

  async redirects() {
    return [
      { source: '/about-us.html', destination: '/about-us', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/deals.html', destination: '/services', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/annual.html', destination: '/annual', permanent: true },
      { source: '/Career.html', destination: '/career', permanent: true },
      { source: '/merchantbanking.html', destination: '/merchant-banking', permanent: true },
      { source: '/stockbroking.html', destination: '/stock-broking', permanent: true }
    ];
  }
};

module.exports = nextConfig;