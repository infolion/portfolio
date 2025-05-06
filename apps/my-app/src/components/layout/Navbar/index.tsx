import Link from "next/link";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ThemeToggle } from "../../theme-toggle";

export default function Navbar() {
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
        <Link href="/contact" className="text-sm font-medium hover:underline">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button className="bg-stone-600 hover:bg-stone-800 dark:bg-stone-50 dark:hover:bg-stone-200 text-white dark:text-stone-950 rounded-full">
          <Link href="/login">Login</Link>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
