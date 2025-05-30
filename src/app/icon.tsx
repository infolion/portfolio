import { ImageResponse } from "next/og";

// 이미지 응답은 Edge 런타임을 필요로 합니다
export const runtime = "edge";

// 아이콘 메타데이터를 정의
export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/svg+xml";

// 이미지 생성 함수
export default function Icon() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 24,
				background: "black",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "white",
				borderRadius: "50%",
				fontWeight: "bold",
			}}
		>
			J
		</div>,
		{ ...size }
	);
}
