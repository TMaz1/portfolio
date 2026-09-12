import { projectRadar } from "../../content/about";

export function ProjectRadar() {
	return (
		<section
			className="about-radar"
			id="projects"
			aria-labelledby="radar-title"
		>
			<div className="about-section-heading">
				<div className="section-number">04 / PROJECT RADAR</div>
				<div>
					<h2 className="section-title" id="radar-title">
						What I'm
						<br />
						building next.
					</h2>
					<p className="section-intro">
						Not everything belongs on the portfolio yet. Some things
						are unfinished; some are deliberately being kept off the
						main page until they become something worth showing.
					</p>
				</div>
			</div>
			<div className="radar-list">
				{projectRadar.map((item) => (
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