import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { findContent } from "../content/contentRegistry";
import { ContentHero } from "../components/content/ContentHero";
import { ContentRenderer } from "../components/content/ContentRenderer";
import { ContentToc } from "../components/content/ContentToc";
import { BackToTop } from "../components/content/BackToTop";
import { scrollToContentId } from "../utils/contentNavigation";
import { siteRoutes } from "../config/site";

export function ContentPage({ kind }: { kind: "article" | "project" }) {
	const { slug } = useParams();
	const location = useLocation();

	const contentDocument = slug
		? findContent(kind, slug)
		: undefined;

	useEffect(() => {
		if (!contentDocument) return;

		const section = new URLSearchParams(
			location.search,
		).get("section");

		if (!section) return;

		const frame = window.requestAnimationFrame(() => {
			scrollToContentId(section);
		});

		return () => {
			window.cancelAnimationFrame(frame);
		};
	}, [contentDocument, location.search]);

	if (!contentDocument) {
		return (
			<section
				className="content-missing container"
				aria-labelledby="content-missing-title"
			>
				<p className="content-hero__eyebrow">
					404 / CONTENT NOT FOUND
				</p>

				<h1 id="content-missing-title">
					Nothing here yet.
				</h1>

				<p>
					The requested content could not be found.
				</p>

				<Link
					className="text-link"
					to={siteRoutes.notes}
				>
					Back to Engineering Notes →
				</Link>
			</section>
		);
	}

	return (
		<article
			className={`content-page content-page--${kind}`}
		>
			<ContentHero document={contentDocument} />

			<div className="content-layout container">
				<ContentToc
					blocks={contentDocument.blocks}
					variant="desktop"
				/>

				<ContentToc
					blocks={contentDocument.blocks}
					variant="mobile"
				/>

				<div className="content-body">
					<ContentRenderer
						blocks={contentDocument.blocks}
					/>
				</div>
			</div>

			<BackToTop />
		</article>
	);
}