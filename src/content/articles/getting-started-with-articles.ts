import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
	kind: "article",
	slug: "getting-started-with-articles",
	title: "Getting Started With Articles — TM.DEV",
	eyebrow: "ARTICLE / REFERENCE",
	intro: "Everything you need to understand the platform, structure your workspace, write useful documentation, and build a maintainable documentation workflow from start to finish.",
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
					text: "DocsHub gives your team a single place to organise product documentation, technical guides, processes, and reference material.",
				},
			],
		},
		{
			type: "paragraph",
			id: "overview-goal",
			text: [
				{
					type: "text",
					text: "The goal is simple: make useful information easy to find, easy to understand, and easy to maintain. Instead of scattering information across multiple tools, you can structure everything into a consistent ",
				},
				{
					type: "link",
					text: "documentation system",
					href: "#workspace",
				},
				{ type: "text", text: "." },
			],
		},
		{
			type: "paragraph",
			id: "overview-principles",
			text: [
				{
					type: "text",
					text: "Whether you are documenting a small internal process or building a complete ",
				},
				{ type: "link", text: "knowledge base", href: "#key-concepts" },
				{ type: "text", text: ", the same principles apply: " },
				{
					type: "link",
					text: "clear organisation",
					href: "#workspace",
				},
				{
					type: "text",
					text: ", useful content, predictable navigation, and ",
				},
				{
					type: "link",
					text: "regular maintenance",
					href: "#maintenance",
				},
				{ type: "text", text: "." },
			],
		},
		{
			type: "callout",
			id: "overview-important",
			label: "Important",
			text: "Keep documentation focused on the reader. Every section should answer a question, explain a process, or provide a useful reference.",
		},
		{
			type: "cards",
			id: "overview-paths",
			columns: 3,
			items: [
				{
					tag: "Start here",
					title: "Learn the basics",
					icon: "01",
					description:
						"Understand the core concepts before moving into advanced configuration.",
					meta: "5 min read",
					tone: "primary",
				},
				{
					tag: "Guides",
					title: "Follow a workflow",
					icon: "02",
					description:
						"Follow practical steps to move from an empty workspace to a finished documentation project.",
					meta: "8 min read",
					tone: "secondary",
				},
				{
					tag: "Reference",
					title: "Explore components",
					icon: "03",
					description:
						"Explore reusable content patterns for guides, examples, warnings, and technical references.",
				},
			],
		},

		{ type: "heading", id: "key-concepts", level: 2, text: "Key concepts" },
		{
			type: "paragraph",
			id: "key-concepts-intro",
			text: "Before creating pages, it helps to understand the basic building blocks of a documentation system.",
		},
		{
			type: "cards",
			id: "key-concepts-cards",
			columns: 2,
			items: [
				{
					tag: "Structure",
					title: "Spaces",
					icon: "A",
					description:
						"A space is a high-level collection of related documentation. Use spaces to separate products, teams, projects, or major areas of knowledge.",
				},
				{
					tag: "Content",
					title: "Pages",
					icon: "B",
					description:
						"Pages contain the actual documentation. Keep each page focused on a specific task, concept, question, or reference.",
				},
				{
					tag: "Navigation",
					title: "Collections",
					icon: "C",
					description:
						"Collections group related pages together so readers can move naturally from introductory material to more advanced topics.",
				},
				{
					tag: "Discovery",
					title: "Search",
					icon: "D",
					description:
						"Search helps readers find information when they do not know where a particular page lives in the documentation structure.",
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
				{ type: "text", text: "documentation system", strong: true },
				{
					type: "text",
					text: " is more than a collection of pages. It is the combination of structure, navigation, content, conventions, and maintenance practices that help people find and use information.",
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
			text: "A good documentation project starts with a clear structure. Before creating individual pages, decide what information your readers actually need.",
		},
		{
			type: "list",
			id: "before-you-start-list",
			items: [
				{
					content: [
						{
							type: "text",
							text: "Define your audience. ",
							strong: true,
						},
						{
							type: "text",
							text: "Know who will be reading the documentation and what level of knowledge they already have.",
						},
					],
					items: [
						{
							content:
								"Consider their existing technical knowledge.",
						},
						{
							content:
								"Use terminology they will already understand.",
						},
						{
							content:
								"Explain unfamiliar concepts before relying on them.",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Identify common questions. ",
							strong: true,
						},
						{
							type: "text",
							text: "Start with problems people repeatedly need to solve.",
						},
					],
					items: [
						{ content: "Look at support requests." },
						{ content: "Review questions from new users." },
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Keep navigation predictable. ",
							strong: true,
						},
						{
							type: "text",
							text: "Readers should always know where they are and what comes next.",
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
			text: "One of the easiest ways to improve documentation is to stop thinking about what the team wants to publish and start thinking about what the reader is trying to accomplish.",
		},
		{
			type: "paragraph",
			id: "reader-focus",
			text: "A useful page usually has one primary purpose. If readers have to scan through several unrelated topics before finding the answer they need, the page is probably trying to do too much.",
		},
		{
			type: "callout",
			id: "reader-tip",
			label: "Tip",
			text: "Write the page title as if someone were searching for the answer. “Configure notifications” is usually more useful than “Notification settings”.",
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
			text: "Different documentation types can share the same visual system while changing the content structure inside the article.",
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
						"Definition → explanation → examples → FAQ",
						"Definitions and concepts",
					],
					[
						"How-to",
						"Complete a task",
						"Prerequisites → steps → result → troubleshooting",
						"Task walkthroughs",
					],
					[
						"Reference",
						"Look up details",
						"Specification → parameters → examples → errors",
						"API and configuration references",
					],
					[
						"Troubleshooting",
						"Solve a problem",
						"Problem → causes → solutions → prevention",
						"Issue resolution guides",
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
			text: "A predictable workspace makes documentation easier to navigate as the number of pages grows.",
		},
		{
			type: "paragraph",
			id: "workspace-depth",
			text: "Start broad and become more specific as you move deeper into the structure. Avoid creating a large number of top-level categories unless there is a clear reason for each one.",
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
						"The highest-level area for a product, service, or major body of documentation.",
					tone: "primary",
				},
				{
					title: "Collection",
					icon: "02",
					description:
						"Group related guides, references, tutorials, or operational material.",
				},
				{
					title: "Page",
					icon: "03",
					description:
						"Answer one focused question or document one specific process.",
				},
			],
		},
		{
			type: "callout",
			id: "workspace-warning",
			label: "Avoid over-structuring",
			tone: "warning",
			text: "Do not create a new category simply because you have one or two pages that could fit inside it. Structure should emerge from the content rather than being created for its own sake.",
		},

		{ type: "heading", id: "setup", level: 2, text: "Setup" },
		{
			type: "paragraph",
			id: "setup-intro",
			text: "Use the following sequence when creating a new documentation section.",
		},
		{
			type: "steps",
			id: "setup-steps",
			items: [
				{
					title: "Create the section",
					description:
						"Give the section a clear name that describes what readers will find inside it.",
					screenshotLabel: "Workspace / section preview",
				},
				{
					title: "Add your content",
					description:
						"Start with the most important information. Use headings, lists, examples, and callouts to improve readability.",
					screenshotLabel: "Content editor preview",
				},
				{
					title: "Add navigation",
					description:
						"Connect related pages and make the intended reading path obvious.",
					screenshotLabel: "Navigation preview",
				},
				{
					title: "Publish and review",
					description:
						"Preview the page on desktop and mobile before making it available to readers.",
					screenshotLabel: "Published page preview",
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
			text: "Good documentation is not necessarily longer documentation. The best pages communicate the required information with as little friction as possible.",
		},
		{
			type: "cards",
			id: "writing-guidelines",
			columns: 2,
			items: [
				{
					title: "Use clear headings",
					description:
						"Describe exactly what the reader will learn or accomplish in the section.",
					tag: "Recommended",
					meta: "Clarity",
					tone: "primary",
				},
				{
					title: "Use active language",
					description:
						"Tell readers what to do directly instead of hiding instructions behind passive language.",
					tag: "Recommended",
					meta: "Action",
				},
				{
					title: "Show examples",
					description:
						"Demonstrate concepts with realistic examples when an explanation alone could be ambiguous.",
					tag: "Recommended",
					meta: "Examples",
				},
				{
					title: "Remove repetition",
					description:
						"Do not repeat the same instructions across multiple pages. Link to the authoritative explanation instead.",
					tag: "Avoid",
					meta: "Maintainability",
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
			text: "For most guides, a simple structure works well: explain what the reader is about to accomplish, provide the required context, walk through the process, and finish with the expected result or next action.",
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
							text: "Explain why the reader is here and what the page covers.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Requirements. ", strong: true },
						{
							type: "text",
							text: "Mention anything that must be completed beforehand.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Instructions. ", strong: true },
						{
							type: "text",
							text: "Present the actual process in a logical order.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Verification. ", strong: true },
						{
							type: "text",
							text: "Explain how the reader can confirm that everything worked correctly.",
						},
					],
				},
				{
					content: [
						{ type: "text", text: "Next action. ", strong: true },
						{
							type: "text",
							text: "Point the reader towards the most useful follow-up.",
						},
					],
				},
			],
		},

		{ type: "heading", id: "examples", level: 2, text: "Examples" },
		{
			type: "paragraph",
			id: "examples-intro",
			text: "Examples are especially useful when explaining technical concepts or showing readers exactly what they should expect.",
		},
		{
			type: "paragraph",
			id: "examples-semantic",
			text: "A simple documentation page can use semantic HTML and reusable CSS classes rather than relying on deeply nested one-off styles.",
		},
		{
			type: "code",
			id: "example-html",
			language: "HTML",
			code: `<section class="article-section">\n  <h2>Getting started</h2>\n  <p>Follow these steps to create your first page.</p>\n\n  <div class="callout">\n    <strong>Tip</strong>\n    Start with the reader's goal.\n  </div>\n</section>`,
		},
		{
			type: "paragraph",
			id: "examples-hierarchy-intro",
			text: "A practical documentation hierarchy might look like this:",
		},
		{
			type: "code",
			id: "example-hierarchy",
			language: "Structure",
			code: `Product\n├── Getting started\n├── Guides\n│   ├── Configuration\n│   ├── Integrations\n│   └── Troubleshooting\n├── Reference\n│   ├── API\n│   └── Settings\n└── FAQ`,
		},

		{ type: "heading", id: "publishing", level: 2, text: "Publishing" },
		{
			type: "paragraph",
			id: "publishing-intro",
			text: "Publishing should be treated as the final step of the documentation workflow rather than the point at which content is first reviewed.",
		},
		{
			type: "steps",
			id: "publishing-steps",
			items: [
				{
					title: "Check the content",
					description:
						"Confirm that the instructions are complete, accurate, and written for the intended audience.",
				},
				{
					title: "Check the links",
					description:
						"Make sure internal references, external links, navigation, and examples all point to the correct destination.",
				},
				{
					title: "Check the layout",
					description:
						"Review the page at different screen sizes and confirm that headings, code, tables, and cards remain readable.",
				},
			],
		},
		{
			type: "callout",
			id: "publishing-checklist",
			label: "Publishing checklist",
			tone: "success",
			text: "Content reviewed, links tested, examples verified, metadata updated, and the page checked on both desktop and mobile.",
		},

		{ type: "heading", id: "maintenance", level: 2, text: "Maintenance" },
		{
			type: "paragraph",
			id: "maintenance-intro",
			text: "Documentation becomes less useful when it is allowed to drift away from the product or process it describes. Maintenance should therefore be part of the normal workflow.",
		},
		{
			type: "pathway",
			id: "maintenance-pathway",
			items: [
				{
					title: "Review important pages",
					description:
						"Revisit frequently used guides whenever the underlying product, process, or interface changes.",
				},
				{
					title: "Remove outdated content",
					description:
						"Archive or replace instructions that no longer describe the current experience.",
				},
				{
					title: "Consolidate duplicates",
					description:
						"When several pages explain the same concept, choose one authoritative source and link to it.",
				},
				{
					title: "Improve based on feedback",
					description:
						"Use search behaviour, support questions, and reader feedback to identify areas that need clearer explanations.",
				},
			],
		},
		{
			type: "callout",
			id: "maintenance-tip",
			label: "Maintenance tip",
			text: "If a page describes a process that changes frequently, consider assigning an owner who is responsible for reviewing it after major releases.",
		},

		{ type: "heading", id: "routes", level: 2, text: "Routes" },
		{
			type: "paragraph",
			id: "routes-intro",
			text: "People enter software development through different starting points. University, apprenticeships, independent learning, intensive training, internal moves, and career changes can all form part of a pathway.",
		},
		{
			type: "cards",
			id: "routes-cards",
			columns: 4,
			items: [
				{
					title: "University",
					description:
						"A broader academic route that can provide foundations across computing and related subjects.",
				},
				{
					title: "Apprenticeship",
					description:
						"Combine structured learning with workplace experience where an appropriate route is available.",
				},
				{
					title: "Independent learning",
					description:
						"Learn through courses, documentation, books and your own practical work.",
				},
				{
					title: "Intensive training",
					description:
						"Concentrate learning into a shorter period while still needing practice and evidence afterwards.",
				},
				{
					title: "Internal move",
					description:
						"Build technology capability while drawing on knowledge of your existing organisation or industry.",
				},
				{
					title: "Career change",
					description:
						"Combine transferable professional strengths with new technical capability.",
				},
				{
					title: "Practical projects",
					description:
						"Learn by building, collaborating and solving realistic problems.",
				},
				{
					title: "More than one route",
					description:
						"Real pathways often combine several approaches rather than following one perfectly.",
				},
			],
		},
		{
			type: "paragraph",
			id: "routes-outcome",
			text: "The route matters less than what you can demonstrate at the point you are ready to move forward. A qualification can be valuable, but it does not automatically demonstrate that you can apply the skills in practice.",
		},

		{ type: "heading", id: "faq", level: 2, text: "FAQ" },
		{
			type: "faq",
			id: "faq-items",
			items: [
				{
					question: "How much content should each page contain?",
					answer: "Enough to completely answer the reader’s question without adding unrelated information. If a page becomes too large, split it into smaller focused pages.",
				},
				{
					question: "Should every page use the same layout?",
					answer: "The visual system should stay consistent, but individual pages can use different content components when that makes the information easier to understand.",
				},
				{
					question:
						"How should I organise a large documentation set?",
					answer: "Start with a small number of meaningful top-level categories and group related pages underneath them. Avoid creating deep navigation trees unless they genuinely help readers find information.",
				},
				{
					question: "Why are short sections better?",
					answer: "Short sections improve scanning, make navigation easier, and allow readers to quickly locate the specific information they need.",
				},
				{
					question: "How often should documentation be reviewed?",
					answer: "Frequently used documentation should be reviewed whenever the related product or process changes. Less frequently used reference material can be reviewed on a regular maintenance schedule.",
				},
				{
					question: "Can I add custom components?",
					answer: "Yes. New components should use the same spacing, typography, colour, border, and responsive rules as the existing design system.",
				},
			],
		},

		{
			type: "cta",
			id: "final-cta",
			title: "Ready to build better docs?",
			text: "Use this layout as a consistent foundation for guides, references, tutorials, troubleshooting articles, and product documentation.",
			href: "#overview",
			label: "Get started",
		},
	],
};

export default article;