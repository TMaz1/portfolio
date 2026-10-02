import type { ContentStep } from "../../../types/content";
import { isValidImage } from "../../../utils/validation";
import { InlineContent as InlineContentView } from "../InlineContent";
import { ContentImageView } from "./ContentImageView";

export function StepsBlock({ items }: { items: ContentStep[] }) {
	return (
		<ol className="content-block content-steps">
			{items.map((item, index) => (
				<li className="content-step" key={`${index}-${item.title}`}>
					<span className="content-step__number">
						{String(index + 1).padStart(2, "0")}
					</span>

					<div className="content-step__content">
						<h3>{item.title}</h3>

						<p>
							<InlineContentView content={item.description} />
						</p>

						{isValidImage(item.image) ? (
							<ContentImageView
								image={item.image}
								className="content-step__media"
							/>
						) : null}
					</div>
				</li>
			))}
		</ol>
	);
}