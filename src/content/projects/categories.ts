export type ProjectSubsection = {
	id: string;
	title: string;
};

export type ProjectSection = {
	id: string;
	title: string;
	description?: string;
	subsections?: ProjectSubsection[];
};

// Sections are deliberately explicit: empty sections can be prepared in advance.
export const projectSections: ProjectSection[] = [
	{
		id: "web-applications",
		title: "Web Applications",
		subsections: [{ id: "frontend-systems", title: "Frontend Systems" }],
	},
	{
		id: "backend-apis",
		title: "Backend & APIs",
		subsections: [
			{ id: "ai-infrastructure", title: "AI & Infrastructure" },
			{ id: "application-apis", title: "Application APIs" },
		],
	},
	{
		id: "npm-packages",
		title: "npm Packages",
		description: "Open-source React components and UI utilities.",
		subsections: [
			{
				id: "react-components",
				title: "React Components & Libraries",
			},
		],
	},
	{
		id: "plugins",
		title: "Plugins",
		description: "Open-source plugins.",
		subsections: [
			{
				id: "wordpress",
				title: "WordPress Plugins",
			},
		],
	},
	{
		id: "desktop-applications",
		title: "Desktop Applications",
		description: "A space for desktop tools and applications as they take shape.",
	},
];
