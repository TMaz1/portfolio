# 

React + TypeScript + Vite

Run project: npm run dev
Format codebase: npm run format

toc/nav stickiness
burger for smaller screens




# Batch 1 — Foundation

## Scope

This batch establishes the stable application and styling foundation without introducing content/page implementations that belong to later batches.

## Delivered

- Vite React TypeScript application entry.
- Hash-based routing boundary.
- Site shell with header and footer.
- Small shared UI primitives.
- Centralized SCSS design tokens, reset, typography, layout and component foundations.
- GitHub Pages-compatible routing strategy through HashRouter.
- Project state and file manifest documentation.

## Boundary guarantee

No navigation links to routes that are not implemented in this batch are exposed. No temporary page or placeholder content was introduced for later batches.

## Verification

- TypeScript source syntax check: passed for all 11 `.ts`/`.tsx` source files.
- npm dependency installation: not completed because the environment could not access the npm registry/cache.
- Full `tsc -b` and Vite production build: not executed because dependencies are not installed.


# Batch 2 — Portfolio

## Scope

Implemented the portfolio/home experience from `taxi-driver-3.html`, including the hero, work/experience timeline, six project summaries, five finalised technology-stack categories, primary navigation, and the shared content-route foundation required for functional project-article links.

## Architectural decisions

- Project summaries are typed content data under `src/content/projects/`.
- Project routes use the shared `ContentPage` and `ContentRenderer`; no separate project page architecture exists.
- The first content block vocabulary is deliberately small and source-supported; it is extensible through the discriminated `ContentBlock` union.
- Project cards expose a future project-article route through the content model without creating a separate ProjectPage architecture.
- No repository or deployed-project URL was invented because the supplied reference only contained placeholders.
- The primary navigation is implemented with React Router and remains Home / Engineering Notes / About.
- Portfolio content is kept separate from presentation components.
- Research is represented only where it belongs in the supplied portfolio experience content; no standalone ResearchSection architecture was introduced.
- No interactive tags were added.

## Verification

- TypeScript source was statically checked with a local syntax/type inspection pass.
- Full `npm run build` was not possible because this environment has no installed dependency tree and cannot access the npm registry/cache.

BUILD NOT EXECUTED — code has been statically checked but I cannot verify the build in this environment.


# Batch 3 — Engineering Notes

## Scope

Implemented the Engineering Notes discovery/archive surface without introducing a third content domain. The page has the two agreed content sections: Projects and General Engineering Notes. The former featured investigation from the reference is represented as an ordinary Article entry rather than a third content section.

## Changed files

### Added

- `src/pages/EngineeringNotesPage.tsx`
- `src/components/notes/NoteCard.tsx`
- `src/components/notes/NoteFilters.tsx`
- `src/components/notes/ProjectArchiveCard.tsx`
- `src/content/articles/*.ts`
- `src/content/articles/index.ts`
- `src/styles/pages/_engineering-notes.scss`

### Revised

- `src/app/router.tsx` — registered `/engineering-notes`.
- `src/content/contentRegistry.ts` — registry now aggregates Articles and Projects.
- `src/types/content.ts` — archive metadata/filter categories added to the shared content model.
- `src/pages/HomePage.tsx` — corrected the in-page work link so it does not corrupt HashRouter state; reduced-motion behaviour is respected.
- `src/styles/main.scss` — includes Engineering Notes styles.
- `docs/PROJECT_STATE.md` and `docs/FILE_MANIFEST.md`.

### Removed

- `src/components/notes/FeaturedNote.tsx` — removed because the final Engineering Notes architecture has exactly two content sections and the investigation is an ordinary Article.

## Architecture impact

No architectural change. Articles and Projects still resolve through the same `ContentPage` and `ContentRenderer`. Engineering Notes only discovers and presents the existing content sources.

`ProjectPage.tsx` was not introduced. `src/content/engineering-notes/` was not introduced.

## Content model impact

General engineering notes are now typed `ContentDocument` values under `src/content/articles/`. Archive metadata identifies the display category, year and reading time plus the explicit category filters used by the archive. This is metadata for discovery, not an interactive tag system.

The content remains ordered `blocks[]` data and can continue to grow independently of the archive UI.

## Route impact

Added:

- `/#/engineering-notes`

Existing Article and Project routes remain:

- `/#/articles/:slug`
- `/#/projects/:slug`

## Verification

- TypeScript syntax transpilation check: passed.
- Content/type check for `src/types/content.ts`, Articles and Projects: passed.
- Architecture invariants checked: no `ProjectPage.tsx`; no `src/content/engineering-notes/`; no legacy standalone HTML routes in the new Engineering Notes implementation.
- Article document count: 8.
- Project summary count: 6.
- `npm install` was attempted but timed out in the execution environment, so dependency-backed build/lint execution was not available.

BUILD NOT EXECUTED — code has been statically checked but I cannot verify the build in this environment.

## Deferred visual refinement

The visual discrepancy identified by comparing the original HTML against Batch 2 remains explicitly deferred. Batch 3 does not treat the current styling as the visual source of truth and does not attempt the later systematic refinement pass.


# Batch 4 — Shared Content System

## IMPLEMENTATION STATUS

### Scope

- Expand the shared Article/Project content model into a flexible discriminated-union block system.
- Keep content composition in typed TypeScript data; keep presentation in React components and SCSS.
- Preserve one shared `ContentPage` and `ContentRenderer` for both Articles and Projects.
- Add the reference article `Getting Started With Articles — TM.DEV` using the shared content system.
- Derive the article TOC from the same heading blocks rendered in the document.
- Keep the system dependency-light and avoid MDX, Markdown parsing, CMS infrastructure, backend services, or a separate ProjectPage architecture.

### Architecture decisions

The renderer now supports optional, repeatable, arbitrary-order blocks:

- `paragraph`
- `heading`
- `list`
- `code`
- `image`
- `quote`
- `table`
- `cards`
- `callout`
- `steps`
- `pathway`
- `faq`
- `cta`

Image + caption is intentionally a shared block rather than a project-specific feature. The block union is the extension point: adding a new content pattern requires a typed case and its renderer without changing the page architecture.

### Changed files

#### Added

- `src/components/content/InlineContent.tsx`
- `src/components/content/ContentToc.tsx`
- `src/components/content/blocks/ListBlock.tsx`
- `src/components/content/blocks/CodeBlock.tsx`
- `src/components/content/blocks/ImageBlock.tsx`
- `src/components/content/blocks/QuoteBlock.tsx`
- `src/components/content/blocks/TableBlock.tsx`
- `src/components/content/blocks/CardsBlock.tsx`
- `src/components/content/blocks/CalloutBlock.tsx`
- `src/components/content/blocks/StepsBlock.tsx`
- `src/components/content/blocks/PathwayBlock.tsx`
- `src/components/content/blocks/FaqBlock.tsx`
- `src/components/content/blocks/CtaBlock.tsx`
- `src/content/articles/getting-started-with-articles.ts`
- `docs/BATCH-4.md`

#### Revised

- `src/types/content.ts` — expanded the discriminated union and shared inline-content types.
- `src/components/content/ContentRenderer.tsx` — renders all supported block types.
- `src/components/content/blocks/ParagraphBlock.tsx` — accepts shared inline content and optional lead treatment.
- `src/components/content/blocks/HeadingBlock.tsx` — explicit level-based heading rendering.
- `src/components/content/ContentHero.tsx` — exposes archive metadata when available.
- `src/pages/ContentPage.tsx` — adds the shared derived TOC beside the renderer.
- `src/styles/pages/_content.scss` — styles the shared content vocabulary and responsive article layout.
- `src/styles/main.scss` — existing content stylesheet remains the single import for content styles.
- `src/content/articles/index.ts` — registers the new reference article.
- `docs/PROJECT_STATE.md` — current implementation state updated.
- `docs/FILE_MANIFEST.md` — manifest updated to Batch 4.

### Content fidelity

The new reference Article follows the structure and terminology of `taxi-hub.html`: Overview, Key concepts, Before you start, Documentation type table, Workspace structure, Setup, Writing guidelines, Examples, Publishing, Maintenance, Routes, FAQ, and the final “Ready to build better docs?” CTA.

The source's visual patterns are represented by shared content blocks rather than one-off article markup. The source-only `/technical-guides` link was not promoted to a route because that destination is not part of the agreed SPA route map; supported in-page references use router-aware fragment navigation instead.

## Verification

- Static TS/TSX transpilation check: passed for all `src` TypeScript/TSX files.
- Content/type check for `src/types/content.ts`, Articles and Projects: passed.
- Content registry contains 10 Article documents and 6 Project documents.
- Architecture invariants checked: no `ProjectPage.tsx`; no `src/content/engineering-notes/`; no CMS/MDX/Markdown dependency introduced.
- No image assets were invented; the shared image block is available for future real assets.
- Dependency-backed build/lint execution was not available because `node_modules` is not installed in the execution environment.

BUILD NOT EXECUTED — code has been statically checked but I cannot verify the build in this environment.

## Deferred work

- About page implementation remains the next dedicated page batch.
- The systematic visual refinement pass remains deferred; Batch 4 focuses on content architecture and source-faithful composition rather than redesigning the established site language.

## CHECKPOINT

- Shared Article/Project architecture preserved.
- Blocks are optional, repeatable, and arbitrary-order.
- Content remains local typed TS authoring data.
- No separate ProjectPage system introduced.
- No third Engineering Notes content domain introduced.
- The reference article is now rendered through the production content system rather than standalone HTML.


# Batch 5 — About + content navigation fixes

## Scope

Batch 5 implements the agreed V1 About page and fixes content-section navigation across desktop and mobile.

## Changed

- Added `/about` to the HashRouter and implemented `AboutPage`.
- Added typed About content for Developer Profile, Tech Stack, Principles, Project Radar, Culture / Interests and Social Links.
- Limited Principles to the agreed three principles.
- Limited Project Radar statuses to `Incomplete` and `Future`.
- Reused the existing five Tech Stack categories: Languages, Frameworks, Infrastructure, Databases and Tools.
- Implemented a small accessible Culture / Interests carousel without ratings, photography gallery or lightbox architecture.
- Kept public GitHub/LinkedIn URLs absent rather than inventing destinations.
- Added `general` to `NoteFilterCategory` and Engineering Notes filters.
- Added archive metadata to `getting-started-with-articles` so the article is discoverable in General Engineering Notes.
- Reworked ContentToc navigation so it scrolls directly to rendered heading IDs without conflicting with HashRouter's URL hash.
- Added the same section-navigation behaviour to inline article hash links.
- Added a mobile TOC variant above the content body at narrower widths.
- Updated About and navigation SCSS.

## Architecture impact

Articles and Projects remain one shared content system. About is a normal routed page composed from typed content and focused presentation components; it does not create another content type or another project architecture.

The TOC remains derived from the document's heading blocks. It does not maintain a second section model.

## Verification

Static TypeScript/TSX syntax and targeted type checks should be run before commit. A full Vite build remains unavailable when dependencies cannot be installed.

BUILD NOT EXECUTED — code has been statically checked but I cannot verify the build in this environment.


# Batch 6 — Visual Refinement Restart

## Basis

This batch restarts from the Batch 5 checkpoint. The rejected Batch 6 implementation is not used as a foundation.

The four supplied HTML files are treated strictly as visual/design references:

- `taxi-driver-3.html` → Home / Portfolio visual reference
- `taxi-about.html` → About visual reference
- `taxi-middle.html` → Engineering Notes visual reference
- `taxi-hub.html` → shared Article / Project visual reference, specifically the Getting Started With Articles article

No HTML filename is used as a route definition.

## Scope

This batch changes presentation only:

- typography weight, scale and tracking
- page/hero composition
- spacing and negative space
- atmospheric backgrounds and subtle texture
- borders and rules
- muted/secondary contrast
- project and archive treatment
- timeline treatment
- button/link restraint
- responsive spacing and layout
- centered page heroes
- centered Home career-break presentation

The existing router, page components, content architecture, content blocks, interactions and navigation are preserved.

## Explicitly not changed

- HashRouter routes
- Article/Project shared ContentPage architecture
- Engineering Notes content model
- About content model
- content block vocabulary
- TOC navigation implementation
- carousel behaviour
- project-card destinations
- external URL data
- dependency architecture
- no image-generation assets
- no new page architecture

## Visual decisions

The original HTML uses a restrained neo-noir/editorial system rather than a conventional component-library appearance. The restyling therefore uses:

- `#070808` black base
- `#0d0f0f` asphalt surface
- `#141716` charcoal surfaces
- cream/white foreground text
- muted warm-grey secondary text
- restrained taxi yellow accents
- subdued cyan support colour
- 300-weight Oswald display typography
- 300-weight DM Mono body typography
- 1180px editorial container
- 76px desktop header rhythm
- fine 1px rules
- subtle fixed grain and atmospheric glow

## Responsive decisions

- Desktop maintains the original wide editorial grid.
- Tablet collapses multi-column structures without introducing horizontal overflow.
- Mobile reduces hero scale and section spacing while preserving the visual hierarchy.
- Navigation remains the existing React navigation; only its visual treatment and compact spacing are adjusted.
- Content grids, project cards, radar rows, skills and article cards collapse at the existing breakpoints.

## Verification

Static architecture checks passed. The full Vite build was not executed because dependencies are unavailable in the environment.

BUILD NOT EXECUTED — code has been statically checked but I cannot verify the build in this environment.


