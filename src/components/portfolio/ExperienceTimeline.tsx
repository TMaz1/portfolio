import type { ExperienceItem } from "../../types/content";
import { ProjectCard } from "./ProjectCard";

type ExperienceTimelineProps = {
	items: ExperienceItem[];
	projects: typeof import("../../content/projects").projects;
};

export function ExperienceTimeline({
	items,
	projects,
}: ExperienceTimelineProps) {
	return (
		<div className="timeline">
			{items.map((item) => {
				if (item.kind === "break") {
					return (
						<aside className="career-break" key={item.period}>
							<div className="career-break__inner">
								<div className="break-label">
									{item.period} / Career break
								</div>

								<h3 className="break-title">
									{item.role}
								</h3>

								<p className="break-copy">
									{item.description}
								</p>
							</div>

							<div className="career-projects">
								<div className="projects" id="projects">
									<div className="projects__heading">
										<p className="section-number">
											SELECTED PROJECTS
										</p>

										<p>
											Project articles document the
											engineering decisions,
											implementation and trade-offs
											behind each build.
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
							</div>
						</aside>
					);
				}

				return (
					<article
						className="timeline-item"
						key={`${item.period}-${item.role}`}
					>
						<div className="timeline-date">
							{item.period}
						</div>

						<div className="timeline-content">
							<h3 className="role">{item.role}</h3>

							<div className="company">
								{item.company}
							</div>

							<p>{item.description}</p>

							{item.achievements.map((achievement) => (
								<div
									className="achievement"
									key={achievement.label}
								>
									<strong>
										{achievement.label}
									</strong>

									<span>
										{achievement.description}
									</span>
								</div>
							))}
						</div>
					</article>
				);
			})}
		</div>
	);
}