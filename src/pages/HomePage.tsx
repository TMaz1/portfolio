import { Link } from "react-router-dom";
import { experience, skillGroups } from "../content/home";
import { projects } from "../content/projects";
import { ExperienceTimeline } from "../components/portfolio/ExperienceTimeline";
import { ProjectCard } from "../components/portfolio/ProjectCard";
import { SkillsGrid } from "../components/portfolio/SkillsGrid";

export function HomePage() {
	return (
		<>
			<section className="hero" aria-labelledby="hero-title">
				<div className="hero-inner container">
					<p className="eyebrow">
						Software Engineer / Manchester, UK
					</p>
					<h1 id="hero-title">
						Building
						<br />
						things that work.
					</h1>
					<p className="hero-description">
						C# / .NET / SQL / APIs / Full-stack development.
						Production-minded engineering with an interest in
						systems, performance and the details between the layers.
					</p>
					<a className="hero-button" href="#work">
						View selected work
					</a>
				</div>
			</section>

			<section
				className="section container"
				id="work"
				aria-labelledby="work-title"
			>
				<div className="section-heading">
					<div className="section-number">01 / THE WORK</div>
					<div>
						<h2 className="section-title" id="work-title">
							Selected work
							<br />
							&amp; experience
						</h2>
						<p className="section-intro">
							A career shaped by production systems, live problems
							and increasingly modern application architecture.
							The projects sit inside the timeline where the work
							happened — rather than being treated as a separate
							collection of experiments.
						</p>
					</div>
				</div>

				<ExperienceTimeline items={experience} />

				<div className="projects" id="projects">
					<div className="projects__heading">
						<p className="section-number">SELECTED PROJECTS</p>
						<p>
							Project articles document the engineering decisions,
							implementation and trade-offs behind each build.
						</p>
					</div>
					{projects.map((project, index) => (
						<ProjectCard
							key={project.slug}
							project={project}
							number={index + 1}
						/>
					))}
				</div>
			</section>

			<section
				className="section container"
				aria-labelledby="stack-title"
			>
				<div className="section-heading">
					<div className="section-number">02 / THE STACK</div>
					<div>
						<h2 className="section-title" id="stack-title">
							What I<br />
							work with.
						</h2>
						<p className="section-intro">
							A practical stack built through production
							experience rather than technology collecting.
							Comfortable moving between application code, data,
							APIs and the frontend when the problem requires it.
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
				<h2 id="contact-title">Let’s make something useful.</h2>
				<p>
					For now, the portfolio keeps external contact destinations
					out until real public links are supplied.
				</p>
				<Link className="text-link" to="/about">
					More about me →
				</Link>
			</section>
		</>
	);
}