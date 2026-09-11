import type { InlineContent } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function ParagraphBlock({
	text,
	lead = false,
}: {
	text: InlineContent;
	lead?: boolean;
}) {
	return (
		<p
			className={`content-block content-block--paragraph${lead ? " content-block--paragraph-lead" : ""}`}
		>
			<InlineContentView content={text} />
		</p>
	);
}