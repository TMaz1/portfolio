import type { ProjectSummary } from "../../types/content";

/**
 * Project catalogue and homepage selection.
 *
 * Add projects here, assign a section/subsection from categories.ts, and set
 * featured: true to include a project on the homepage. sortDate is an ISO
 * date used only for ordering; displayDate is optional visitor-facing text.
 * Projects without sortDate remain after dated projects, preserving source
 * order amongst themselves. Only add destinations and dates that are verified.
 */
export const projects: ProjectSummary[] = [
	{
		slug: "ai-gateway",
		title: "AI Gateway",
		description: "A secure gateway between applications and AI providers, controlling authentication, authorisation, rate limits, provider selection and response validation.",
		technologies: ["Python", "FastAPI", "SQLite", "Ollama"],
		section: "backend-apis",
		subsection: "ai-infrastructure",
		icon: "AI",
		featured: true,
		links: [{ label: "GitHub", href: "https://github.com/TMaz1/ai-gateway", type: "github" }],
	},
	{
		slug: "authentication-api",
		title: "Authentication API",
		description: "A modular ASP.NET Core authentication service covering registration, email verification, MFA, password recovery, JWT sessions and account management.",
		technologies: ["ASP.NET Core", "C#", "Entity Framework Core", "SQL Server", "Redis"],
		section: "backend-apis",
		subsection: "application-apis",
		icon: "AU",
		featured: true,
		links: [{ label: "GitHub", href: "https://github.com/TMaz1/AuthenticationAPI", type: "github" }],
	},
	{
		slug: "event-driven-appointments-api",
		title: "Event-Driven Appointments API",
		description: "An appointments and documents API using asynchronous webhook delivery, retries, exponential backoff, jitter and dead-letter handling.",
		technologies: ["Node.js", "TypeScript", "REST APIs", "Webhooks", "Docker"],
		section: "backend-apis",
		subsection: "application-apis",
		icon: "E",
		featured: true,
		links: [{ label: "GitHub", href: "https://github.com/TMaz1/event-driven-appointments-api", type: "github" }],
	},
	{
		slug: "frontend-social-system",
		title: "Social Media Frontend",
		description: "A frontend-only social media demo exploring interactive UI architecture, client-side state, localStorage and the limits of a backend-free application.",
		technologies: ["React", "TypeScript", "Vite", "localStorage"],
		section: "web-applications",
		subsection: "frontend-systems",
		logo: "/assets/images/projects/social-system-logo.png",
		icon: "S",
		featured: false,
		links: [{ label: "Live project", href: "https://social.tayyaba.uk/", type: "live" }],
	},
	{
		slug: "layout-icons",
		title: "@custmaz/layout-icons",
		description:
			"A small set of layout-focused SVG icons for React, designed for UI structure and composition.",
		technologies: ["React", "SVG", "TypeScript"],
		section: "npm-packages",
		subsection: "react-components",
		icon: "L",
		featured: false,
		meta: "v0.1.1 · 400+ downloads · Published a year ago",
		links: [
			{
				label: "npm Package",
				href: "https://www.npmjs.com/package/@custmaz/layout-icons",
				type: "package",
			},
		],
	},
	{
		slug: "switch-toggle-buttons",
		title: "@custmaz/switch-toggle-buttons",
		description:
			"Accessible React switch and single-select toggle button components with CSS-variable theming.",
		technologies: ["React", "Accessibility", "CSS Variables"],
		section: "npm-packages",
		subsection: "react-components",
		icon: "S",
		featured: false,
		meta: "v0.1.0 · 200+ downloads · Published 8 months ago",
		links: [
			{
				label: "npm Package",
				href: "https://www.npmjs.com/package/@custmaz/switch-toggle-buttons",
				type: "package",
			},
		],
	},
	{
		slug: "product-unpublisher-for-woocommerce",
		title: "Product Unpublisher for WooCommerce",
		description:
			"A lightweight WooCommerce plugin for managing product publishing status, making it easier to unpublish products from your online store.",
		technologies: ["WordPress", "WooCommerce", "PHP"],
		section: "plugins",
		subsection: "wordpress",
		icon: "W",
		featured: false,
		meta: "WordPress.org Status: Pending Approval",
		links: [
			{
				label: "GitHub Repository",
				href: "https://github.com/TMaz1/product-unpublisher-for-woocommerce",
				type: "github",
			},
		],
	},
];

const sourceOrder = new Map(projects.map((project, index) => [project.slug, index]));

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectsForSection(sectionId: string, subsectionId?: string) {
	return projects
		.filter((project) =>
			project.section === sectionId &&
			(subsectionId === undefined || project.subsection === subsectionId),
		)
		.sort((a, b) => {
			if (a.sortDate && b.sortDate) return b.sortDate.localeCompare(a.sortDate);
			if (a.sortDate) return -1;
			if (b.sortDate) return 1;
			return (sourceOrder.get(a.slug) ?? 0) - (sourceOrder.get(b.slug) ?? 0);
		});
}
