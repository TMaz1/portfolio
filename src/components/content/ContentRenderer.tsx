import type { ContentBlock } from "../../types/content";
import { CardsBlock } from "./blocks/CardsBlock";
import { CalloutBlock } from "./blocks/CalloutBlock";
import { CodeBlock } from "./blocks/CodeBlock";
import { CtaBlock } from "./blocks/CtaBlock";
import { FaqBlock } from "./blocks/FaqBlock";
import { HeadingBlock } from "./blocks/HeadingBlock";
import { ImageBlock } from "./blocks/ImageBlock";
import { ListBlock } from "./blocks/ListBlock";
import { ParagraphBlock } from "./blocks/ParagraphBlock";
import { PathwayBlock } from "./blocks/PathwayBlock";
import { QuoteBlock } from "./blocks/QuoteBlock";
import { StepsBlock } from "./blocks/StepsBlock";
import { TableBlock } from "./blocks/TableBlock";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
	return (
		<div className="content-renderer">
			{blocks.map((block) => {
				switch (block.type) {
					case "paragraph":
						return (
							<ParagraphBlock
								key={block.id}
								text={block.text}
								lead={block.lead}
							/>
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
					case "list":
						return (
							<ListBlock
								key={block.id}
								items={block.items}
								ordered={block.ordered}
							/>
						);
					case "code":
						return (
							<CodeBlock
								key={block.id}
								code={block.code}
								language={block.language}
							/>
						);
					case "image":
						return (
							<ImageBlock
								key={block.id}
								src={block.src}
								alt={block.alt}
								caption={block.caption}
							/>
						);
					case "quote":
						return (
							<QuoteBlock
								key={block.id}
								text={block.text}
								attribution={block.attribution}
							/>
						);
					case "table":
						return (
							<TableBlock key={block.id} table={block.table} />
						);
					case "cards":
						return (
							<CardsBlock
								key={block.id}
								columns={block.columns}
								items={block.items}
							/>
						);
					case "callout":
						return (
							<CalloutBlock
								key={block.id}
								label={block.label}
								text={block.text}
								tone={block.tone}
							/>
						);
					case "steps":
						return (
							<StepsBlock key={block.id} items={block.items} />
						);
					case "pathway":
						return (
							<PathwayBlock key={block.id} items={block.items} />
						);
					case "faq":
						return <FaqBlock key={block.id} items={block.items} />;
					case "cta":
						return (
							<CtaBlock
								key={block.id}
								id={block.id}
								title={block.title}
								text={block.text}
								href={block.href}
								label={block.label}
							/>
						);
				}
			})}
		</div>
	);
}