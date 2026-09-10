import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "the-request-is-not-the-system",
	title: "The request is not the system.",
	eyebrow: "ENGINEERING NOTE",
	intro: "What happens after an HTTP request leaves the application? Queues, workers, databases, caches and observability turn a simple endpoint into an actual distributed workflow.",
	archive: {
		category: "Infrastructure",
		filterCategories: ["infrastructure"],
		readingTime: "10 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "the-request-is-not-the-system-paragraph-1",
			text: "The application process is only one participant in a distributed workflow. Once work leaves the request lifecycle, the system inherits queueing, background processing, persistence and operational concerns.",
		},
		{
			type: "paragraph",
			id: "the-request-is-not-the-system-paragraph-2",
			text: "Thinking in terms of the whole workflow changes where reliability and observability belong. The endpoint is the beginning of the process, not the complete system.",
		},
	],
};

export default article;