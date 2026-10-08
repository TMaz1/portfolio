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
						Tayyaba M · Web Development · Manchester, UK
					</p>

					<h1 id="hero-title">
						Building better
						<br />
						web experiences.
					</h1>

					<p className="hero-description">
						Website Growth Engineer and Software Engineer combining development, performance, analytics, SEO and UX to build high-performing websites that deliver better experiences and business results. Experienced across C#/.NET, SQL, APIs, React, TypeScript, WordPress, Umbraco and production web infrastructure.
					</p>

					<div className="hero-links">
						<a
							className="hero-button"
							href="https://github.com/tmaz1"
							target="_blank"
							rel="noopener noreferrer"
						>
							Github →
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
							My background is rooted in software engineering, with experience building and supporting production applications across the backend, frontend, APIs, databases and infrastructure. That breadth has naturally extended into website optimisation, where I now also work across technical SEO, performance, analytics and UX to improve how websites perform and deliver results.
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
					Let's build something better.
				</h2>

				<p>
					I'm interested in software and web engineering roles where I can work across the technical details and the wider web experience — from building applications to improving performance, usability and growth.
				</p>

				<a
					className="text-link"
					href="mailto:tayyabamazhar001@gmail.com"
				>
					Contact me →
				</a>
			</section>
		</>
	);
}