import type { ContentDocument } from "../../types/content";

const part2Href =
	"/articles/what-would-i-do-with-a-2-7m-rows-csv-today-part-2";

const article: ContentDocument = {
	kind: "article",
	slug: "what-would-i-do-with-a-2-7m-rows-csv-today-part-1",
	title: "What would I do with a 2.7M+ rows CSV today? Part 1",
	eyebrow: "ARTICLE / CASE STUDY / POSTCODE WORDPRESS PLUGIN / PART 1",
	intro:
		"A technical case study of building a WooCommerce-compatible postcode-radius tool, processing 2.7M+ postcode records, and the engineering decisions behind reducing a multi-hour database import to roughly two minutes.",
	heroLink: {
		label: "Read Part 2: What I’d Change Today",
		href: part2Href,
	},
	archive: {
		category: "Performance",
		filterCategories: ["performance", "backend", "research"],
		readingTime: "15 min",
		year: 2026,
	},
	blocks: [
		{
			type: "heading",
			id: "introduction",
			level: 2,
			text: "The project",
		},
		{
			type: "paragraph",
			id: "introduction-context",
			lead: true,
			text: "In 2021/22, while working as a Service Desk Assistant within a web development team, I moved fairly quickly into a hybrid support/development role. We managed an estate of 800+ WordPress websites, so development work was closely tied to operational efficiency: if something could save developers time during a site launch or support ticket, it had a direct effect on how quickly we could get merchants live.",
		},
		{
			type: "paragraph",
			id: "introduction-ownership",
			text: "This was my first solo WordPress plugin. I had previously worked with another junior developer on a bespoke loan/quota/financial calculator, but this project gave me substantially more ownership over the technical direction.",
		},
		{
			type: "paragraph",
			id: "introduction-plugin",
			text: "The plugin became a custom WooCommerce-compatible postcode-radius tool.",
		},
		{
			type: "quote",
			id: "original-cv-bullet",
			text: "Optimised generation of a MySQL database containing 2.7M+ UK postcodes using chunked inserts, reducing processing time from approximately 2 hours to 2 minutes.",
			attribution: "Original CV bullet point",
		},
		{
			type: "paragraph",
			id: "introduction-context-after",
			text: "Five years later, there is considerably more context behind that sentence.",
		},

		{
			type: "heading",
			id: "why-build-the-plugin",
			level: 2,
			text: "Why build the plugin?",
		},
		{
			type: "paragraph",
			id: "why-build-intro",
			text: "The team had a recurring problem with merchants whose shipping costs depended on distance.",
		},
		{
			type: "paragraph",
			id: "why-build-problem",
			text: "A merchant might charge one price within three miles, another within five miles, or only deliver within a particular radius. WooCommerce supports restricting shipping methods by postcode, but generating the required postcode list was manual.",
		},
		{
			type: "paragraph",
			id: "why-build-workflow",
			text: "The existing workflow involved finding a third-party postcode service, entering the merchant's postcode and radius, retrieving the results, formatting them correctly, and then adding them to WooCommerce.",
		},
		{
			type: "paragraph",
			id: "why-build-formatting",
			text: "That formatting mattered. WooCommerce supports wildcard outcodes such as:",
		},
		{
			type: "code",
			id: "postcode-wildcards",
			language: "WooCommerce postcode format",
			code: `SK1*
SK2*
SK3*`,
		},
		{
			type: "paragraph",
			id: "why-build-completeness",
			text: "but the generated data needed to be complete and correctly formatted. Missing a postcode could mean a customer received the wrong shipping method or price.",
		},
		{
			type: "cards",
			id: "business-impact",
			columns: 3,
			items: [
				{
					tag: "Merchant",
					title: "Shipping costs",
					description:
						"An incorrect postcode set could affect the shipping price applied to an order.",
					icon: "01",
					tone: "primary",
				},
				{
					tag: "Customer",
					title: "Checkout experience",
					description:
						"Incorrect shipping configuration could affect shipping availability or the price presented at checkout.",
					icon: "02",
				},
				{
					tag: "Development",
					title: "Operational time",
					description:
						"A repetitive manual lookup and formatting process was being repeated across a large website estate.",
					icon: "03",
				},
			],
		},
		{
			type: "paragraph",
			id: "why-build-small-businesses",
			text: "For a large merchant this is already inconvenient. For some of the smaller and family-owned businesses we supported, particularly those offering local delivery such as food, hairdressing or makeup services, their delivery radius could be an important part of how they operated.",
		},
		{
			type: "paragraph",
			id: "why-build-business-case",
			text: "The business case therefore wasn't simply \"make the developer's job easier\".",
		},
		{
			type: "paragraph",
			id: "why-build-reliable-tool",
			text: "We needed a reliable internal tool because an incorrect shipping configuration could affect the merchant's costs, their customer's checkout experience and, ultimately, the merchant's trust in the service we were providing.",
		},
		{
			type: "callout",
			id: "operational-context",
			label: "The actual requirement",
			tone: "definition",
			text: "With 800+ websites and developers sharing a support rota, removing a repetitive manual process also mattered operationally. The objective was to have one internal tool that could consistently produce WooCommerce-compatible postcode and outcode lists.",
		},

		{
			type: "heading",
			id: "api-investigation",
			level: 2,
			text: "The API approach didn't survive technical investigation",
		},
		{
			type: "paragraph",
			id: "api-investigation-first-approach",
			text: "The first approach was to use postcodes.io. The initial assumption was that we could provide a postcode and radius and receive the required postcodes.",
		},
		{
			type: "paragraph",
			id: "api-investigation-research",
			text: "I investigated the API before committing to that design.",
		},
		{
			type: "paragraph",
			id: "api-investigation-limits",
			text: "The problem was its limits. The relevant endpoints had restrictions on the number of results and radius that could be requested. The radius search, for example, had a maximum radius of 2,000 metres, while result sets were also capped.",
		},
		{
			type: "callout",
			id: "api-investigation-incompatibility",
			label: "Design constraint",
			tone: "warning",
			text: "That was fundamentally incompatible with the requirement. We didn't need \"some nearby postcodes\"; we needed the complete set required to represent a merchant's shipping area.",
		},
		{
			type: "paragraph",
			id: "api-investigation-alternatives",
			text: "I investigated alternative APIs and found similar problems: limitations, or paid access to functionality/data that would have made the approach viable. Given the team's environment and the likelihood of getting approval for an ongoing external service, I discussed the options with my manager.",
		},
		{
			type: "paragraph",
			id: "api-investigation-decision",
			text: "The alternative was to maintain the postcode data locally.",
		},
		{
			type: "paragraph",
			id: "api-investigation-consequence",
			text: "That changed the project considerably.",
		},

		{
			type: "heading",
			id: "ons-dataset",
			level: 2,
			text: "Choosing the ONS dataset",
		},
		{
			type: "paragraph",
			id: "ons-dataset-source",
			text: "I found the 2021 ONS Postcode Directory and used its CSV as the source dataset.",
		},
		{
			type: "paragraph",
			id: "ons-dataset-size",
			text: "The file was approximately 5 GB and contained roughly 2.7 million postcode records across around [confirm exact number of columns/fields].",
		},
		{
			type: "paragraph",
			id: "ons-dataset-selection",
			text: "I didn't need most of that data. The plugin primarily required the postcode, outcode, latitude, longitude and the relevant active-status field.",
		},
		{
			type: "paragraph",
			id: "ons-dataset-architecture-intro",
			text: "The architecture therefore became:",
		},
		{
			type: "code",
			id: "ons-dataset-architecture",
			language: "Architecture",
			code: `ONS CSV
   ↓
PHP file processing
   ↓
postcode database
   ↓
postcode → coordinates
   ↓
geographical distance calculation
   ↓
postcodes/outcodes within radius
   ↓
WooCommerce shipping configuration`,
		},
		{
			type: "paragraph",
			id: "ons-dataset-load-data",
			text: "I initially investigated whether MariaDB could load the CSV directly using LOAD DATA LOCAL INFILE. In the development environment, local_infile was restricted, so that approach was unavailable.",
		},
		{
			type: "paragraph",
			id: "ons-dataset-application-processing",
			text: "That left application-level processing.",
		},

		{
			type: "heading",
			id: "first-implementation",
			level: 2,
			text: "The first implementation: individual inserts",
		},
		{
			type: "paragraph",
			id: "first-implementation-baseline",
			text: "My first implementation processed the CSV and inserted records individually. That worked functionally, but the performance was unacceptable: approximately two hours to populate the database on my development machine.",
		},
		{
			type: "paragraph",
			id: "first-implementation-problem",
			text: "The problem was not really the CSV itself. The expensive part was repeatedly performing database work for individual records.",
		},
		{
			type: "paragraph",
			id: "first-implementation-comparison",
			text: "With millions of rows, the difference between:",
		},
		{
			type: "code",
			id: "insert-comparison",
			language: "SQL strategy",
			code: `1 row → 1 INSERT
and:
N rows → 1 INSERT`,
		},
		{
			type: "paragraph",
			id: "first-implementation-round-trips",
			text: "becomes substantial because the latter reduces the number of database round trips and query executions.",
		},
		{
			type: "paragraph",
			id: "first-implementation-batching",
			text: "I therefore split the problem into two separate batching operations:",
		},
		{
			type: "list",
			id: "first-implementation-operations",
			ordered: true,
			items: [
				{
					content: "read the CSV in bounded chunks;",
				},
				{
					content:
						"construct a multi-row SQL INSERT for the records in that chunk.",
				},
			],
		},
		{
			type: "paragraph",
			id: "first-implementation-details",
			text: "The implementation used fread() to read a bounded number of bytes, reconstructed complete CSV lines across chunk boundaries, extracted the fields required by the plugin, and accumulated SQL placeholders and values before executing an aggregated insert.",
		},
		{
			type: "code",
			id: "batching-concept",
			language: "Processing flow",
			code: `CSV
 ↓
read chunk
 ↓
reconstruct complete rows
 ↓
extract required fields
 ↓
build N SQL value sets
 ↓
single INSERT
 ↓
next chunk`,
		},
		{
			type: "paragraph",
			id: "first-implementation-result",
			text: "This was substantially faster than inserting each postcode individually.",
		},

		{
			type: "heading",
			id: "measuring-chunk-size",
			level: 2,
			text: "Measuring the chunk size",
		},
		{
			type: "paragraph",
			id: "measuring-chunk-size-intro",
			text: "I also tested the file-read chunk size rather than assuming a value.",
		},
		{
			type: "cards",
			id: "chunk-size-tests",
			columns: 3,
			items: [
				{
					title: "4 KB → 32 KB",
					description:
						"Initial chunk sizes used to establish how file-read performance changed as the buffer increased.",
					tag: "Tested",
					icon: "01",
				},
				{
					title: "64 KB → 256 KB",
					description:
						"Larger buffers tested to determine whether increasing the read size continued to produce useful gains.",
					tag: "Tested",
					icon: "02",
				},
				{
					title: "8 KB",
					description:
						"In my development environment, 8192 bytes was the highest value at which I was seeing useful efficiency.",
					tag: "Observed result",
					icon: "03",
					tone: "primary",
				},
			],
		},
		{
			type: "paragraph",
			id: "measuring-chunk-size-result",
			text: "My testing included:",
		},
		{
			type: "code",
			id: "chunk-size-values",
			language: "Bytes",
			code: `4 KB
8 KB
16 KB
32 KB
64 KB
128 KB
256 KB
...`,
		},
		{
			type: "paragraph",
			id: "measuring-chunk-size-limit",
			text: "In my development environment, 8 KB — 8192 bytes — was the highest value at which I was seeing useful efficiency. Increasing it further did not produce a meaningful improvement in my testing, so I stopped there.",
		},
		{
			type: "callout",
			id: "chunk-size-caveat",
			label: "Important distinction",
			tone: "info",
			text: "That number shouldn't be interpreted as a universal optimum. It was an empirical result from the environment I was working in.",
		},
		{
			type: "paragraph",
			id: "chunk-size-real-optimisation",
			text: "The more important optimisation was the overall batching strategy: bounded file reads combined with aggregated database inserts.",
		},
		{
			type: "callout",
			id: "performance-result",
			label: "Observed result",
			tone: "success",
			text: "~2 hours → ~2 minutes on my development machine.",
		},
		{
			type: "paragraph",
			id: "performance-result-manager",
			text: "My manager later reported seeing the database load in under a minute on his environment. Runtime varied depending on the machine/server resources involved, so I wouldn't treat that as a controlled benchmark. The consistent result was that the original multi-hour process had become practically usable.",
		},

		{
			type: "heading",
			id: "postcode-database",
			level: 2,
			text: "Designing the postcode database",
		},
		{
			type: "paragraph",
			id: "postcode-database-size",
			text: "The resulting table was deliberately small compared with the source dataset:",
		},
		{
			type: "code",
			id: "postcode-table",
			language: "SQL",
			code: `CREATE TABLE wp_tp_postcodes (
    id mediumint(9) NOT NULL AUTO_INCREMENT,
    postcode char(9) NOT NULL,
    outcode char(5) NOT NULL,
    latitude decimal(10,8) NOT NULL,
    longitude decimal(11,8) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (postcode)
);`,
		},
		{
			type: "paragraph",
			id: "postcode-database-architecture",
			text: "This was one of the useful architectural decisions in the original implementation: the application didn't need to reproduce the entire ONS dataset.",
		},
		{
			type: "paragraph",
			id: "postcode-database-purpose",
			text: "It needed a queryable representation of the data required by the plugin.",
		},
		{
			type: "paragraph",
			id: "postcode-database-unique",
			text: "The UNIQUE (postcode) constraint was also useful because I had encountered concerns around duplicate postcode data from third-party sources. I wanted the database to enforce that uniqueness rather than relying entirely on the importer to get it right.",
		},
		{
			type: "paragraph",
			id: "postcode-database-idempotent",
			text: "The insert itself used ON DUPLICATE KEY UPDATE, providing an idempotent behaviour if the same postcode appeared again.",
		},
		{
			type: "callout",
			id: "postcode-database-principle",
			label: "Design principle",
			tone: "definition",
			text: "The application didn't need a copy of the source dataset. It needed a deliberately reduced, queryable representation of the data required by the application.",
		},

		{
			type: "heading",
			id: "calculating-distance",
			level: 2,
			text: "Calculating distance",
		},
		{
			type: "paragraph",
			id: "calculating-distance-requirement",
			text: "The plugin needed to find all postcodes between two distances from a supplied postcode.",
		},
		{
			type: "paragraph",
			id: "calculating-distance-initial",
			text: "My initial research led me to a great-circle distance calculation using latitude and longitude — effectively the Haversine/spherical-distance approach.",
		},
		{
			type: "paragraph",
			id: "calculating-distance-original",
			text: "The original query calculated the distance directly using trigonometric functions.",
		},
		{
			type: "paragraph",
			id: "calculating-distance-alternative",
			text: "Later, another developer pointed me towards ST_Distance_Sphere(). I tested the alternative and moved the plugin to that implementation because it performed better in my testing, particularly when the result set became large.",
		},
		{
			type: "code",
			id: "distance-query",
			language: "SQL",
			code: `SELECT postcode, outcode
FROM wp_tp_postcodes
WHERE ST_Distance_Sphere(
    POINT(longitude, latitude),
    POINT(target_longitude, target_latitude)
) * 0.000621371192
BETWEEN %s AND %s;`,
		},
		{
			type: "paragraph",
			id: "distance-conversion",
			text: "The conversion factor converted metres to miles.",
		},
		{
			type: "callout",
			id: "distance-benchmark-caveat",
			label: "Benchmarking caveat",
			tone: "info",
			text: "I didn't capture a formal benchmark comparing the two implementations, so the accurate claim is that the second implementation performed better in my testing, not that I conclusively established a universal performance advantage.",
		},
		{
			type: "paragraph",
			id: "distance-result-size",
			text: "That distinction matters, particularly because the query could return very large result sets — sometimes over 100,000 postcodes.",
		},

		{
			type: "heading",
			id: "wordpress-side",
			level: 2,
			text: "The WordPress side",
		},
		{
			type: "paragraph",
			id: "wordpress-side-admin",
			text: "The plugin exposed an admin interface under WordPress Tools.",
		},
		{
			type: "paragraph",
			id: "wordpress-side-input",
			text: "An administrator could enter a postcode and a radius range, and the plugin would return both full postcodes and unique outcode wildcards.",
		},
		{
			type: "paragraph",
			id: "wordpress-side-output",
			text: "The result could then be copied directly into WooCommerce's postcode restrictions.",
		},
		{
			type: "cards",
			id: "wordpress-side-flow",
			columns: 3,
			items: [
				{
					tag: "Input",
					title: "Postcode + radius",
					description:
						"An administrator supplied the postcode and distance range required for the shipping area.",
					icon: "01",
					tone: "primary",
				},
				{
					tag: "Processing",
					title: "AJAX + PHP",
					description:
						"The admin interface used AJAX to communicate with the PHP implementation and retrieve the generated results.",
					icon: "02",
				},
				{
					tag: "Output",
					title: "WooCommerce rules",
					description:
						"Full postcodes and unique outcode wildcards could be copied into WooCommerce's postcode restrictions.",
					icon: "03",
				},
			],
		},
		{
			type: "paragraph",
			id: "wordpress-side-state",
			text: "AJAX handled the interaction between the admin interface and PHP. The plugin also tracked the initial database-loading state using files such as db_loading.txt and db_complete.txt, allowing the interface to indicate that the initial database setup was still taking place.",
		},
		{
			type: "callout",
			id: "wordpress-side-import",
			label: "Operational limitation",
			tone: "warning",
			text: "The administrator was expected to wait for that initial import. That worked, but it is also one of the clearest areas where I would design the system differently today.",
		},

		{
			type: "heading",
			id: "testing-deployment",
			level: 2,
			text: "Testing and deployment",
		},
		{
			type: "paragraph",
			id: "testing-deployment-process",
			text: "The plugin went through the team's peer-testing process. Developers tested each other's work during our dedicated testing sessions and recorded feedback against the relevant Jira tickets.",
		},
		{
			type: "paragraph",
			id: "testing-deployment-feedback",
			text: "The feedback covered both presentation and functionality, including the distance calculation.",
		},
		{
			type: "paragraph",
			id: "testing-deployment-incorporation",
			text: "I incorporated that feedback before rollout.",
		},
		{
			type: "paragraph",
			id: "testing-deployment-rollout",
			text: "Once deployed, the plugin became an internal tool for handling the shipping requirements that had previously required manual third-party lookups and formatting.",
		},
		{
			type: "callout",
			id: "testing-deployment-success",
			label: "The measure of success",
			tone: "success",
			text: "It wasn't that the plugin could process 2.7 million rows. The database existed to support a business workflow.",
		},

		{
			type: "heading",
			id: "actual-impact",
			level: 2,
			text: "The actual impact",
		},
		{
			type: "paragraph",
			id: "actual-impact-merchants",
			text: "For merchants that depended on delivery distance, getting the shipping rules right mattered. If the generated postcode set was incomplete or incorrectly formatted, the customer's checkout could receive the wrong shipping price or shipping availability. That affects the merchant's margins and the customer's confidence in the merchant.",
		},
		{
			type: "paragraph",
			id: "actual-impact-development-team",
			text: "For the development team, the plugin removed a repetitive operational task from an already busy support and deployment workflow.",
		},
		{
			type: "paragraph",
			id: "actual-impact-conclusion",
			text: "The improvement was therefore both technical and operational: a recurring manual process became a reusable internal capability.",
		},
		{
			type: "pathway",
			id: "actual-impact-path",
			items: [
				{
					title: "Manual lookup",
					description:
						"Developers repeatedly relied on third-party postcode lookups and manual formatting.",
				},
				{
					title: "Local dataset",
					description:
						"The required postcode data was maintained locally after external API limitations made that approach unsuitable.",
				},
				{
					title: "Reusable processing",
					description:
						"Chunked file processing and aggregated inserts made the large import practically usable.",
				},
				{
					title: "Operational capability",
					description:
						"The resulting plugin became an internal tool for configuring distance-based shipping requirements.",
				},
			],
		},

		{
			type: "heading",
			id: "what-happened-next",
			level: 2,
			text: "What happened next",
		},
		{
			type: "paragraph",
			id: "what-happened-next-feedback",
			text: "The plugin received positive feedback from other developers and from my manager.",
		},
		{
			type: "paragraph",
			id: "what-happened-next-wishlist",
			text: "One of the consequences was that my manager trusted me with another bespoke project: investigating the wishlist plugins available for WordPress/WooCommerce and, after finding that the existing options didn't fit our bespoke theme and requirements, developing a custom wishlist plugin.",
		},
		{
			type: "paragraph",
			id: "what-happened-next-progression",
			text: "That progression was significant to me at the time. I had started the role as a Service Desk Assistant and was increasingly being trusted with ownership of software projects.",
		},
		{
			type: "paragraph",
			id: "what-happened-next-ownership",
			text: "The postcode-radius plugin was my first opportunity to take a relatively ambiguous operational problem, investigate the available approaches, make the technical decisions, optimise the implementation and take it through testing and deployment.",
		},

		{
			type: "heading",
			id: "looking-back",
			level: 2,
			text: "Looking back five years later",
		},
		{
			type: "paragraph",
			id: "looking-back-two-minutes",
			lead: true,
			text: "The interesting part, looking back five years later, is that the two-minute import wasn't actually the end of the engineering problem.",
		},
		{
			type: "paragraph",
			id: "looking-back-shipping",
			text: "It was simply the point where the system became fast enough to ship.",
		},
		{
			type: "callout",
			id: "looking-back-question",
			label: "The question for Part 2",
			tone: "definition",
			text: "The more important question is what I would change now — particularly around failure handling, resumability, staging data, import state and keeping long-running work out of a normal WordPress request.",
		},
		{
			type: "cta",
			id: "part-2-cta",
			title: "What would I change today?",
			text: "The two-minute import made the original plugin practical, but it wasn't the end of the engineering problem. In Part 2, I revisit the architecture and look at how I would approach the import today, with a focus on resumability, staging, observability, failure handling and controlled publication.",
			href: part2Href,
			label: "Read Part 2",
		},
	],
};

export default article;