import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SiteNavigation } from "./SiteNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Always show the header near the top of the page.
			if (currentScrollY <= 80) {
				setIsHidden(false);
				lastScrollY = currentScrollY;
				return;
			}

			// Ignore tiny movements to prevent flickering.
			if (currentScrollY > lastScrollY + 8) {
				setIsHidden(true);
				lastScrollY = currentScrollY;
			} else if (currentScrollY < lastScrollY - 8) {
				setIsHidden(false);
				lastScrollY = currentScrollY;
			}
		};

		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`site-header${isHidden ? " site-header--hidden" : ""}`}
		>
			<div className="site-header__inner container">
				<Link className="site-brand" to="/" aria-label="Home">
					<img
						className="site-brand__logo"
						src="/assets/images/logo.png"
						alt=""
						width="48"
						height="48"
						decoding="async"
					/>
				</Link>

				<SiteNavigation />
				<MobileNavigation />
			</div>
		</header>
	);
}