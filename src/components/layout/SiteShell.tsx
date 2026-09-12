import { Outlet, ScrollRestoration } from "react-router-dom";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function SiteShell() {
	return (
		<div className="site-shell">
			<SiteHeader />
			<main className="site-main">
				<Outlet />
			</main>
			<SiteFooter />
			<ScrollRestoration
				getKey={(location) => location.key}
			/>
		</div>
	);
}