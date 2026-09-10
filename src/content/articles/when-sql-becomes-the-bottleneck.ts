import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "when-sql-becomes-the-bottleneck",
	title: "When SQL becomes the bottleneck.",
	eyebrow: "ENGINEERING NOTE",
	intro: "A database problem is not automatically a database-engine problem. Query shape, indexing, batching, ORM behaviour and data access patterns can completely change the cost of a seemingly reasonable operation.",
	archive: {
		category: "Data",
		filterCategories: ["backend"],
		readingTime: "09 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "when-sql-becomes-the-bottleneck-paragraph-1",
			text: "Slow database work often begins outside the database engine itself. An inefficient query shape or an ORM-generated access pattern can create more work than the application developer intended.",
		},
		{
			type: "paragraph",
			id: "when-sql-becomes-the-bottleneck-paragraph-2",
			text: "The useful diagnosis starts with the actual query and its access pattern. Indexing, batching and data retrieval strategy can then be evaluated against measured behaviour rather than assumptions.",
		},
	],
};

export default article;