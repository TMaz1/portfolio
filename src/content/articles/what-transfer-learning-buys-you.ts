import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "what-transfer-learning-buys-you",
	title: "What transfer learning buys you.",
	eyebrow: "ENGINEERING NOTE",
	intro: "A practical look at pretrained convolutional neural networks, fine-tuning, preprocessing and evaluation through the lens of archaeological image classification.",
	archive: {
		category: "Research",
		filterCategories: ["research"],
		readingTime: "12 min",
		year: 2026,
	},
	blocks: [
		{
			type: "paragraph",
			id: "what-transfer-learning-buys-you-paragraph-1",
			text: "Transfer learning provides a practical starting point when a domain-specific dataset is too small to justify training a convolutional neural network from scratch. Pretrained feature representations can be adapted to a new classification problem.",
		},
		{
			type: "paragraph",
			id: "what-transfer-learning-buys-you-paragraph-2",
			text: "The useful comparison is not only model accuracy. Preprocessing, fine-tuning strategy and evaluation metrics all affect whether the resulting classifier is useful for the actual image domain.",
		},
	],
};

export default article;