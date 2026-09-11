export type ExternalLink = {
	label: string;
	href: string;
};

export type ProjectSummary = {
	slug: string;
	title: string;
	description: string;
	technologies: string[];
	href?: string;
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
		"Languages" | "Frameworks" | "Infrastructure" | "Databases" | "Tools";
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

export type ContentStep = {
	title: string;
	description: InlineContent;
	screenshotLabel?: string;
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
	| { type: "image"; id: string; src: string; alt: string; caption?: string }
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
	  };

export type ContentDocument = {
	kind: "article" | "project";
	slug: string;
	title: string;
	eyebrow: string;
	intro: string;
	heroLink?: ExternalLink;
	blocks: ContentBlock[];
	archive?: {
		category: string;
		filterCategories: NoteFilterCategory[];
		readingTime: string;
		year: number;
	};
};

export type NoteFilterCategory =
	"backend" | "frontend" | "infrastructure" | "performance" | "research" | "general";