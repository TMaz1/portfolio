import type { ContentDocument } from "../../types/content";

const demoHref = "https://social.tayyaba.uk/";

const article: ContentDocument = {
    kind: "project",
    slug: "frontend-social-system",
    title: "Frontend Social System",
    eyebrow: "ENGINEERING / FRONTEND",
    intro:
        "An interactive, frontend-only social platform exploring scalable UI architecture, state management, and rich user interactions. Version 2 introduces a complete visual refactor, improved content discovery, profile sharing, browser-based routing, and automated Cloudflare Pages deployments.",
    heroLink: {
        label: "Explore the live project",
        href: demoHref,
        external: true,
    },
    archive: {
        category: "Frontend",
        filterCategories: ["frontend", "research"],
        readingTime: "5 min",
        year: 2026,
    },
    blocks: [
        {
            type: "image",
            id: "architecture",
            image: {
                src: "/assets/images/article/frontend-system-diagram.png",
                alt: "Frontend system architecture showing data operations, users, cards, collections, and user state",
                ratio: "auto",
                crop: "contain",
                caption:
                    "The application's data flow, from JSON seed data through the service layer to browser-based persistence.",
            },
        },
        {
            type: "paragraph",
            id: "introduction",
            lead: true,
            text: [
                {
                    type: "text",
                    text: "I built this project to explore what happens when a frontend application has to manage more than presentation. Without a backend, data relationships, persistence, navigation, and interaction consistency all become responsibilities of the client.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "version-two",
            text:
                "Version 2 takes the project beyond its original implementation. I redesigned the application visually, rebuilt the home and Explore pages, refined content discovery, added profile sharing, and improved media viewing. I also replaced hash-based routing with browser-based routing and moved deployment from GitHub Pages to Cloudflare Pages, introducing an automated deployment workflow.",
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
            text:
                "The application combines a social feed with a card-and-collection system. Users can create profiles, organise media cards, save content, manage collections, and rearrange items through drag and drop. The same content can appear across profiles, collections, and saved views without maintaining a separate copy for each context.",
        },
        {
            type: "cards",
            id: "capabilities",
            columns: 3,
            items: [
                {
                    tag: "Experience",
                    title: "Complete visual refactor",
                    description:
                        "Redesigned the home page and Explore feed, with a more cohesive interface and refined user flows across the application.",
                    tone: "primary",
                },
                {
                    tag: "Discovery",
                    title: "Interactive content",
                    description:
                        "Clickable, searchable tags make it easier to discover related content, while an image lightbox provides a focused media-viewing experience.",
                },
                {
                    tag: "Sharing",
                    title: "Public profiles",
                    description:
                        "Share profile links through the native Web Share API, with clipboard copying as a fallback for unsupported browsers.",
                },
            ],
        },
        {
            type: "paragraph",
            id: "polish",
            text:
                "Alongside the larger changes, I fixed bugs, removed incorrect and placeholder URLs, and refined navigation and interaction flows. The aim was not simply to make the application look different, but to make the experience more consistent from initial navigation through to individual content interactions.",
        },

        {
            type: "heading",
            id: "architecture",
            level: 2,
            text: "Architecture and persistence",
        },
        {
            type: "paragraph",
            id: "architecture-intro",
            text:
                "The application separates data operations from the UI through a centralised localDataService, which manages users, cards, collections, and user-specific state. JSON seed data provides the initial dataset, while localStorage persists changes between browser sessions.",
        },
        {
            type: "paragraph",
            id: "architecture-boundary",
            text:
                "This structure keeps persistence concerns out of individual components and makes data relationships easier to manage. Stable entity IDs and separately maintained relationships allow cards to appear across different views without duplicating the underlying data. The service layer also establishes a boundary for future backend integration without tightly coupling the UI to the storage mechanism.",
        },

        {
            type: "heading",
            id: "routing",
            level: 2,
            text: "Routing and state management",
        },
        {
            type: "paragraph",
            id: "routing-intro",
            text:
                "Version 2 replaces the hash-based routing used for GitHub Pages with React Router's createBrowserRouter. This moves navigation to standard browser paths and provides a cleaner foundation for route-based application state.",
        },
        {
            type: "list",
            id: "routing-features",
            items: [
                {
                    content: [
                        {
                            type: "text",
                            text: "Browser-based navigation. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Uses standard URL paths for pages such as profiles, search results, and card details instead of hash-based routes.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Protected routes. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Profile settings require an authenticated user; unauthenticated visitors are redirected to login.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Guest-only routes. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Login and signup pages redirect authenticated users to their own profile.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Authentication readiness. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Route guards wait for authentication state to resolve before rendering protected or guest-only content.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Shared application layout. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "A common layout keeps navigation, banners, footers, loading states, and page content consistent across routes.",
                        },
                    ],
                },
            ],
        },
        {
            type: "paragraph",
            id: "state-management",
            text:
                "As the application has grown, separating persistent application data from temporary interface state has become increasingly important. Profiles, cards, collections, and saved items need to persist, while open modals, selected images, filters, and drag-and-drop interactions describe the current UI. Keeping these responsibilities distinct helps prevent components from becoming tightly coupled to both data operations and presentation.",
        },

        {
            type: "heading",
            id: "sharing",
            level: 2,
            text: "Reusable interactions",
        },
        {
            type: "paragraph",
            id: "sharing-intro",
            text:
                "Several v2 improvements focus on making everyday interactions more useful. Public profile sharing is encapsulated in a reusable useShare hook, which uses the native Web Share API when available and falls back to clipboard copying when necessary. Searchable tags connect browsing with content discovery, while the image lightbox lets users inspect media without losing their place in the feed.",
        },
        {
            type: "paragraph",
            id: "sharing-benefit",
            text:
                "Keeping reusable behaviour separate from individual UI components makes these features easier to maintain and extend. It also reinforces a broader principle behind the project: complex interactions are easier to manage when their responsibilities are clearly defined.",
        },

        {
            type: "heading",
            id: "deployment",
            level: 2,
            text: "Automated deployment with Cloudflare Pages",
        },
        {
            type: "paragraph",
            id: "deployment-intro",
            text:
                "The original application was deployed through GitHub Pages. Version 2 now runs on Cloudflare Pages under a dedicated social subdomain, with Cloudflare connected directly to the GitHub repository.",
        },
        {
            type: "paragraph",
            id: "deployment-pipeline",
            text:
                "Changes pushed to the configured deployment branch trigger an automated build and deployment. Once the build succeeds, Cloudflare publishes the updated application without requiring manual uploads or a separate deployment script.",
        },
        {
            type: "callout",
            id: "deployment-benefit",
            label: "Continuous deployment",
            tone: "info",
            text:
                "The deployment workflow is automated from repository changes to publication. This is continuous deployment (CD); a separate continuous integration pipeline for running tests or checks has not been configured.",
        },

        {
            type: "heading",
            id: "limitations",
            level: 2,
            text: "Understanding the boundaries",
        },
        {
            type: "paragraph",
            id: "limitations-intro",
            text:
                "The project deliberately remains a frontend prototype rather than a production-ready social platform. Its persistence layer is browser-specific, so data is not automatically shared between users or synchronised across devices. Clearing localStorage also removes locally persisted changes.",
        },
        {
            type: "paragraph",
            id: "limitations-auth",
            text:
                "The application models authenticated and unauthenticated experiences through client-side route guards and authentication state. However, these controls govern the interface rather than enforce a trusted security boundary. Without a backend, the application cannot securely enforce authorisation, protect private credentials, or provide shared server-side persistence.",
        },
        {
            type: "paragraph",
            id: "limitations-learning",
            text:
                "These constraints are part of the experiment. They make it easier to identify the responsibilities that belong beyond the browser, including trusted identity, server-side validation, authorisation, and shared data management.",
        },

        {
            type: "heading",
            id: "conclusion",
            level: 2,
            text: "Evolving the system",
        },
        {
            type: "paragraph",
            id: "conclusion-intro",
            text:
                "Version 2 represents progress in both product experience and engineering workflow. The visual refactor creates a more cohesive interface, new discovery and sharing features improve how users interact with content, browser-based routing provides cleaner navigation, and Cloudflare Pages automates deployment.",
        },
        {
            type: "paragraph",
            id: "conclusion-final",
            text:
                "The underlying goal remains the same: to understand how a frontend system behaves as its data model, state relationships, and interactions become more complex. By combining architectural experimentation with iterative UX improvements, the project continues to be a practical environment for exploring maintainable frontend design and the boundaries of client-side development.",
        },
        {
            type: "cta",
            id: "final-cta",
            title: "Explore version 2",
            text:
                "Visit the live application to explore the redesigned interface, browse content, and try the updated profile and media interactions.",
            href: demoHref,
            label: "Open the live project",
            external: true,
        },
    ],
};

export default article;