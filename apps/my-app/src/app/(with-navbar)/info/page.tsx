"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Info() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            안녕하세요,
            <br />
            저는 <span className="text-black">송준우 </span>입니다.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            웹 개발자로서 사용자 경험을 중심으로 한 웹 애플리케이션을 만드는 데
            열정을 가지고 있습니다. Next.js, React, TypeScript를 주로
            사용합니다.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "C/C++",
                  "Python",
                  "Java",
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-black text-white rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">career</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">시니어 프론트엔드 개발자</div>
                  <div className="text-sm text-gray-600">
                    회사명 | 2023 - 현재
                  </div>
                </div>
                <div>
                  <div className="font-medium">프론트엔드 개발자</div>
                  <div className="text-sm text-gray-600">
                    회사명 | 2020 - 2023
                  </div>
                </div>
              </div>
              <h3 className="font-bold mt-6 mb-2">education</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">대진고등학교</div>
                  <div className="text-sm text-gray-600">졸업 | 2021-2023</div>
                  <div className="font-medium">한양대학교 정보시스템학과</div>
                  <div className="text-sm text-gray-600">재학중 | 2023~</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="bg-[#f5f5f3] p-8">
            <Image
              src="/icons/favicon.ico"
              alt="아이콘"
              width={500}
              height={750}
              className="w-full h-auto rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
