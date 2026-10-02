import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "getting-started-with-articles",
	title: "Article Content Structure — TM.DEV",
	eyebrow: "ARTICLE / REFERENCE",
	intro: "A reference for structuring articles with the available content blocks, choosing the appropriate block for each purpose, and maintaining consistent documentation across the platform.",
	archive: {
		category: "General",
		filterCategories: ["general"],
		readingTime: "10 min",
		year: 2026,
	},
	blocks: [
		{ type: "heading", id: "overview", level: 2, text: "Overview" },
		{
			type: "paragraph",
			id: "overview-intro",
			lead: true,
			text: [
				{
					type: "text",
					text: "Articles are composed from a defined set of content blocks. Each block has a specific purpose, allowing information to be presented consistently without requiring every article to follow the same visual structure.",
				},
			],
		},
		{
			type: "paragraph",
			id: "overview-goal",
			text: [
				{
					type: "text",
					text: "The content model separates the information itself from its presentation. Authors can therefore combine headings, paragraphs, lists, tables, code examples, cards, callouts, steps, pathways, FAQs, and calls to action according to the needs of the article.",
				},
			],
		},
		{
			type: "paragraph",
			id: "overview-principles",
			text: [
				{
					type: "text",
					text: "A well-structured article should use each block for a clear reason. ",
				},
				{
					type: "link",
					text: "Headings",
					href: "#key-concepts",
				},
				{
					type: "text",
					text: " establish hierarchy, ",
				},
				{
					type: "link",
					text: "content blocks",
					href: "#reference-table",
				},
				{
					type: "text",
					text: " communicate the relevant information, and ",
				},
				{
					type: "link",
					text: "navigation and maintenance",
					href: "#maintenance",
				},
				{
					type: "text",
					text: " keep longer documentation usable over time.",
				},
			],
		},
		{
			type: "callout",
			id: "overview-important",
			label: "Important",
			text: "A block should communicate a distinct piece of information or serve a distinct structural purpose. Avoid using a more complex block when a paragraph, list, or heading communicates the same information clearly.",
		},
		{
			type: "cards",
			id: "overview-paths",
			columns: 3,
			items: [
				{
					tag: "Structure",
					title: "Organise content",
					icon: "01",
					description:
						"Use headings, paragraphs, and lists to establish the logical structure of an article.",
					meta: "Core blocks",
					tone: "primary",
				},
				{
					tag: "Presentation",
					title: "Communicate clearly",
					icon: "02",
					description:
						"Use cards, callouts, tables, steps, and examples when a specialised presentation improves comprehension.",
					meta: "Content blocks",
					tone: "secondary",
				},
				{
					tag: "Reference",
					title: "Support the reader",
					icon: "03",
					description:
						"Use FAQs, pathways, links, and calls to action to provide context, navigation, or a clear next step.",
				},
			],
		},

		{ type: "heading", id: "key-concepts", level: 2, text: "Key concepts" },
		{
			type: "paragraph",
			id: "key-concepts-intro",
			text: "An article is a sequence of typed content blocks. The block type determines the information pattern being represented, while the content provides the subject matter.",
		},
		{
			type: "cards",
			id: "key-concepts-cards",
			columns: 2,
			items: [
				{
					tag: "Structure",
					title: "Headings",
					icon: "A",
					description:
						"Define the hierarchy of an article and divide related information into identifiable sections.",
				},
				{
					tag: "Content",
					title: "Paragraphs",
					icon: "B",
					description:
						"Provide the primary explanatory content. Use paragraphs for information that does not require a specialised presentation.",
				},
				{
					tag: "Navigation",
					title: "Links",
					icon: "C",
					description:
						"Connect related sections or resources and allow readers to move directly to relevant information.",
				},
				{
					tag: "Emphasis",
					title: "Callouts",
					icon: "D",
					description:
						"Highlight information that requires additional attention, such as warnings, definitions, or important notes.",
				},
			],
		},
		{
			type: "callout",
			id: "key-concepts-definition",
			label: "Definition",
			tone: "definition",
			text: [
				{ type: "text", text: "A " },
				{ type: "text", text: "content block", strong: true },
				{
					type: "text",
					text: " is a typed unit of article content. Blocks provide a predictable structure for rendering information while allowing individual articles to combine different presentation patterns.",
				},
			],
		},

		{
			type: "heading",
			id: "before-you-start",
			level: 2,
			text: "Before you start",
		},
		{
			type: "paragraph",
			id: "before-you-start-intro",
			text: "Before creating an article, establish its purpose, audience, and expected outcome. The content should determine which blocks are required rather than the other way around.",
		},
		{
			type: "list",
			id: "before-you-start-list",
			items: [
				{
					content: [
						{
							type: "text",
							text: "Define the purpose. ",
							strong: true,
						},
						{
							type: "text",
							text: "Determine whether the article explains a concept, documents a process, provides reference information, or addresses a problem.",
						},
					],
					items: [
						{
							content:
								"Identify the question or task the article should address.",
						},
						{
							content:
								"Remove information that does not support that purpose.",
						},
						{
							content:
								"Choose blocks based on the information being communicated.",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Identify the audience. ",
							strong: true,
						},
						{
							type: "text",
							text: "Write at an appropriate level of technical knowledge and provide context where it is required.",
						},
					],
					items: [
						{ content: "Use terminology consistently." },
						{ content: "Define terms that may be unfamiliar." },
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Plan the structure. ",
							strong: true,
						},
						{
							type: "text",
							text: "Arrange sections in an order that allows the reader to understand the subject without unnecessary backtracking.",
						},
					],
				},
			],
		},
		{
			type: "heading",
			id: "start-with-the-reader",
			level: 3,
			text: "Start with the reader",
		},
		{
			type: "paragraph",
			id: "reader-purpose",
			text: "The structure of an article should reflect the reader's information needs. Begin with enough context to establish the subject, then present the relevant details in the order they are most useful.",
		},
		{
			type: "paragraph",
			id: "reader-focus",
			text: "Avoid combining unrelated subjects in a single section. When a topic requires substantial explanation, give it its own heading or page so that readers can identify and reference it independently.",
		},
		{
			type: "image",
			id: "image-example",
			image: {
				src: "/assets/images/article/placeholder-1.jpg",
				alt: "Example article image demonstrating image configuration",
				ratio: "3:2",
				crop: "cover",
				caption:
					"Image configuration: set src to an internal asset path or external URL, provide descriptive alt text, and optionally choose a ratio (auto, 16:9, 4:3, 3:2, or 1:1). Use cover to fill the selected ratio and crop the edges, or contain to keep the complete image visible. Captions are optional and can be omitted or set to null.",
			},
		},
		{
			type: "callout",
			id: "reader-tip",
			label: "Tip",
			text: "Prefer specific headings that describe their content. “Configure notifications” communicates an action more precisely than a generic heading such as “Settings”.",
		},

		{
			type: "heading",
			id: "reference-table",
			level: 2,
			text: "Documentation type table",
		},
		{
			type: "paragraph",
			id: "reference-table-intro",
			text: "Different article types require different information structures. The same block system can support each type while preserving a consistent visual language.",
		},
		{
			type: "table",
			id: "documentation-types",
			table: {
				headers: [
					"Article type",
					"Primary purpose",
					"Typical structure",
					"Examples",
				],
				rows: [
					[
						"Concept",
						"Explain an idea",
						"Definition → explanation → examples → related topics",
						"Architecture and terminology",
					],
					[
						"How-to",
						"Complete a task",
						"Prerequisites → steps → result → troubleshooting",
						"Configuration and setup",
					],
					[
						"Reference",
						"Look up details",
						"Specification → properties → examples → constraints",
						"API and configuration references",
					],
					[
						"Troubleshooting",
						"Resolve a problem",
						"Symptom → causes → resolution → prevention",
						"Errors and operational issues",
					],
				],
			},
		},

		{
			type: "heading",
			id: "workspace",
			level: 2,
			text: "Workspace structure",
		},
		{
			type: "paragraph",
			id: "workspace-intro",
			text: "Article structure should remain predictable as the documentation set grows. Group related material at the appropriate level and avoid introducing additional hierarchy without a clear navigational benefit.",
		},
		{
			type: "paragraph",
			id: "workspace-depth",
			text: "A useful hierarchy generally moves from broad subject areas to specific collections and individual pages. The exact terminology may vary between products, but the underlying principle is to keep each level meaningful and easy to scan.",
		},
		{
			type: "cards",
			id: "workspace-flow",
			columns: 3,
			items: [
				{
					title: "Product",
					icon: "01",
					description:
						"Represents a major product, service, platform, or other top-level area of documentation.",
					tone: "primary",
				},
				{
					title: "Collection",
					icon: "02",
					description:
						"Groups related articles such as guides, concepts, references, or operational procedures.",
				},
				{
					title: "Page",
					icon: "03",
					description:
						"Contains a focused explanation, procedure, reference, or other self-contained unit of documentation.",
				},
			],
		},
		{
			type: "callout",
			id: "workspace-warning",
			label: "Avoid over-structuring",
			tone: "warning",
			text: "Do not introduce categories solely to make the hierarchy appear more complete. A category should represent a meaningful grouping that helps readers locate related content.",
		},

		{ type: "heading", id: "setup", level: 2, text: "Setup" },
		{
			type: "paragraph",
			id: "setup-intro",
			text: "Use the following sequence when creating a new article or documentation section. The sequence separates content definition, structure, navigation, and review.",
		},
		{
			type: "steps",
			id: "setup-steps",
			items: [
				{
					title: "Set the image source",
					description:
						"Provide an internal asset path or external URL through the src property. The image can then be displayed using one of the available presentation ratios, such as 3:2, 4:3, 1:1, or 16:9.",
					image: {
						src: "/assets/images/article/placeholder-1.jpg",
						alt: "3:2 image with cover",
						ratio: "3:2",
						crop: "cover",
						caption: "Source: Unsplash",
					},
				},
				{
					title: "Choose how it fits",
					description:
						"Use cover when the image should fill its selected ratio and allow the edges to be cropped. Use contain when the complete image should remain visible instead.",
					image: {
						src: "/assets/images/article/placeholder-1.jpg",
						alt: "1:1 image with contain",
						ratio: "1:1",
						crop: "contain",
					},
				},
				{
					title: "Use a wider presentation",
					description:
						"Choose a wider ratio such as 16:9 when the image benefits from a landscape presentation. The same configuration can also use 4:3 or other supported ratios when a different shape is more appropriate.",
					image: {
						src: "/assets/images/article/placeholder-1.jpg",
						alt: "16:9 image with cover",
						ratio: "16:9",
						crop: "cover",
					},
				},
			],
		},

		{
			type: "heading",
			id: "writing",
			level: 2,
			text: "Writing guidelines",
		},
		{
			type: "paragraph",
			id: "writing-intro",
			text: "The block system provides presentation structure, but the quality of an article still depends on precise, relevant, and maintainable writing.",
		},
		{
			type: "cards",
			id: "writing-guidelines",
			columns: 2,
			items: [
				{
					title: "Use descriptive headings",
					description:
						"Make each heading communicate the subject, question, or action covered by the following section.",
					tag: "Recommended",
					meta: "Structure",
					tone: "primary",
				},
				{
					title: "Write directly",
					description:
						"Prefer precise sentences and direct instructions. Remove unnecessary introductions, repetition, and filler.",
					tag: "Recommended",
					meta: "Clarity",
				},
				{
					title: "Use the right block",
					description:
						"Choose lists, tables, steps, code, or callouts when their structure represents the information more clearly than plain prose.",
					tag: "Recommended",
					meta: "Semantics",
				},
				{
					title: "Avoid duplication",
					description:
						"Do not maintain multiple independent explanations of the same information. Keep one authoritative explanation and reference it elsewhere.",
					tag: "Avoid",
					meta: "Maintenance",
				},
			],
		},
		{
			type: "heading",
			id: "useful-page-structure",
			level: 3,
			text: "A useful page structure",
		},
		{
			type: "paragraph",
			id: "useful-page-structure-intro",
			text: "A typical article can move from context to detail and then to action. Not every page requires every stage, but the sequence provides a useful baseline for guides and technical documentation.",
		},
		{
			type: "list",
			id: "useful-page-structure-list",
			items: [
				{
					content: [
						{ type: "text", text: "Context. ", strong: true },
						{
							type: "text",
							text: "Explain the subject and establish why the information is relevant.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Requirements. ", strong: true },
						{
							type: "text",
							text: "Identify prerequisites, assumptions, permissions, or required resources.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Instructions. ", strong: true },
						{
							type: "text",
							text: "Present procedures in the order in which they should be performed.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Verification. ", strong: true },
						{
							type: "text",
							text: "Describe the expected result or provide a method for confirming completion.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Next action. ", strong: true },
						{
							type: "text",
							text: "Provide the most relevant follow-up information, related article, or action.",
						},
					],
				},
			],
		},

		{ type: "heading", id: "examples", level: 2, text: "Examples" },
		{
			type: "paragraph",
			id: "examples-intro",
			text: "Examples should demonstrate how information is represented rather than simply repeat the surrounding explanation. They are particularly useful for code, configuration, hierarchy, and expected output.",
		},
		{
			type: "paragraph",
			id: "examples-semantic",
			text: "For example, a documentation page can combine semantic HTML with reusable classes while keeping the underlying structure simple and predictable.",
		},
		{
			type: "code",
			id: "example-html",
			language: "HTML",
			code: `<article class="article">
  <h2>Getting started</h2>
  <p>Follow these steps to create your first page.</p>

  <div class="callout">
    <strong>Tip</strong>
    Start with the reader's goal.
  </div>
</article>`,
		},
		{
			type: "paragraph",
			id: "examples-hierarchy-intro",
			text: "A documentation hierarchy can also be represented explicitly when explaining how related pages are organised.",
		},
		{
			type: "code",
			id: "example-hierarchy",
			language: "Structure",
			code: `Product
├── Getting started
├── Guides
│   ├── Configuration
│   ├── Integrations
│   └── Troubleshooting
├── Reference
│   ├── API
│   └── Settings
└── FAQ`,
		},

		{ type: "heading", id: "publishing", level: 2, text: "Publishing" },
		{
			type: "paragraph",
			id: "publishing-intro",
			text: "Publishing is the final stage of the article workflow. Review should happen before publication so that readers receive content that is complete, internally consistent, and suitable for the intended presentation.",
		},
		{
			type: "steps",
			id: "publishing-steps",
			items: [
				{
					title: "Review the content",
					description:
						"Confirm that the article is accurate, complete, appropriately scoped, and understandable to its intended audience.",
				},
				{
					title: "Validate references",
					description:
						"Check internal links, external links, navigation, examples, code samples, and any referenced resources.",
				},
				{
					title: "Review the presentation",
					description:
						"Check headings, tables, code blocks, cards, callouts, spacing, and responsive behaviour across supported screen sizes.",
				},
			],
		},
		{
			type: "callout",
			id: "publishing-checklist",
			label: "Publishing checklist",
			tone: "success",
			text: "Content reviewed, references verified, examples checked, metadata confirmed, and the final layout reviewed across supported screen sizes.",
		},

		{ type: "heading", id: "maintenance", level: 2, text: "Maintenance" },
		{
			type: "paragraph",
			id: "maintenance-intro",
			text: "Published documentation is part of the product and should be maintained alongside the systems and processes it describes. Changes to the underlying subject should trigger a review of related articles.",
		},
		{
			type: "pathway",
			id: "maintenance-pathway",
			items: [
				{
					title: "Review affected pages",
					description:
						"Identify documentation affected by changes to products, interfaces, APIs, processes, terminology, or system behaviour.",
				},
				{
					title: "Remove obsolete information",
					description:
						"Update, replace, or archive instructions that no longer describe the current system or supported workflow.",
				},
				{
					title: "Consolidate duplicates",
					description:
						"When multiple pages describe the same subject, retain a clear authoritative source and reference it from related content.",
				},
				{
					title: "Use reader feedback",
					description:
						"Treat support questions, reported errors, search behaviour, and direct feedback as signals for unclear or incomplete documentation.",
				},
			],
		},
		{
			type: "callout",
			id: "maintenance-tip",
			label: "Maintenance tip",
			text: "For documentation describing frequently changing systems, assign an owner or responsible team so that updates have a clear point of accountability.",
		},

		{ type: "heading", id: "routes", level: 2, text: "Block selection" },
		{
			type: "paragraph",
			id: "routes-intro",
			text: "Different information patterns benefit from different block types. The following examples describe common ways to select a block based on the information being presented.",
		},
		{
			type: "cards",
			id: "routes-cards",
			columns: 4,
			items: [
				{
					title: "Explanation",
					description:
						"Use paragraphs and headings when the primary requirement is to explain a concept or provide context.",
				},
				{
					title: "Procedure",
					description:
						"Use numbered steps when readers need to perform actions in a defined sequence.",
				},
				{
					title: "Comparison",
					description:
						"Use a table when multiple items need to be compared against the same set of attributes.",
				},
				{
					title: "Emphasis",
					description:
						"Use a callout when information needs additional visual emphasis without becoming part of the main flow.",
				},
				{
					title: "Options",
					description:
						"Use cards when several related items need to be presented as distinct, independently scannable entries.",
				},
				{
					title: "Hierarchy",
					description:
						"Use headings and structured navigation when the reader needs to understand relationships between sections or pages.",
				},
				{
					title: "Reference",
					description:
						"Use code blocks for exact syntax, configuration, output, or other material where formatting is significant.",
				},
				{
					title: "Follow-up",
					description:
						"Use pathways, FAQs, and calls to action when readers need clear routes to related information or subsequent tasks.",
				},
			],
		},
		{
			type: "paragraph",
			id: "routes-outcome",
			text: "The objective is not to use every available block. Select the smallest set of blocks that represents the information accurately and makes the article easy to scan and maintain.",
		},

		{ type: "heading", id: "faq", level: 2, text: "FAQ" },
		{
			type: "faq",
			id: "faq-items",
			items: [
				{
					question: "How much content should each page contain?",
					answer: "A page should contain enough information to fulfil its stated purpose without introducing unrelated subjects. Split large topics when separate sections could be understood and maintained independently.",
				},
				{
					question: "Should every page use the same layout?",
					answer: "The visual system should remain consistent, but the block composition should reflect the information being presented. A reference page may require a table while a procedure may require steps.",
				},
				{
					question:
						"How should I organise a large documentation set?",
					answer: "Use a small number of meaningful top-level areas and group related pages beneath them. Introduce deeper hierarchy only when it improves discovery or reflects a genuine relationship between the content.",
				},
				{
					question: "Why are short sections useful?",
					answer: "Short, focused sections improve scanning and make it easier for readers to identify the information relevant to their current task.",
				},
				{
					question: "How often should documentation be reviewed?",
					answer: "Review documentation when the system, process, interface, or terminology it describes changes. Frequently used material may also benefit from scheduled reviews.",
				},
				{
					question: "Can I add custom components?",
					answer: "Yes, provided the component follows the established content model and design system. New components should have a defined purpose and consistent behaviour across supported layouts.",
				},
			],
		},

		{
			type: "cta",
			id: "final-cta",
			title: "Build consistent documentation",
			text: "Use the available content blocks according to their intended purpose to create articles that are structured, readable, and maintainable.",
			href: "#overview",
			label: "Review the structure",
		},
	],
};

export default article;