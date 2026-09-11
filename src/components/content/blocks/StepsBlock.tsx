import type { ContentStep } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function StepsBlock({ items }: { items: ContentStep[] }) {
	return (
		<ol className="content-block content-steps">
			{items.map((item, index) => (
				<li className="content-step" key={`${index}-${item.title}`}>
					<span className="content-step__number">
						{String(index + 1).padStart(2, "0")}
					</span>
					<div>
						<h3>{item.title}</h3>
						<p>
							<InlineContentView content={item.description} />
						</p>
						{item.screenshotLabel ? (
							<div className="content-step__screenshot">
								{item.screenshotLabel}
							</div>
						) : null}
					</div>
				</li>
			))}
		</ol>
	);
}