export function SiteFooter() {
	return (
		<footer className="site-footer">
			<div className="site-footer__inner container">
				<img
					src="/assets/images/logo.png"
					alt=""
					className="site-footer__logo"
					width="35"
					height="35"
					loading="lazy"
					decoding="async"
				/>

				<p>Designed & built with React, TypeScript, Vite & SCSS.</p>
			</div>
		</footer>
	);
}