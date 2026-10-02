import { AboutSectionHeading } from "./AboutSectionHeading";
import { aboutContent } from "../../content/about";

export function ProjectRadar() {
	const { projectRadar } = aboutContent;

	return (
		<section
			className="about-radar"
			id="projects"
			aria-labelledby="radar-title"
		>
			<AboutSectionHeading
				content={projectRadar.section}
				titleId="radar-title"
			/>

			<div className="radar-list">
				{projectRadar.items.map((item) => (
					<article className="radar-item" key={item.title}>
						<div
							className={`radar-status radar-status--${item.status.toLowerCase()}`}
						>
							● {item.status}
						</div>
						<div className="radar-content">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
						<ul
							className="radar-tech"
							aria-label={`${item.title} technologies`}
						>
							{item.technologies.map((technology) => (
								<li key={technology}>{technology}</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</section>
	);
}