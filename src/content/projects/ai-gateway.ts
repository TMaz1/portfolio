import type { ContentDocument } from "../../types/content";

const repoHref = "https://github.com/TMaz1/ai-gateway";

const article: ContentDocument = {
    kind: "project",
    slug: "ai-gateway",
    title: "AI Gateway",
    eyebrow: "PROJECT / BACKEND / AI",
    intro:
        "A production-minded AI Gateway API that provides a secure policy-enforcement layer between client applications and multiple AI providers. The gateway abstracts provider-specific implementation while controlling authentication, model access, resource usage, and AI request handling.",
    heroLink: {
        label: "View on GitHub",
        href: repoHref,
        external: true,
    },
    archive: {
        category: "Backend",
        filterCategories: ["backend", "infrastructure", "research"],
        readingTime: "4 min",
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
            text:
                "The AI Gateway is a standalone security and abstraction layer positioned between applications and AI model providers. It is deliberately not a chatbot, user authentication system, or generic AI proxy.",
        },
        {
            type: "paragraph",
            id: "overview-purpose",
            text:
                "Applications communicate with a stable gateway API without needing to know which provider, model, URL, or credentials are being used internally. The gateway owns those concerns and enforces policy before and after every AI request.",
        },
        {
            type: "callout",
            id: "overview-principle",
            label: "Core principle",
            tone: "definition",
            text:
                "The gateway is a policy-enforcement point, not an AI proxy. A provider request only occurs after authentication, authorization, validation, resource checks, model-policy checks, and trusted prompt construction have succeeded.",
        },
        {
            type: "code",
            id: "architecture",
            language: "Architecture",
            code: `Client Application
       |
       | HTTPS / API key
       v
+---------------------------+
|        AI Gateway         |
|---------------------------|
| Authentication            |
| Authorization             |
| Validation                |
| Rate / Resource Limits    |
| Model Routing             |
| Provider Adapter          |
| Prompt Isolation          |
| Output Validation         |
+-------------+-------------+
              |
              v
        AI Provider
       /           \\
    Ollama      OpenAI / Claude`,
        },

        {
            type: "heading",
            id: "security",
            level: 2,
            text: "Security boundary",
        },
        {
            type: "paragraph",
            id: "security-intro",
            text:
                "The gateway uses service-to-service API keys rather than human authentication. Keys are cryptographically generated, securely hashed in SQLite, and support activation, revocation, expiration, and application association. Human authentication remains the responsibility of the existing Authentication API or consuming application.",
        },
        {
            type: "list",
            id: "security-controls",
            items: [
                {
                    content: [
                        {
                            type: "text",
                            text: "API-key authentication and capability-based authorization. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Only explicitly permitted applications and capabilities can access gateway functionality.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Request and resource limits. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Rate limits, request-size limits, concurrency controls, timeouts, and provider response limits prevent unbounded AI workloads.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Provider isolation. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Clients cannot supply arbitrary provider URLs, credentials, models, or provider-specific configuration.",
                        },
                    ],
                },
                {
                    content: [
                        {
                            type: "text",
                            text: "Prompt and output isolation. ",
                            strong: true,
                        },
                        {
                            type: "text",
                            text:
                                "Caller input is treated as untrusted data, while model output is validated before it can reach the client.",
                        },
                    ],
                },
            ],
        },
        {
            type: "callout",
            id: "security-warning",
            label: "Abuse resistance",
            tone: "warning",
            text:
                "The gateway must never become an SSRF-capable generic proxy. Provider destinations are controlled exclusively by trusted configuration, and requests rejected by gateway policy must never reach the provider.",
        },

        {
            type: "heading",
            id: "classification",
            level: 2,
            text: "Controlled AI capability",
        },
        {
            type: "paragraph",
            id: "classification-intro",
            text:
                "The first capability is text classification through POST /ai/classify. The consuming application submits a message and receives a normalized category rather than raw provider output.",
        },
        {
            type: "code",
            id: "classification-example",
            language: "HTTP",
            code: `POST /ai/classify
Authorization: Bearer <gateway-api-key>
Content-Type: application/json

{
  "message": "My boiler has stopped working."
}

Response:

{
  "category": "technical"
}`,
        },
        {
            type: "paragraph",
            id: "classification-safety",
            text:
                "The permitted categories are billing, technical, cancellation, and general. The gateway constructs the classification instructions itself and validates the model response against this allowlist. Provider reasoning or thinking output is never exposed to clients.",
        },
        {
            type: "callout",
            id: "prompt-injection",
            label: "Prompt isolation",
            text:
                "Client input cannot modify system instructions, classification rules, model selection, provider configuration, or gateway security policy. The model is treated as an untrusted component rather than a security boundary.",
        },

        {
            type: "heading",
            id: "provider-abstraction",
            level: 2,
            text: "Provider abstraction",
        },
        {
            type: "paragraph",
            id: "provider-abstraction-intro",
            text:
                "Provider-specific behaviour is isolated behind a common abstraction. The initial implementation communicates with local Ollama through its HTTP API and uses deepseek-r1:1.5b. The gateway architecture is designed to add OpenAI and Claude without changing client-facing endpoints.",
        },
        {
            type: "table",
            id: "provider-routing",
            table: {
                headers: ["Capability", "Provider", "Model"],
                rows: [
                    [
                        "classification",
                        "Ollama",
                        "deepseek-r1:1.5b",
                    ],
                    [
                        "classification",
                        "Future provider",
                        "Future approved model",
                    ],
                ],
            },
        },
        {
            type: "paragraph",
            id: "provider-switching",
            text:
                "Applications therefore depend on the capability rather than the provider. Changing the underlying model or provider should normally require only gateway configuration and provider-adapter changes, leaving the consuming application unchanged.",
        },

        {
            type: "heading",
            id: "implementation",
            level: 2,
            text: "Implementation and outcome",
        },
        {
            type: "paragraph",
            id: "implementation-intro",
            text:
                "The gateway is built with Python, FastAPI, Pydantic, httpx, pytest, and SQLite. The architecture separates API handling, application services, provider abstractions, authentication, policy enforcement, persistence, configuration, and error handling without introducing unnecessary infrastructure.",
        },
        {
            type: "cards",
            id: "implementation-cards",
            columns: 3,
            items: [
                {
                    title: "FastAPI",
                    tag: "API",
                    description:
                        "Provides the HTTP interface, validation, dependency injection, and structured API behaviour.",
                    meta: "Python",
                    tone: "primary",
                },
                {
                    title: "SQLite",
                    tag: "Persistence",
                    description:
                        "Stores API-key metadata and gateway state locally without requiring external infrastructure.",
                    meta: "Local-first",
                },
                {
                    title: "pytest",
                    tag: "Testing",
                    description:
                        "Tests API behaviour, provider adapters, security controls, failure handling, and abuse scenarios.",
                    meta: "Automated",
                },
            ],
        },
        {
            type: "paragraph",
            id: "implementation-testing",
            text:
                "Testing focuses on both functionality and the security boundary. Provider calls are mocked where appropriate, while tests verify authentication failures, rate limits, malformed provider responses, prompt-injection attempts, arbitrary URL attempts, oversized requests, and provider timeouts.",
        },
        {
            type: "callout",
            id: "project-outcome",
            label: "Outcome",
            tone: "success",
            text:
                "The result is a reusable AI gateway that keeps consuming applications independent from AI providers while providing a controlled boundary for security, resource usage, model selection, prompts, and AI output.",
        },
        {
            type: "cta",
            id: "github-cta",
            title: "Explore the implementation",
            text:
                "View the source repository for the gateway architecture, provider abstraction, security controls, tests, and implementation details.",
            href: repoHref,
            label: "View on GitHub",
            external: true,
        },
    ],
};

export default article;