
import { Link } from "react-router-dom";
import type { ProjectSummary } from "../../types/content";

type ProjectArchiveCardProps = {
	project: ProjectSummary;
	number: number;
};

export function ProjectArchiveCard({
	project,
	number,
}: ProjectArchiveCardProps) {
	return (
		<Link
			className="project-archive-card"
			to={`/projects/${project.slug}`}
			aria-label={`Read the ${project.title} project article`}
		>
			<span className="project-archive-card__number">
				PROJECT / {String(number).padStart(2, "0")}
			</span>

			<h3>{project.title}</h3>

			<p>{project.description}</p>

			{project.meta ? (
				<span className="project-entry__meta">
					{project.meta}
				</span>
			) : null}

			<span className="project-archive-card__link">
				Read project article
				<span aria-hidden="true"> →</span>
			</span>
		</Link>
	);
}