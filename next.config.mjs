/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ktsbauqwibpeduzgssxs.supabase.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mazassumnida.wtf",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mazandi.herokuapp.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
