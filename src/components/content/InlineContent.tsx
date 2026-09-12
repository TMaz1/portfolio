import { Link } from "react-router-dom";
import type { InlineContent } from "../../types/content";
import { scrollToContentId } from "./contentNavigation";

export function InlineContent({ content }: { content: InlineContent }) {
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
								rel="noreferrer"
							>
								{segment.text}
							</a>
						);
					}

					if (segment.href.startsWith("#")) {
						return (
							<Link
								key={`${segment.text}-${index}`}
								className="content-inline-link"
								to={segment.href}
								onClick={(event) => {
									event.preventDefault();
									scrollToContentId(segment.href.slice(1));
								}}
							>
								{segment.text}
							</Link>
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