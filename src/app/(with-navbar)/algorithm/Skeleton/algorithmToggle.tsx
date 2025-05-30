"use client";

import { useState, useEffect } from "react";

export default function AlgorithmToggle() {
	const [timedOut, setTimedOut] = useState(false);
	const [loaded, setLoaded] = useState(false);

	// 0.5초 타이머
	useEffect(() => {
		const timer = setTimeout(() => setTimedOut(true), 750);
		return () => clearTimeout(timer);
	}, []);

	// iframe load 이벤트 감지
	useEffect(() => {
		const iframe = document.getElementById("algorithm-iframe");
		if (!iframe) return;
		const onLoad = () => setLoaded(true);
		iframe.addEventListener("load", onLoad);
		return () => iframe.removeEventListener("load", onLoad);
	}, []);

	// 둘 다 완료되면 스켈레톤 숨기고 콘텐츠 보여주기
	useEffect(() => {
		if (timedOut && loaded) {
			document.getElementById("algorithm-skeleton")?.classList.add("hidden");
			document.getElementById("algorithm-content")?.classList.remove("hidden");
		}
	}, [timedOut, loaded]);

	return null;
}
