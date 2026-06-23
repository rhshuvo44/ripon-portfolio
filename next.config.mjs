/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export', 
  images: {
    unoptimized: true, 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
