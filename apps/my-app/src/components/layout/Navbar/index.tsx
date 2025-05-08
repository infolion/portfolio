"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ThemeToggle } from "../../theme-toggle";
import { useAuth } from "../../../context/auth-context";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const { user, signOut, isAdmin } = useAuth();

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link href="/" className="font-mono text-2xl">
          <div className="flex flex-row items-center gap-2">
            <div className="h-8 w-8 relative">
              <Image
                src="/icons/favicon.ico"
                alt="로고"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div>June</div>
          </div>
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="text-sm font-medium hover:underline">
          Home
        </Link>
        <Link href="/info" className="text-sm font-medium hover:underline">
          Info
        </Link>
        <Link href="/blog" className="text-sm font-medium hover:underline">
          Blog
        </Link>
        <Link href="/algorithm" className="text-sm font-medium hover:underline">
          Algorithm
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        {user ? (
          <Button
            onClick={() => signOut()}
            className="bg-stone-600 hover:bg-stone-800 dark:bg-stone-50 dark:hover:bg-stone-200 text-white dark:text-stone-950 rounded-full flex items-center gap-2"
          >
            <LogOut size={16} />
            <span>로그아웃</span>
          </Button>
        ) : (
          <Button className="bg-stone-600 hover:bg-stone-800 dark:bg-stone-50 dark:hover:bg-stone-200 text-white dark:text-stone-950 rounded-full">
            <Link href="/login">로그인</Link>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
}
