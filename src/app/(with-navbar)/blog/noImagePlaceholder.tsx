import { useId } from "react";

export default function NoImagePlaceholder() {
	const titleId = useId();

	return (
		<div className="w-full h-full flex flex-col items-center justify-center bg-stone-100 dark:bg-stone-700 text-gray-500 dark:text-gray-100">
			<svg
				role="img"
				aria-labelledby={titleId}
				xmlns="http://www.w3.org/2000/svg"
				className="w-12 h-12 mb-2"
				viewBox="0 0 24 24"
				fill="none"
			>
				<title id={titleId}>이미지 없음</title>
				<path
					stroke="currentColor"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6"
					fill="none"
				/>
			</svg>
			<span className="text-sm">이미지 없음</span>
		</div>
	);
}
