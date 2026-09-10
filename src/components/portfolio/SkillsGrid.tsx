import type { SkillGroup } from "../../types/content";

type SkillsGridProps = { groups: SkillGroup[] };

export function SkillsGrid({ groups }: SkillsGridProps) {
	return (
		<div className="skills-grid">
			{groups.map((group) => (
				<section className="skill-group" key={group.category}>
					<h3>{group.category}</h3>
					<ul>
						{group.items.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</section>
			))}
		</div>
	);
}