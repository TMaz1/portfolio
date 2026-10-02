import { Link } from "react-router-dom";
import { AboutSectionHeading } from "./AboutSectionHeading";
import { aboutContent } from "../../content/about";

export function SocialLinks() {
	const { social } = aboutContent;

	return (
		<section
			className="about-social"
			id="social"
			aria-labelledby="social-title"
		>
			<AboutSectionHeading
				content={social.section}
				titleId="social-title"
			/>

			<div className="social-list">
				{social.items.map((link) => (
					<article className="social-item" key={link.label}>
						<div>
							<p className="eyebrow">{link.label}</p>
							<p>{link.description}</p>
						</div>

						{link.href ? (
							link.href.startsWith("/") ? (
								<Link className="text-link" to={link.href}>
									{social.openLabel}
								</Link>
							) : (
								<a
									className="text-link"
									href={link.href}
									target="_blank"
									rel="noreferrer"
								>
									{social.openLabel}
								</a>
							)
						) : (
							<span className="social-item__pending">
								{social.pendingLabel}
							</span>
						)}
					</article>
				))}
			</div>
		</section>
	);
}