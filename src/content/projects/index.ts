import type { ProjectSummary } from "../../types/content";

export const projects: ProjectSummary[] = [
	{
		slug: "ai-gateway",
		title: "AI Gateway",
		description:
			"A secure gateway between applications and AI providers, handling authentication, authorisation, rate limiting, resource controls, provider selection and response validation. Built to explore how AI access can be controlled at the application boundary.",
		technologies: [
			"Python",
			"SQLite",
			"Authentication",
			"Authorisation",
			"Rate Limiting",
			"Ollama",
		],
	},
	{
		slug: "authentication-api",
		title: "Authentication API",
		description:
			"A modular authentication service built with ASP.NET Core 8, covering registration, email verification, MFA, password recovery, JWT and refresh-token sessions, role-based authorisation and account management. Built as a practical exploration of the security and infrastructure behind a modern authentication flow.",
		technologies: [
			"ASP.NET Core 8",
			"C#",
			"Entity Framework Core",
			"SQL Server",
			"Redis",
			"JWT",
			"MFA",
		],
	},
	{
		slug: "event-driven-appointments-api",
		title: "Event-Driven Appointments API",
		description:
			"An API for appointments and documents built around asynchronous webhook delivery. Failed events are retried using exponential backoff and jitter before being moved to a dead-letter queue, providing a practical exploration of reliability and failure handling in event-driven systems.",
		technologies: [
			"Node.js",
			"TypeScript",
			"REST APIs",
			"Webhooks",
			"Docker",
			"Retries",
			"Dead-Letter Queue",
		],
	},
	{
		slug: "frontend-social-system",
		title: "Social Media Frontend",
		description:
			"A frontend-only social media demo built to see how far you can push an interactive application without a backend. Client-side state and localStorage handle persistence, while the project explores where frontend-only architecture starts to become limiting.",	
		technologies: [
			"React",
			"TypeScript",
			"Vite",
			"State Management",
			"Responsive UI",
			"localStorage",
		],
	},
];