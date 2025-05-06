import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: { id: string };
};

// 서버 컴포넌트에서 Supabase 에러 방지를 위한 정적 데이터
// 실제 구현 시에는 Supabase 클라이언트를 사용
const TEMP_POSTS = [
  {
    id: "1",
    title: "첫 번째 블로그 포스트",
    excerpt:
      "이 포스트는 배포 시 환경 변수 문제를 해결하기 위한 임시 데이터입니다.",
    category: "개발",
    date: "2023-05-06",
    image: "/icons/favicon.ico",
    content:
      "배포 후 환경 변수를 설정하면 실제 데이터베이스 콘텐츠가 표시됩니다.",
  },
];

export default async function BlogDetailPage(props: Props) {
  const id = props.params.id;

  // 정적 데이터에서 포스트 검색 (실제로는 Supabase 사용)
  const post = TEMP_POSTS.find((p) => p.id === id) || {
    id: id,
    title: "임시 포스트",
    excerpt: "환경 변수 설정 후 실제 데이터가 표시됩니다",
    category: "개발",
    date: "2023-05-06",
    image: "/icons/favicon.ico",
    content: "배포 후 Supabase 환경 변수를 설정해주세요.",
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-gray-600 hover:text-black"
        >
          <ArrowLeft size={16} />
          <span>블로그로 돌아가기</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-stone-950 dark:bg-stone-50 rounded-lg overflow-hidden">
          <div className="bg-[#f5f5f3] p-8">
            <Image
              src={post.image || "/icons/favicon.ico"}
              alt={post.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium">{post.category}</span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
          <div className="prose prose-lg max-w-none">
            <div>{post.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
