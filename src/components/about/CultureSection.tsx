import { useState } from "react";
import { aboutContent } from "../../content/about";

export function CultureSection() {
	const { culture } = aboutContent;
	const { items, section, carousel } = culture;

	const [activeIndex, setActiveIndex] = useState(0);

	const itemCount = items.length;

	if (itemCount === 0) {
		return null;
	}

	const activeItem = items[activeIndex];

	function move(delta: number) {
		setActiveIndex(
			(current) => (current + delta + itemCount) % itemCount,
		);
	}

	const currentNumber = String(activeIndex + 1).padStart(2, "0");
	const totalNumber = String(itemCount).padStart(2, "0");

	return (
		<section
			className="about-culture"
			id="culture"
			aria-labelledby="culture-title"
		>
			<div className="about-section-heading">
				<div className="section-number">{section.number}</div>

				<div>
					<h2 className="section-title" id="culture-title">
						{section.title.lines.map((line, index) => (
							<span key={`${line}-${index}`}>
								{line}
								{index < section.title.lines.length - 1 ? (
									<br />
								) : null}
							</span>
						))}
					</h2>

					<p className="section-intro">{section.intro}</p>
				</div>
			</div>

			<div
				className="culture-carousel"
				aria-roledescription="carousel"
				aria-label={carousel.ariaLabel}
			>
				<div className="culture-carousel__header">
					<div>
						<p className="culture-label">{carousel.label}</p>
						<h3>{activeItem.category}</h3>
					</div>
					<div className="carousel-controls">
						<button
							type="button"
							className="carousel-button"
							onClick={() => move(-1)}
							aria-label={carousel.previousLabel}
						>
							←
						</button>
						<button
							type="button"
							className="carousel-button"
							onClick={() => move(1)}
							aria-label={carousel.nextLabel}
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
							{carousel.indexLabel} / {currentNumber}
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
					{currentNumber}
					{carousel.counterSeparator}
					{totalNumber}
				</div>
			</div>
		</section>
	);
}