export function SiteHeader() {
	return (
		<header className="site-header">
			<div className="site-header__inner container">
				<a className="site-brand" href="#/" aria-label="TM.DEV home">
					<span className="site-brand__mark">TM</span>
					<span className="site-brand__suffix">.DEV</span>
				</a>
			</div>
		</header>
	);
}