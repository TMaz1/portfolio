import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "optimising-the-critical-path",
	title: "Optimising the critical path.",
	eyebrow: "ENGINEERING NOTE",
	intro: "Performance work becomes more useful when the browser is treated as the final consumer of a complete pipeline rather than a place where a few Lighthouse numbers need improving.",
	archive: {
		category: "Performance",
		filterCategories: ["performance"],
		readingTime: "11 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "optimising-the-critical-path-paragraph-1",
			text: "A browser metric is the visible end of a much longer pipeline. Network delivery, server work, caching, assets, JavaScript and rendering all contribute to what the user eventually experiences.",
		},
		{
			type: "paragraph",
			id: "optimising-the-critical-path-paragraph-2",
			text: "Optimisation is therefore most useful when it follows the critical path end to end. The goal is to remove real work and waiting from the user journey, not simply improve an isolated score.",
		},
	],
};

export default article;