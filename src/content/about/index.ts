import type { AboutPageContent } from "./types";

export const aboutContent: AboutPageContent = {
	hero: {
		eyebrow: "00 / About",
		title: {
			lines: ["Building with"],
			emphasis: "purpose.",
		},
		copy:
			"Software engineer with a technical SEO background, working across .NET, APIs, web development and the wider technical foundations behind useful digital experiences.",
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
				lines: ["Practical engineering."],
			},
			intro:
				"Build what solves the problem, understand what you are building, and leave the system better than you found it.",
		},
		eyebrow: "Engineering profile",
		title:
			"10 years of coding experience.",
		paragraphs: [
			"My background spans software engineering and technical SEO, giving me a practical view of both how systems are built and how people find and use them. I’ve spent around ten years working with code, with much of my experience centred around C#, .NET, APIs, web development and data.", 
			"More recently, my work has expanded into Python, AI systems and the infrastructure around them. I enjoy understanding how the pieces connect: application code, databases, APIs, authentication, infrastructure and the interfaces people actually use.", 
			"I’m interested in building useful systems, learning through implementation, and keeping complexity proportional to the problem.",
		],
	},

	techStack: {
		section: {
			number: "02 / CURRENT STACK",
			title: {
				lines: ["What I'm", "working with."],
			},
			intro:
				"The technologies currently shaping my engineering work.",
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
					"CSS",
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
					"AI Gateways",
					"Ollama",
					"LLMs",
					"RAG",
					"Embeddings",
				],
			},
			{
				category: "Infrastructure",
				items: [
					"Docker",
					"REST APIs",
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
				"Three things I try to keep consistent, regardless of the stack.",
		},

		items: [
			{
				number: "01 / EFFORT",
				label: "Effort",
				title: "Do the work properly.",
				description:
					"Full effort matters, but more code does not mean better code. I aim to solve the actual problem without creating problems for the next person.",
			},
			{
				number: "02 / MODULARITY",
				label: "Modularity",
				title: "Keep it changeable.",
				description:
					"I prefer simple, modular systems and avoid over-engineering until the problem actually requires it. Technical debt is easier to avoid than to explain later.",
			},
			{
				number: "03 / FAILURE",
				label: "Failure",
				title: "Fail early. Test harder.",
				description:
					"AI can make me more productive, but generated code still needs to earn its place through testing and review. I would rather know about a failure loudly and early so users experience it quietly and it gets fixed faster.",
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
					"A secure gateway between applications and AI providers, designed to centralise authentication, authorisation, rate limiting, resource controls, provider selection and response validation.",
				technologies: [
					"Python",
					"SQLite",
					"Authentication",
					"Authorisation",
					"Rate Limiting",
				],
			},
			{
				status: "Future",
				title: "AI-Powered Appointment Platform",
				description:
					"A full-stack platform for appointments, documents, customers and business workflows, combining ASP.NET Core 8 authentication, appointment APIs, Redis, SQL Server and a dedicated AI layer. The AI Gateway will provide the controlled boundary between the application and AI providers, with a separate Python/FastAPI service handling capabilities such as classification, RAG, embeddings and structured outputs.",
				technologies: [
					"ASP.NET Core 8",
					"Python",
					"FastAPI",
					"SQL Server",
					"Redis",
				],
			},
		],
	},
	culture: {
		section: {
			number: "06 / INTERESTS",
			title: {
				lines: ["Currently doing."],
			},
			intro:
				"Under progress. I’ll add images and talking points here over time.",
		},
		carousel: {
			label: "06.01 / CURRENTLY DOING",
			previousLabel: "Previous",
			nextLabel: "Next",
			ariaLabel: "Currently doing",
			indexLabel: "CURRENTLY DOING",
			counterSeparator: " / ",
		},
		items: [
			{
				category: "Craft",
				title: "Embroidery & upcycling",
				description:
					"Basic embroidery and upcycling / garment alteration.",
				metadata: "01 / CRAFT",
			},
			{
				category: "Scrapbooking",
				title: "Scrapbooking",
				description:
					"Scrapbooking with scrapbook materials and magazine snippets.",
				metadata: "02 / SCRAPBOOKING",
			},
			{
				category: "Watching",
				title: "Films, Anime",
				description:
					"Rewatching Hunter × Hunter (2011) anime. Just watched Coraline, The Usual Suspects and The Thing (1982) for the first time.",
				metadata: "03 / WATCHING",
			},
			{
				category: "Reading",
				title: "Elevator Pitch",
				description:
					"Currently reading Elevator Pitch by Linwood Barclay.",
				metadata: "05 / READING",
			},
		],
	},
	social: {
		section: {
			number: "07 / ELSEWHERE",
			title: {
				lines: ["Find me", "elsewhere."],
			},
			intro:
				"Engineering work, notes and professional history.",
		},
		openLabel: "Open →",
		pendingLabel: "Public link not supplied",
		items: [
			{
				label: "GitHub",
				description:
					"Repositories, experiments and implementation work.",
				href: "https://github.com/tmaz1",
			},
			{
				label: "LinkedIn",
				description:
					"Professional history and engineering experience.",
				href: "https://www.linkedin.com/in/tayyaba-maz",
			},
			{
				label: "Engineering Notes",
				description:
					"Longer-form notes about systems, implementation and learning.",
				href: "/engineering-notes",
			},
		],
	},
};