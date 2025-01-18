/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
        pathname: "/img/**", // Allow images under the `/img/` path
      },
    ],
  },
};

module.exports = nextConfig;
