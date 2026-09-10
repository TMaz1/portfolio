import type { ExperienceItem, SkillGroup } from "../types/content";

export const experience: ExperienceItem[] = [
	{
		kind: "role",
		period: "Jun 2026 — Present",
		role: "Web Developer",
		company: "SkilledUp Life",
		description:
			"Returned to professional development working across a live WordPress platform, combining frontend engineering, performance optimisation, accessibility, technical SEO and cloud infrastructure. Focused on improving the technical foundations of the site rather than treating performance, search and UX as separate concerns.",
		achievements: [
			{
				label: "~0.9s LCP",
				description:
					"Improved desktop Lighthouse performance to approximately 0.9s LCP, 0.8s FCP, 100ms TBT and 0.004 CLS through critical-rendering-path, image and asset optimisation.",
			},
			{
				label: "Core Web Vitals",
				description:
					"Investigated rendering, caching, Cloudflare, server-response and third-party script behaviour to identify performance bottlenecks across WordPress, Elementor and hosting infrastructure.",
			},
			{
				label: "SEO stack",
				description:
					"Implemented and validated AIOSEO, canonical URLs, XML sitemaps, Open Graph metadata, Organisation, Website, BlogPosting, Author, Breadcrumb and FAQ structured data, alongside llms.txt.",
			},
			{
				label: "50+",
				description:
					"SEO-focused webpage opportunities structured into a reusable Knowledge Hub and Career Pathways architecture using HTML, CSS and JavaScript prototypes.",
			},
			{
				label: "+52.9%",
				description:
					"GA4 active-user growth from July to August, alongside measurable quarter-to-date growth in active users, sessions and new users.",
			},
		],
	},
	{
		kind: "break",
		period: "Aug 2023 — Jun 2026",
		role: "Three years. Still building.",
		description:
			"A career break for primary caring responsibilities. During that period, engineering remained a way of learning: modern .NET APIs, authentication, distributed systems, serverless infrastructure, frontend applications and computer vision. These projects aren't presented as substitutes for professional experience. They're evidence of continued curiosity and a deliberate move toward the technologies and architectural patterns used in modern engineering teams.",
		achievements: [],
	},
	{
		kind: "role",
		period: "Oct 2022 — Aug 2023",
		role: ".NET Developer",
		company: "Takepayments Ltd",
		description:
			"Delivered production features across C#, ASP.NET Core 7, Entity Framework, SQL Server, React, JavaScript, Bootstrap and SASS rather than working exclusively within one layer.",
		achievements: [
			{
				label: "REST APIs",
				description:
					"Developed API-driven filtering and data endpoints for merchant applications, exposing application status, trading status, partner and agent information to frontend workflows.",
			},
			{
				label: "SQL Server",
				description:
					"Worked with relational application data across SQL Server, Entity Framework and REST APIs, connecting database state with operational dashboards and customer-facing workflows.",
			},
			{
				label: "Umbraco",
				description:
					"Built reusable CMS components including configurable cards, modal layouts and customer-facing content modules, allowing non-technical teams to manage dynamic website content.",
			},
			{
				label: "CI / CD",
				description:
					"Contributed to development and release workflows using Azure DevOps, with exposure to unit, integration, Jenkins, Selenium, Postman and JMeter testing across multiple environments.",
			},
		],
	},
	{
		kind: "role",
		period: "Oct 2021 — Oct 2022",
		role: "Web Development Service Desk",
		company: "Takepayments Ltd",
		description:
			"Started in production web support before progressing into full-stack development. Worked directly with live WordPress and WooCommerce systems, developing custom functionality while diagnosing application, database, JavaScript, hosting and infrastructure issues under real production constraints.",
		achievements: [
			{
				label: "2.7M+",
				description:
					"UK postcode records processed by a custom WooCommerce radius plugin. Reworked database generation using chunked inserts and optimised queries, reducing processing time from approximately 2 hours to around 2 minutes.",
			},
			{
				label: "Full-stack",
				description:
					"Built custom WordPress and WooCommerce functionality across PHP, MariaDB/MySQL, JavaScript, AJAX and bespoke frontend themes, including wishlist, postcode-radius and product-enquiry features.",
			},
			{
				label: "400+",
				description:
					"Technical support issues resolved across application faults, production bugs, feature requests, styling issues, billing problems and critical live-site incidents.",
			},
			{
				label: "260+",
				description:
					"Client websites supported and established across three dedicated servers using WordPress Toolkit, WHM, cPanel, Cloudflare and third-party hosting environments.",
			},
			{
				label: "Production",
				description:
					"Diagnosed and deployed fixes for high-impact PHP and JavaScript issues, including multi-site PHP entry conflicts and asynchronous JavaScript loading problems affecting WooCommerce functionality.",
			},
		],
	},
	{
		kind: "role",
		period: "May 2021 — Jul 2021",
		role: "Research Assistant",
		company: "Manchester Metropolitan University",
		description:
			"Contributed to research investigating automated assessment of online content credibility, preparing structured datasets for machine-learning classification. Analysed articles against criteria including bias, supporting evidence and author experience, with the wider research subsequently presented at EASE 21.",
		achievements: [
			{
				label: "ML dataset",
				description:
					"Collected and annotated 100+ articles to create structured training and evaluation data for credibility-classification research.",
			},
			{
				label: "Classification",
				description:
					"Applied defined credibility criteria including bias, supporting evidence and author experience to transform unstructured web content into labelled research data.",
			},
			{
				label: "EASE 21",
				description:
					"Research contributed to work subsequently presented at the 25th International Conference on Evaluation and Assessment in Software Engineering.",
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
			"HTML / CSS",
		],
	},
	{
		category: "Frameworks",
		items: [
			"ASP.NET Core",
			".NET 7 / 8",
			"React",
			"Entity Framework Core",
			"WordPress",
			"WooCommerce",
		],
	},
	{
		category: "Infrastructure",
		items: [
			"AWS",
			"Lambda / SQS",
			"Docker",
			"Terraform",
			"Cloudflare",
			"Azure DevOps",
		],
	},
	{
		category: "Databases",
		items: ["SQL Server", "MySQL / MariaDB", "MongoDB", "Redis", "SQLite"],
	},
	{
		category: "Tools",
		items: [
			"Git",
			"Jenkins",
			"Umbraco",
			"AJAX / jQuery",
			"Postman",
			"JMeter",
		],
	},
];