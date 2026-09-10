import { Link } from "react-router-dom";
import type { ProjectSummary } from "../../types/content";

type ProjectCardProps = { project: ProjectSummary; number: number };

export function ProjectCard({ project, number }: ProjectCardProps) {
	return (
		<article className="project">
			{project.href ? (
				<a
					className="project__primary-link"
					href={project.href}
					target="_blank"
					rel="noreferrer"
				>
					<ProjectCardContent project={project} number={number} />
				</a>
			) : (
				<Link
					className="project__primary-link"
					to={`/projects/${project.slug}`}
					aria-label={`Read ${project.title} project article`}
				>
					<ProjectCardContent project={project} number={number} />
				</Link>
			)}
			<Link
				className="project__article-link"
				to={`/projects/${project.slug}`}
			>
				View article →
			</Link>
		</article>
	);
}

function ProjectCardContent({ project, number }: ProjectCardProps) {
	return (
		<>
			<div className="project-number">
				PROJECT / {String(number).padStart(2, "0")}
			</div>
			<h3 className="project-title">{project.title}</h3>
			<p className="project-description">{project.description}</p>
			<div className="tech" aria-label="Technologies used">
				{project.technologies.map((technology) => (
					<span key={technology}>{technology}</span>
				))}
			</div>
		</>
	);
}