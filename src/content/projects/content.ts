import type { ContentDocument } from "../../types/content";
import { projects } from "./index";
import authenticationApiMfaEmailVerification from "./authentication-api";

const authoredProjectDocuments: ContentDocument[] = [
	authenticationApiMfaEmailVerification,
];

const authoredSlugs = new Set(
	authoredProjectDocuments.map((document) => document.slug),
);

const generatedProjectDocuments: ContentDocument[] = projects
	.filter((project) => !authoredSlugs.has(project.slug))
	.map((project) => ({
		kind: "project",
		slug: project.slug,
		title: project.title,
		eyebrow: "PROJECT",
		intro: project.description,
		blocks: [
			{
				type: "paragraph",
				id: `${project.slug}-overview`,
				text: project.description,
			},
		],
	}));

export const projectDocuments: ContentDocument[] = [
	...authoredProjectDocuments,
	...generatedProjectDocuments,
];