import { useState } from "react";
import { cultureItems } from "../../content/about";

export function CultureSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeItem = cultureItems[activeIndex];

	function move(delta: number) {
		setActiveIndex(
			(current) =>
				(current + delta + cultureItems.length) % cultureItems.length,
		);
	}

	return (
		<section
			className="about-culture"
			id="culture"
			aria-labelledby="culture-title"
		>
			<div className="about-section-heading">
				<div className="section-number">05 / OFFLINE</div>
				<div>
					<h2 className="section-title" id="culture-title">
						Things
						<br />
						outside code.
					</h2>
					<p className="section-intro">
						Software isn't the only thing I spend time thinking
						about. Books, games, films, television and other
						interests tend to feed back into how I think about
						narrative, systems, atmosphere, design and people.
					</p>
				</div>
			</div>

			<div
				className="culture-carousel"
				aria-roledescription="carousel"
				aria-label="Culture and interests"
			>
				<div className="culture-carousel__header">
					<div>
						<p className="culture-label">05.01 / INTERESTS</p>
						<h3>{activeItem.category}</h3>
					</div>
					<div className="carousel-controls">
						<button
							type="button"
							className="carousel-button"
							onClick={() => move(-1)}
							aria-label="Previous interest"
						>
							←
						</button>
						<button
							type="button"
							className="carousel-button"
							onClick={() => move(1)}
							aria-label="Next interest"
						>
							→
						</button>
					</div>
				</div>

				<article className="culture-card" aria-live="polite">
					{activeItem.image ? (
						<img
							className="culture-card__image"
							src={activeItem.image.src}
							alt={activeItem.image.alt}
						/>
					) : null}
					<div className="culture-card__content">
						<p className="culture-card__index">
							INTEREST /{" "}
							{String(activeIndex + 1).padStart(2, "0")}
						</p>
						<h4>{activeItem.title}</h4>
						<p>{activeItem.description}</p>
						{activeItem.metadata ? (
							<span className="culture-card__meta">
								{activeItem.metadata}
							</span>
						) : null}
					</div>
				</article>

				<div className="carousel-counter" aria-hidden="true">
					{String(activeIndex + 1).padStart(2, "0")} /{" "}
					{String(cultureItems.length).padStart(2, "0")}
				</div>
			</div>
		</section>
	);
}