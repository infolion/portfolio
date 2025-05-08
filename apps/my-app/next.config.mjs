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
    ],
  },
  // 추가 설정 옵션이 있다면 여기에 작성
};

export default nextConfig;
