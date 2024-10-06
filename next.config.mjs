/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://encrypted-tbn2.gstatic.com",
        pathname: "/licensed-image",
      },
      {
        protocol: "https",
        hostname: "https://www.bluebirdgroup.com",
        pathname: "/storage/articles",
      },
    ],
  },
};

export default nextConfig;
