import { AboutSectionHeading } from "./AboutSectionHeading";
import { aboutContent } from "../../content/about";

export function PrinciplesGrid() {
	const { principles } = aboutContent;

	return (
		<section
			className="about-principles"
			id="principles"
			aria-labelledby="principles-title"
		>
			<AboutSectionHeading
				content={principles.section}
				titleId="principles-title"
			/>

			<div className="principles-grid">
				{principles.items.map((principle) => (
					<article className="principle" key={principle.number}>
						<div className="principle-number">
							{principle.number}
						</div>
						<h3>{principle.title}</h3>
						<p>{principle.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}