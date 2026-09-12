export type Principle = {
	number: string;
	label: string;
	title: string;
	description: string;
};

export type RadarItem = {
	status: "Incomplete" | "Future";
	title: string;
	description: string;
	technologies: string[];
};

export type CultureItem = {
	category: string;
	title: string;
	description: string;
	metadata?: string;
	image?: {
		src: string;
		alt: string;
	};
};

export type SocialLink = {
	label: string;
	description: string;
	href?: string;
};

export type SkillGroup = {
	category: string;
	items: string[];
};

export const developerProfile = {
	eyebrow: "Engineering profile",
	title: "Practical by default.",
	intro: "The technologies change. The underlying approach does not: understand the problem, make the system observable, keep the moving parts understandable and build something that another person can actually maintain.",
	paragraphs: [
		"My strongest professional experience sits around C# and .NET, relational data, REST APIs and full-stack web development. I have worked across established production systems rather than only greenfield applications, which has made debugging, backwards compatibility, deployment and understanding existing code just as important to me as writing new code.",
		"More recently, I have been deliberately expanding that foundation into modern application architecture: asynchronous processing, queues, serverless workloads, infrastructure as code, authentication, containerisation, frontend state and cloud services.",
		"I like understanding what happens between the layers. A slow query is not just a database problem. A slow page is not always a frontend problem. An unreliable API can be an infrastructure, data, retry, timeout or architecture problem at the same time.",
	],
};

export const principles: Principle[] = [
	{
		number: "01 / CLARITY",
		label: "Clarity",
		title: "Make it understandable.",
		description:
			"Clever code is useful only when it makes the system clearer. Names, boundaries, error handling and structure should reduce the amount of archaeology required by the next developer.",
	},
	{
		number: "02 / FAILURE",
		label: "Failure",
		title: "Design for failure.",
		description:
			"Networks fail. Dependencies disappear. Messages arrive twice. Users click twice. Databases become slow. Good systems acknowledge this instead of pretending otherwise.",
	},
	{
		number: "03 / MEASURE",
		label: "Measure",
		title: "Measure reality.",
		description:
			"Performance assumptions are cheap. Measurements are better. Logs, metrics, traces, Lighthouse, query timings and meaningful tests make technical decisions less speculative.",
	},
];

export const projectRadar: RadarItem[] = [
	{
		status: "Incomplete",
		title: "Developer Knowledge Base",
		description:
			"A structured technical knowledge system for documenting the problems, architectural decisions and implementation details that tend to disappear once a project is finished. The intention is to turn scattered notes into useful long-term engineering reference material.",
		technologies: [".NET", "Web", "Documentation"],
	},
	{
		status: "Incomplete",
		title: "Event-Driven Platform",
		description:
			"Exploring a larger event-driven architecture with independently deployable services, queues, retry policies, dead-letter handling, idempotency and observable asynchronous workflows.",
		technologies: ["AWS", "SQS", ".NET", "Docker"],
	},
	{
		status: "Future",
		title: "Computer Vision Revisited",
		description:
			"A return to computer vision after the undergraduate research project, this time with a more modern approach to image pipelines, model evaluation and deployment. The aim is less academic demonstration and more practical end-to-end system.",
		technologies: ["Python", "OpenCV", "ML"],
	},
	{
		status: "Future",
		title: "Small Software Experiments",
		description:
			"A collection of intentionally small tools: utilities, visualisations, data experiments and strange little applications that are useful mainly because they force a new problem to be understood.",
		technologies: ["C#", "TypeScript", "Python"],
	},
];

export const cultureItems: CultureItem[] = [
	{
		category: "Books / Systems",
		title: "Ideas worth carrying elsewhere.",
		description:
			"Books are useful when an idea survives its original context and changes how a problem is approached somewhere completely different.",
		metadata: "Reading / curiosity",
	},
	{
		category: "Games / Exploration",
		title: "Worlds that reward curiosity.",
		description:
			"Games are particularly interesting when their systems are allowed to interact. The best ones make you learn their rules naturally, then give you enough freedom to break those rules creatively.",
		metadata: "Systems / exploration",
	},
	{
		category: "Film / Design",
		title: "Atmosphere is structure too.",
		description:
			"Film and television are reminders that pacing, framing, silence and small details can communicate as much as explicit information.",
		metadata: "Narrative / design",
	},
	{
		category: "Anime / Story",
		title: "Long-form worlds.",
		description:
			"Long-form storytelling is compelling when characters, rules and consequences accumulate rather than resetting after every episode.",
		metadata: "Narrative / character",
	},
];

export const socialLinks: SocialLink[] = [
	{
		label: "GitHub",
		description: "Repositories, experiments and implementation work.",
	},
	{
		label: "LinkedIn",
		description: "Professional history and engineering experience.",
	},
	{
		label: "Engineering Notes",
		description:
			"Longer-form notes about systems, performance and implementation.",
		href: "/engineering-notes",
	},
];

export const aboutSkillGroups: SkillGroup[] = [
	{
		category: "Backend",
		items: [".NET", "C#", "ASP.NET Core", "REST APIs"],
	},
	{
		category: "Data",
		items: ["SQL Server", "Entity Framework Core", "Relational Databases"],
	},
	{
		category: "Frontend",
		items: ["TypeScript", "React", "HTML", "CSS"],
	},
	{
		category: "Cloud & Infrastructure",
		items: ["AWS", "Docker", "Terraform", "Serverless"],
	},
	{
		category: "Architecture",
		items: ["Async Processing", "Queues", "Authentication", "Observability"],
	},
];