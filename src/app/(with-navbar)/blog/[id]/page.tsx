import { supabase } from "../../../lib/supabase";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NoImagePlaceholder from "../noImagePlaceholder";
type Props = {
	params: { id: string };
};

export default async function BlogDetailPage(props: Props) {
	const id = props.params.id;

	const { data: post, error } = await supabase
		.from("posts")
		.select("id, title, excerpt, category, date, image, content")
		.eq("id", id)
		.single();

	if (!post) {
		return <div>포스트를 찾을 수 없습니다.</div>;
	}

	return (
		<div className="container mx-auto px-4 py-12">
			<div className="mb-8">
				<Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-black">
					<ArrowLeft size={16} />
					<span>블로그로 돌아가기</span>
				</Link>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-stone-950 dark:bg-stone-50 rounded-lg overflow-hidden">
					<div className="bg-[#f5f5f3] dark:bg-stone-600 p-8 h-full">
						{post.image ? (
							<Image
								src={post.image}
								alt={post.title}
								width={800}
								height={600}
								className="w-full h-auto rounded-lg"
							/>
						) : (
							<NoImagePlaceholder />
						)}
					</div>
				</div>

				<div>
					<div className="flex justify-between items-center mb-4">
						<span className="text-sm font-medium">{post.category}</span>
						<span className="text-sm text-gray-500">
							{new Intl.DateTimeFormat("default", {
								year: "numeric",
								month: "2-digit",
								day: "2-digit",
								hour: "2-digit",
								minute: "2-digit",
							}).format(new Date(post.date))}
						</span>
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
