import type { ContentBlock } from "../../types/content";
import { scrollToContentId } from "./contentNavigation";

type ContentTocProps = {
	blocks: ContentBlock[];
	variant?: "desktop" | "mobile";
};

export function ContentToc({ blocks, variant = "desktop" }: ContentTocProps) {
	const headings = blocks.filter(
		(block): block is Extract<ContentBlock, { type: "heading" }> =>
			block.type === "heading" && block.level === 2,
	);

	if (!headings.length) return null;

	return (
		<nav
			className={`content-toc content-toc--${variant}`}
			aria-label="On this page"
		>
			<span className="content-toc__label">On this page</span>
			<ol>
				{headings.map((heading, index) => (
					<li key={heading.id}>
						<button
							type="button"
							onClick={() => scrollToContentId(heading.id)}
						>
							{String(index + 1).padStart(2, "0")} {heading.text}
						</button>
					</li>
				))}
			</ol>
		</nav>
	);
}