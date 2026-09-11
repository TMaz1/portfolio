export function CodeBlock({
	code,
	language,
}: {
	code: string;
	language?: string;
}) {
	return (
		<figure className="content-block content-code">
			{language ? (
				<figcaption className="content-code__language">
					{language}
				</figcaption>
			) : null}
			<pre>
				<code>{code}</code>
			</pre>
		</figure>
	);
}