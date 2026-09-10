import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "authentication-is-a-lifecycle",
	title: "Authentication is a lifecycle.",
	eyebrow: "ENGINEERING NOTE",
	intro: "Login is only the beginning. MFA, verification, password recovery, refresh tokens, expiry and revocation all belong to the same security lifecycle.",
	archive: {
		category: "Security",
		filterCategories: ["backend"],
		readingTime: "10 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "authentication-is-a-lifecycle-paragraph-1",
			text: "Authentication becomes easier to reason about when the account journey is treated as one lifecycle rather than a collection of unrelated endpoints. Verification, recovery and token handling all change what an authenticated session means.",
		},
		{
			type: "paragraph",
			id: "authentication-is-a-lifecycle-paragraph-2",
			text: "Security controls are therefore connected. A robust implementation defines the transitions and expiry rules between them rather than treating login as the entire authentication problem.",
		},
	],
};

export default article;