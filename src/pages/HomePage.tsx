import { experience, skillGroups } from "../content/home";
import { projects } from "../content/projects";
import { ExperienceTimeline } from "../components/portfolio/ExperienceTimeline";
import { SkillsGrid } from "../components/portfolio/SkillsGrid";

export function HomePage() {
	return (
		<>
			<section className="hero" aria-labelledby="hero-title">
				<div className="hero-inner container">
					<p className="eyebrow">
						Tayyaba M · Technical SEO · Web Development · Manchester, UK
					</p>

					<h1 id="hero-title">
						Building better
						<br />
						web experiences.
					</h1>

					<p className="hero-description">
						Technical SEO and web development across performance, analytics,
						accessibility and website growth, backed by production experience in
						C#/.NET, SQL, APIs and full-stack development.
					</p>

					<div className="hero-links">
						<a
							className="hero-button"
							href="https://www.linkedin.com/in/tayyaba-maz"
							target="_blank"
							rel="noreferrer"
						>
							Contact me on LinkedIn →
						</a>
					</div>

				</div>
			</section>

			<section
				className="section container"
				id="work"
				aria-labelledby="work-title"
			>
				<div className="section-heading">
					<div className="section-number">01 / EXPERIENCE</div>

					<div>
						<h2 className="section-title" id="work-title">
							Engineering,
							<br />
							web &amp; growth.
						</h2>

						<p className="section-intro">
							My experience sits across software engineering and
							the wider web. I have built and supported production
							applications, worked with APIs and databases, and
							moved between backend, frontend and infrastructure
							when the problem required it. More recently, that
							work has expanded into technical SEO, performance,
							analytics and website optimisation.
						</p>
					</div>
				</div>

				<ExperienceTimeline
					items={experience}
					projects={projects}
				/>
			</section>

			<section
				className="section container"
				aria-labelledby="stack-title"
			>
				<div className="section-heading">
					<div className="section-number">02 / SKILLS</div>

					<div>
						<h2 className="section-title" id="stack-title">
							Tools &amp;
							<br />
							technologies.
						</h2>

						<p className="section-intro">
							A practical mix of application development, web
							technologies and technical optimisation built
							through hands-on production work.
						</p>
					</div>
				</div>

				<SkillsGrid groups={skillGroups} />
			</section>

			<section
				className="contact-section container"
				id="contact"
				aria-labelledby="contact-title"
			>
				<p className="section-number">03 / CONTACT</p>

				<h2 id="contact-title">
					Interested in working together?
				</h2>

				<p>
					I’m open to software engineering, web development and technical SEO
					roles where I can work close to the technical details and contribute
					across the wider web experience.
				</p>

				<a
					className="text-link"
					href="mailto:tayyabamazhar001@gmail.com"
				>
					Email me →
				</a>
			</section>
		</>
	);
}