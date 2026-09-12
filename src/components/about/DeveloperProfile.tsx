import { developerProfile } from "../../content/about";

export function DeveloperProfile() {
	return (
		<section
			className="about-developer"
			id="developer"
			aria-labelledby="developer-title"
		>
			<div className="about-section-heading">
				<div className="section-number">01 / DEVELOPER</div>
				<div>
					<h2 className="section-title">
						More than
						<br />a stack.
					</h2>
					<p className="section-intro">{developerProfile.intro}</p>
				</div>
			</div>

			<div className="about-developer-grid">
				<article className="about-developer-main">
					<p className="eyebrow">{developerProfile.eyebrow}</p>
					<h3 id="developer-title">{developerProfile.title}</h3>
					{developerProfile.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</article>
			</div>
		</section>
	);
}