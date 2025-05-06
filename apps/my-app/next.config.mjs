/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},

  images: {
    domains: [
      "ktsbauqwibpeduzgssxs.supabase.co", // ← 본인 프로젝트의 supabase 도메인
    ],
  },
  // 추가 설정 옵션이 있다면 여기에 작성
};

export default nextConfig;
