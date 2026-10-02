export function scrollToContentId(id: string) {
	const target = window.document.getElementById(id);
	if (!target) return;

	target.scrollIntoView({
		behavior: getScrollBehavior(),
		block: "start",
	});
}

export function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: getScrollBehavior(),
	});
}

export function getScrollBehavior(): ScrollBehavior {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches
		? "auto"
		: "smooth";
}