import type { ContentFaqItem } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function FaqBlock({ items }: { items: ContentFaqItem[] }) {
	return (
		<div className="content-block content-faq">
			{items.map((item) => (
				<details key={item.question}>
					<summary>{item.question}</summary>
					<div className="content-faq__answer">
						<InlineContentView content={item.answer} />
					</div>
				</details>
			))}
		</div>
	);
}