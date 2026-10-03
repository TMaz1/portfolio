import { Link } from "react-router-dom";
import type { InlineContent as InlineContentType } from "../../types/content";

export function InlineContent({
	content,
}: {
	content: InlineContentType;
}) {
	if (typeof content === "string") {
		return <>{content}</>;
	}

	return (
		<>
			{content.map((segment, index) => {
				if (segment.type === "link") {
					if (segment.external) {
						return (
							<a
								key={`${segment.text}-${index}`}
								className="content-inline-link"
								href={segment.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{segment.text}
							</a>
						);
					}

					return (
						<Link
							key={`${segment.text}-${index}`}
							className="content-inline-link"
							to={segment.href}
						>
							{segment.text}
						</Link>
					);
				}

				return segment.strong ? (
					<strong key={`${segment.text}-${index}`}>
						{segment.text}
					</strong>
				) : (
					segment.text
				);
			})}
		</>
	);
}