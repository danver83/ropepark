/** @type {import('next').NextConfig} */
const nextConfig = {
  /**images: {
    formats: ["image/webp"],
  },*/
  images: {
    unoptimized: true,
  },
  output: "export",
};

export default nextConfig;
