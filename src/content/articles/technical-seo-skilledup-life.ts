import type { ContentDocument } from "../../types/content";

const article: ContentDocument = {
    kind: "article",
    slug: "how-i-approach-technical-seo-and-website-growth",
    title: "How I Approach Website Growth",
    eyebrow: "TECHNICAL SEO / WEB PERFORMANCE",
    intro:
        "A practical approach to improving websites by connecting technical SEO, performance, analytics, accessibility, user experience and business goals.",
    heroLink: {
        label: "Visit SkilledUp Life",
        href: "https://skilledup.life/",
        external: true,
    },
    archive: {
        category: "SEO & Web Development",
        filterCategories: ["seo", "performance"],
        readingTime: "6 min",
        year: 2026,
    },
    blocks: [
        {
            type: "heading",
            id: "introduction",
            level: 2,
            text: "Start with diagnosis, not assumptions",
        },
        {
            type: "paragraph",
            id: "introduction-lead",
            lead: true,
            text:
                "I approach website improvement as an ongoing process of investigation, prioritisation, implementation and measurement. SEO is important, but it rarely exists in isolation: search visibility depends on content, information architecture, technical accessibility, performance, user experience and the quality of the data used to make decisions.",
        },
        {
            type: "paragraph",
            id: "introduction-experience",
            text: [
                {
                    type: "text",
                    text:
                        "During my 60-day Web Developer Volunteer engagement with ",
                },
                {
                    type: "link",
                    text: "SkilledUp Life",
                    href: "https://skilledup.life/",
                },
                {
                    type: "text",
                    text:
                        ", I applied this approach across a production marketing website. The work combined WordPress development, technical SEO, GA4, Google Search Console, Core Web Vitals, AI-search visibility, accessibility, UX/CRO, structured data, content architecture and front-end development.",
                },
            ],
        },
        {
            type: "callout",
            id: "principle",
            label: "My working principle",
            text:
                "Investigate → diagnose → prioritise → implement → measure → document. A technical recommendation is only useful if it can be explained, delivered and measured.",
        },

        {
            type: "heading",
            id: "step-one",
            level: 2,
            text: "1. Establish the technical baseline",
        },
        {
            type: "paragraph",
            id: "step-one-intro",
            text:
                "Before changing a website, I want to understand what already exists. I would begin with crawling and indexation, canonical URLs, redirects, XML sitemaps, robots directives, metadata, heading structure, internal links, structured data, mobile rendering and the relationship between the public website and any separate application or platform.",
        },
        {
            type: "paragraph",
            id: "step-one-search-console",
            text: [
                {
                    type: "text",
                    text: "Google Search Console is particularly useful here because it provides evidence of how Google is discovering and processing the site. I would use it alongside a crawl rather than treating either source as a complete audit. Google also recommends using Search Console after significant template or structured-data changes and for ongoing performance analysis. ",
                },
                {
                    type: "link",
                    text: "Search Console documentation",
                    href: "https://developers.google.com/search/docs/monitor-debug/search-console-start",
                },
                { type: "text", text: "." },
            ],
        },
        {
            type: "cards",
            id: "baseline-cards",
            columns: 3,
            items: [
                {
                    title: "Crawlability",
                    icon: "01",
                    description:
                        "Can important pages be discovered, crawled and indexed correctly?",
                    tone: "primary",
                },
                {
                    title: "Architecture",
                    icon: "02",
                    description:
                        "Does the site structure make sense to both users and search engines?",
                },
                {
                    title: "Measurement",
                    icon: "03",
                    description:
                        "Can traffic, acquisition and meaningful user actions be measured reliably?",
                },
            ],
        },

        {
            type: "heading",
            id: "step-two",
            level: 2,
            text: "2. Find the performance constraints",
        },
        {
            type: "paragraph",
            id: "step-two-intro",
            text:
                "I then move from what the website contains to how efficiently it delivers that experience. I use Lighthouse, PageSpeed Insights and real-user data where available, looking beyond the headline performance score.",
        },
        {
            type: "paragraph",
            id: "step-two-experience",
            text:
                [
                    {
                        type: "text",
                        text:
                            "My ",
                    },
                    {
                        type: "link",
                        text: "SkilledUp Life",
                        href: "https://skilledup.life/",
                    },
                    {
                        type: "text",
                        text:
                            " work provided a useful example of why this matters. Initial mobile Lighthouse performance was 48, while desktop performance was 91. Investigation identified render-blocking resources, font activity, unused JavaScript, image delivery and server response time as areas worth examining.",
                    },
                ],
        },
        {
            type: "table",
            id: "performance-results",
            table: {
                headers: ["Metric", "Earlier", "Later"],
                rows: [
                    ["Mobile Lighthouse Performance", "48", "72"],
                    ["Desktop Lighthouse Performance", "91", "98"],
                    ["Mobile LCP", "7.3s", "6.0s"],
                    ["Mobile CLS", "0.373", "0.006"],
                    ["Controlled desktop LCP", "—", "0.9s"],
                    ["Controlled desktop FCP", "—", "0.8s"],
                ],
            },
        },
        {
            type: "paragraph",
            id: "step-two-lesson",
            text:
                "The important lesson was not to chase a perfect Lighthouse score. Google describes Core Web Vitals as part of a broader page-experience picture, so I use performance testing to identify bottlenecks and prioritise improvements that benefit actual users.",
        },
        {
            type: "paragraph",
            id: "step-two-reference",
            text: [
                {
                    type: "text",
                    text: "The technical reference point is ",
                },
                {
                    type: "link",
                    text: "Google's page-experience guidance",
                    href:
                        "https://developers.google.com/search/docs/appearance/page-experience",
                },
                {
                    type: "text",
                    text:
                        ", alongside field data and controlled testing. This distinction matters when deciding whether a performance change has actually improved the user experience.",
                },
            ],
        },

        {
            type: "heading",
            id: "step-three",
            level: 2,
            text: "3. Make analytics trustworthy before optimising around it",
        },
        {
            type: "paragraph",
            id: "step-three-intro",
            text:
                "SEO decisions become much stronger when the underlying measurement is understood. I would review GA4 acquisition, landing pages, engagement, returning users, key events, attribution and campaign tracking before drawing conclusions from traffic changes.",
        },
        {
            type: "paragraph",
            id: "step-three-example",
            text:
                [
                    {
                        type: "text",
                        text:
                            "At ",
                    },
                    {
                        type: "link",
                        text: "SkilledUp Life",
                        href: "https://skilledup.life/",
                    },
                    {
                        type: "text",
                        text:
                            ", analysis across the relevant comparison periods showed active users increasing 77.3%, sessions 70.1%, returning users 46.6%, organic sessions 40.4% and organic users 40.2%. Those figures were useful, but the exercise also showed why attribution needs attention: Direct traffic can contain visits where the original acquisition source is not sufficiently visible.",
                    },
                ],
        },
        {
            type: "callout",
            id: "tracking-principle",
            label: "Measurement principle",
            text:
                "Do not optimise what you cannot reliably attribute. Campaign links, landing pages, key events and cross-platform journeys should be designed so that marketing activity can be evaluated rather than guessed.",
        },
        {
            type: "paragraph",
            id: "step-three-reference",
            text: [
                {
                    type: "text",
                    text: "For campaign measurement, I follow Google's guidance around ",
                },
                {
                    type: "link",
                    text: "GA4 campaign and traffic-source data",
                    href:
                        "https://support.google.com/analytics/answer/11242841",
                },
                {
                    type: "text",
                    text:
                        ", using consistent UTM conventions for externally distributed campaigns.",
                },
            ],
        },

        {
            type: "heading",
            id: "step-four",
            level: 2,
            text: "4. Connect technical SEO to content architecture",
        },
        {
            type: "paragraph",
            id: "step-four-intro",
            text:
                "Once the technical foundation is understood, I look at whether the website actually provides a coherent path for searchers. Keyword research should not simply produce a list of phrases; it should help define useful pages, relationships between pages and the journeys those pages support.",
        },
        {
            type: "paragraph",
            id: "step-four-example",
            text:
                "This led me to design scalable Knowledge Hub and Career Pathway structures rather than treating every new page as an isolated SEO exercise. A good information architecture can support discovery, education and conversion simultaneously: a visitor can enter through a specific search query, understand the subject, explore related material and eventually reach an appropriate next step.",
        },
        {
            type: "cards",
            id: "architecture-cards",
            columns: 3,
            items: [
                {
                    tag: "Discovery",
                    title: "Search intent",
                    description:
                        "Identify what people are actually trying to understand, compare or accomplish.",
                    tone: "primary",
                },
                {
                    tag: "Structure",
                    title: "Topic relationships",
                    description:
                        "Connect related pages through meaningful navigation and internal links.",
                },
                {
                    tag: "Conversion",
                    title: "Next action",
                    description:
                        "Give the visitor a logical route from information to the relevant product or enquiry.",
                },
            ],
        },

        {
            type: "heading",
            id: "step-five",
            level: 2,
            text: "5. Strengthen machine-readable understanding",
        },
        {
            type: "paragraph",
            id: "step-five-intro",
            text:
                "Structured data is useful when it accurately describes the content and supports a search feature that still provides value. During my SkilledUp Life engagement, I initially created FAQ schema as part of the site's structured-data work.",
        },
        {
            type: "callout",
            id: "step-five-decision",
            label: "A change in priority",
            tone: "warning",
            text:
                "Google deprecated the FAQ rich result from 7 May 2026 and subsequently removed its FAQ rich-result documentation. I therefore reviewed the work rather than continuing with it simply because it was already planned. The FAQ schema Trello ticket was archived and implementation effort was redirected towards higher-value technical SEO, performance, analytics and content-architecture work.",
        },
        {
            type: "paragraph",
            id: "step-five-ai",
            text: [
                {
                    type: "text",
                    text:
                        "That experience shaped how I approach AI-era SEO: I do not treat every new markup format as a requirement. I look at what search engines actually support, what the website needs, and where engineering time can create the greatest measurable benefit. Google's current guidance also makes clear that there is no special schema required for AI Overviews or AI Mode. ",
                },
                {
                    type: "link",
                    text: "Google Search documentation",
                    href:
                        "https://developers.google.com/search/updates",
                },
            ],
        },
        {
            type: "callout",
            id: "step-five-lesson",
            label: "What I learned",
            tone: "success",
            text:
                "Good technical SEO is not just implementing best practice. It is knowing when the evidence changes and being willing to change the plan with it.",
        },

        {
            type: "heading",
            id: "step-six",
            level: 2,
            text: "6. Treat accessibility and UX as part of technical quality",
        },
        {
            type: "paragraph",
            id: "step-six-intro",
            text:
                "A technically valid website can still be difficult to use. My audits therefore include responsive layouts, navigation, buttons, contrast, imagery, alternative text, spacing, content hierarchy and interaction patterns.",
        },
        {
            type: "paragraph",
            id: "step-six-alt",
            text:
                "For example, I completed a context-aware image accessibility exercise across the website rather than treating alt text as a place to insert keywords. The purpose was to make images understandable where appropriate while keeping the SEO implementation natural.",
        },

        {
            type: "heading",
            id: "step-seven",
            level: 2,
            text: "7. Prioritise work by impact and evidence",
        },
        {
            type: "paragraph",
            id: "step-seven-intro",
            text:
                "The final part is prioritisation. A web estate will always contain more possible improvements than there is time to implement, so I separate issues into technical blockers, user-impacting problems, acquisition opportunities, measurement gaps and longer-term improvements.",
        },
        {
            type: "steps",
            id: "workflow",
            items: [
                {
                    title: "Audit",
                    description:
                        "Establish the technical, search, analytics, UX and performance baseline.",
                },
                {
                    title: "Diagnose",
                    description:
                        "Find the underlying cause rather than treating symptoms as separate problems.",
                },
                {
                    title: "Prioritise",
                    description:
                        "Balance user impact, search opportunity, business value, effort and implementation risk.",
                },
                {
                    title: "Implement",
                    description:
                        "Make controlled changes through the appropriate CMS, development or technical workflow.",
                },
                {
                    title: "Measure",
                    description:
                        "Retest technical performance and monitor search, analytics and behavioural outcomes.",
                },
                {
                    title: "Document",
                    description:
                        "Record what changed, why it changed and what should happen next.",
                },
            ],
        },

        {
            type: "heading",
            id: "what-i-learned",
            level: 2,
            text: "What I learned",
        },
        {
            type: "paragraph",
            id: "what-i-learned-main",
            text:
                "My biggest lesson was that website management is not really a collection of separate disciplines. SEO, development, analytics, accessibility, performance, UX and content architecture constantly affect one another.",
        },
        {
            type: "paragraph",
            id: "what-i-learned-final",
            text:
                "The most useful web professional is therefore not the person who can produce the longest audit. It is the person who can understand the system, identify what matters, explain it clearly, get the right people involved, make sensible changes and demonstrate what happened afterwards.",
        },
        {
            type: "callout",
            id: "closing-principle",
            label: "The approach I now take",
            tone: "success",
            text:
                "Build websites that are technically sound, discoverable, measurable, accessible and useful — then keep improving them as evidence changes.",
        },

        {
            type: "cta",
            id: "final-cta",
            title: "Build, measure, improve.",
            text:
                "My experience has reinforced a simple approach to technical SEO and web development: understand the whole system, improve the highest-value parts first, and measure the result.",
            href: "#introduction",
            label: "Back to the approach",
        },
    ],

};

export default article;