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
						Software engineer with a background in production web development, working across applications, APIs and the wider web. I'm looking to join a team where I can contribute to a real product, keep learning from other engineers and grow through doing meaningful work.
					</p>

					<div className="hero-links">
						<a
							className="hero-button"
							href="/about#social"
							target="_blank"
							rel="noopener noreferrer"
						>
							Connect →
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
							My professional background started in production web support before moving into software development. My experience spans C#, .NET, React, TypeScript, SQL, PHP, WordPress and Umbraco, alongside APIs, databases and infrastructure. Working with websites has also given me experience across technical SEO, performance, analytics and UX.
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
					I'm looking to be part of a team building a real product, where I can contribute, keep learning and grow as an engineer.
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