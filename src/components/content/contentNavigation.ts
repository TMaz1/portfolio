export function scrollToContentId(id: string) {
	const target = document.getElementById(id);
	if (!target) return;

	target.scrollIntoView({
		behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
			? "auto"
			: "smooth",
		block: "start",
	});

	window.history.replaceState(
		null,
		"",
		`${window.location.pathname}${window.location.search}#${id}`,
	);
}