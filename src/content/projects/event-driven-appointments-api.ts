import type { ContentDocument } from "../../types/content";

const eventsGuideHref = "/articles/event-driven-architecture-practical-guide";

const article: ContentDocument = {
	kind: "project",
	slug: "event-driven-appointments-api",
	title: "Event-Driven Appointments API",
	eyebrow: "PROJECT / BACKEND",
	intro:
		"A small event-driven API for managing appointments and documents, with asynchronous webhook delivery, retries, exponential backoff, jitter, and dead-letter handling.",
	heroLink: {
		label: "Event-Driven Architecture Basics",
		href: eventsGuideHref,
	},
	archive: {
		category: "Backend",
		filterCategories: ["backend", "infrastructure"],
		readingTime: "5 min",
		year: 2026,
	},
	blocks: [
		{
			type: "heading",
			id: "overview",
			level: 2,
			text: "Overview",
		},
		{
			type: "paragraph",
			id: "overview-intro",
			lead: true,
			text: [
				{
					type: "text",
					text: "The Event-Driven Appointments API is a prototype backend for managing appointments and documents while demonstrating a practical asynchronous integration model.",
				},
			],
		},
		{
			type: "paragraph",
			id: "overview-purpose",
			text: [
				{
					type: "text",
					text: "The core API remains conventional HTTP CRUD. The event-driven behaviour is introduced where it provides a clear benefit: notifying external systems without making external availability part of the appointment request itself. The architectural reasoning behind this boundary is covered in ",
				},
				{
					type: "link",
					text: "Should This Be Event-Driven?",
					href: `${eventsGuideHref}?section=start-here`,
				},
				{
					type: "text",
					text: ".",
				},
			],
		},
		{
			type: "cards",
			id: "project-capabilities",
			columns: 3,
			items: [
				{
					tag: "Resources",
					title: "Appointments",
					icon: "01",
					description:
						"Create, read, update, delete, and query appointments by company ID.",
					tone: "primary",
				},
				{
					tag: "Resources",
					title: "Documents",
					icon: "02",
					description:
						"Manage documents associated with appointments and retrieve them by company ID.",
				},
				{
					tag: "Integration",
					title: "Webhooks",
					icon: "03",
					description:
						"Queue external webhook delivery and handle failed attempts independently from the API request.",
				},
			],
		},

		{
			type: "heading",
			id: "architecture",
			level: 2,
			text: "Architecture",
		},
		{
			type: "paragraph",
			id: "architecture-intro",
			text: "The implementation separates the resource API from webhook delivery. An appointment operation is handled by the API, while webhook work is placed into an asynchronous execution path.",
		},
		{
			type: "code",
			id: "architecture-flow",
			language: "Architecture",
			code: `Client
  │
  ▼
Appointments API
  │
  ├── Appointment / Document
  │      persistence
  │
  └── Webhook event
          │
          ▼
      Webhook queue
          │
          ▼
       Delivery
          │
      ┌───┴───┐
      ▼       ▼
   success   failure
                │
                ▼
              retry
                │
          retry threshold
                │
                ▼
               DLQ`,
		},
		{
			type: "paragraph",
			id: "architecture-boundary",
			text: [
				{
					type: "text",
					text: "The important boundary is that the external webhook consumer does not control whether the core API operation can complete. This follows the same synchronous/asynchronous separation described in ",
				},
				{
					type: "link",
					text: "What Must Happen Synchronously?",
					href: `${eventsGuideHref}?section=event-boundary`,
				},
				{
					type: "text",
					text: ".",
				},
			],
		},

		{
			type: "heading",
			id: "api",
			level: 2,
			text: "API surface",
		},
		{
			type: "table",
			id: "api-endpoints",
			table: {
				headers: ["Resource", "Method", "Endpoint", "Purpose"],
				rows: [
					[
						"Appointments",
						"GET",
						"/appointments/{id}",
						"Retrieve an appointment",
					],
					[
						"Appointments",
						"GET",
						"/appointments?companyId={companyId}",
						"Retrieve company appointments",
					],
					[
						"Appointments",
						"POST",
						"/appointments",
						"Create an appointment",
					],
					[
						"Appointments",
						"PATCH",
						"/appointments/{id}",
						"Update an appointment",
					],
					[
						"Appointments",
						"DELETE",
						"/appointments/{id}",
						"Delete an appointment",
					],
					[
						"Documents",
						"GET / POST / PATCH / DELETE",
						"/documents",
						"Manage appointment documents",
					],
					[
						"Documents",
						"GET",
						"/documents?companyId={companyId}",
						"Retrieve company documents",
					],
					[
						"Webhook",
						"POST",
						"/webhook-test",
						"Receive and inspect test deliveries",
					],
				],
			},
		},

		{
			type: "heading",
			id: "webhook-execution",
			level: 2,
			text: "Webhook execution",
		},
		{
			type: "paragraph",
			id: "webhook-execution-intro",
			text: "The webhook system is the main event-driven part of the project. Rather than treating an external HTTP request as guaranteed work, delivery is treated as an asynchronous operation that can fail and be retried.",
		},
		{
			type: "steps",
			id: "webhook-execution-steps",
			items: [
				{
					title: "Enqueue",
					description:
						"The application creates an asynchronous webhook job containing the event required by the external consumer.",
				},
				{
					title: "Deliver",
					description:
						"A worker attempts to send the event to the configured webhook endpoint.",
				},
				{
					title: "Retry",
					description:
						"Failed delivery is retried using exponential backoff with jitter rather than immediately repeating the request.",
				},
				{
					title: "Dead-letter",
					description:
						"Events that continue to fail beyond the retry threshold are moved to the dead-letter queue for investigation.",
				},
			],
		},
		{
			type: "callout",
			id: "webhook-reliability",
			label: "Reliability",
			tone: "definition",
			text: [
				{
					type: "text",
					text: "The implementation assumes delivery can fail and avoids treating retries as a guarantee of exactly-once processing. This is the same ",
				},
				{
					type: "link",
					text: "duplicate-delivery and idempotency",
					href: `${eventsGuideHref}?section=retries`,
				},
				{
					type: "text",
					text: " concern that applies to production event consumers.",
				},
			],
		},

		{
			type: "heading",
			id: "failure-handling",
			level: 2,
			text: "Failure handling",
		},
		{
			type: "paragraph",
			id: "failure-handling-text",
			text: "Retries are intended for transient failures. Exponential backoff spaces subsequent attempts, while jitter reduces the chance of repeated requests converging on the same retry interval.",
		},
		{
			type: "code",
			id: "retry-flow",
			language: "Flow",
			code: `Webhook delivery
      │
      ├── success ──────────→ complete
      │
      └── failure
            │
            ▼
       backoff + jitter
            │
            ▼
          retry
            │
            └── threshold reached
                    │
                    ▼
                   DLQ`,
		},
		{
			type: "paragraph",
			id: "failure-handling-dlq",
			text: [
				{
					type: "text",
					text: "The dead-letter queue gives failed events a durable destination instead of silently discarding them. In a larger system, this becomes part of the operational workflow described under ",
				},
				{
					type: "link",
					text: "Retries, Idempotency and the DLQ",
					href: `${eventsGuideHref}?section=retries`,
				},
				{
					type: "text",
					text: ".",
				},
			],
		},

		{
			type: "heading",
			id: "storage-and-observability",
			level: 2,
			text: "Storage and observability",
		},
		{
			type: "paragraph",
			id: "storage",
			text: "The prototype uses SQLite for persistence. The database is created automatically under the data/ directory and persists when the Docker deployment is configured with a volume.",
		},
		{
			type: "paragraph",
			id: "logging",
			text: "Structured logging records important application and delivery events at info, error, and development-only debug levels. Request identifiers and resource metadata provide enough context to follow an operation through the API.",
		},
		{
			type: "callout",
			id: "observability-note",
			label: "Production consideration",
			text: [
				{
					type: "text",
					text: "A production implementation would extend this model with event identifiers, delivery attempts, consumer health, queue depth and end-to-end tracing. For the broader reasoning, see ",
				},
				{
					type: "link",
					text: "Make Asynchronous Execution Traceable",
					href: `${eventsGuideHref}?section=observability`,
				},
				{
					type: "text",
					text: ".",
				},
			],
		},

		{
			type: "heading",
			id: "testing",
			level: 2,
			text: "Testing the event flow",
		},
		{
			type: "paragraph",
			id: "testing-intro",
			text: "The repository includes a webhook test server and test script so delivery behaviour can be exercised independently from the main API.",
		},
		{
			type: "code",
			id: "testing-commands",
			language: "Shell",
			code: `# API
npx ts-node --project tsconfig.ts-node.json src/index.ts

# Test webhook receiver
npx ts-node src/webhook-test-server.ts

# Generate webhook test events
npx ts-node src/tests/test-webhook.ts`,
		},
		{
			type: "paragraph",
			id: "testing-postman",
			text: "The Postman collection can be used for the REST API, with the base URL configured as http://localhost:3000. The webhook test server provides a local receiving endpoint for observing delivery and retry behaviour.",
		},

		{
			type: "heading",
			id: "implementation-notes",
			level: 2,
			text: "Implementation notes",
		},
		{
			type: "cards",
			id: "implementation-notes-cards",
			columns: 2,
			items: [
				{
					tag: "Current",
					title: "Prototype persistence",
					description:
						"SQLite keeps the project self-contained and easy to run locally. A production deployment would normally move to a managed relational database.",
					tone: "primary",
				},
				{
					tag: "Current",
					title: "External delivery",
					description:
						"Webhook delivery demonstrates the asynchronous integration boundary without requiring a larger messaging platform for the prototype.",
				},
				{
					tag: "Not implemented",
					title: "Authentication",
					description:
						"Placeholder middleware exists, but authentication and authorisation are outside the current project scope.",
				},
				{
					tag: "Future",
					title: "Rate limiting",
					description:
						"Rate limiting is identified as a subsequent production concern rather than part of the prototype's core event flow.",
				},
			],
		},

		{
			type: "heading",
			id: "takeaway",
			level: 2,
			text: "What the project demonstrates",
		},
		{
			type: "paragraph",
			id: "takeaway-text",
			text: [
				{
					type: "text",
					text: "The project is intentionally small, but the execution model is representative of a larger event-driven integration: keep the core resource operation simple, move external work out of the request path, expect delivery failures, retry transient errors, retain exhausted events, and make the processing state observable.",
				},
			],
		},
		{
			type: "paragraph",
			id: "takeaway-guide",
			text: [
				{
					type: "text",
					text: "For the architectural reasoning behind these choices, including when to introduce a broker, how to approach ordering, and how event contracts evolve, continue with the ",
				},
				{
					type: "link",
					text: "Event-Driven Architecture practical guide",
					href: eventsGuideHref,
				},
				{
					type: "text",
					text: ".",
				},
			],
		},

		{
			type: "cta",
			id: "final-cta",
			title: "Read the architecture guide",
			text: "Explore the wider reasoning behind the patterns demonstrated by this project, from asynchronous boundaries and retries to idempotency, ordering, contracts, and observability.",
			href: eventsGuideHref,
			label: "Read the Event-Driven Architecture guide",
		},
	],
};

export default article;