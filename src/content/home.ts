import type { ExperienceItem, SkillGroup } from "../types/content";

export const experience: ExperienceItem[] = [
	{
		kind: "role",
		period: "Jun 2026 — Sep 2026",
		role: "Web Developer",
		company: "SkilledUp Life",
		companyUrl: "https://skilledup.life/",
		description:
			"Worked across frontend development, technical SEO, web performance, accessibility, analytics and WordPress. Focused on improving the technical foundations of the website while using search, user behaviour and performance data to guide practical changes.",
		achievements: [
			{
				label: "Frontend",
				description:
					"Developed responsive webpages and reusable content structures using React, TypeScript, JavaScript, HTML and CSS, including Knowledge Hub and Career Pathways templates designed for future expansion.",
			},
			{
				label: "Performance",
				description:
					"Improved Lighthouse Performance from 48 to 72 on mobile and 91 to 98 on desktop, while reducing mobile CLS from 0.373 to 0.006 through frontend, asset, caching and infrastructure optimisation.",
			},
			{
				label: "Technical SEO",
				description:
					"Implemented and validated canonical URLs, XML sitemaps, Open Graph metadata and structured data across Organisation, Website, Article and Breadcrumb schema, alongside ongoing work around AI-search visibility.",
			},
			{
				label: "Analytics",
				description:
					"Used GA4, Google Search Console and search-intent analysis to identify acquisition, attribution and content opportunities, contributing to growth in organic sessions, organic users, sessions and active users.",
			},
			{
				label: "Web architecture",
				description:
					"Audited the wider WordPress and hosting environment, investigating rendering, JavaScript, fonts, images, Elementor assets, caching, Cloudflare and third-party resources to identify technical improvements.",
			},
		],
	},
	{
		kind: "break",
		period: "Aug 2023 — Jun 2026",
		role: "Career break",
		description:
			"Took a career break to fulfil primary caring responsibilities. Returned to professional web development in June 2026, bringing previous software engineering experience together with a broader focus on web performance, technical SEO and digital optimisation.",
		achievements: [],
	},
	{
		kind: "role",
		period: "Oct 2022 — Aug 2023",
		role: ".NET Developer",
		company: "Takepayments Ltd",
		companyUrl: "https://www.takepayments.com/",
		description:
			"Developed and maintained customer-facing and internal web applications within a fintech environment, working across C#, .NET, REST APIs, SQL Server, React, JavaScript and Umbraco.",
		achievements: [
			{
				label: "C# / .NET",
				description:
					"Developed production features across C#, ASP.NET Core, REST APIs and established .NET applications, working across frontend, backend and database layers.",
			},
			{
				label: "APIs",
				description:
					"Built API-driven filtering and data functionality for merchant applications, exposing application, trading, partner and agent information to operational workflows.",
			},
			{
				label: "SQL Server",
				description:
					"Worked with relational application data through SQL Server, Entity Framework and REST APIs, connecting backend data with dashboards and customer-facing functionality.",
			},
			{
				label: "Umbraco",
				description:
					"Built reusable CMS components and configurable content modules for customer-facing websites, balancing maintainability, usability and requirements from non-technical teams.",
			},
			{
				label: "Delivery",
				description:
					"Worked within Agile development and release workflows using Git, Azure DevOps and Jenkins, collaborating with development, QA, marketing and business stakeholders.",
			},
		],
	},
	{
		kind: "role",
		period: "Oct 2021 — Oct 2022",
		role: "Service Desk Assistant",
		company: "Takepayments Ltd",
		companyUrl: "https://www.takepayments.com/",
		description:
			"Started in production web support before progressing into bespoke development. Worked across a large WordPress estate, diagnosing live application, database, JavaScript, hosting and infrastructure issues while developing custom functionality.",
		achievements: [
			{
				label: "2.7M+",
				description:
					"Optimised generation of a MySQL database containing more than 2.7 million UK postcode records, using chunked inserts and query optimisation to reduce processing time from approximately 2 hours to around 2 minutes.",
			},
			{
				label: "PHP / MySQL",
				description:
					"Built bespoke WordPress and WooCommerce functionality using PHP, MySQL, JavaScript, jQuery and AJAX, including custom plugins and backend functionality.",
			},
			{
				label: "Production",
				description:
					"Diagnosed and resolved live PHP, JavaScript, plugin, theme and hosting issues, including production incidents affecting multiple websites and WooCommerce functionality.",
			},
			{
				label: "400+",
				description:
					"Resolved more than 400 production support issues across application faults, website errors, feature requests, styling problems, merchant issues and time-sensitive incidents.",
			},
			{
				label: "260+",
				description:
					"Deployed and established more than 260 WordPress websites across three dedicated servers and multiple hosting environments using cPanel, WHM, Cloudflare and WordPress tooling.",
			},
		],
	},
	{
		kind: "role",
		period: "May 2021 — Jul 2021",
		role: "Research Assistant",
		company: "Manchester Metropolitan University",
		companyUrl: "https://www.mmu.ac.uk/",
		description:
			"Contributed to research into automated assessment of online content credibility, preparing structured datasets for machine-learning research and analysing web content against defined credibility criteria.",
		achievements: [
			{
				label: "ML dataset",
				description:
					"Collected and annotated more than 100 online articles to create structured data for credibility-classification research.",
			},
			{
				label: "Research",
				description:
					"Evaluated content against criteria including bias, supporting evidence and author experience, turning unstructured web content into labelled research data.",
			},
			{
				label: "EASE 21",
				description:
					"The wider research was subsequently presented at the 25th International Conference on Evaluation and Assessment in Software Engineering.",
			},
		],
	},
];

export const skillGroups: SkillGroup[] = [
	{
		category: "Languages",
		items: [
			"C#",
			"JavaScript",
			"TypeScript",
			"PHP",
			"SQL",
			"HTML / CSS",
		],
	},
	{
		category: "Frameworks",
		items: [
			".NET",
			"ASP.NET Core",
			"React",
			"Entity Framework Core",
			"WordPress",
			"WooCommerce",
			"Umbraco",
		],
	},
	{
		category: "Web & SEO",
		items: [
			"Technical SEO",
			"Core Web Vitals",
			"GA4",
			"Google Search Console",
			"Structured Data",
			"Information Architecture",
			"UX / CRO",
			"Accessibility",
			"AI Search",
		],
	},
	{
		category: "Data",
		items: [
			"SQL Server",
			"MySQL / MariaDB",
			"SQLite",
			"REST APIs",
			"AJAX",
		],
	},
	{
		category: "Tools & Infrastructure",
		items: [
			"Git",
			"Azure DevOps",
			"Cloudflare",
			"cPanel / WHM",
			"Postman",
			"Lighthouse",
			"PageSpeed Insights",
			"Screaming Frog",
			"AWS",
		],
	},
];