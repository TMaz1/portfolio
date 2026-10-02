import type { ContentDocument } from "../../types/content";
import { projects } from "./index";

import apiGateway from "./ai-gateway";
import authenticationApiMfaEmailVerification from "./authentication-api";
import eventDrivenAppointmentsApi from "./event-driven-appointments-api";
import frontendSocialSystem from "./frontend-social-system";

const authoredProjectDocuments: ContentDocument[] = [
	apiGateway,
	authenticationApiMfaEmailVerification,
	eventDrivenAppointmentsApi,
	frontendSocialSystem,
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