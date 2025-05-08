"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Info() {
  const techStacks = [
    { name: "C%2B%2B", logo: "cplusplus", color: "00599C" },
    { name: "Python", logo: "python", color: "3776AB" },
    { name: "java", logo: "java", color: "007396" },
    {
      name: "JavaScript",
      logo: "javascript",
      color: "F7DF1E",
      logoColor: "black",
    },
    { name: "TypeScript", logo: "typescript", color: "3178C6" },
    { name: "React", logo: "react", color: "61DAFB", logoColor: "black" },
    { name: "Next.js", logo: "nextdotjs", color: "000000" },
    { name: "Node.js", logo: "nodedotjs", color: "339933" },
    { name: "Tailwind CSS", logo: "tailwindcss", color: "06B6D4" },
  ];

  return (
    <div className="container mx-auto mt-24 mb-24 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* 좌측 콘텐츠 (텍스트, 스택, 프로젝트, 학력) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            안녕하세요,
            <br />
            저는 <span className="text-black dark:text-stone-200">송준우 </span>
            입니다.
          </h1>
          <p className="text-lg text-gray-700 dark:text-stone-400 mb-6">
            웹 개발자로서 사용자 경험을 중심으로 한 웹 애플리케이션을 만드는 데
            열정을 가지고 있습니다. Next.js, React, TypeScript를 주로
            사용합니다.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStacks.map((tech, index) => (
                  <motion.img
                    key={tech.name}
                    alt={tech.name}
                    src={`https://img.shields.io/badge/${tech.name}-${
                      tech.color
                    }.svg?&style=for-the-badge&logo=${tech.logo}&logoColor=${
                      tech.logoColor || "white"
                    }`}
                    className="h-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">project</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-bold mt-6 mb-2">portfolio</div>
                  <div className="text-sm text-gray-600 dark:text-stone-400">
                    개인 블로그 | 2025.04.15 ~
                  </div>
                </div>
              </div>
              <h3 className="font-bold mt-6 mb-2">education</h3>
              <div className="space-y-2">
                <div>
                  <div className="font-medium">대진고등학교</div>
                  <div className="text-sm text-gray-600 dark:text-stone-400">
                    졸업 | 2021 - 2023
                  </div>
                  <div className="font-medium">한양대학교 정보시스템학과</div>
                  <div className="text-sm text-gray-600 dark:text-stone-400">
                    재학중 | 2024 ~
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 우측 이미지 */}
        <motion.div
          className="relative flex flex-col justify-center items-center space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, staggerChildren: 1.5 }}
        >
          <motion.img
            src="http://mazassumnida.wtf/api/v2/generate_badge?boj=jwsong0595"
            alt="Baekjoon Badge"
            className="w-5/6 h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.img
            src="http://mazandi.herokuapp.com/api?handle=jwsong0595&theme=cold"
            alt="GitHub Stat"
            className="w-5/6 h-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
