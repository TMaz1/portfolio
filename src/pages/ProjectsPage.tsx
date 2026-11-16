import { Link } from "react-router-dom";
import { projectSections } from "../content/projects/categories";
import { getProjectsForSection } from "../content/projects";
import { projectDocuments } from "../content/projects/content";
import { socialUrls } from "../config/site";


function ProjectEntry({ project }: { project: ReturnType<typeof getProjectsForSection>[number] }) {
	const primaryLink = project.links[0];
	const secondaryLinks = project.links.slice(1);
	const hasNotes = projectDocuments.some(
		(document) => document.slug === project.slug,
	);

	return (
		<article className="project-entry">
			<div className="project-entry__icon">
				{project.logo ? (
					<img
						src={project.logo}
						alt=""
						loading="lazy"
						decoding="async"
					/>
				) : (
					<span aria-hidden="true">
						{project.icon || project.title.charAt(0).toUpperCase()}
					</span>
				)}
			</div>

			<div className="project-entry__content">
				<div className="project-entry__heading">
					<h3>
						{primaryLink ? (
							<a
								href={primaryLink.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{project.title}
								<span
									className="project-entry__external"
									aria-hidden="true"
								>
									↗
								</span>
							</a>
						) : (
							project.title
						)}
					</h3>

					{project.displayDate ? (
						<time>{project.displayDate}</time>
					) : null}
				</div>

				<p>{project.description}</p>

				{project.meta ? (
					<span className="project-entry__meta">
						{project.meta}
					</span>
				) : null}

				{(primaryLink || secondaryLinks.length > 0 || hasNotes) && (
					<div className="project-entry__links">
						{primaryLink ? (
							<a
								href={primaryLink.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit <span aria-hidden="true">↗</span>
							</a>
						) : null}

						{secondaryLinks.map((link) => (
							<a
								key={`${link.type}-${link.href}`}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{link.label} <span aria-hidden="true">↗</span>
							</a>
						))}

						{hasNotes ? (
							<Link to={`/projects/${project.slug}`}>
								Notes <span aria-hidden="true">→</span>
							</Link>
						) : null}
					</div>
				)}
			</div>
		</article>
	);
}

export function ProjectsPage() {
	return (
		<div className="projects-page">
			<header className="notes-hero projects-hero">
				<div className="notes-hero__inner container">
					<p className="eyebrow">
						Selected Work · Experiments · Open Source
					</p>

					<h1>
						Projects
					</h1>

					<p className="notes-hero__description">
						{/* Things I've built, from application systems and APIs
						to frontend experiments and open-source packages.
						Explore the projects, browse their source code and
						find the tools I've published. */}
						Selected projects including apps, APIs, plugins and open-source packages.
					</p>

					<div className="hero-links">
						<a
							className="button"
							href={socialUrls.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub ↗
						</a>

						<a
							className="button"
							href={socialUrls.npm}
							target="_blank"
							rel="noopener noreferrer"
						>
							npm ↗
						</a>
					</div>
				</div>
			</header>

			<div className="container projects-catalogue">
				{projectSections.map((section, sectionIndex) => {
					const sectionProjects = getProjectsForSection(section.id);
					return (
						<section className="project-section" key={section.id} aria-labelledby={`project-section-${section.id}`}>
							<div className="notes-section-heading projects-section-heading">
								<span>{String(sectionIndex + 1).padStart(2, "0")} / SECTION</span>
								<div>
									<h2 id={`project-section-${section.id}`}>{section.title}</h2>
									{section.description ? <p>{section.description}</p> : null}
								</div>
							</div>
							{section.subsections?.length ? section.subsections.map((subsection) => {
								const items = getProjectsForSection(section.id, subsection.id);
								return (
									<div className="project-subsection" key={subsection.id}>
										<h3 className="project-section__subsection-heading">{subsection.title}</h3>
										{items.length ? items.map((project) => <ProjectEntry key={project.slug} project={project} />) : <p className="project-section__empty">More work in this area is in progress.</p>}
									</div>
								);
							}) : sectionProjects.length ? sectionProjects.map((project) => <ProjectEntry key={project.slug} project={project} />) : (
								<p className="project-section__empty">Projects in this section will appear here as they are published.</p>
							)}
							{section.subsections?.length ? sectionProjects.filter((project) => !project.subsection).map((project) => <ProjectEntry key={project.slug} project={project} />) : null}
						</section>
					);
				})}
			</div>
		</div>
	);
}
