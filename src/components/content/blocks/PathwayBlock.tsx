import type { ContentPathway } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function PathwayBlock({ items }: { items: ContentPathway[] }) {
	return (
		<div className="content-block content-pathway">
			{items.map((item, index) => (
				<article className="content-pathway__item" key={item.title}>
					<span>{String(index + 1).padStart(2, "0")}</span>
					<div>
						<h3>{item.title}</h3>
						<p>
							<InlineContentView content={item.description} />
						</p>
					</div>
				</article>
			))}
		</div>
	);
}