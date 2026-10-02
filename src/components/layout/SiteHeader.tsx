import { Link } from "react-router-dom";
import { SiteNavigation } from "./SiteNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
	return (
		<header className="site-header">
			<div className="site-header__inner container">
				<Link className="site-brand" to="/" aria-label="TM.DEV home">
					<span className="site-brand__mark">TM</span>
					<span className="site-brand__suffix">.DEV</span>
				</Link>

				<SiteNavigation />
				<MobileNavigation />
			</div>
		</header>
	);
}