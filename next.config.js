/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
      },
    ];
  },
};

module.exports = nextConfig;
