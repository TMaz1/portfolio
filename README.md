# Personal Portfolio

A static React + TypeScript portfolio and engineering notes site.

The portfolio is intentionally content-first: personal information, projects, experience and engineering writing are represented as typed data and rendered through a shared component system.

It is a **static website by design**. There is no CMS, database or server-side content layer. The content is part of the codebase, versioned alongside the application and built into the site.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Documents](#documents)
  - [Article](#article)
  - [Project](#project)
  - [Content blocks](#content-blocks)
    - [Paragraph](#paragraph)
    - [Heading](#heading)
    - [List](#list)
    - [Code](#code)
    - [Image](#image)
    - [Quote](#quote)
    - [Table](#table)
    - [Cards](#cards)
    - [Callout](#callout)
    - [Steps](#steps)
    - [Pathway](#pathway)
    - [FAQ](#faq)
    - [CTA](#cta)
- [Portfolio](#portfolio)
  - [Projects](#projects)
  - [Experience](#experience)
  - [Skills](#skills)
- [Navigation](#navigation)
- [Technology](#technology)
- [Why approach my portfolio this way?](#why-approach-my-portfolio-this-way)

## Overview

The site brings together three parts of a personal portfolio:

- **Portfolio** — experience, selected projects, skills and profile
- **Engineering Notes** — technical articles and research
- **Projects** — deeper documentation of selected work

The underlying model is deliberately small:

```
Document
↓
Content blocks
↓
Shared React components
↓
Static page
```

Content describes **what is being communicated**. Components and styles determine **how it is presented**.

This keeps the content readable as data while allowing the presentation to remain consistent across the site.

## Features

- Static, fast-loading portfolio and engineering notes site
- Typed content model shared by articles and projects
- Reusable content blocks rather than page-specific layouts
- Responsive article and project layouts
- Desktop table of contents and mobile article navigation
- Browser routing for Cloudflare Pages deployment
- Structured project, experience and skills data
- Inline links and emphasis without embedding arbitrary markup in content
- Image presentation with controlled aspect ratios and cropping
- Article archive metadata and filtering
- Dark editorial/technical visual system

## Documents

Articles and projects are both represented by the same `ContentDocument` structure.

```
type ContentDocument = {
kind: "article" | "project";
slug: string;
title: string;
eyebrow: string;
intro: string;
heroLink?: ContentLink;
blocks: ContentBlock[];
archive?: {
category: string;
filterCategories: NoteFilterCategory[];
readingTime: string;
year: number;
};
};
```

A document provides the page-level identity and an ordered collection of content blocks.

The important distinction is that the document describes the **content**, while the shared renderer determines its presentation.

### Article

An article is an engineering note, explanation, reference or piece of technical writing.

Articles can include archive metadata such as:

- Category
- Filter categories
- Reading time
- Year

They are intended for subjects that benefit from structured, reusable technical content rather than short portfolio summaries.

### Project

A project uses the same document model as an article, but represents a specific piece of work.

Projects can therefore move beyond a simple portfolio card and use the full content system to explain decisions, implementation details, architecture, trade-offs or outcomes.

This avoids maintaining a separate presentation model for project documentation.

## Content blocks

`ContentBlock` is the vocabulary used to compose a document.

Each block represents a distinct information pattern. The system currently contains thirteen block types.

### Paragraph

General prose for explanation, context and narrative content.

```
{
type: "paragraph",
id: "intro",
text: "The introduction goes here.",
}
```

Paragraphs can also contain structured inline text, links and emphasis.

### Heading

Defines section hierarchy within a document.

```
{
type: "heading",
id: "overview",
level: 2,
text: "Overview",
}
```

The content model supports level 2 and level 3 headings.

### List

Represents ordered or unordered collections of information and supports nesting.

```
{
type: "list",
id: "requirements",
ordered: true,
items: [
{ content: "First item." },
{ content: "Second item." },
],
}
```

### Code

Presents source code, commands, configuration or other preformatted technical content.

```
{
type: "code",
id: "example",
language: "typescript",
code: `const value = await getValue();`,
}
```

The language is optional.

### Image

Displays an image with controlled presentation.

```
{
type: "image",
id: "architecture",
image: {
src: "/assets/images/architecture.jpg",
alt: "Application architecture",
ratio: "16:9",
crop: "cover",
caption: "Application architecture overview.",
},
}
```

Supported ratios are `auto`, `16:9`, `4:3`, `3:2` and `1:1`.

Images support `cover` and `contain` cropping behaviour and optional captions.

### Quote

Separates a quotation or notable statement from the main content.

```
{
type: "quote",
id: "principle",
text: "A useful principle.",
attribution: "Author",
}
```

### Table

Represents genuinely tabular information such as comparisons or reference data.

```
{
type: "table",
id: "comparison",
table: {
headers: ["Type", "Purpose"],
rows: [
    ["Article", "Explain a subject"],
    ["Project", "Describe an implementation"],
],
},
}
```

### Cards

Presents several related items as independently scannable units.

```
{
type: "cards",
id: "topics",
columns: 3,
items: [
{
    title: "Architecture",
    description: "How the application is structured.",
},
],
}
```

Cards support 2, 3 or 4 columns, with optional tags, icons, metadata and visual tones.

### Callout

Highlights information that deserves additional attention.

```
{
type: "callout",
id: "warning",
label: "Important",
text: "This information requires attention.",
tone: "warning",
}
```

Supported tones are `info`, `warning`, `success` and `definition`.

### Steps

Represents an ordered procedure or sequence.

```
{
type: "steps",
id: "setup",
items: [
{
    title: "Install dependencies",
    description: "Install the required packages.",
},
{
    title: "Start the server",
    description: "Run the application.",
},
],
}
```

Steps can optionally contain images.

### Pathway

Represents related routes through information without implying a strict sequence.

```
{
type: "pathway",
id: "next",
items: [
{
    title: "Learn the basics",
    description: "Start with the introductory material.",
},
],
}
```

Pathways are useful for related content, follow-up reading and conceptual progression.

### FAQ

Represents a collection of questions and answers.

```
{
type: "faq",
id: "faq",
items: [
{
    question: "How does this work?",
    answer: "The answer goes here.",
},
],
}
```

### CTA

Provides a deliberate next action or destination.

```
{
type: "cta",
id: "next",
title: "Read the reference",
text: "Continue with the detailed documentation.",
href: "/notes/reference",
label: "Read reference",
}
```

CTAs can link to internal or external destinations.

## Portfolio

The portfolio sections use smaller typed models where a full document is unnecessary.

### Projects

Project summaries provide the information required for project listings:

```
type ProjectSummary = {
slug: string;
title: string;
description: string;
technologies: string[];
href?: string;
};
```

A summary can link to a full project document when more detail is available.

### Experience

Experience entries distinguish between professional roles and career breaks.

A role contains:

- Period
- Role
- Company
- Company URL
- Description
- Achievements

This keeps the timeline structured without forcing every entry into the same content shape.

### Skills

Skills are grouped into a fixed set of categories:

- Languages
- Frameworks
- Web & SEO
- Data
- Tools & Infrastructure

The categories are intentionally constrained so that the skills section remains a useful summary rather than an exhaustive inventory.

## Navigation

The site uses React Router with hash-based routing, allowing it to remain a static deployment while supporting client-side navigation.

The article experience includes:

- Desktop table of contents
- Mobile article navigation
- Sticky site navigation
- Section-aware scrolling
- Stable section IDs for direct navigation

The navigation model is designed around long-form content without introducing the complexity of a server-backed application.

## Technology

The implementation is deliberately small.

- **React** — UI
- **TypeScript** — typed content and application model
- **React Router** — client-side navigation
- **Vite** — build tooling and static output
- **Sass** — styling
- **ESLint / Prettier** — code quality and formatting

The technology is intentionally secondary to the content model. There is no framework-specific content platform, CMS or backend.

## Why approach my portfolio this way?

A portfolio can easily become a collection of static pages designed independently of one another. That works visually, but it makes the underlying content difficult to reason about and maintain.

I wanted the portfolio to reflect the way I approach engineering work: **define a clear model, keep responsibilities separate, and use composition where it provides real value**.

The typed document model gives the site a small vocabulary for expressing different kinds of information without turning every page into a custom implementation. An article and a project can have different purposes while still sharing the same underlying system.

The decision to keep the site static is equally intentional. A portfolio does not need a database, authentication layer or content management platform to communicate effectively. The content changes relatively infrequently, benefits from version control, and can be reviewed alongside the code that renders it.

That makes the final system predictable:

```
Content is versioned
    ↓
Pages are statically generated
    ↓
Presentation is shared
    ↓
The site remains simple to deploy and maintain
```
The goal is not to demonstrate how much infrastructure can be built around a portfolio. It is to demonstrate that a small system, when deliberately modelled, can support a rich enough experience without unnecessary complexity.





AI: Ollama LLMs RAG Embeddings AI Gateways