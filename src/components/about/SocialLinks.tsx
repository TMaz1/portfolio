import { Link } from "react-router-dom";
import { socialLinks } from "../../content/about";

export function SocialLinks() {
	return (
		<section
			className="about-social"
			id="social"
			aria-labelledby="social-title"
		>
			<div className="about-section-heading">
				<div className="section-number">06 / SOCIAL LINKS</div>
				<div>
					<h2 className="section-title" id="social-title">
						Follow the
						<br />
						trail.
					</h2>
					<p className="section-intro">
						The useful material tends to happen elsewhere:
						repositories, notes, experiments and unfinished things.
					</p>
				</div>
			</div>
			<div className="social-list">
				{socialLinks.map((link) => (
					<article className="social-item" key={link.label}>
						<div>
							<p className="eyebrow">{link.label}</p>
							<p>{link.description}</p>
						</div>
						{link.href ? (
							<Link className="text-link" to={link.href}>
								Open →
							</Link>
						) : (
							<span className="social-item__pending">
								Public link not supplied
							</span>
						)}
					</article>
				))}
			</div>
		</section>
	);
}