import { Link } from "react-router-dom";
import type { InlineContent } from "../../../types/content";
import { InlineContent as InlineContentView } from "../InlineContent";

export function CtaBlock({
	id,
	title,
	text,
	href,
	label,
	external = false,
}: {
	id: string;
	title: string;
	text: InlineContent;
	href: string;
	label: string;
	external?: boolean;
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

			{external ? (
				<a
					className="button"
					href={href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{label} →
				</a>
			) : (
				<Link className="button" to={href}>
					{label} →
				</Link>
			)}
		</section>
	);
}