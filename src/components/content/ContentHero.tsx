import type { ContentDocument } from "../../types/content";

export function ContentHero({ document }: { document: ContentDocument }) {
	return (
		<header className="content-hero container">
			<p className="content-hero__eyebrow">{document.eyebrow}</p>
			<h1>{document.title}</h1>
			<p className="content-hero__intro">{document.intro}</p>
			{document.archive ? (
				<div
					className="content-hero__meta"
					aria-label="Article metadata"
				>
					<span>{document.archive.category}</span>
					<span>{document.archive.readingTime} read</span>
					<span>{document.archive.year}</span>
				</div>
			) : null}
			{document.heroLink ? (
				<a
					className="hero-button"
					href={document.heroLink.href}
					target="_blank"
					rel="noreferrer"
				>
					{document.heroLink.label} →
				</a>
			) : null}
		</header>
	);
}