import type { ContentDocument } from "../../types/content";
import { projects } from "./index";

export const projectDocuments: ContentDocument[] = projects.map((project) => ({
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