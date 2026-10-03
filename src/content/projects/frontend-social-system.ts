import type { ContentDocument } from "../../types/content";

const demoHref = "https://tmaz1.github.io/frontend-social-system/";

const article: ContentDocument = {
    kind: "project",
    slug: "frontend-social-system",
    title: "Removing the Backend",
    eyebrow: "ENGINEERING / FRONTEND SYSTEMS",
    intro:
        "How far can you take a frontend-only application before the absence of a backend becomes the architecture?",
    heroLink: {
        label: "View the live demo",
        href: demoHref,
        external: true,
    },
    archive: {
        category: "Frontend",
        filterCategories: ["frontend", "research"],
        readingTime: "8 min",
        year: 2026,
    },
    blocks: [
        {
            type: "image",
            id: "architecture",
            image: {
                src: "/assets/images/article/frontend-system-diagram.png",
                alt: "Frontend system architecture",
                ratio: "auto",
                crop: "contain",
                caption: "The frontend system and its local persistence boundary.",
            },
        },
        {
            type: "paragraph",
            id: "thesis",
            lead: true,
            text: [
                {
                    type: "text",
                    text: "I wanted to build a project where the frontend was not simply the presentation layer sitting on top of an API. By removing the backend entirely, I forced myself to deal with data modelling, persistence, identity, relationships, ordering, authentication flows, cross-page state, and interaction consistency inside the browser.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "thesis-result",
            text: [
                {
                    type: "text",
                    text: "The result became less of a social-media prototype and more of a frontend systems experiment. The interesting part was not recreating a backend in JavaScript. It was discovering which responsibilities I had previously taken for granted because a backend, database, or framework was already handling them.",
                },
            ],
        },

        {
            type: "heading",
            id: "why",
            level: 2,
            text: "Why remove the backend?",
        },
        {
            type: "paragraph",
            id: "why-intro",
            text: [
                {
                    type: "text",
                    text: "This was deliberately not an exercise in avoiding backend development. I already had experience building APIs and separating application logic from persistence, so I wanted to approach the problem from the other direction.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "why-background",
            text: [
                {
                    type: "text",
                    text: "I've worked on an ",
                },
                {
                    type: "link",
                    text: "event-driven appointments API",
                    href: "https://github.com/TMaz1/event-driven-appointments-api",
                    external: true,
                },
                {
                    type: "text",
                    text: ", an ",
                },
                {
                    type: "link",
                    text: "ASP.NET authentication API",
                    href: "https://github.com/TMaz1/AuthenticationAPI",
                    external: true,
                },
                {
                    type: "text",
                    text: ", an ",
                },
                {
                    type: "link",
                    text: "Entity Framework Core e-commerce API",
                    href: "https://github.com/TMaz1/ECommerceProductsAPI",
                    external: true,
                },
                {
                    type: "text",
                    text: ", and a ",
                },
                {
                    type: "link",
                    text: "MongoDB Minimal API",
                    href: "https://github.com/TMaz1/MongoDBMinimalAPI",
                    external: true,
                },
                {
                    type: "text",
                    text: ". Across those projects, separating services, persistence, application logic, and transport had become a familiar pattern.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "why-approach",
            text: "For this project I wanted to remove that familiar stack. The application needed to remain deployable as a static site, which made GitHub Pages a natural target. More importantly, the constraint gave me a way to examine what happens when the frontend has to own problems that would normally be distributed across an API, application layer, database, and authentication service.",
        },
        {
            type: "callout",
            id: "why-experiment",
            label: "The experiment",
            tone: "definition",
            text: "The goal was not to prove that a frontend can replace a backend. It was to understand what the backend was doing for me.",
        },

        {
            type: "heading",
            id: "application",
            level: 2,
            text: "The application",
        },
        {
            type: "paragraph",
            id: "application-intro",
            text: "The project sits somewhere between a social-media board and Pinterest. Users can create media cards, organise them into collections, save content, reorder cards and collections, and view the same content through different layouts.",
        },
        {
            type: "paragraph",
            id: "application-problem",
            text: "Those features sound mostly visual until the same card starts appearing in several places. A card can belong to a user, appear in a collection, be saved by another user, have a position within a collection, appear on a profile, and open inside a modal. At that point, the problem is no longer just rendering components. It is maintaining a consistent model of the application.",
        },
        {
            type: "paragraph",
            id: "application-system",
            text: "The project currently covers CRUD, persistence, routing, authentication flows, relationships, collections, ordering, drag-and-drop, multiple layouts, saved content, URL-driven state, and separate anonymous and authenticated experiences.",
        },
        {
            type: "cards",
            id: "application-capabilities",
            columns: 3,
            items: [
                {
                    tag: "Navigation",
                    title: "URL-driven state",
                    description:
                        "Routes represent navigable application state, including card, profile, and search views such as /card/card_[number], /profile/user_[value], and /search?q=[query].",
                    tone: "primary",
                },
                {
                    tag: "Access",
                    title: "Protected routes",
                    description:
                        "Anonymous and authenticated experiences are separated so that public exploration and user-specific functionality remain distinct.",
                },
                {
                    tag: "Interaction",
                    title: "Shared entities",
                    description:
                        "The same underlying cards and collections can be displayed through profiles, saved content, collections, search, and other application contexts.",
                },
            ],
        },

        {
            type: "heading",
            id: "data-boundary",
            level: 2,
            text: "Making persistence a boundary",
        },
        {
            type: "paragraph",
            id: "data-boundary-intro",
            text: "One of the first decisions was to avoid accessing localStorage directly from components. Instead, the application has a localDataService responsible for users, cards, collections, and user-specific state.",
        },
        {
            type: "paragraph",
            id: "data-boundary-reason",
            text: "This distinction became more important as the project grew. localStorage only knows how to store strings. It does not know what a card is, who owns it, how collections relate to users, how ordering works, or whether older stored data needs to be migrated.",
        },
        {
            type: "code",
            id: "data-model",
            language: "Structure",
            code: `                    localDataService
                          │
       ┌──────────────────┼──────────────────┐
       │                  │                  │
     Users             Cards            Collections
       │                  │                  │
       └──────────────────┼──────────────────┘
                          │
                     UserState
                          │
               ┌──────────┼───────────┐
               │          │           │
          savedCards   cardOrder   collections`,
        },
        {
            type: "paragraph",
            id: "data-boundary-json",
            text: "The application also uses JSON as a source for initial data. That gives the project a useful separation between seeded content and persisted state: JSON provides the starting dataset, while the service manages the application's working state once it is running.",
        },
        {
            type: "paragraph",
            id: "data-boundary-abstraction",
            text: "The important abstraction is therefore not localStorage itself. It is the boundary around it. Components can request cards, collections, or user state without needing to know whether those values came from localStorage, a JSON file, or eventually an API.",
        },

        {
            type: "heading",
            id: "identity-state",
            level: 2,
            text: "Identity, relationships, and state",
        },
        {
            type: "paragraph",
            id: "identity-intro",
            text: "The project became considerably easier to reason about once entities were kept separate from the state describing how a user interacts with them.",
        },
        {
            type: "code",
            id: "identity-example",
            language: "TypeScript",
            code: `interface Card {
	cardId: string;
	userId: string;
	title: string;
	media?: CardMedia[];
	link?: string;
}

interface UserState {
	userId: string;
	collections?: string[];
	cardOrder?: Record<string, string[]>;
	savedCards?: string[];
}`,
        },
        {
            type: "paragraph",
            id: "identity-explanation",
            text: "A card does not inherently have a position. Its position depends on the collection or context in which it is being displayed. Likewise, whether a user has saved a card is a relationship between a user and a card rather than an intrinsic property of the card.",
        },
        {
            type: "paragraph",
            id: "identity-reference",
            text: "That led naturally towards stable IDs and references instead of duplicating complete objects throughout the application. A card can therefore appear on a profile, inside a collection, in saved content, or inside a modal without becoming a different card in each context.",
        },
        {
            type: "callout",
            id: "identity-principle",
            label: "The useful distinction",
            text: "Persist the underlying entities and relationships. Derive the views that the UI needs from them.",
            tone: "info",
        },
        {
            type: "paragraph",
            id: "identity-derived",
            text: "This is particularly useful for saved content and collections. Rather than maintaining another independent copy of every card, the application stores references and resolves those references when constructing a view. A change to the underlying card can therefore be reflected wherever that card appears.",
        },

        {
            type: "heading",
            id: "net-comparison",
            level: 2,
            text: "What this made visible from .NET",
        },
        {
            type: "paragraph",
            id: "net-comparison-intro",
            text: "Coming from C# and .NET, some of the frontend work felt familiar for an unexpected reason. Not because the browser was recreating Entity Framework Core, but because removing those abstractions made some of the responsibilities they normally hide much more obvious.",
        },
        {
            type: "table",
            id: "net-comparison-table",
            table: {
                headers: ["Frontend system", "Rough backend / EF Core equivalent"],
                rows: [
                    ["getUsers()", "Querying a DbSet<User>"],
                    ["findUserByEmail()", "Where() / SingleOrDefault()"],
                    ["addUser()", "Add()"],
                    ["updateUser()", "Entity update + SaveChanges()"],
                    ["getCardsForCollection()", "Relationship/query traversal"],
                    ["getSavedCardsByUserId()", "Relationship resolution"],
                    ["normaliseUserState()", "Data/default handling"],
                    ["runMigrations()", "EF migrations"],
                    ["crypto.randomUUID()", "Application/database-generated identity"],
                    ["ownership checks", "Authorisation/business rules"],
                    ["cardOrder", "Persisted relationship/order data"],
                ],
            },
        },
        {
            type: "paragraph",
            id: "net-comparison-nuance",
            text: "The comparison is deliberately approximate. localDataService is not a database and it does not recreate Entity Framework. The useful part is seeing how many ordinary application operations sit around persistence: generating identity, resolving relationships, normalising stored data, enforcing domain rules, migrating old state, and turning persisted values into something the application can actually use.",
        },
        {
            type: "paragraph",
            id: "net-comparison-learning",
            text: "Frameworks make these operations feel straightforward, which is exactly what they are supposed to do. Building without them made the underlying responsibilities harder to ignore.",
        },

        {
            type: "heading",
            id: "state",
            level: 2,
            text: "The frontend became the system",
        },
        {
            type: "paragraph",
            id: "state-intro",
            text: "The other distinction that became increasingly important was the difference between application state and UI state.",
        },
        {
            type: "cards",
            id: "state-types",
            columns: 2,
            items: [
                {
                    tag: "Application",
                    title: "Persistent state",
                    description:
                        "Users, cards, collections, saved cards, ordering, ownership, and other information that needs to survive navigation and browser sessions.",
                    tone: "primary",
                },
                {
                    tag: "Interface",
                    title: "Interaction state",
                    description:
                        "Open modals, selected media, drag state, zoom level, layout selection, filters, and other short-lived values that control the current interface.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "state-architecture",
            text: "Both ultimately affect what the user sees, but they have different lifetimes and different reasons for existing. Keeping that distinction clear becomes increasingly important when the same domain data is displayed through several pages and interactions.",
        },
        {
            type: "paragraph",
            id: "state-routing",
            text: "Routing adds another layer. A URL such as /card/card_123 or /search?q=architecture is itself application state because it represents a location that can be navigated to, refreshed, bookmarked, and shared. The result is a frontend with several forms of state that need to cooperate without becoming the same thing.",
        },

        {
            type: "heading",
            id: "authentication",
            level: 2,
            text: "Authentication without a trusted server",
        },
        {
            type: "paragraph",
            id: "authentication-intro",
            text: "The project also contains a local authentication flow so that anonymous and authenticated experiences can be explored without introducing a backend.",
        },
        {
            type: "paragraph",
            id: "authentication-limit",
            text: "That distinction is important: the application can model authentication, but it cannot create a trusted security boundary. A browser is controlled by the user. Client-side tokens, localStorage, passwords, and authorisation checks can support the application's behaviour, but they cannot provide the guarantees of a server-controlled authentication system.",
        },
        {
            type: "callout",
            id: "authentication-security",
            label: "Security boundary",
            tone: "warning",
            text: "Client-side authorisation can describe what the application expects a user to be allowed to do. It cannot enforce that rule against a malicious client.",
        },

        {
            type: "heading",
            id: "backend-boundary",
            level: 2,
            text: "Where the backend becomes necessary",
        },
        {
            type: "paragraph",
            id: "backend-boundary-intro",
            text: "The frontend-only constraint is useful partly because it has very clear limits. I deliberately did not add external services simply to make the application appear more complete.",
        },
        {
            type: "paragraph",
            id: "backend-secrets",
            text: "The clearest example is secret API credentials. A key bundled into a Vite frontend is ultimately available to the client. If a credential genuinely needs to remain private, the request needs to cross a trusted backend or proxy boundary.",
        },
        {
            type: "paragraph",
            id: "backend-persistence",
            text: "Persistence has similar limits. localStorage is tied to a browser and provides no server-side source of truth, reliable cross-device synchronisation, concurrency control, or shared multi-user persistence. Those capabilities require infrastructure outside the browser.",
        },
        {
            type: "paragraph",
            id: "backend-security",
            text: "A backend also provides somewhere trusted to enforce validation, authorisation, security policies, and other rules that cannot safely be delegated to the client. The frontend can still validate input for a better user experience, but it cannot treat that validation as a security boundary.",
        },
        {
            type: "paragraph",
            id: "backend-learning",
            text: "Those limitations changed how I think about the backend. It is not simply a place where data happens to live. It provides a trusted boundary around persistence, secrets, identity, validation, authorisation, and shared application state.",
        },

        {
            type: "heading",
            id: "interesting-parts",
            level: 2,
            text: "What made the experiment worthwhile",
        },
        {
            type: "paragraph",
            id: "interesting-parts-intro",
            text: "The most useful part of the project was not any individual feature. It was the pressure created by having nowhere else to put the complexity.",
        },
        {
            type: "list",
            id: "interesting-parts-list",
            items: [
                {
                    content: [
                        {
                            type: "text",
                            text: "Persistence became an explicit boundary. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text: "The UI could work with application-level operations without knowing how data was stored.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Identity became important. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text: "Stable IDs allowed the same entities to move between collections, views, routes, and interactions without losing their identity.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Relationships became visible. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text: "Saved cards, collection membership, ordering, and ownership all had to be represented explicitly rather than hidden inside a database schema.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Derived state became preferable to duplication. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text: "The same underlying data could be resolved into different views without maintaining multiple competing copies.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Frontend architecture became more than component structure. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text: "State ownership, data boundaries, routing, persistence, and interaction behaviour all became architectural concerns.",
                        },
                    ],
                },
            ],
        },

        {
            type: "heading",
            id: "conclusion",
            level: 2,
            text: "What I took from it",
        },
        {
            type: "paragraph",
            id: "conclusion-learning",
            text: "Removing the backend did not make the application simpler. It made the architecture more visible.",
        },
        {
            type: "paragraph",
            id: "conclusion-final",
            text: "Problems I normally encountered through APIs, databases, authentication services, and frameworks became frontend problems: identity, persistence, relationships, migrations, ordering, derived state, routing, and application boundaries.",
        },
        {
            type: "paragraph",
            id: "conclusion-question",
            text: "That was the real value of the experiment. I wasn't trying to prove that a frontend can replace a backend. I wanted to understand what changes when the backend disappears, where its responsibilities end up, and which of those responsibilities should never have been moved into the browser in the first place.",
        },
        {
            type: "paragraph",
            id: "conclusion-revamp",
            text: "The project is now due for a visual revamp, but the architectural experiment is something I would keep. It gave me a much clearer view of where frontend responsibility ends and where a backend becomes more than an implementation detail.",
        },
        {
            type: "cta",
            id: "final-cta",
            title: "Explore the project",
            text: "The live application is available as a static deployment on GitHub Pages.",
            href: demoHref,
            label: "Open the live demo",
            external: true,
        },
    ],
};

export default article;