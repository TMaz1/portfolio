import type { ExperienceItem } from "../../types/content";

type ExperienceTimelineProps = { items: ExperienceItem[] };

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
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
								<h3 className="break-title">{item.role}</h3>
								<p className="break-copy">{item.description}</p>
							</div>
						</aside>
					);
				}

				return (
					<article
						className="timeline-item"
						key={`${item.period}-${item.role}`}
					>
						<div className="timeline-date">{item.period}</div>
						<div className="timeline-content">
							<h3 className="role">{item.role}</h3>
							<div className="company">{item.company}</div>
							<p>{item.description}</p>
							{item.achievements.map((achievement) => (
								<div
									className="achievement"
									key={achievement.label}
								>
									<strong>{achievement.label}</strong>
									<span>{achievement.description}</span>
								</div>
							))}
						</div>
					</article>
				);
			})}
		</div>
	);
}