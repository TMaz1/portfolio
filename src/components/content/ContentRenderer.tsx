import type { ContentBlock } from "../../types/content";
import { HeadingBlock } from "./blocks/HeadingBlock";
import { ParagraphBlock } from "./blocks/ParagraphBlock";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
	return (
		<div className="content-renderer">
			{blocks.map((block) => {
				switch (block.type) {
					case "paragraph":
						return (
							<ParagraphBlock key={block.id} text={block.text} />
						);
					case "heading":
						return (
							<HeadingBlock
								key={block.id}
								id={block.id}
								level={block.level}
								text={block.text}
							/>
						);
				}
			})}
		</div>
	);
}