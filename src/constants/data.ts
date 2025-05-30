export interface TechStack {
	name: string;
	logo: string;
	color: string;
	logoColor?: string;
}

export const techStacks: TechStack[] = [
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
	{ name: "Spring", logo: "spring", color: "6DB33F" },
	{ name: "Next.js", logo: "nextdotjs", color: "000000" },
	{ name: "Tailwind CSS", logo: "tailwindcss", color: "06B6D4" },
];
