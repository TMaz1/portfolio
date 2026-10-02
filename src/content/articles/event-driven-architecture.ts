import type { ContentDocument } from "../../types/content";

const eventsApiHref = "/projects/event-driven-appointments-api";

const article: ContentDocument = {
	kind: "article",
	slug: "event-driven-architecture-practical-guide",
	title: "Event-Driven Architecture: A Practical Guide",
	eyebrow: "ARTICLE / ARCHITECTURE",
	intro:
		"A practical reference for designing event-driven systems: when to use events, when to stay synchronous, how to handle delivery and failure, and which patterns to reach for as the system becomes more distributed.",
	heroLink: {
		label: "View a working event-driven example",
		href: eventsApiHref,
	},
	archive: {
		category: "Backend",
		filterCategories: ["backend", "infrastructure"],
		readingTime: "15 min",
		year: 2026,
	},
	blocks: [
		{
			type: "heading",
			id: "overview",
			level: 2,
			text: "How to use this guide",
		},
		{
			type: "paragraph",
			id: "overview-intro",
			lead: true,
			text: "This is a design reference rather than an introduction to event-driven architecture. Start with the situation you are dealing with and use the relevant section to identify the architectural pattern or guarantee you need.",
		},
		{
			type: "cards",
			id: "overview-scenarios",
			columns: 2,
			items: [
				{
					tag: "Starting",
					title: "Choosing the architecture",
					description:
						"Decide whether an interaction should be synchronous, asynchronous, event-driven, or handled through a simpler queue.",
					tone: "primary",
				},
				{
					tag: "Designing",
					title: "Handling failure",
					description:
						"Work through publishing failures, retries, duplicate delivery, ordering, distributed workflows, and external integrations.",
				},
				{
					tag: "Operating",
					title: "Running in production",
					description:
						"Make events traceable, failures diagnosable, and failed work safe to retry or replay.",
				},
				{
					tag: "Choosing",
					title: "Selecting technology",
					description:
						"Choose a broker or messaging platform only after the required guarantees and workload are understood.",
				},
			],
		},
		{
			type: "callout",
			id: "overview-principle",
			label: "Working principle",
			tone: "definition",
			text: "Start with the business interaction and the guarantees it requires. Introduce messaging patterns and infrastructure only where they solve a specific requirement.",
		},

		{
			type: "heading",
			id: "should-it-be-event-driven",
			level: 2,
			text: "When should this be event-driven?",
		},
		{
			type: "paragraph",
			id: "should-it-be-event-driven-intro",
			text: "The first decision is not which broker to use. It is whether the interaction actually benefits from asynchronous communication and independent consumers.",
		},
		{
			type: "code",
			id: "synchronous-example",
			language: "Architecture",
			code: `Order Service
     │
     └──→ Payment
             │
             ▼
          Response`,
		},
		{
			type: "paragraph",
			id: "synchronous-example-text",
			text: "Keep the interaction synchronous when the caller needs the result before completing the current operation. Payment authorisation is a common example.",
		},
		{
			type: "code",
			id: "event-example",
			language: "Architecture",
			code: `                    ┌──→ Email
                    │
OrderPlaced ────────┼──→ Analytics
                    │
                    ├──→ Fraud
                    │
                    └──→ Inventory`,
		},
		{
			type: "paragraph",
			id: "event-example-text",
			text: "An event becomes useful when several independent capabilities need to react to the same business fact and do not all need to participate in the original request.",
		},
		{
			type: "list",
			id: "event-driven-signals",
			items: [
				{
					content: [
						{
							type: "text",
							text: "Consider events when ",
							strong: true,
						},
						{
							type: "text",
							text: "you need independent consumers, asynchronous processing, buffering, independent scaling, failure isolation, durable work, replay, or independently evolving components.",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Prefer synchronous communication when ",
							strong: true,
						},
						{
							type: "text",
							text: "the caller needs an immediate result, the operation is inherently synchronous, or asynchronous processing would add complexity without providing a required property.",
						},
					],
				},
			],
		},
		{
			type: "callout",
			id: "event-driven-tradeoff",
			label: "Remember",
			text: "Event-driven architecture introduces eventual consistency, duplicate delivery, more complicated failure handling, message contracts, and additional operational work. The requirement should justify those costs.",
		},

		{
			type: "heading",
			id: "events-and-commands",
			level: 2,
			text: "When defining the message",
		},
		{
			type: "paragraph",
			id: "events-and-commands-intro",
			text: "Define the business meaning before defining the transport. The most useful distinction is whether the message records a fact or requests an action.",
		},
		{
			type: "table",
			id: "event-command-table",
			table: {
				headers: ["Type", "Example", "Semantics"],
				rows: [
					[
						"Event",
						"OrderPlaced",
						"A business fact that has already happened",
					],
					[
						"Event",
						"PaymentCompleted",
						"A completed business outcome",
					],
					[
						"Command",
						"ProcessPayment",
						"An instruction to perform work",
					],
					[
						"Command",
						"ReserveInventory",
						"A request for another component to act",
					],
				],
			},
		},
		{
			type: "paragraph",
			id: "events-and-commands-ownership",
			text: "An event allows consumers to decide whether the fact is relevant to their responsibility. A command creates a more explicit relationship between sender and receiver. Both are valid; the distinction helps make ownership and coupling visible.",
		},
		{
			type: "callout",
			id: "event-naming",
			label: "Naming reminder",
			text: "Prefer names that describe what happened for events: OrderPlaced, PaymentCompleted, InventoryReserved. Avoid turning an instruction into an event name simply because it is transported through a broker.",
		},

		{
			type: "heading",
			id: "consumer-model",
			level: 2,
			text: "When deciding how consumers should work",
		},
		{
			type: "paragraph",
			id: "consumer-model-intro",
			text: "First determine whether consumers are sharing work or independently reacting to the same event. These are different messaging models.",
		},
		{
			type: "code",
			id: "consumer-model-code",
			language: "Messaging",
			code: `Competing work:

Queue
 │
 ├──→ Worker A
 ├──→ Worker B
 └──→ Worker C

Independent reactions:

OrderPlaced
 │
 ├──→ Payment
 ├──→ Email
 ├──→ Inventory
 └──→ Analytics`,
		},
		{
			type: "paragraph",
			id: "consumer-model-rule",
			text: "Use competing consumers when several workers should share a workload. Use independent subscriptions or equivalent fan-out semantics when each capability must receive the event independently.",
		},

		{
			type: "heading",
			id: "sync-async-boundary",
			level: 2,
			text: "When deciding what stays synchronous",
		},
		{
			type: "paragraph",
			id: "sync-async-boundary-intro",
			text: "Do not make an entire business transaction asynchronous simply because part of it can be. Separate the work required to complete the current operation from the consequences that can happen afterwards.",
		},
		{
			type: "table",
			id: "sync-async-table",
			table: {
				headers: ["Usually synchronous", "Often asynchronous"],
				rows: [
					[
						"Validation required for the current response",
						"Email notifications",
					],
					[
						"Immediate payment authorisation",
						"Analytics processing",
					],
					[
						"Data required to determine the transaction result",
						"Search index updates",
					],
					[
						"Operations where the caller needs the outcome",
						"Independent downstream business reactions",
					],
				],
			},
		},
		{
			type: "callout",
			id: "sync-async-question",
			label: "Decision question",
			text: "What does the business need to know before this operation is complete, and what can happen after it has completed?",
		},

		{
			type: "heading",
			id: "broker",
			level: 2,
			text: "When deciding whether you need a broker",
		},
		{
			type: "paragraph",
			id: "broker-intro",
			text: "An asynchronous requirement does not automatically mean that a large event-streaming platform is required. Identify the property a broker is expected to provide.",
		},
		{
			type: "table",
			id: "broker-reasons",
			table: {
				headers: ["Requirement", "Useful broker capability"],
				rows: [
					[
						"Producer and consumer run at different rates",
						"Buffering",
					],
					[
						"Consumers must process independently",
						"Durable queues or subscriptions",
					],
					[
						"Several capabilities react independently",
						"Fan-out / publish-subscribe",
					],
					[
						"Work must survive consumer downtime",
						"Durable delivery",
					],
					[
						"Historical events may need processing again",
						"Retention and replay",
					],
					[
						"Downstream failure must not block the producer",
						"Asynchronous failure isolation",
					],
				],
			},
		},
		{
			type: "callout",
			id: "broker-question",
			label: "Before adding infrastructure",
			text: "What property do we need that a direct API call does not provide? If there is no clear answer, the broker may not be solving a real architectural problem.",
		},

		{
			type: "heading",
			id: "outbox",
			level: 2,
			text: "When the database succeeds but publishing fails",
		},
		{
			type: "paragraph",
			id: "outbox-intro",
			text: "If a business transaction updates a database and then publishes an event separately, there is a failure window between those operations.",
		},
		{
			type: "code",
			id: "outbox-problem",
			language: "Failure",
			code: `Database
  ✓ OrderCreated

       ↓ publish

Broker
  ✗ unavailable`,
		},
		{
			type: "paragraph",
			id: "outbox-solution",
			text: "Use a Transactional Outbox when the event must be reliably recorded as part of the successful business transaction.",
		},
		{
			type: "code",
			id: "outbox-flow",
			language: "Transactional Outbox",
			code: `Database transaction
──────────────────────
Order
  +
Outbox event
──────────────────────
        ↓ commit
        ↓
Outbox publisher
        ↓
      Broker`,
		},
		{
			type: "paragraph",
			id: "outbox-guarantee",
			text: "The outbox publisher can retry independently after the transaction commits. This connects the business state to the intention to publish without requiring the database and broker to participate in one distributed transaction.",
		},
		{
			type: "callout",
			id: "outbox-limit",
			label: "Important limitation",
			text: "Outbox does not eliminate duplicate delivery or provide general exactly-once processing. Consumers still need appropriate idempotency behaviour.",
		},

		{
			type: "heading",
			id: "retries",
			level: 2,
			text: "When a consumer fails",
		},
		{
			type: "paragraph",
			id: "retries-intro",
			text: "Classify the failure before deciding how to handle it. A temporary network failure and a permanently invalid message should not follow the same path.",
		},
		{
			type: "table",
			id: "retry-table",
			table: {
				headers: ["Situation", "Typical response"],
				rows: [
					[
						"Temporary dependency failure",
						"Retry with exponential backoff and jitter",
					],
					[
						"Consumer temporarily unavailable",
						"Retry after the consumer recovers",
					],
					[
						"Repeated processing failure",
						"Limit attempts and move to a DLQ",
					],
					[
						"Malformed or invalid message",
						"Do not retry indefinitely; isolate for investigation",
					],
					[
						"Recoverable business condition",
						"Repair the condition and replay safely",
					],
				],
			},
		},
		{
			type: "code",
			id: "retry-flow",
			language: "Retry",
			code: `Consume
  │
  ├── success ──→ acknowledge
  │
  └── failure
        ↓
      retry
        ↓
      retry
        ↓
      retry
        ↓
       DLQ`,
		},
		{
			type: "callout",
			id: "dlq-rule",
			label: "DLQ reminder",
			tone: "warning",
			text: "A DLQ is only useful if there is an operational process around it. Know why messages failed, whether they can be repaired, who owns them, and how replay will behave.",
		},

		{
			type: "heading",
			id: "duplicate-messages",
			level: 2,
			text: "When the same message arrives twice",
		},
		{
			type: "paragraph",
			id: "duplicate-messages-intro",
			text: "Design consumers assuming that duplicate delivery is possible. A consumer can complete its business operation and fail before the broker records the acknowledgement.",
		},
		{
			type: "code",
			id: "duplicate-message-example",
			language: "Idempotency",
			code: `OrderPlaced
     ↓
Process
     ↓
acknowledgement fails
     ↓
OrderPlaced
     ↓
Process again`,
		},
		{
			type: "paragraph",
			id: "duplicate-messages-solution",
			text: "Where repeating an operation has a business consequence, use an idempotency key or equivalent deduplication mechanism. For example, a payment request might be associated with a stable paymentRequestId that is recorded when the operation succeeds.",
		},
		{
			type: "callout",
			id: "duplicate-message-question",
			label: "Design question",
			text: "If this event is delivered twice, what prevents the business operation from happening twice?",
		},

		{
			type: "heading",
			id: "ordering",
			level: 2,
			text: "When ordering matters",
		},
		{
			type: "paragraph",
			id: "ordering-intro",
			text: "Avoid requiring global ordering unless the business genuinely needs it. Define the entity and scope for which sequence matters.",
		},
		{
			type: "code",
			id: "ordering-example",
			language: "Ordering",
			code: `Order 12345
    │
    ├── OrderCreated
    ├── PaymentCompleted
    └── OrderShipped

Order 67890
    │
    ├── OrderCreated
    ├── PaymentCompleted
    └── OrderShipped`,
		},
		{
			type: "paragraph",
			id: "ordering-scope",
			text: "If each order must preserve its own sequence but different orders can be processed independently, partitioning or another per-entity ordering mechanism may be appropriate.",
		},
		{
			type: "callout",
			id: "ordering-question",
			label: "Define the scope",
			text: "What exactly must be ordered: all events, events for one aggregate, events for one customer, or a smaller subset of the workflow?",
		},

		{
			type: "heading",
			id: "saga",
			level: 2,
			text: "When a workflow spans services",
		},
		{
			type: "paragraph",
			id: "saga-intro",
			text: "If one business workflow spans multiple services and databases, a local database transaction cannot roll the entire process back. You need explicit handling for partial completion.",
		},
		{
			type: "code",
			id: "saga-example",
			language: "Workflow",
			code: `Create Order
     ↓
Charge Payment
     ↓
Reserve Inventory
     X
     ↓
Refund Payment`,
		},
		{
			type: "paragraph",
			id: "saga-explanation",
			text: "A Saga coordinates local transactions and uses compensating business actions when later steps fail. A refund, for example, is a business operation that compensates for a previous payment rather than a database rollback.",
		},
		{
			type: "table",
			id: "saga-table",
			table: {
				headers: ["Approach", "Use when", "Main consideration"],
				rows: [
					[
						"Choreography",
						"Services can react independently to events",
						"Complex workflows can become difficult to follow",
					],
					[
						"Orchestration",
						"A workflow needs explicit central coordination",
						"Workflow ownership becomes concentrated in the orchestrator",
					],
				],
			},
		},
		{
			type: "callout",
			id: "saga-question",
			label: "Ownership question",
			text: "Where does ownership of the business workflow actually belong? The answer should guide whether the workflow is coordinated centrally or emerges from independent event reactions.",
		},

		{
			type: "heading",
			id: "external-integrations",
			level: 2,
			text: "When the other system is external",
		},
		{
			type: "paragraph",
			id: "external-integrations-intro",
			text: "External providers create a different boundary from internal event consumers. Webhooks are often the natural integration mechanism, but they still need to be treated as unreliable asynchronous delivery.",
		},
		{
			type: "code",
			id: "webhook-flow",
			language: "Webhook",
			code: `External Provider
       │
       ▼
    Webhook
       │
       ▼
    Validate
       │
       ▼
Persist / Deduplicate
       │
       ▼
   Acknowledge
       │
       ▼
    Process`,
		},
		{
			type: "paragraph",
			id: "external-integrations-behaviour",
			text: "The provider may retry the webhook, send it more than once, or deliver it after a delay. Persisting the notification and deduplicating it before performing business work makes those behaviours explicit rather than exceptional.",
		},
		{
			type: "callout",
			id: "external-integrations-question",
			label: "Boundary question",
			text: "Which guarantees are actually controlled by your system, and which are determined by the external provider?",
		},

		{
			type: "heading",
			id: "event-contracts",
			level: 2,
			text: "When the event contract changes",
		},
		{
			type: "paragraph",
			id: "event-contracts-intro",
			text: "Once multiple consumers depend on an event, changing its schema becomes a compatibility problem. Producers and consumers may be deployed independently, so they cannot necessarily be upgraded together.",
		},
		{
			type: "code",
			id: "event-contract",
			language: "JSON",
			code: `{
  "eventType": "OrderPlaced",
  "orderId": "12345",
  "customerId": "456"
}`,
		},
		{
			type: "list",
			id: "event-contract-checklist",
			items: [
				{
					content: [
						{
							type: "text",
							text: "Define ownership. ",
							strong: true,
						},
						{
							type: "text",
							text: "Know which team or component owns the contract.",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Prefer compatible changes. ",
							strong: true,
						},
						{
							type: "text",
							text: "Adding optional information is generally easier to roll out than changing the meaning or shape of existing data.",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Plan breaking changes. ",
							strong: true,
						},
						{
							type: "text",
							text: "Know how consumers will migrate and whether old versions need to remain available.",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Test consumers against contracts. ",
							strong: true,
						},
						{
							type: "text",
							text: "Treat compatibility as part of the delivery process rather than discovering it after deployment.",
						},
					],
				},
			],
		},
		{
			type: "callout",
			id: "event-contract-rule",
			label: "Contract reminder",
			text: "An event is an API between independently evolving components. Apply the same care to its compatibility and ownership that you would apply to a public HTTP API.",
		},

		{
			type: "heading",
			id: "observability",
			level: 2,
			text: "When you cannot tell where an event went",
		},
		{
			type: "paragraph",
			id: "observability-intro",
			text: "Asynchronous systems remove the simple request-response path that makes synchronous failures relatively easy to trace. An event should therefore carry enough identity and context to reconstruct its journey.",
		},
		{
			type: "table",
			id: "observability-table",
			table: {
				headers: ["Signal", "Useful for"],
				rows: [
					[
						"Event ID",
						"Identifying one delivery or business event",
					],
					[
						"Correlation ID",
						"Connecting related operations",
					],
					[
						"Trace ID",
						"Following the event across distributed services",
					],
					[
						"Processing timestamps",
						"Finding delays and bottlenecks",
					],
					[
						"Retry count and failure reason",
						"Understanding repeated failures",
					],
					[
						"Consumer lag",
						"Finding workloads that are falling behind",
					],
					[
						"DLQ metrics",
						"Detecting messages requiring intervention",
					],
				],
			},
		},
		{
			type: "callout",
			id: "observability-question",
			label: "Production test",
			text: "Can you answer both “Where is this business transaction now?” and “Why has the expected downstream action not happened?” without manually inspecting every service?",
		},

		{
			type: "heading",
			id: "large-messages",
			level: 2,
			text: "When the message is too large",
		},
		{
			type: "paragraph",
			id: "large-messages-intro",
			text: "Events should normally carry the information consumers need to react to the business fact. Large documents or binary objects are often better stored outside the messaging system.",
		},
		{
			type: "code",
			id: "claim-check",
			language: "Claim Check",
			code: `Producer
   │
   ├──→ Object Storage
   │       └── 50 MB document
   │
   └──→ Broker
          └── small event
                │
                ▼
             Consumer
                │
                └──→ Retrieve document`,
		},
		{
			type: "paragraph",
			id: "large-messages-example",
			text: "The event might contain an orderId and documentId rather than the document itself. This keeps the messaging path small while allowing the consumer to retrieve the associated object when required.",
		},

		{
			type: "heading",
			id: "technology-selection",
			level: 2,
			text: "When choosing the technology",
		},
		{
			type: "paragraph",
			id: "technology-selection-intro",
			text: "Technology selection should be the final part of the architecture decision. By this point, the messaging pattern and required guarantees should already be clear.",
		},
		{
			type: "table",
			id: "technology-selection-table",
			table: {
				headers: ["Requirement", "Questions to answer"],
				rows: [
					[
						"Delivery",
						"What delivery and acknowledgement behaviour is required?",
					],
					[
						"Consumers",
						"Are consumers competing or independent?",
					],
					[
						"Ordering",
						"What needs ordering and at what scope?",
					],
					[
						"Retention",
						"How long must messages remain available?",
					],
					[
						"Replay",
						"Do we need historical reprocessing?",
					],
					[
						"Throughput",
						"What volume and peak traffic must the platform handle?",
					],
					[
						"Operations",
						"Who will run, monitor, secure, and support it?",
					],
					[
						"Failure",
						"How are retries, dead letters, and recovery handled?",
					],
				],
			},
		},
		{
			type: "cards",
			id: "technology-options",
			columns: 2,
			items: [
				{
					tag: "Event streaming",
					title: "Kafka",
					description:
						"A strong fit where durable streams, partitions, consumer groups, retention, replay, and high throughput are important and the operational model is justified.",
					tone: "primary",
				},
				{
					tag: "Messaging",
					title: "RabbitMQ",
					description:
						"A natural option when queues, acknowledgements, routing, and competing consumers are central to the problem.",
				},
				{
					tag: "Managed",
					title: "Cloud messaging",
					description:
						"Services such as SQS/SNS, EventBridge, Azure Service Bus, and Google Cloud Pub/Sub can reduce infrastructure management when aligned with the existing cloud environment.",
				},
				{
					tag: "Other",
					title: "Alternative platforms",
					description:
						"Pulsar, NATS, Redis Streams, and other systems may be appropriate for particular throughput, latency, topology, or operational requirements.",
				},
			],
		},
		{
			type: "code",
			id: "technology-sequence",
			language: "Decision sequence",
			code: `Business requirement
        ↓
Required guarantee
        ↓
Messaging pattern
        ↓
Technology`,
		},
		{
			type: "callout",
			id: "technology-selection-rule",
			label: "Selection rule",
			text: "Do not choose a platform because it is familiar. Choose the smallest operational model that satisfies the guarantees the system actually requires.",
		},

		{
			type: "heading",
			id: "architecture-review",
			level: 2,
			text: "Architecture review checklist",
		},
		{
			type: "paragraph",
			id: "architecture-review-intro",
			text: "For a design review, these are the questions worth answering explicitly. They are intentionally grouped by concern rather than by technology.",
		},
		{
			type: "list",
			id: "architecture-review-list",
			items: [
				{
					content: [
						{
							type: "text",
							text: "Business flow. ",
							strong: true,
						},
						{
							type: "text",
							text: "What happened? Why does another component need to know? Is the message a fact or an instruction?",
						},
					],
					items: [
						{
							content:
								"Can this interaction remain synchronous?",
						},
						{
							content:
								"What business capability owns the resulting work?",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Delivery. ",
							strong: true,
						},
						{
							type: "text",
							text: "What happens when publishing, consumption, acknowledgement, or a downstream dependency fails?",
						},
					],
					items: [
						{
							content:
								"Is the business change protected by an Outbox?",
						},
						{
							content:
								"Are retries bounded and observable?",
						},
						{
							content:
								"Is the DLQ actionable?",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Duplicates and ordering. ",
							strong: true,
						},
						{
							type: "text",
							text: "What happens if the message arrives twice or arrives out of sequence?",
						},
					],
					items: [
						{
							content:
								"Where is idempotency enforced?",
						},
						{
							content:
								"What business entity defines ordering?",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Distributed workflows. ",
							strong: true,
						},
						{
							type: "text",
							text: "Does the workflow span multiple local transactions?",
						},
					],
					items: [
						{
							content:
								"Where does workflow ownership live?",
						},
						{
							content:
								"What compensating actions are required?",
						},
						{
							content:
								"Would choreography or orchestration make the flow clearer?",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Contracts. ",
							strong: true,
						},
						{
							type: "text",
							text: "Who owns the event schema and how will consumers migrate when it changes?",
						},
					],
					items: [
						{
							content:
								"Which changes are backward compatible?",
						},
						{
							content:
								"How are breaking changes introduced?",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Operations. ",
							strong: true,
						},
						{
							type: "text",
							text: "Can an operator trace an event, locate stuck work, understand failures, and replay safely?",
						},
					],
					items: [
						{
							content:
								"Are event and correlation IDs available?",
						},
						{
							content:
								"Is consumer lag visible?",
						},
						{
							content:
								"Are retry storms and DLQ growth detectable?",
						},
					],
				},
				{
					content: [
						{
							type: "text",
							text: "Payloads and infrastructure. ",
							strong: true,
						},
						{
							type: "text",
							text: "Is the message appropriately sized, and does the selected platform provide the required guarantees without unnecessary operational burden?",
						},
					],
					items: [
						{
							content:
								"Should large objects use Claim Check?",
						},
						{
							content:
								"Does the chosen platform actually provide the required retention, replay, ordering, and throughput?",
						},
					],
				},
			],
		},
		{
			type: "callout",
			id: "architecture-review-outcome",
			label: "A useful review outcome",
			tone: "success",
			text: "A good design review should leave the team able to explain what happens on the happy path, what happens when each important dependency fails, how duplicates are handled, what must be ordered, who owns the workflow, and how an operator will diagnose the system in production.",
		},

		{
			type: "heading",
			id: "patterns-at-a-glance",
			level: 2,
			text: "Patterns at a glance",
		},
		{
			type: "table",
			id: "patterns-table",
			table: {
				headers: ["Situation", "Pattern / mechanism", "Primary concern"],
				rows: [
					[
						"Database commit must imply an event will be published",
						"Transactional Outbox",
						"Reliable publication intent",
					],
					[
						"Consumer may receive the same event repeatedly",
						"Idempotency / deduplication",
						"Prevent repeated business effects",
					],
					[
						"Transient consumer failures are expected",
						"Retry with backoff and jitter",
						"Recover without amplifying failure",
					],
					[
						"Messages cannot be processed successfully after retries",
						"Dead Letter Queue",
						"Isolation and operational recovery",
					],
					[
						"Events for one entity must remain ordered",
						"Partitioning / sequencing",
						"Scoped ordering",
					],
					[
						"One business workflow spans local transactions",
						"Saga",
						"Coordination and compensation",
					],
					[
						"External provider sends asynchronous notifications",
						"Webhook ingestion",
						"External retries and duplicates",
					],
					[
						"Several consumers depend on one event schema",
						"Contract/versioning strategy",
						"Independent evolution",
					],
					[
						"Large data should not travel through the broker",
						"Claim Check",
						"Payload size and storage boundaries",
					],
				],
			},
		},

		{
			type: "heading",
			id: "faq",
			level: 2,
			text: "FAQ",
		},
		{
			type: "faq",
			id: "faq-items",
			items: [
				{
					question:
						"If I already have REST APIs, when is an event actually justified?",
					answer:
						"When the caller should not need to know about every downstream consequence, or when several independent consumers need to react to the same business fact. If the caller needs a result before completing the operation, keep that part synchronous. Event-driven communication is most useful where it removes a dependency or provides a required asynchronous property.",
				},
				{
					question:
						"Should an OrderPlaced event contain everything consumers might need?",
					answer:
						"Not necessarily. An event should contain the information required to interpret the business fact and perform the intended reaction. Avoid treating events as arbitrary snapshots of the producer's database. Large or sensitive data may belong elsewhere, and consumers should not become coupled to producer-internal fields simply because they are present in the payload.",
				},
				{
					question:
						"How do I decide whether an event should be published before or after the transaction commits?",
					answer:
						"If the event represents a business fact that must only exist when the transaction succeeds, persist the event as part of the same transaction, commonly through an Outbox. Publishing before the business transaction is committed can expose a fact that is subsequently rolled back. Publishing independently after the commit creates a failure window unless the publication intent is durably recorded.",
				},
				{
					question:
						"Do I need exactly-once delivery if duplicate processing is dangerous?",
					answer:
						"First determine whether the business operation can be made idempotent. In many systems, the practical design is at-least-once delivery combined with an idempotency key, deduplication record, or a naturally idempotent operation. Exactly-once semantics, where available, do not remove the need to reason about external side effects.",
				},
				{
					question:
						"Where should idempotency be implemented?",
					answer:
						"At the boundary where repeating the business operation would create an unwanted effect. A consumer can record a stable business or request identifier before or alongside the side effect, depending on the consistency requirements. The important property is that a repeated delivery cannot accidentally repeat a non-idempotent business action.",
				},
				{
					question:
						"How much ordering should an event-driven system guarantee?",
					answer:
						"Only as much as the business requires. Global ordering is expensive and often unnecessary. Define the smallest meaningful scope, such as all events for one order or account, then select a partitioning or sequencing strategy that preserves that scope while allowing unrelated entities to progress independently.",
				},
				{
					question:
						"When does a Saga become preferable to ordinary event choreography?",
					answer:
						"When the business process has explicit sequencing, failure handling, compensation, or completion semantics that would otherwise be difficult to see in a chain of independent reactions. Choreography can remain appropriate for loosely coupled reactions; orchestration becomes useful when the workflow itself needs a clearly owned process.",
				},
				{
					question:
						"Should a failed event always go straight to a dead-letter queue?",
					answer:
						"No. First distinguish transient failures from permanent failures. Temporary dependency failures usually deserve bounded retries with backoff. A malformed message or persistent business validation failure may be better isolated earlier. A DLQ should represent work requiring investigation or deliberate recovery, not simply work that was inconvenient to process.",
				},
				{
					question:
						"How should I handle a webhook from an external provider?",
					answer:
						"Treat it as an unreliable asynchronous input. Validate it, authenticate it where appropriate, persist or deduplicate it using a stable external identifier, acknowledge it within the provider's expected timeframe, and perform longer-running business processing separately. Assume that the provider can retry or deliver the same notification more than once.",
				},
				{
					question:
						"When does an event schema need versioning?",
					answer:
						"Versioning becomes important when consumers cannot all migrate together and a change would break an existing consumer. Prefer compatible evolution where practical, such as adding optional fields, and establish a migration strategy before introducing breaking changes. The exact mechanism matters less than making compatibility an explicit part of the contract.",
				},
				{
					question:
						"How can I tell whether Kafka is actually warranted?",
					answer:
						"Start with the required guarantees rather than Kafka's feature set. Ask whether you need durable streams, retention, replay, partitions, consumer groups, high throughput, independent consumption, or similar capabilities. If those requirements are not present, a simpler queue, managed messaging service, or direct API may provide the necessary behaviour with less operational overhead.",
				},
				{
					question:
						"What should I be able to see when an event fails in production?",
					answer:
						"You should be able to identify the event, connect it to the relevant business transaction, determine which consumer processed it, see when attempts occurred, understand the failure reason, identify retry or DLQ state, and determine whether replay is safe. If those questions cannot be answered, the system is difficult to operate regardless of how well the happy path works.",
				},
			],
		},

		{
			type: "heading",
			id: "final-reference",
			level: 2,
			text: "The short version",
		},
		{
			type: "paragraph",
			id: "final-reference-intro",
			lead: true,
			text: "For most event-driven design decisions, the following sequence is enough to get to the right question quickly.",
		},
		{
			type: "steps",
			id: "final-reference-steps",
			items: [
				{
					title: "Identify what happened",
					description:
						"Define the business fact and decide whether you actually need an event.",
				},
				{
					title: "Separate synchronous work",
					description:
						"Keep work synchronous when the current operation requires its result. Make independent consequences asynchronous where useful.",
				},
				{
					title: "Define the delivery model",
					description:
						"Decide whether consumers compete for work or independently react to the same event.",
				},
				{
					title: "Design for failure",
					description:
						"Cover publication failure, retries, dead letters, duplicate delivery, ordering, and idempotency.",
				},
				{
					title: "Define distributed ownership",
					description:
						"For multi-service workflows, decide where orchestration, choreography, and compensation belong.",
				},
				{
					title: "Define the contract",
					description:
						"Treat event schemas as interfaces between independently evolving components.",
				},
				{
					title: "Make it operable",
					description:
						"Add the identity, tracing, metrics, retry visibility, and replay mechanisms required to diagnose production behaviour.",
				},
				{
					title: "Choose the technology",
					description:
						"Only now select the broker or messaging platform that provides the guarantees the design actually needs.",
				},
			],
		},
		{
			type: "callout",
			id: "final-principle",
			label: "Final principle",
			tone: "definition",
			text: "The technology should follow the architecture. The architecture should follow the business problem.",
		},
		{
			type: "cta",
			id: "final-cta",
			title: "See it applied in a working project",
			text: "Explore a working event-driven appointments API to see these architectural ideas applied in a concrete backend system.",
			href: eventsApiHref,
			label: "View the event-driven API",
		},
	],
};

export default article;