import type { ContentListItem } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

function ListItems({ items }: { items: ContentListItem[] }) {
	return (
		<>
			{items.map((item, index) => (
				<li
					key={`${index}-${typeof item.content === "string" ? item.content : index}`}
				>
					<InlineContentView content={item.content} />
					{item.items?.length ? (
						<ul className="content-list__nested">
							<ListItems items={item.items} />
						</ul>
					) : null}
				</li>
			))}
		</>
	);
}

export function ListBlock({
	items,
	ordered = false,
}: {
	items: ContentListItem[];
	ordered?: boolean;
}) {
	const List = ordered ? "ol" : "ul";
	return (
		<List className="content-block content-block--list content-list">
			<ListItems items={items} />
		</List>
	);
}