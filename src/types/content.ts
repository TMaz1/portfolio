export type ContentLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type ProjectLink = {
	label: string;
	href: string;
	type: "live" | "github" | "package" | "download" | "other";
};

export type ProjectSummary = {
	slug: string;
	title: string;
	description: string;
	technologies: string[];

	section: string;
	subsection?: string;

	// Local image path, preferably inside public/assets/images/projects/
	logo?: string;

	// Single letter or icon fallback when no logo exists
	icon?: string;

	sortDate?: string;
	displayDate?: string;

	// Optional additional metadata, e.g. package downloads
	meta?: string;

	featured?: boolean;

	links: ProjectLink[];
	articleSlugs?: string[];
};

export type ExperienceAchievement = {
	label: string;
	description: string;
};

export type ExperienceItem =
	| {
		kind: "role";
		period: string;
		role: string;
		company: string;
		companyUrl: string;
		description: string;
		achievements: ExperienceAchievement[];
	}
	| {
		kind: "break";
		period: string;
		role: string;
		description: string;
		achievements: [];
	};

export type SkillGroup = {
	category:
	| "Languages"
	| "Frameworks"
	| "Web & SEO"
	| "Data"
	| "Tools & Infrastructure";
	items: string[];
};

export type InlineContent =
	| string
	| Array<
		| { type: "text"; text: string; strong?: boolean }
		| { type: "link"; text: string; href: string; external?: boolean }
	>;

export type ContentListItem = {
	content: InlineContent;
	items?: ContentListItem[];
};

export type ContentCard = {
	title: string;
	description: InlineContent;
	tag?: string;
	icon?: string;
	meta?: string;
	tone?: "primary" | "secondary" | "default";
};

export type ContentTable = {
	headers: string[];
	rows: string[][];
};

export type ContentImage = {
	src: string;
	alt: string;
	ratio?: "auto" | "16:9" | "4:3" | "1:1" | "3:2";
	crop?: "cover" | "contain";
	caption?: string | null;
};

export type ContentStep = {
	title: string;
	description: InlineContent;
	image?: ContentImage | null;
};

export type ContentPathway = {
	title: string;
	description: InlineContent;
};

export type ContentFaqItem = {
	question: string;
	answer: InlineContent;
};

export type ContentBlock =
	| { type: "paragraph"; id: string; text: InlineContent; lead?: boolean }
	| { type: "heading"; id: string; level: 2 | 3; text: string }
	| { type: "list"; id: string; ordered?: boolean; items: ContentListItem[] }
	| { type: "code"; id: string; language?: string; code: string }
	| { type: "image"; id: string; image: ContentImage }
	| { type: "quote"; id: string; text: InlineContent; attribution?: string }
	| { type: "table"; id: string; table: ContentTable }
	| { type: "cards"; id: string; columns: 2 | 3 | 4; items: ContentCard[] }
	| {
		type: "callout";
		id: string;
		label: string;
		text: InlineContent;
		tone?: "info" | "warning" | "success" | "definition";
	}
	| { type: "steps"; id: string; items: ContentStep[] }
	| { type: "pathway"; id: string; items: ContentPathway[] }
	| { type: "faq"; id: string; items: ContentFaqItem[] }
	| {
		type: "cta";
		id: string;
		title: string;
		text: InlineContent;
		href: string;
		label: string;
		external?: boolean;
	};

export type ContentDocument = {
	kind: "article" | "project";
	slug: string;
	title: string;
	eyebrow: string;
	intro: string;
	heroLink?: ContentLink;
	blocks: ContentBlock[];
	archive?: {
		category: string;
		filterCategories: NoteFilterCategory[];
		readingTime: string;
		year: number;
	};
};

export type NoteFilterCategory =
	| "backend"
	| "frontend"
	| "infrastructure"
	| "performance"
	| "seo"
	| "research"
	| "general";