import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "designing-apis-that-fail-well",
	title: "Designing APIs that fail well.",
	eyebrow: "ENGINEERING NOTE",
	intro: "Retries, idempotency, dead-letter queues and failure states are not edge cases. They are part of the API design once a system starts doing asynchronous work.",
	archive: {
		category: "Architecture",
		filterCategories: ["backend"],
		readingTime: "08 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "designing-apis-that-fail-well-paragraph-1",
			text: "An asynchronous API has more states than a successful HTTP response. Work can be accepted, delayed, retried, duplicated, rejected or moved to a dead-letter queue.",
		},
		{
			type: "paragraph",
			id: "designing-apis-that-fail-well-paragraph-2",
			text: "Designing those states explicitly makes failure behaviour predictable rather than accidental. Idempotency, retry policy and dead-letter handling become part of the contract instead of emergency additions after production failures.",
		},
	],
};

export default article;