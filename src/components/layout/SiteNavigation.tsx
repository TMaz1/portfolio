import { NavLink } from "react-router-dom";
import { siteNavigation } from "../../content/navigation/siteNavigation";

export function SiteNavigation() {
	return (
		<nav className="site-navigation" aria-label="Primary navigation">
			{siteNavigation.map((item) => (
				<NavLink
					key={item.to}
					to={item.to}
					end={item.to === "/"}
					className={({ isActive }: { isActive: boolean }) =>
						isActive ? "is-active" : undefined
					}
				>
					{item.label}
				</NavLink>
			))}
		</nav>
	);
}