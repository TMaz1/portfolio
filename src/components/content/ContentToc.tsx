import { Link } from "react-router-dom";
import type { ContentBlock } from "../../types/content";

export function ContentToc({ blocks }: { blocks: ContentBlock[] }) {
	const headings = blocks.filter(
		(block): block is Extract<ContentBlock, { type: "heading" }> =>
			block.type === "heading" && block.level === 2,
	);
	if (!headings.length) return null;

	return (
		<nav className="content-toc" aria-label="On this page">
			<span className="content-toc__label">On this page</span>
			<ol>
				{headings.map((heading, index) => (
					<li key={heading.id}>
						<Link to={{ hash: heading.id }}>
							{String(index + 1).padStart(2, "0")} {heading.text}
						</Link>
					</li>
				))}
			</ol>
		</nav>
	);
}