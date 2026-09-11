export function HeadingBlock({
	id,
	level,
	text,
}: {
	id: string;
	level: 2 | 3;
	text: string;
}) {
	const className = `content-block content-block--heading content-block--heading-${level}`;
	return level === 2 ? (
		<h2 id={id} className={className}>
			{text}
		</h2>
	) : (
		<h3 id={id} className={className}>
			{text}
		</h3>
	);
}