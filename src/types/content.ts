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

export type ContentBlock =
	| { type: "paragraph"; id: string; text: string }
	| { type: "heading"; id: string; level: 2 | 3; text: string };

export type ContentDocument = {
	kind: "article" | "project";
	slug: string;
	title: string;
	eyebrow: string;
	intro: string;
	heroLink?: ExternalLink;
	blocks: ContentBlock[];
};