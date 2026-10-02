import type { ProjectSummary } from "../../types/content";

export const projects: ProjectSummary[] = [
	{
		slug: "ai-gateway",
		title: "AI Gateway",
		description:
			"A secure gateway between applications and AI providers, designed to centralise authentication, authorisation, rate limiting, resource controls, provider selection and response validation. The project explores how AI access can be treated as a controlled application boundary rather than exposing models directly to clients.",
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
			"A modular authentication service built with ASP.NET Core 8, covering registration, email verification, MFA, password recovery, JWT and refresh-token sessions, role-based authorisation and account management. Built to explore the security and infrastructure behind a production-style authentication flow.",
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
		title: "Frontend Social System",
		description:
			"A frontend systems project exploring how a growing interactive application can remain maintainable as its UI and state become more complex. It uses reusable components, normalised state and a service layer to support dynamic layouts, collections, filtering, reordering and persistent user state.",
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