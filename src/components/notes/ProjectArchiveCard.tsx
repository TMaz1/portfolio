import { Link } from "react-router-dom";
import type { ProjectSummary } from "../../types/content";

type ProjectArchiveCardProps = { project: ProjectSummary; number: number };

export function ProjectArchiveCard({
	project,
	number,
}: ProjectArchiveCardProps) {
	return (
		<article className="project-archive-card">
			<span className="project-archive-card__number">
				PROJECT / {String(number).padStart(2, "0")}
			</span>
			<h3>{project.title}</h3>
			<p>{project.description}</p>
			<Link to={`/projects/${project.slug}`}>Read project article →</Link>
		</article>
	);
}