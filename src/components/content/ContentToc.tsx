import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { ContentBlock } from "../../types/content";

type ContentTocProps = {
	blocks: ContentBlock[];
	variant: "desktop" | "mobile";
};

export function ContentToc({
	blocks,
	variant,
}: ContentTocProps) {
	const navigate = useNavigate();
	const location = useLocation();

	const headings = blocks.filter(
		(block): block is Extract<ContentBlock, { type: "heading" }> =>
			block.type === "heading",
	);

	const urlSection = new URLSearchParams(
		location.search,
	).get("section");

	const [activeSection, setActiveSection] = useState<string | null>(
		urlSection,
	);

	useEffect(() => {
		setActiveSection(urlSection);
	}, [urlSection]);

	useEffect(() => {
		if (headings.length === 0) return;

		const headingElements = headings
			.map((heading) => document.getElementById(heading.id))
			.filter((element): element is HTMLElement => element !== null);

		if (headingElements.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				const visibleHeadings = entries
					.filter((entry) => entry.isIntersecting)
					.sort(
						(a, b) =>
							a.boundingClientRect.top -
							b.boundingClientRect.top,
					);

				if (visibleHeadings.length > 0) {
					setActiveSection(visibleHeadings[0].target.id);
				}
			},
			{
				root: null,
				rootMargin: "-120px 0px -65% 0px",
				threshold: 0,
			},
		);

		headingElements.forEach((element) => {
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	}, [headings]);

	function handleClick(
		event: MouseEvent<HTMLAnchorElement>,
		id: string,
	) {
		event.preventDefault();

		navigate(
			`${location.pathname}?section=${encodeURIComponent(id)}`,
			{
				replace: true,
			},
		);
	}

	if (headings.length === 0) {
		return null;
	}

	return (
		<nav
			className={`content-toc content-toc--${variant}`}
			aria-label="On this page"
		>
			<span className="content-toc__label">
				On this page
			</span>

			<ol>
				{headings.map((heading) => {
					const isActive =
						activeSection === heading.id;

					return (
						<li key={heading.id}>
							<a
								href={`${location.pathname}?section=${encodeURIComponent(
									heading.id,
								)}`}
								className={
									isActive ? "is-active" : undefined
								}
								aria-current={
									isActive ? "location" : undefined
								}
								onClick={(event) =>
									handleClick(event, heading.id)
								}
							>
								{heading.text}
							</a>
						</li>
					);
				})}
			</ol>
		</nav>
	);
}