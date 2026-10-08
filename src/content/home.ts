import type { ExperienceItem, SkillGroup } from "../types/content";

export const experience: ExperienceItem[] = [
	{
		kind: "role",
		period: "Jun 2026 — Sep 2026",
		role: "Web Developer",
		company: "SkilledUp Life",
		companyUrl: "https://skilledup.life/",
		description:
			"Owned website engineering and growth initiatives across frontend architecture, performance and data, translating technical research into measurable improvements and collaborating with stakeholders through delivery.",
		achievements: [
			{
				label: "React + TypeScript",
				description:
					"Initiated and developed reusable Knowledge Hub and Career Pathways prototypes, establishing scalable content and navigation architecture for future expansion.",
			},
			{
				label: "48 → 72 Mobile",
				description:
					"Led performance optimisation that increased Lighthouse mobile performance from 48 to 72 and desktop from 91 to 98, while reducing mobile CLS from 0.373 to 0.006.",
			},
			{
				label: "Technical Leadership",
				description:
					"Translated audits and technical research into prioritised engineering requirements, then worked with stakeholders to troubleshoot, review and guide implementation.",
			},
			{
				label: "Platform Engineering",
				description:
					"Identified systemic issues across the WordPress and hosting stack, driving improvements across rendering, asset delivery, caching and third-party dependencies.",
			},
			{
				label: "77.3% Active Users",
				description:
					"Used GA4 and Search Console data to prioritise growth opportunities, contributing to 77.3% higher active users, 70.1% higher sessions, 40.4% higher organic sessions and 40.2% higher organic users.",
			},
		],
	},
	{
		kind: "break",
		period: "Aug 2023 — Jun 2026",
		role: "Career break",
		description:
			"Took a career break to fulfil primary caring responsibilities before returning to professional software development in June 2026.",
		achievements: [],
	},
	{
		kind: "role",
		period: "Oct 2022 — Aug 2023",
		role: ".NET Developer",
		company: "Takepayments Ltd",
		companyUrl: "https://www.takepayments.com/",
		description:
			"Worked within a fintech development team supporting applications used across merchant onboarding, sales and marketing operations, using C#, ASP.NET Core, React, Umbraco, JavaScript, REST APIs and SQL.",
		achievements: [
			{
				label: "Full-stack .NET",
				description:
					"Developed features across C#, ASP.NET Core, React and Umbraco, integrating frontend components with REST APIs, SQL data and existing .NET applications.",
			},
			{
				label: "API + SQL",
				description:
					"Developed REST API endpoints and SQL-backed filtering logic for merchant application and partner data, allowing sales teams to view and segment approval, trading and lead information in internal dashboards.",
			},
			{
				label: "800+ Websites",
				description:
					"Was brought into the Websites Made Easy team to handle high-priority security and technical tasks across 800+ websites hosted on three dedicated servers, drawing on previous knowledge of the environment.",
			},
			{
				label: "Stakeholders",
				description:
					"Worked directly with marketing, sales and management to turn business requirements, reports and competitor research into technical solutions, assessing implementation options and delivery effort.",
			},
			{
				label: "Compliance Delivery",
				description:
					"Implemented and coordinated website changes required by Payment Services Regulator updates, working across shared React components and customer-facing journeys within Agile release cycles.",
			},
		],
	},
	{
		kind: "role",
		period: "Oct 2021 — Oct 2022",
		role: "Service Desk Assistant",
		company: "Takepayments Ltd — Websites Made Easy",
		companyUrl: "https://websitesmadeeasyportfolio.bee-online.com/our-work/",
		description:
			"Worked as a hybrid service desk and web developer within Websites Made Easy, the website division of Takepayments Ltd, now operating within Global Payments, developing bespoke WordPress functionality while supporting 800+ production websites.",
		achievements: [
			{
				label: "2.7M → 2 min",
				description:
					"Engineered MySQL processing for 2.7M+ UK postcode records using chunked inserts and query optimisation, reducing database generation time from approximately 2 hours to around 2 minutes.",
			},
			{
				label: "Full-stack PHP",
				description:
					"Developed bespoke WordPress and WooCommerce functionality using PHP, MySQL, JavaScript, jQuery and AJAX, including custom plugins, backend functionality and REST API integrations.",
			},
			{
				label: "260+ Deployments",
				description:
					"Deployed 260+ WordPress websites across three dedicated servers, bringing 190+ sites live while handling deployment, security, plugin compatibility and performance issues.",
			},
			{
				label: "400+ Production Issues",
				description:
					"Resolved 400+ live issues across PHP, JavaScript, WooCommerce, plugins, themes and hosting, including production outages caused by PHP conflicts and JavaScript execution errors.",
			},
			{
				label: "Technical Mentoring",
				description:
					"Mentored website designers and merchant-facing colleagues on technical processes, helping them diagnose issues and communicate solutions, and received peer recognition for problem-solving and technical communication.",
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
			"Contributed to machine-learning research investigating the credibility of online content.",
		achievements: [
			{
				label: "ML Research Dataset",
				description:
					"Collected and annotated 100+ online articles, evaluating bias, supporting evidence and author experience to transform unstructured web content into structured, labelled data for credibility-classification research.",
			},
			{
				label: "EASE 21",
				description:
					"Structured research data for credibility-classification models; the wider project was subsequently presented at EASE '21, the International Conference on Evaluation and Assessment in Software Engineering.",
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
			"Python",
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
			"UX / CRO",
			"Accessibility",
			"AI Search Visibility",
		],
	},
	{
		category: "Data",
		items: [
			"SQL Server",
			"MySQL / MariaDB",
			"SQLite",
			"MongoDB",
			"Rest APIs",
			"Redis",
		],
	},
	{
		category: "Tools & Infrastructure",
		items: [
			"Git",
			"Azure DevOps",
			"AWS",
			"Cloudflare",
			"cPanel / WHM",
			"Postman",
			"Lighthouse",
			"PageSpeed Insights",
			"Screaming Frog",
		],
	},
];