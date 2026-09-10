export function HeadingBlock({
	level,
	text,
	id,
}: {
	level: 2 | 3;
	text: string;
	id: string;
}) {
	if (level === 3)
		return (
			<h3 className="content-block content-block--heading" id={id}>
				{text}
			</h3>
		);
	return (
		<h2 className="content-block content-block--heading" id={id}>
			{text}
		</h2>
	);
}