/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Required for external image hosting in static export
  },
};

module.exports = nextConfig;
