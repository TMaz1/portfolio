import type { InlineContent } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function CalloutBlock({
	label,
	text,
	tone = "info",
}: {
	label: string;
	text: InlineContent;
	tone?: "info" | "warning" | "success" | "definition";
}) {
	return (
		<aside
			className={`content-block content-callout content-callout--${tone}`}
		>
			<div className="content-callout__label">
				<span aria-hidden="true">
					{tone === "warning"
						? "!"
						: tone === "success"
							? "✓"
							: tone === "definition"
								? "?"
								: "i"}
				</span>
				{label}
			</div>
			<p>
				<InlineContentView content={text} />
			</p>
		</aside>
	);
}