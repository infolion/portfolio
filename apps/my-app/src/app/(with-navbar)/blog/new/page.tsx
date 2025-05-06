"use client";
import { useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { supabase } from "../../../lib/supabase";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewPostPage() {
  const editorRef = useRef<Editor>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 이미지 미리보기
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file || null);
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";

    // 1. 이미지가 있으면 Supabase Storage에 업로드
    if (image) {
      const fileExt = image.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { data, error } = await supabase.storage
        .from("blog-images")
        .upload(fileName, image);

      if (error) {
        alert(`이미지 업로드 실패: + ${error.message}`);
        setLoading(false);
        return;
      }
      imageUrl = supabase.storage.from("blog-images").getPublicUrl(fileName)
        .data.publicUrl;
    }

    // 2. Toast UI Editor에서 마크다운/HTML 추출
    const content = editorRef.current?.getInstance().getMarkdown() || "";

    // 3. 글 데이터 DB에 저장
    const { error } = await supabase.from("posts").insert([
      {
        title,
        category,
        excerpt,
        content,
        image: imageUrl,
        date: new Date().toISOString(),
      },
    ]);

    setLoading(false);

    if (error) {
      alert(`글 등록 실패: ${error.message}`);
    } else {
      alert("글이 등록되었습니다!");
      // router.push("/blog");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <div className="mb-8">
        <Link
          href="/blog"
          className="flex items-center gap-2 text-gray-600 hover:text-black"
        >
          <ArrowLeft size={16} />
          <span>블로그로 돌아가기</span>
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6">글 작성</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-2 rounded"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">카테고리 선택</option>
          <option value="일상">일상</option>
          <option value="개발">개발</option>
          <option value="기타">기타</option>
        </select>
        <input
          className="border p-2 rounded"
          placeholder="요약(Excerpt)"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
        />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="미리보기"
            className="w-full max-h-60 object-contain mb-2"
          />
        )}
        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="400px"
          initialEditType="markdown"
          useCommandShortcut={true}
          language="ko"
        />
        <button
          type="submit"
          className="bg-stone-600 hover:bg-stone-800 dark:bg-stone-50 dark:hover:bg-stone-200 text-white dark:text-stone-950  px-6 py-2 rounded-full shadow transition text-lg font-semibold"
          disabled={loading}
        >
          {loading ? "등록 중..." : "등록하기"}
        </button>
      </form>
    </div>
  );
}
