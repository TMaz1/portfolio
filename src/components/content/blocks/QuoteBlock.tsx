import type { InlineContent } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function QuoteBlock({
	text,
	attribution,
}: {
	text: InlineContent;
	attribution?: string;
}) {
	return (
		<figure className="content-block content-quote">
			<blockquote>
				<InlineContentView content={text} />
			</blockquote>
			{attribution ? <figcaption>{attribution}</figcaption> : null}
		</figure>
	);
}