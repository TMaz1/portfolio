export type AboutTitle = {
	lines: string[];
	emphasis?: string;
};

export type AboutSectionHeadingContent = {
	number: string;
	title: AboutTitle;
	intro: string;
};

export type AboutHeroMeta = {
	label: string;
	value: string;
};

export type AboutHeroContent = {
	eyebrow: string;
	title: AboutTitle;
	copy: string;
	meta: AboutHeroMeta[];
};

export type DeveloperProfileContent = {
	section: AboutSectionHeadingContent;
	eyebrow: string;
	title: string;
	paragraphs: string[];
};

export type SkillGroup = {
	category: string;
	items: string[];
};

export type TechStackContent = {
	section: AboutSectionHeadingContent;
	groups: SkillGroup[];
};

export type Principle = {
	number: string;
	label: string;
	title: string;
	description: string;
};

export type PrinciplesContent = {
	section: AboutSectionHeadingContent;
	items: Principle[];
};

export type RadarItemStatus = "Incomplete" | "Future";

export type RadarItem = {
	status: RadarItemStatus;
	title: string;
	description: string;
	technologies: string[];
};

export type ProjectRadarContent = {
	section: AboutSectionHeadingContent;
	items: RadarItem[];
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

export type CultureContent = {
	section: AboutSectionHeadingContent;
	carousel: {
		label: string;
		previousLabel: string;
		nextLabel: string;
		ariaLabel: string;
		indexLabel: string;
		counterSeparator: string;
	};
	items: CultureItem[];
};

export type SocialLink = {
	label: string;
	description: string;
	href?: string;
};

export type SocialLinksContent = {
	section: AboutSectionHeadingContent;
	openLabel: string;
	pendingLabel: string;
	items: SocialLink[];
};

export type AboutPageContent = {
	hero: AboutHeroContent;
	developer: DeveloperProfileContent;
	techStack: TechStackContent;
	principles: PrinciplesContent;
	projectRadar: ProjectRadarContent;
	culture: CultureContent;
	social: SocialLinksContent;
};