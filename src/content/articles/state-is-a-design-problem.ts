import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "state-is-a-design-problem",
	title: "State is a design problem.",
	eyebrow: "ENGINEERING NOTE",
	intro: "Interactive applications become difficult when state is allowed to leak between components, requests and UI concerns. A predictable state model often matters more than the choice of framework.",
	archive: {
		category: "Frontend",
		filterCategories: ["frontend"],
		readingTime: "07 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "state-is-a-design-problem-paragraph-1",
			text: "Complex frontend behaviour often comes from unclear ownership rather than a missing framework feature. When state crosses component, request and presentation boundaries without a clear model, small changes become difficult to reason about.",
		},
		{
			type: "paragraph",
			id: "state-is-a-design-problem-paragraph-2",
			text: "A predictable state model starts by identifying what the source of truth is, which transitions are allowed and which values are derived. The implementation technology is secondary to those decisions.",
		},
	],
};

export default article;