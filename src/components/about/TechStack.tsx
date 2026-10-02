import { AboutSectionHeading } from "./AboutSectionHeading";
import { aboutContent } from "../../content/about";

export function TechStack() {
	const { techStack } = aboutContent;

	return (
		<section
			className="about-stack"
			id="stack"
			aria-labelledby="about-stack-title"
		>
			<AboutSectionHeading
				content={techStack.section}
				titleId="about-stack-title"
			/>

			<div className="skills-grid">
				{techStack.groups.map((group) => (
					<section className="skill-group" key={group.category}>
						<h3>{group.category}</h3>
						<ul>
							{group.items.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</section>
	);
}