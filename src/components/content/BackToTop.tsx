import { useEffect, useState } from "react";
import { scrollToTop } from "../../utils/contentNavigation";

const VISIBILITY_THRESHOLD = 600;

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > VISIBILITY_THRESHOLD);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = () => {
        scrollToTop();

        /*
         * The button will become hidden once the scroll position returns
         * to the top. Move focus before that happens so focus is never
         * retained by a hidden control.
         */
        window.setTimeout(() => {
            const target =
                document.getElementById("content-page-title") ??
                document.querySelector<HTMLElement>(".content-hero h1");

            if (!target) return;

            if (!target.hasAttribute("tabindex")) {
                target.setAttribute("tabindex", "-1");
            }

            target.focus({ preventScroll: true });
        }, 0);
    };

    return (
        <button
            type="button"
            className={`back-to-top${isVisible ? " is-visible" : ""}`}
            onClick={handleClick}
            aria-label="Back to top"
            tabIndex={isVisible ? 0 : -1}
        >
            <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
            >
                <path
                    d="M8 12V4M4.5 7.5L8 4L11.5 7.5"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />
            </svg>
        </button>
    );
}