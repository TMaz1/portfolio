import { AboutSectionHeading } from "./AboutSectionHeading";
import { aboutContent } from "../../content/about";

export function DeveloperProfile() {
	const { developer } = aboutContent;

	return (
		<section
			className="about-developer"
			id="developer"
			aria-labelledby="developer-section-title"
		>
			<AboutSectionHeading
				content={developer.section}
				titleId="developer-section-title"
			/>

			<div className="about-developer-grid">
				<article className="about-developer-main">
					<p className="eyebrow">{developer.eyebrow}</p>
					<h3 id="developer-title">{developer.title}</h3>
					{developer.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</article>
			</div>
		</section>
	);
}