import { DeveloperProfile } from "../components/about/DeveloperProfile";
import { TechStack } from "../components/about/TechStack";
import { PrinciplesGrid } from "../components/about/PrinciplesGrid";
import { ProjectRadar } from "../components/about/ProjectRadar";
import { CultureSection } from "../components/about/CultureSection";
import { SocialLinks } from "../components/about/SocialLinks";

export function AboutPage() {
	return (
		<main className="about-page">
			<section className="about-hero" aria-labelledby="about-title">
				<div className="container about-hero__inner">
					<p className="eyebrow">00 / About the developer</p>
					<h1 id="about-title">
						The person
						<br />
						behind the <span>code.</span>
					</h1>
					<p className="about-hero__copy">
						Software engineering is the visible part of what I do.
						The less visible part is the curiosity behind it:
						understanding how systems behave, why they fail, how
						people actually use them, and what can be made simpler
						without making it weaker.
					</p>
					<div className="about-hero__meta">
						<span>
							<strong>Focus</strong> C# / .NET / APIs / Web
						</span>
						<span>
							<strong>Interests</strong> Systems / Performance /
							UX
						</span>
						<span>
							<strong>Elsewhere</strong> Books / Games / Film /
							Anime
						</span>
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