# TM.DEV

A React + TypeScript portfolio and engineering notes site built with Vite.

## Development

```
npm install
npm run dev
```

Format the codebase with:

```
npm run format
```

## Structure

The site uses React Router with hash-based routing for GitHub Pages compatibility.

- **Home** — portfolio, experience and selected projects
- **Engineering Notes** — project documentation and general engineering articles
- **About** — developer profile, stack, principles and interests
- **Articles / Projects** — shared content architecture with reusable typed content blocks

Content is authored as typed TypeScript data and rendered through shared React components.

## Navigation

- Sticky site header on desktop
- Responsive navigation with a burger menu on smaller screens
- Sticky article table of contents on desktop
- Mobile article navigation for smaller screens
- Section navigation accounts for the sticky header when scrolling

## Styling

The visual system uses SCSS with a dark editorial/technical aesthetic, including:

- DM Mono and Oswald typography
- Responsive layouts
- Subtle grain and atmospheric effects
- Fine borders and restrained yellow accents
- Responsive project, article and content grids

## Status

The application architecture, routing, content system and responsive presentation are implemented. Full production builds should be run locally after dependencies are installed.

```
npm run build
```

This keeps it to roughly half a page while still explaining what the project is, how to run it, and the important navigation/content architecture.