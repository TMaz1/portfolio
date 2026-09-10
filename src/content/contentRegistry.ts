import type { ContentDocument } from "../types/content";
import { articleDocuments } from "./articles";
import { projectDocuments } from "./projects/content";

export const contentDocuments: ContentDocument[] = [
	...articleDocuments,
	...projectDocuments,
];

export function findContent(kind: ContentDocument["kind"], slug: string) {
	return contentDocuments.find(
		(document) => document.kind === kind && document.slug === slug,
	);
}