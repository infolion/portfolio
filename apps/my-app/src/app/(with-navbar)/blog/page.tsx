"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../../context/auth-context";
import { motion } from "framer-motion";

type Post = {
  id: number;
  title: string;
  date: string;
  image?: string;
  category?: string;
  excerpt?: string;
  content?: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { isAdmin } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, date, image, category, excerpt")
        .order("date", { ascending: false });

      if (error) {
        console.error("❌ Error loading posts:", error.message);
      } else {
        setPosts(data || []);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog</h1>
      {/* 선 + 버튼 */}
      <div className="flex items-center mb-12">
        <div className="flex-1 h-0.5 bg-slate-950 dark:bg-slate-50" />
        {isAdmin && (
          <Link href="/blog/new" className="ml-4">
            <button
              type="button"
              className="bg-stone-600 hover:bg-stone-800 dark:bg-stone-50 dark:hover:bg-stone-200 text-white dark:text-stone-950 px-6 py-2 rounded-full shadow transition text-lg font-semibold"
            >
              글 작성
            </button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <p>아직 글이 없습니다.</p>
        ) : (
          posts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2, // 순차적으로 등장
                  ease: "easeOut",
                }}
                className="bg-stone-700 dark:bg-stone-500 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="bg-stone-50 dark:bg-stone-700 p-8">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="p-6 text-white dark:text-stone-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm">{post.category}</span>
                    <span className="text-sm text-gray-400">
                      {new Intl.DateTimeFormat("default", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(new Date(post.date))}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-300">{post.excerpt}</p>
                </div>
              </motion.div>
            </Link>
          ))
        )}
      </div>
    </div>

    // <div className="flex flex-col min-h-screen relative">
    //   <div className="flex justify-center h-100vh">
    //     <div className="w-full text-center mt-[150px] mb-[250px]">
    //       <h1 className="text-3xl font-bold mb-30">글 목록</h1>

    //       {posts.length === 0 ? (
    //         <p>아직 글이 없습니다.</p>
    //       ) : (
    //         <ul className="space-y-8">
    //           {posts.map((post) => (
    //             <li key={post.id} className="border-b pb-4">
    //               <Link href={`/blog/${post.id}`}>
    //                 <h2 className="text-xl font-semibold text-neutral-400 hover:text-neutral-700 hover:underline">
    //                   {post.title}
    //                 </h2>
    //               </Link>
    //               <p className="text-sm text-gray-500">
    //                 {new Date(post.created_at).toLocaleString()}
    //               </p>
    //             </li>
    //           ))}
    //         </ul>
    //       )}

    //       <div className="mt-8">
    //         <Link href="blog/new">
    //           <button className="bg-neutral-400 hover:bg-neutral-700 text-white px-4 py-2 rounded">
    //             글 작성
    //           </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
