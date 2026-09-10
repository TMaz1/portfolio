import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "infrastructure-should-be-repeatable",
	title: "Infrastructure should be repeatable.",
	eyebrow: "ENGINEERING NOTE",
	intro: "Infrastructure as code is less about writing Terraform and more about making environments understandable, reproducible and safe to change without relying on somebody’s memory.",
	archive: {
		category: "Deployment",
		filterCategories: ["infrastructure"],
		readingTime: "08 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "infrastructure-should-be-repeatable-paragraph-1",
			text: "Repeatability is valuable because an environment should be explainable without depending on the person who originally created it. Infrastructure definitions turn operational knowledge into something reviewable.",
		},
		{
			type: "paragraph",
			id: "infrastructure-should-be-repeatable-paragraph-2",
			text: "The objective is not to make every environment identical for its own sake. It is to make the meaningful differences explicit and changes reproducible.",
		},
	],
};

export default article;