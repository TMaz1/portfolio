import { Link, useParams } from "react-router-dom";
import { findContent } from "../content/contentRegistry";
import { ContentHero } from "../components/content/ContentHero";
import { ContentRenderer } from "../components/content/ContentRenderer";
import { ContentToc } from "../components/content/ContentToc";

export function ContentPage({ kind }: { kind: "article" | "project" }) {
	const { slug } = useParams();
	const document = slug ? findContent(kind, slug) : undefined;

	if (!document) {
		return (
			<section
				className="content-missing container"
				aria-labelledby="content-missing-title"
			>
				<p className="content-hero__eyebrow">404 / CONTENT NOT FOUND</p>
				<h1 id="content-missing-title">Nothing here yet.</h1>
				<p>The requested content could not be found.</p>
				<Link
					className="text-link"
					to={
						kind === "project"
							? "/engineering-notes"
							: "/engineering-notes"
					}
				>
					Back to Engineering Notes →
				</Link>
			</section>
		);
	}

	return (
		<article className={`content-page content-page--${kind}`}>
			<ContentHero document={document} />
			<div className="content-layout container">
				<ContentToc blocks={document.blocks} />
				<div className="content-body">
					<ContentRenderer blocks={document.blocks} />
				</div>
			</div>
		</article>
	);
}