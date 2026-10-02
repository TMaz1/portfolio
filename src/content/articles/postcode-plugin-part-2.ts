import type { ContentDocument } from "../../types/content";

const part1Href =
    "/articles/what-would-i-do-with-a-2-7m-rows-csv-today-part-1";

const article: ContentDocument = {
    kind: "article",
    slug: "what-would-i-do-with-a-2-7m-rows-csv-today-part-2",
    title: "What would I do with a 2.7M+ rows CSV today? Part 2",
    eyebrow: "ARTICLE / CASE STUDY / POSTCODE WORDPRESS PLUGIN / PART 2",
    intro:
        "If I rebuilt the 2.7M+ postcode import today, I would keep the parts that worked and redesign the process around bounded work, resumability, staging, observability and controlled failure.",
    heroLink: {
        label: "Read Part 1: The original 2.7M+ postcode import",
        href: part1Href,
    },
    archive: {
        category: "Performance",
        filterCategories: ["performance", "backend", "research"],
        readingTime: "14 min",
        year: 2026,
    },
    blocks: [
        {
            type: "paragraph",
            id: "part1-context",
            lead: true,
            text: [
                {
                    type: "text",
                    text: "This is Part 2 of the postcode-radius case study. ",
                },
                {
                    type: "link",
                    text: "Part 1 covers the original problem, API investigation, ONS dataset, batching strategy, database design and distance calculation",
                    href: part1Href,
                },
                {
                    type: "text",
                    text: ".",
                },
            ],
        },
        {
            type: "heading",
            id: "today",
            level: 2,
            text: "What I’d change today",
        },
        {
            type: "paragraph",
            id: "today-intro",
            text: "The original postcode-radius plugin solved the problem it was built to solve.",
        },
        {
            type: "paragraph",
            id: "today-approach",
            text: "If I were given the same requirement today, I wouldn't start by rewriting everything. I'd keep the parts that were proven to work — MariaDB, local postcode data, batched inserts and the existing WooCommerce integration — and redesign the import process around reliability, observability and controlled failure.",
        },
        {
            type: "paragraph",
            id: "today-commercial-context",
            text: "The important distinction is that this is a commercial plugin, not a distributed data platform.",
        },
        {
            type: "callout",
            id: "today-design-question",
            label: "The design question",
            tone: "definition",
            text: "What changes materially improve reliability or maintainability for the amount of time and money the business is prepared to invest?",
        },
        {
            type: "paragraph",
            id: "today-proportion",
            text: "There is a temptation, especially with more experience, to over-engineer a problem because you now know how sophisticated systems can be built. I don't think that would be appropriate here. That question would determine the redesign.",
        },

        {
            type: "heading",
            id: "separate-problems",
            level: 2,
            text: "First, I would separate the actual problems",
        },
        {
            type: "paragraph",
            id: "separate-problems-intro",
            text: "There are really three different systems involved:",
        },
        {
            type: "code",
            id: "system-separation",
            language: "Architecture",
            code: `ONS CSV
   ↓
Import pipeline
   ↓
Postcode reference database
   ↓
WooCommerce postcode/radius lookup`,
        },
        {
            type: "paragraph",
            id: "separate-problems-difference",
            text: "The import pipeline has a very different set of requirements from the runtime WooCommerce lookup. The import can take minutes. The WooCommerce request cannot reasonably be designed around a multi-minute operation.",
        },
        {
            type: "cards",
            id: "system-requirements",
            columns: 2,
            items: [
                {
                    tag: "Import",
                    title: "Controlled background work",
                    icon: "01",
                    description:
                        "Bounded, resumable, observable, recoverable and safe to cancel. An individual execution should have a predictable amount of work.",
                    tone: "primary",
                },
                {
                    tag: "Runtime",
                    title: "Predictable lookup",
                    icon: "02",
                    description:
                        "Indexed, lightweight and sufficiently fast for a customer-facing WooCommerce request.",
                    tone: "secondary",
                },
            ],
        },
        {
            type: "paragraph",
            id: "separate-problems-foundation",
            text: "That separation would be the foundation of the redesign.",
        },

        {
            type: "heading",
            id: "import-job",
            level: 2,
            text: "Stop treating the import as one long PHP request",
        },
        {
            type: "paragraph",
            id: "import-job-first",
            text: "This is the change I'd make before anything else.",
        },
        {
            type: "paragraph",
            id: "import-job-original",
            text: "The original implementation increased PHP execution and memory limits because the import could take a long time. That helped the successful path, but it doesn't make the process resilient.",
        },
        {
            type: "paragraph",
            id: "import-job-model",
            text: "Today I'd use an import job with explicit state:",
        },
        {
            type: "code",
            id: "import-state",
            language: "Job state",
            code: `pending
   ↓
running
   ↓
validating
   ↓
publishing
   ↓
completed

failure and cancellation paths
alongside the normal flow`,
        },
        {
            type: "paragraph",
            id: "import-job-record",
            text: "The job record would store things such as:",
        },
        {
            type: "code",
            id: "import-job-fields",
            language: "Database fields",
            code: `id
status
file_path
file_size
processed_rows
file_offset
started_at
heartbeat_at
finished_at
last_error`,
        },
        {
            type: "paragraph",
            id: "import-job-infrastructure",
            text: "This isn't complicated infrastructure. It's a database table. And commercially, that's important.",
        },
        {
            type: "paragraph",
            id: "import-job-no-distributed-system",
            text: "I wouldn't introduce Redis, Kafka, RabbitMQ, Kubernetes or a separate worker service simply because I know those technologies exist. The requirement doesn't justify that complexity. MariaDB is already part of the application and can store the state.",
        },

        {
            type: "heading",
            id: "bounded-batches",
            level: 2,
            text: "Priority 1: bounded batches and resumability",
        },
        {
            type: "paragraph",
            id: "bounded-batches-priority",
            text: "This would be my highest-priority improvement.",
        },
        {
            type: "paragraph",
            id: "bounded-batches-model",
            text: "The worker should process a limited number of rows per execution:",
        },
        {
            type: "code",
            id: "bounded-batches-flow",
            language: "Import worker",
            code: `read 5,000–10,000 rows
        ↓
parse
        ↓
build multi-row INSERT
        ↓
commit
        ↓
save progress
        ↓
next request`,
        },
        {
            type: "paragraph",
            id: "bounded-batches-size",
            text: "The exact batch size should be benchmarked rather than hard-coded from theory. The important part is that one PHP execution has a predictable amount of work.",
        },
        {
            type: "paragraph",
            id: "bounded-batches-resume",
            text: "If it fails after processing 2.1 million rows, the system should not need to start again from byte zero. I'd persist the CSV byte offset and the number of successfully processed records.",
        },
        {
            type: "callout",
            id: "bounded-batches-result",
            label: "Reliability improvement",
            tone: "success",
            text: "Instead of “The import failed”, the system can say “Batch 420 failed; the previous 419 batches are committed and the job can continue from the last checkpoint.”",
        },
        {
            type: "paragraph",
            id: "bounded-batches-reference",
            text: [
                {
                    type: "text",
                    text: "This builds directly on the ",
                },
                {
                    type: "link",
                    text: "chunked file reads and aggregated inserts from Part 1",
                    href: `${part1Href}?section=first-implementation`,
                },
                {
                    type: "text",
                    text: ", but changes the unit of work from an optimisation inside one long process into an independently resumable batch.",
                },
            ],
        },

        {
            type: "heading",
            id: "staging",
            level: 2,
            text: "Priority 2: staging instead of writing directly to production",
        },
        {
            type: "paragraph",
            id: "staging-intro",
            text: "This would be the second change I'd consider essential.",
        },
        {
            type: "paragraph",
            id: "staging-model",
            text: "The live table should represent one complete postcode dataset. The next dataset should be built separately:",
        },
        {
            type: "code",
            id: "staging-tables",
            language: "Database",
            code: `wp_postcodes
    ↓
current production data


wp_postcodes_import_42
    ↓
new dataset being constructed`,
        },
        {
            type: "paragraph",
            id: "staging-failure",
            text: "This gives the import a useful property: it can fail without corrupting the data currently being used by WooCommerce.",
        },
        {
            type: "callout",
            id: "staging-example",
            label: "Failure scenario",
            tone: "info",
            text: "If the import fails at 85%, the production table remains 100% usable. The incomplete staging table can be resumed or discarded.",
        },
        {
            type: "paragraph",
            id: "staging-value",
            text: "That is much more valuable than shaving another 20 seconds off the import.",
        },
        {
            type: "paragraph",
            id: "staging-commercial",
            text: [
                {
                    type: "text",
                    text: "The postcode database ultimately affects shipping rules. As ",
                },
                {
                    type: "link",
                    text: "Part 1 explains in more detail",
                    href: `${part1Href}?section=actual-impact`,
                },
                {
                    type: "text",
                    text: ", an incorrect postcode set can affect shipping price or availability. Protecting the existing valid dataset during an import therefore has more business value than making the import marginally faster.",
                },
            ],
        },

        {
            type: "heading",
            id: "transactions",
            level: 2,
            text: "Priority 3: transactions around each batch",
        },
        {
            type: "paragraph",
            id: "transactions-scope",
            text: "I would use transactions, but I would keep their scope deliberately small.",
        },
        {
            type: "code",
            id: "transaction-flow",
            language: "Transaction",
            code: `BEGIN

INSERT 5,000–10,000 rows

UPDATE import progress
UPDATE heartbeat

COMMIT`,
        },
        {
            type: "paragraph",
            id: "transaction-failure",
            text: "If the batch fails:",
        },
        {
            type: "code",
            id: "transaction-rollback",
            language: "Transaction",
            code: `ROLLBACK`,
        },
        {
            type: "paragraph",
            id: "transaction-boundary",
            text: "This gives each batch a clear success boundary.",
        },
        {
            type: "paragraph",
            id: "transaction-not-global",
            text: "I would not wrap the entire three-million-row import in one transaction. That would create a very large transaction, increase resource usage and rollback cost, and potentially create unnecessary locking or undo-log pressure.",
        },
        {
            type: "callout",
            id: "transaction-distinction",
            label: "Important distinction",
            tone: "definition",
            text: "Transactions make each unit of work atomic; they do not make the entire import atomic. The staging table and final publication mechanism provide the higher-level safety boundary.",
        },

        {
            type: "heading",
            id: "indexes",
            level: 2,
            text: "Priority 4: indexes — but at the right time",
        },
        {
            type: "paragraph",
            id: "indexes-runtime",
            text: "The database needs indexes because the runtime postcode lookup is fundamentally different from the import. For example, postcode and outcode need to support efficient lookups.",
        },
        {
            type: "paragraph",
            id: "indexes-cost",
            text: "But I wouldn't automatically create every conceivable index during import. Indexes have a cost: every inserted row has to maintain the relevant index structures, which can slow bulk loading and consume additional storage.",
        },
        {
            type: "paragraph",
            id: "indexes-benchmark",
            text: "For a large initial load, I would benchmark two approaches:",
        },
        {
            type: "code",
            id: "index-strategies",
            language: "Import strategies",
            code: `A:
insert into indexed table

B:
load into appropriately constrained staging table
→ build required indexes afterwards`,
        },
        {
            type: "paragraph",
            id: "indexes-caveat",
            text: "For a multi-million-row dataset, building indexes after bulk loading can be attractive because the database isn't maintaining those indexes for every individual insert. But the correct answer depends on MariaDB version, table size, storage engine, index definitions and actual measurements.",
        },
        {
            type: "paragraph",
            id: "indexes-staging",
            text: "The production table should certainly have the indexes required for its runtime access patterns. The staging table doesn't necessarily need to behave identically while it is being constructed.",
        },
        {
            type: "paragraph",
            id: "indexes-reference",
            text: [
                {
                    type: "text",
                    text: "This is an extension of the deliberately small database design discussed in ",
                },
                {
                    type: "link",
                    text: "Part 1",
                    href: `${part1Href}?section=postcode-database`,
                },
                {
                    type: "text",
                    text: ": the schema should support the application's actual access patterns rather than reproducing the source dataset indiscriminately.",
                },
            ],
        },

        {
            type: "heading",
            id: "validation",
            level: 2,
            text: "Priority 5: validate before publication",
        },
        {
            type: "paragraph",
            id: "validation-intro",
            text: "Once the import reaches the end of the CSV, I'd still not publish it immediately.",
        },
        {
            type: "cards",
            id: "validation-checks",
            columns: 3,
            items: [
                {
                    tag: "Structure",
                    title: "Source validation",
                    description:
                        "Check expected columns, required postcode fields and the basic structure of the imported data.",
                    icon: "01",
                },
                {
                    tag: "Data",
                    title: "Dataset validation",
                    description:
                        "Check row count, latitude and longitude validity, duplicate postcodes and whether the resulting dataset is plausible.",
                    icon: "02",
                },
                {
                    tag: "Runtime",
                    title: "Application validation",
                    description:
                        "Run sample lookups and confirm that the required indexes and runtime access patterns are present.",
                    icon: "03",
                },
            ],
        },
        {
            type: "paragraph",
            id: "validation-trusted-source",
            text: "The ONS source is trusted data, but that doesn't mean an importer should blindly assume every input file is valid.",
        },
        {
            type: "paragraph",
            id: "validation-plausibility",
            text: "I'd also verify that the resulting dataset is plausible. For example, if the previous dataset contains roughly three million records and the new import suddenly contains [expected row-count range], that should be visible rather than silently becoming the new production database.",
        },
        {
            type: "paragraph",
            id: "validation-scope",
            text: "The validation doesn't need to become an enormous data-quality platform. It needs to catch the failures that could make publication unsafe.",
        },

        {
            type: "heading",
            id: "publication",
            level: 2,
            text: "Priority 6: atomic publication and rollback",
        },
        {
            type: "paragraph",
            id: "publication-goal",
            text: "Once the staging dataset is validated, I'd publish it.",
        },
        {
            type: "paragraph",
            id: "publication-boundary",
            text: "The goal is that WooCommerce sees either:",
        },
        {
            type: "code",
            id: "publication-outcomes",
            language: "Publication",
            code: `old complete dataset

or

new complete dataset

not:

half of the old dataset
+
half of the new dataset`,
        },
        {
            type: "paragraph",
            id: "publication-mechanism",
            text: "The exact table-swap mechanism would need to be chosen carefully around foreign keys, table naming, WordPress conventions and the storage engine.",
        },
        {
            type: "paragraph",
            id: "publication-rollback",
            text: "I would also retain the previous production table temporarily where practical. For example:",
        },
        {
            type: "code",
            id: "publication-previous",
            language: "Database",
            code: `wp_postcodes
wp_postcodes_previous`,
        },
        {
            type: "paragraph",
            id: "publication-cleanup",
            text: "Then, after the new dataset has been verified in production, the previous table can be removed. That gives you a rollback path without requiring a second infrastructure system.",
        },

        {
            type: "heading",
            id: "worker-lock",
            level: 2,
            text: "Priority 7: prevent two workers processing the same import",
        },
        {
            type: "paragraph",
            id: "worker-lock-problem",
            text: "Once the import becomes resumable, another problem appears. What happens if a browser worker and a WP-Cron worker both decide that import #42 needs processing?",
        },
        {
            type: "paragraph",
            id: "worker-lock-solution",
            text: "You don't want both workers reading and inserting the same batch. I'd therefore introduce a database-backed worker lock or lease.",
        },
        {
            type: "code",
            id: "worker-lock-flow",
            language: "Worker lease",
            code: `acquire import #42
        ↓
process batch
        ↓
renew heartbeat
        ↓
release / next worker`,
        },
        {
            type: "paragraph",
            id: "worker-lock-second",
            text: "If the lock is already held, the second worker exits.",
        },
        {
            type: "paragraph",
            id: "worker-lock-proportion",
            text: "I'd keep this mechanism simple. I don't need a distributed lock service for a WordPress plugin whose worker is already using the same database. A database-backed lease is proportionate to the problem.",
        },

        {
            type: "heading",
            id: "job-states",
            level: 2,
            text: "Priority 8: distinguish failed, cancelled and stale jobs",
        },
        {
            type: "paragraph",
            id: "job-states-intro",
            text: "The import state should tell an administrator what actually happened.",
        },
        {
            type: "code",
            id: "job-state-examples",
            language: "Import status",
            code: `FAILED
Database error while processing batch 183.

CANCELLED
Import cancelled by administrator.

STALE
No worker heartbeat received for [threshold].`,
        },
        {
            type: "paragraph",
            id: "job-states-heartbeat",
            text: "The heartbeat is particularly useful because PHP can disappear without politely updating the database first.",
        },
        {
            type: "paragraph",
            id: "job-states-recovery",
            text: "If the job says running but its last heartbeat was [X] minutes ago, the system can recognise that it probably isn't running anymore. That allows the job to be recovered rather than permanently displaying \"Importing... 63%\".",
        },

        {
            type: "heading",
            id: "wp-cron",
            level: 2,
            text: "I would use WP-Cron carefully",
        },
        {
            type: "paragraph",
            id: "wp-cron-intro",
            text: "WP-Cron is useful here because it can provide a recovery mechanism without introducing external infrastructure. But I wouldn't pretend it is a proper background job scheduler.",
        },
        {
            type: "paragraph",
            id: "wp-cron-model",
            text: "WordPress Cron is traffic-driven and doesn't provide the same guarantees as a dedicated scheduler. So my architecture would be:",
        },
        {
            type: "code",
            id: "wp-cron-architecture",
            language: "Architecture",
            code: `Admin
  ↓
start/import worker
  ↓
bounded batches
  ↓
database progress


WP-Cron
  ↓
find pending/stale jobs
  ↓
recover processing`,
        },
        {
            type: "paragraph",
            id: "wp-cron-role",
            text: "The browser can provide immediate progress while the cron mechanism provides a safety net.",
        },
        {
            type: "paragraph",
            id: "wp-cron-future",
            text: "If the project later justified a real background worker, that would be a future architectural decision rather than something I'd introduce automatically.",
        },
        {
            type: "paragraph",
            id: "wp-cron-reference",
            text: [
                {
                    type: "text",
                    text: "This is one area where I would explicitly replace the original ",
                },
                {
                    type: "link",
                    text: "db_loading.txt / db_complete.txt state approach",
                    href: `${part1Href}?section=wordpress-side`,
                },
                {
                    type: "text",
                    text: " with durable job state in the database.",
                },
            ],
        },

        {
            type: "heading",
            id: "distance-benchmark",
            level: 2,
            text: "The distance calculation deserves its own benchmark",
        },
        {
            type: "paragraph",
            id: "distance-benchmark-original",
            text: [
                {
                    type: "text",
                    text: "The original plugin initially used a Haversine/great-circle calculation. Later, I changed it to ",
                },
                {
                    type: "link",
                    text: "ST_Distance_Sphere()",
                    href: `${part1Href}?section=calculating-distance`,
                },
                {
                    type: "text",
                    text: " and observed better performance for larger result sets.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "distance-benchmark-precision",
            text: "I would keep that observation, but I would be more precise about what it means.",
        },
        {
            type: "paragraph",
            id: "distance-benchmark-question",
            text: "ST_Distance_Sphere() is not automatically faster simply because it is a database function. The database still has to calculate distances for candidate rows.",
        },
        {
            type: "callout",
            id: "distance-benchmark-real-question",
            label: "The real question",
            tone: "definition",
            text: "How many rows are being subjected to the distance calculation?",
        },
        {
            type: "code",
            id: "distance-candidate-problem",
            language: "Query cost",
            code: `millions of rows
        ↓
calculate spherical distance
        ↓
discard most of them`,
        },
        {
            type: "paragraph",
            id: "distance-benchmark-candidates",
            text: "The expensive part may therefore be the number of candidates rather than the choice between two mathematically valid distance calculations.",
        },
        {
            type: "paragraph",
            id: "distance-benchmark-tests",
            text: "Today I would benchmark:",
        },
        {
            type: "list",
            id: "distance-benchmark-list",
            items: [
                {
                    content: "Haversine implementation",
                },
                {
                    content: "ST_Distance_Sphere()",
                },
                {
                    content: "number of candidate rows",
                },
                {
                    content: "total rows examined",
                },
                {
                    content: "execution time",
                },
                {
                    content: "result-set size",
                },
                {
                    content: "different radius sizes",
                },
                {
                    content: "realistic production hardware",
                },
            ],
        },
        {
            type: "paragraph",
            id: "distance-benchmark-query-plan",
            text: "I'd also inspect the query plan.",
        },
        {
            type: "paragraph",
            id: "distance-benchmark-bounding-box",
            text: "The strongest optimisation may not be changing the formula at all. It may be reducing the number of rows that require the formula. For example, a geographic bounding-box pre-filter can potentially exclude points that are obviously outside the requested radius before applying the more expensive spherical calculation.",
        },
        {
            type: "paragraph",
            id: "distance-benchmark-investigate",
            text: "That would be something I'd investigate rather than assume.",
        },

        {
            type: "heading",
            id: "formula-vs-query",
            level: 2,
            text: "Formula optimisation vs query optimisation",
        },
        {
            type: "paragraph",
            id: "formula-vs-query-intro",
            text: "This is where I'd approach the problem differently now.",
        },
        {
            type: "table",
            id: "formula-query-comparison",
            table: {
                headers: [
                    "Question",
                    "Earlier approach",
                    "Approach today",
                ],
                rows: [
                    [
                        "Primary question",
                        "Which distance calculation performs better?",
                        "What is the query doing and where is the actual cost?",
                    ],
                    [
                        "Focus",
                        "Distance formula",
                        "Rows examined, candidate reduction and execution plan",
                    ],
                    [
                        "Evidence",
                        "Observed improvement",
                        "Benchmark across realistic workloads and hardware",
                    ],
                    [
                        "Optimisation target",
                        "Mathematical calculation",
                        "Whole query and number of candidates",
                    ],
                ],
            },
        },
        {
            type: "paragraph",
            id: "formula-vs-query-result",
            text: "If a radius query returns 100,000 postcodes, the database potentially has a significant amount of work to perform. Changing one mathematical implementation may help. Reducing the number of candidate records may help considerably more.",
        },
        {
            type: "paragraph",
            id: "formula-vs-query-profile",
            text: "I'd therefore profile the entire query rather than optimising the most visible line of SQL.",
        },

        {
            type: "heading",
            id: "not-build",
            level: 2,
            text: "What I would deliberately not build",
        },
        {
            type: "paragraph",
            id: "not-build-intro",
            text: "This is just as important.",
        },
        {
            type: "paragraph",
            id: "not-build-overengineering",
            text: "With five years more experience, it would be easy to turn a WordPress plugin into an unnecessarily complicated distributed system.",
        },
        {
            type: "cards",
            id: "not-build-technologies",
            columns: 4,
            items: [
                {
                    title: "Redis",
                    description:
                        "Not solely for storing import state when MariaDB already provides durable application state.",
                },
                {
                    title: "Kafka",
                    description:
                        "Not for an import workflow that does not require a distributed event-streaming architecture.",
                },
                {
                    title: "Kubernetes",
                    description:
                        "Not for a WordPress plugin whose workload does not justify cluster orchestration.",
                },
                {
                    title: "Microservice",
                    description:
                        "Not simply to move the importer into another application or language.",
                },
                {
                    title: "Dedicated server",
                    description:
                        "Not unless the actual scale or operational requirements justify separate infrastructure.",
                },
                {
                    title: "Cloud infrastructure",
                    description:
                        "Not automatically when the existing application and database can handle the workload.",
                },
                {
                    title: "External postcode service",
                    description:
                        "Not where recurring cost or service limitations outweigh the operational benefit.",
                },
                {
                    title: "Separate language",
                    description:
                        "Not purely because another language might be more suitable for data processing in isolation.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "not-build-existing-stack",
            text: "The plugin already lives inside WordPress and already has MariaDB. A database-backed job state, staging table, bounded workers, transactions and sensible indexes solve most of the problem without creating an entirely new operational burden.",
        },
        {
            type: "paragraph",
            id: "not-build-commercial",
            text: "Every new technology has a cost beyond its licence price. There is development time, maintenance, deployment complexity, monitoring, security, documentation, onboarding, failure modes and operational ownership.",
        },
        {
            type: "callout",
            id: "not-build-principle",
            label: "Engineering principle",
            tone: "definition",
            text: "A technically sophisticated solution isn't automatically a commercially appropriate solution.",
        },

        {
            type: "heading",
            id: "one-week",
            level: 2,
            text: "If I only had one week",
        },
        {
            type: "paragraph",
            id: "one-week-intro",
            text: "This is where prioritisation matters. If the backlog was busy and I had one week to improve the plugin, I would not attempt the complete architecture above.",
        },
        {
            type: "steps",
            id: "one-week-priorities",
            items: [
                {
                    title: "Bounded batch processing",
                    description:
                        "Break the import into independently executable chunks.",
                },
                {
                    title: "Import job state",
                    description:
                        "Persist status, processed_rows, file_offset, last_error and heartbeat.",
                },
                {
                    title: "Staging table",
                    description:
                        "Keep the current production dataset untouched during imports.",
                },
                {
                    title: "Transactional multi-row inserts",
                    description:
                        "Keep the performance optimisation that already worked, but give each batch a clear commit/rollback boundary.",
                },
                {
                    title: "Basic validation",
                    description:
                        "Don't publish an obviously invalid dataset.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "one-week-result",
            text: "Those changes would give the biggest reliability improvement without turning the project into a new platform.",
        },

        {
            type: "heading",
            id: "more-time",
            level: 2,
            text: "If I had more time",
        },
        {
            type: "paragraph",
            id: "more-time-intro",
            text: "Then I'd move into the second tier:",
        },
        {
            type: "list",
            id: "more-time-list",
            items: [
                {
                    content: "cooperative cancellation",
                },
                {
                    content: "automatic stale-job recovery",
                },
                {
                    content: "worker leases",
                },
                {
                    content: "better import progress UI",
                },
                {
                    content: "retained failed-job history",
                },
                {
                    content: "retry/discard controls",
                },
                {
                    content: "index-build progress",
                },
                {
                    content: "atomic publication with rollback",
                },
                {
                    content: "more comprehensive validation",
                },
                {
                    content: "import performance metrics",
                },
                {
                    content: "query profiling for radius searches",
                },
                {
                    content: "geographic candidate filtering",
                },
                {
                    content: "more extensive automated tests",
                },
            ],
        },
        {
            type: "paragraph",
            id: "more-time-prioritisation",
            text: "These are valuable, but they aren't all equally important. A backlog doesn't disappear because an engineer has found another interesting technical improvement.",
        },

        {
            type: "heading",
            id: "commercial-architecture",
            level: 2,
            text: "The architecture should follow the requirement",
        },
        {
            type: "paragraph",
            id: "commercial-architecture-question",
            text: "The commercial decision isn't \"best architecture\". It's:",
        },
        {
            type: "callout",
            id: "commercial-architecture-definition",
            label: "The commercial question",
            tone: "definition",
            text: "What is the best architecture that solves the actual risk within the available time and budget?",
        },
        {
            type: "paragraph",
            id: "commercial-architecture-time",
            text: "If the business gives me three days, I'm not proposing a full import orchestration system. If the plugin is going to become a core product used by thousands of merchants and postcode datasets will be updated regularly, the investment case changes.",
        },
        {
            type: "paragraph",
            id: "commercial-architecture-external",
            text: "The architecture should follow the requirement.",
        },
        {
            type: "paragraph",
            id: "commercial-architecture-api",
            text: [
                {
                    type: "text",
                    text: "That also applies to infrastructure. I originally moved away from an API because the available services didn't provide what the plugin required without limitations or additional cost, as ",
                },
                {
                    type: "link",
                    text: "the Part 1 API investigation explains",
                    href: `${part1Href}?section=api-investigation`,
                },
                {
                    type: "text",
                    text: ". I would still think about cost today.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "commercial-architecture-cost",
            text: "If an external postcode service genuinely removed significant operational complexity and its pricing was commercially reasonable, I would evaluate it. But I wouldn't introduce a recurring cost simply because it is technically convenient when MariaDB and the ONS dataset already provide what the application needs.",
        },
        {
            type: "paragraph",
            id: "commercial-architecture-infrastructure",
            text: "The same principle applies to infrastructure: spend money where it removes a meaningful engineering or operational problem.",
        },

        {
            type: "heading",
            id: "measure-redesign",
            level: 2,
            text: "What I'd measure before calling the redesign finished",
        },
        {
            type: "paragraph",
            id: "measure-redesign-intro",
            text: "I wouldn't consider the redesign complete because the code looked cleaner. I'd want measurements.",
        },
        {
            type: "table",
            id: "redesign-measurements",
            table: {
                headers: ["Area", "Measurements"],
                rows: [
                    [
                        "Import performance",
                        "Total import time, rows/second, average batch duration, maximum batch duration",
                    ],
                    [
                        "Resource usage",
                        "Peak PHP memory, database CPU, database I/O",
                    ],
                    [
                        "Import reliability",
                        "Failed batches, retry count, recovery behaviour",
                    ],
                    [
                        "Runtime query",
                        "Execution time, rows examined, rows returned, different radius sizes",
                    ],
                    [
                        "Large workloads",
                        "Small result sets, large result sets and realistic production hardware",
                    ],
                ],
            },
        },
        {
            type: "paragraph",
            id: "measure-redesign-reliability",
            text: "And for reliability, I'd explicitly test:",
        },
        {
            type: "list",
            id: "measure-redesign-tests",
            items: [
                {
                    content: "Can the job resume after PHP dies?",
                },
                {
                    content: "Can it resume after the browser closes?",
                },
                {
                    content: "Can it be cancelled?",
                },
                {
                    content: "Can two workers run simultaneously?",
                },
                {
                    content:
                        "Does failed validation leave production untouched?",
                },
                {
                    content: "Can the previous dataset be restored?",
                },
            ],
        },
        {
            type: "paragraph",
            id: "measure-redesign-value",
            text: "Those tests tell me much more than whether the code is aesthetically cleaner.",
        },

        {
            type: "heading",
            id: "changed-mental-model",
            level: 2,
            text: "The changed mental model",
        },
        {
            type: "paragraph",
            id: "changed-mental-model-speed",
            lead: true,
            text: "The original project was optimised for speed. I'd optimise the system for behaviour.",
        },
        {
            type: "paragraph",
            id: "changed-mental-model-2021",
            text: "In 2021/22, getting the import from approximately two hours to two minutes was the breakthrough. I had identified a recurring operational problem, investigated the constraints, experimented with chunk sizes and insertion strategies, and produced something the team could actually use.",
        },
        {
            type: "paragraph",
            id: "changed-mental-model-today",
            text: "Today, I'd still care about those two minutes. But I wouldn't make them the definition of success.",
        },
        {
            type: "paragraph",
            id: "changed-mental-model-system",
            text: "I'd want a system where:",
        },
        {
            type: "cards",
            id: "changed-mental-model-properties",
            columns: 3,
            items: [
                {
                    title: "Small work",
                    description:
                        "A batch is small enough to finish safely.",
                    icon: "01",
                    tone: "primary",
                },
                {
                    title: "Durable progress",
                    description:
                        "A successful batch is committed and progress is durable.",
                    icon: "02",
                },
                {
                    title: "Recoverable failure",
                    description:
                        "A failed batch can be retried and a dead worker can be detected.",
                    icon: "03",
                },
                {
                    title: "Safe cancellation",
                    description:
                        "A cancelled job can stop without leaving an unsafe production state.",
                    icon: "04",
                },
                {
                    title: "Protected production",
                    description:
                        "An incomplete dataset cannot become production.",
                    icon: "05",
                },
                {
                    title: "Fast runtime",
                    description:
                        "The existing production dataset remains valid and the runtime WooCommerce query remains fast.",
                    icon: "06",
                },
            ],
        },
        {
            type: "paragraph",
            id: "changed-mental-model-proportion",
            text: "And the whole thing remains proportionate to the commercial value of the plugin.",
        },
        {
            type: "paragraph",
            id: "changed-mental-model-complexity",
            text: "That last point matters. There is always another optimisation. There is always another abstraction. There is always another piece of infrastructure that could be introduced. A good engineer needs to know when the additional complexity is worth paying for.",
        },
        {
            type: "callout",
            id: "final-principle",
            label: "The approach I would take today",
            tone: "success",
            text: "The biggest improvement isn't a more exotic database or a faster server. It's changing the mental model from “How do I make this PHP process finish faster?” to “How do I make each PHP execution small, fast, resumable and independently successful?”",
        },
        {
            type: "paragraph",
            id: "final-conclusion",
            text: "That is the approach I would take today.",
        },
        {
            type: "cta",
            id: "part1-cta",
            title: "Start with the original implementation",
            text: "Part 1 covers the problem, technical investigation and optimisation decisions that led to the original two-minute import.",
            href: part1Href,
            label: "Read Part 1",
        },
    ],
};

export default article;