import { Link } from "react-router-dom";
import type { InlineContent } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function CtaBlock({
	id,
	title,
	text,
	href,
	label,
}: {
	id: string;
	title: string;
	text: InlineContent;
	href: string;
	label: string;
}) {
	return (
		<section
			className="content-block content-cta"
			aria-labelledby={`${id}-title`}
		>
			<div>
				<h2 id={`${id}-title`}>{title}</h2>
				<p>
					<InlineContentView content={text} />
				</p>
			</div>
			{href.startsWith("#") ? (
				<Link className="button" to={{ hash: href.slice(1) }}>
					{label} →
				</Link>
			) : (
				<a className="button" href={href}>
					{label} →
				</a>
			)}
		</section>
	);
}