import { DeveloperProfile } from "../components/about/DeveloperProfile";
import { TechStack } from "../components/about/TechStack";
import { PrinciplesGrid } from "../components/about/PrinciplesGrid";
import { ProjectRadar } from "../components/about/ProjectRadar";
import { CultureSection } from "../components/about/CultureSection";
import { SocialLinks } from "../components/about/SocialLinks";
import { aboutContent } from "../content/about";

export function AboutPage() {
	const { hero } = aboutContent;

	return (
		<main className="about-page">
			<section className="about-hero" aria-labelledby="about-title">
				<div className="container about-hero__inner">
					<p className="eyebrow">{hero.eyebrow}</p>

					<h1 id="about-title">
						{hero.title.lines.map((line, index) => (
							<span key={`${line}-${index}`}>
								{line}
								{index < hero.title.lines.length - 1 ? <br /> : null}
							</span>
						))}

						{hero.title.emphasis ? (
							<span className="hero__emphasis">
								{hero.title.emphasis}
							</span>
						) : null}
					</h1>

					<p className="about-hero__description">{hero.copy}</p>

					<div className="hero-links">
						<a
							className="button"
							href="#projects"
							onClick={(event) => {
								event.preventDefault();
								document.getElementById("projects")?.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							}}
						>
							View projects →
						</a>
					</div>

					<div className="about-hero__meta">
						{hero.meta.map((item) => (
							<span key={item.label}>
								<strong>{item.label}</strong> {item.value}
							</span>
						))}
					</div>
				</div>
			</section>

			<div className="container about-sections">
				<DeveloperProfile />
				<TechStack />
				<PrinciplesGrid />
				<ProjectRadar />
				<CultureSection />
				<SocialLinks />
			</div>
		</main>
	);
}