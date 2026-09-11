import type { ContentCard } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function CardsBlock({
	columns,
	items,
}: {
	columns: 2 | 3 | 4;
	items: ContentCard[];
}) {
	return (
		<div
			className={`content-block content-cards content-cards--${columns}`}
		>
			{items.map((item) => (
				<article
					className={`content-card content-card--${item.tone ?? "default"}`}
					key={item.title}
				>
					{item.tag ? (
						<span className="content-card__tag">{item.tag}</span>
					) : null}
					<div className="content-card__header">
						<h3>{item.title}</h3>
						{item.icon ? (
							<span
								className="content-card__icon"
								aria-hidden="true"
							>
								{item.icon}
							</span>
						) : null}
					</div>
					<p>
						<InlineContentView content={item.description} />
					</p>
					{item.meta ? (
						<footer>
							<span>{item.meta}</span>
							<span aria-hidden="true">→</span>
						</footer>
					) : null}
				</article>
			))}
		</div>
	);
}