import { principles } from "../../content/about";

export function PrinciplesGrid() {
	return (
		<section
			className="about-principles"
			id="principles"
			aria-labelledby="principles-title"
		>
			<div className="about-section-heading">
				<div className="section-number">03 / PRINCIPLES</div>
				<div>
					<h2 className="section-title" id="principles-title">
						How I<br />
						build.
					</h2>
					<p className="section-intro">
						A small set of principles that tend to survive whatever
						framework or language happens to be underneath them.
					</p>
				</div>
			</div>
			<div className="principles-grid">
				{principles.map((principle) => (
					<article className="principle" key={principle.label}>
						<div className="principle-number">
							{principle.number}
						</div>
						<h3>{principle.title}</h3>
						<p>{principle.description}</p>
					</article>
				))}
			</div>
		</section>
	);
}