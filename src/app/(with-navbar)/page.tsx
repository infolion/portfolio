"use server";

import Image from "next/image";
import Landing from "@/src/components/ui/Main/Landing";

export default async function Home() {
	return (
		<div className="w-full h-full justify-center items-center cursor-default font-pretendard">
			<Landing />
		</div>
	);
}
