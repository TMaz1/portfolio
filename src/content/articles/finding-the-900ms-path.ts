import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "finding-the-900ms-path",
	title: "Finding the 900ms path.",
	eyebrow: "ENGINEERING NOTE",
	intro: "A practical investigation into how a production WordPress environment reached approximately 0.9s LCP, 0.8s FCP, 100ms TBT and 0.004 CLS. The interesting part was not one optimisation. It was tracing the complete rendering path through hosting, caching, assets, images, third-party scripts, Elementor and the browser.",
	archive: {
		category: "Performance",
		filterCategories: ["performance"],
		readingTime: "11 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "finding-the-900ms-path-paragraph-1",
			text: "The useful performance question is not which individual optimisation produced the biggest number. It is where the time is actually going across the complete rendering path.",
		},
		{
			type: "paragraph",
			id: "finding-the-900ms-path-paragraph-2",
			text: "This investigation follows the request from hosting and caching through assets, images and third-party scripts before reaching the browser. The result is a clearer picture of why a page can reach strong Core Web Vitals without relying on a single trick.",
		},
	],
};

export default article;