import { aboutSkillGroups } from "../../content/about";

export function TechStack() {
	return (
		<section
			className="about-stack"
			id="stack"
			aria-labelledby="about-stack-title"
		>
			<div className="about-section-heading">
				<div className="section-number">02 / TECH STACK</div>
				<div>
					<h2 className="section-title" id="about-stack-title">
						Current
						<br />
						toolkit.
					</h2>
					<p className="section-intro">
						A practical stack built through production experience
						rather than technology collecting.
					</p>
				</div>
			</div>
			<div className="skills-grid">
				{aboutSkillGroups.map((group) => (
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