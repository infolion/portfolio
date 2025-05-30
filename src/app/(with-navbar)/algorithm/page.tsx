import AlgorithmSkeleton from "./Skeleton/algorithmSkeleton";
import AlgorithmToggle from "./Skeleton/algorithmToggle";

export const dynamic = "force-dynamic";

export default function AlgorithmPage() {
	return (
		<>
			{/* 스켈레톤 */}
			<div id="algorithm-skeleton">
				<AlgorithmSkeleton />
			</div>

			{/* 실제 콘텐츠, iframe에 id 설정 */}
			<div id="algorithm-content" className="hidden">
				<div className="w-full h-full flex justify-center items-center min-h-[calc(100vh-140px)]">
					<iframe
						id="algorithm-iframe"
						src="https://chisel-newsstand-9c6.notion.site/ebd/1cc803ffd83080a3a2e2c6ffccbd79ec?v=1cc803ffd83081d58045000c72995d7c"
						width="90%"
						height="1000"
						allowFullScreen
						title="Algorithm"
						className="rounded-3xl"
					/>
				</div>
			</div>

			{/* 토글 로직 실행 */}
			<AlgorithmToggle />
		</>
	);
}
