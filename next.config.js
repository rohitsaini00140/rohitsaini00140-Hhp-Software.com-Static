/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export mode enabled
  trailingSlash: true,   // Ensure trailing slash for proper static routing
  images: {
    unoptimized: true, // Required for external image hosting
  },
};

module.exports = nextConfig;
