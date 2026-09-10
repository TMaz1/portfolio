import { Link } from "react-router-dom";
import type { ContentDocument } from "../../types/content";

type NoteCardProps = { document: ContentDocument; number: number };

export function NoteCard({ document, number }: NoteCardProps) {
	return (
		<article className="note-card">
			<div className="note-card__top">
				<span>NOTE / {String(number).padStart(2, "0")}</span>
				<span>{document.archive?.category}</span>
			</div>
			<div className="note-card__body">
				<h3>{document.title}</h3>
				<p>{document.intro}</p>
			</div>
			<div className="note-card__bottom">
				<span>
					{document.archive?.year} / {document.archive?.readingTime}
				</span>
				<Link
					to={`/articles/${document.slug}`}
					aria-label={`Read ${document.title}`}
				>
					Read note →
				</Link>
			</div>
		</article>
	);
}