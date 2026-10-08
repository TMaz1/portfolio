import type { AboutPageContent } from "./types";

export const aboutContent: AboutPageContent = {
	hero: {
		eyebrow: "00 / About",
		title: {
			lines: ["About"],
			emphasis: "Me.",
		},
		copy:
			"Software engineer with a technical SEO background, working across .NET, APIs, web development and the systems behind useful digital experiences.",
		meta: [
			{
				label: "Focus",
				value: "C# / .NET / APIs / AI",
			},
			{
				label: "Approach",
				value: "Practical / Modular / Curious",
			},
			{
				label: "Based",
				value: "Manchester, UK",
			},
		],
	},
	developer: {
		section: {
			number: "01 / DEVELOPER",
			title: {
				lines: ["HOW I WORK"],
			},
			intro:
				"Build what solves the problem, understand what you are building, and leave the system better than you found it.",
		},
		eyebrow: "Background",
		title: "From curiosity to engineering.",
		paragraphs: [
			"I started coding at 16, with Visual Basic and C# as my first programming languages. It took me a while to really enjoy it, but once it clicked, I realised how much you could build with code. Some of the first projects I genuinely loved were small arcade-style games and maths-based learning games and quizzes, built with Processing and Pygame. Since then, I've experimented with Python, Haskell, Prolog, Java, Android, React Native and plenty of other technologies through university and personal projects.",
			"More recently, I've been deliberately pushing into areas I haven't worked with professionally yet, particularly Python, AI systems, APIs, distributed systems and infrastructure. Working on websites commercially has given me a good understanding of the problems businesses actually run into, and I've found myself wanting to understand the systems behind some of them. That has led me to build things like an AI gateway, authentication systems, event-driven APIs and OCR pipelines, often because they solve problems I recognise or because they're areas I know I should understand better.",
			"Professionally, I've worked across web development and software engineering, progressing from production web support into .NET development within a fintech environment. My commercial experience spans C#, .NET, TypeScript, SQL, REST APIs, React, WordPress and Umbraco, working across frontend, backend, databases, CMS platforms and live production infrastructure.",
		],
	},
	techStack: {
		section: {
			number: "02 / CURRENT STACK",
			title: {
				lines: ["What I'm", "working with."],
			},
			intro: "The technologies I'm using across current work and projects.",
		},
		groups: [
			{
				category: "Backend",
				items: [
					"Python",
					"C#",
					"ASP.NET Core 8",
					"FastAPI",
				],
			},
			{
				category: "Frontend",
				items: [
					"TypeScript",
					"React",
					"HTML",
					"CSS / SCSS",
				],
			},
			{
				category: "Data",
				items: [
					"SQL Server",
					"SQLite",
					"Redis",
				],
			},
			{
				category: "AI",
				items: [
					"Ollama",
					"LLMs",
					"RAG",
					"Embeddings",
					"AI Gateways",
				],
			},
			{
				category: "Systems",
				items: [
					"REST APIs",
					"Docker",
					"JWT",
					"MFA",
					"RBAC",
				],
			},
		],
	},
	principles: {
		section: {
			number: "03 / PRINCIPLES",
			title: {
				lines: ["How I build."],
			},
			intro:
				"A few things I try to keep consistent, regardless of the stack.",
		},
		items: [
			{
				number: "01 / EFFORT",
				label: "Effort",
				title: "Do the work properly.",
				description:
					"More code does not mean better code. I try to solve the actual problem without creating unnecessary problems for the next person.",
			},
			{
				number: "02 / MODULARITY",
				label: "Modularity",
				title: "Keep it changeable.",
				description:
					"I prefer simple, modular systems and avoid adding complexity until the problem actually requires it.",
			},
			{
				number: "03 / FAILURE",
				label: "Failure",
				title: "Fail early. Test harder.",
				description:
					"AI can make me more productive, but generated code still needs to earn its place through testing and review. I'd rather find problems early, understand why they happened and fix them properly.",
			},
		],
	},
	projectRadar: {
		section: {
			number: "04 / CURRENT PROJECT",
			title: {
				lines: ["What I'm building."],
			},
			intro:
				"One project currently taking most of my engineering attention.",
		},
		items: [
			{
				status: "Incomplete",
				title: "AI Gateway",
				description:
					"A secure gateway between applications and AI providers, handling authentication, authorisation, rate limiting, resource controls, provider selection and response validation. I'm building it to understand how AI access can be controlled at the application boundary.",
				technologies: [
					"Python",
					"SQLite",
					"Authentication",
					"Authorisation",
					"Rate Limiting",
				],
			},
		],
	},
	culture: {
		section: {
			number: "05 / OUTSIDE ENGINEERING",
			title: {
				lines: ["Outside", "engineering."],
			},
			intro:
				"A few things I enjoy away from code.",
		},
		carousel: {
			label: "05.01 / INTERESTS",
			previousLabel: "Previous",
			nextLabel: "Next",
			ariaLabel: "Interests outside engineering",
			indexLabel: "INTEREST",
			counterSeparator: " / ",
		},
		items: [
			{
				category: "Craft",
				title: "Embroidery & upcycling",
				description:
					"Learning embroidery and experimenting with garment alterations and upcycling.",
				metadata: "01 / CRAFT",
			},
			{
				category: "Scrapbooking",
				title: "Scrapbooking",
				description:
					"Collecting magazine snippets, paper and other bits into scrapbook pages.",
				metadata: "02 / SCRAPBOOKING",
			},
		],
	},
	social: {
		section: {
			number: "06 / CONNECT",
			title: {
				lines: ["CONNECT"],
			},
			intro: "Find me, my work and what I'm learning.",
		},
		openLabel: "Open →",
		pendingLabel: "Public link not supplied",
		items: [
			{
				label: "LinkedIn",
				description: "Professional experience and background.",
				href: "https://www.linkedin.com/in/tayyaba-maz",
			},
			{
				label: "GitHub",
				description: "Projects, experiments and implementation work.",
				href: "https://github.com/tmaz1",
			},
			{
				label: "Writing",
				description:
					"Notes on systems, implementation and things I'm learning.",
				href: "/engineering-notes",
			},
		],
	},
};