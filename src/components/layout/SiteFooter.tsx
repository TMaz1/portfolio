import { Link } from "react-router-dom";
import { site, siteRoutes, socialUrls } from "../../config/site";

export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner container">
				<div className="site-footer__top">
					<Link
						to={siteRoutes.home}
						className="site-footer__brand"
						aria-label={`${site.name} — Home`}
					>
						<img
							src="/assets/images/logo.png"
							alt=""
							className="site-footer__logo"
							width="35"
							height="35"
							loading="lazy"
							decoding="async"
						/>
					</Link>

					<nav
						className="site-footer__nav"
						aria-label="Footer navigation"
					>
						<Link to={siteRoutes.home}>Home</Link>
						<Link to={siteRoutes.notes}>Notes</Link>
						<Link to={siteRoutes.about}>About</Link>
					</nav>

					<nav
						className="site-footer__socials"
						aria-label="Social links"
					>
						<a
							href={socialUrls.linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn <span aria-hidden="true">↗</span>
						</a>
						<a
							href={socialUrls.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub <span aria-hidden="true">↗</span>
						</a>
					</nav>
				</div>

				<div className="site-footer__bottom">
					<p>
						Designed &amp; built with React, TypeScript, Vite &amp; SCSS.
					</p>
					<p>
						© {new Date().getFullYear()} {site.name}
					</p>
				</div>
			</div>
		</footer>
	);
}