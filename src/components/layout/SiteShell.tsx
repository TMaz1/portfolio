import { Outlet } from 'react-router-dom';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

export function SiteShell() {
	return (
		<div className="site-shell">
			<SiteHeader />
			<main className="site-main">
				<Outlet />
			</main>
			<SiteFooter />
		</div>
	);
}