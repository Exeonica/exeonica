/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["app", "components", "utils"],
  },
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;
