import type React from "react";
import { ThemeProvider } from "@/src/components/theme-provider";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export const metadata = {
	title: "Junwoo Song blog page",
	description: "Junwoo Song 의 개인 포트폴리오 및 블로그 웹사이트",
	icons: {
		icon: "/icons/favicon.ico",
	},
};

export default function WithNavbarLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<Navbar />
			<main className="flex-1 mb-20">{children}</main>
			<Footer />
		</ThemeProvider>
	);
}
