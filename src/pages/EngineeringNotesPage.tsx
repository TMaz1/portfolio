import { useMemo, useState } from "react";
import { projects } from "../content/projects";
import { articleDocuments } from "../content/articles";
import { NoteCard } from "../components/notes/NoteCard";
import { NoteFilters } from "../components/notes/NoteFilters";
import { ProjectArchiveCard } from "../components/notes/ProjectArchiveCard";
import type { NoteFilterCategory } from "../types/content";

export function EngineeringNotesPage() {
	const [filter, setFilter] = useState<"all" | NoteFilterCategory>("all");

	const visibleNotes = useMemo(
		() =>
			articleDocuments.filter(
				(document) =>
					filter === "all" ||
					document.archive?.filterCategories.includes(filter),
			),
		[filter],
	);

	return (
		<>
			<section className="notes-hero" aria-labelledby="notes-page-title">
				<div className="notes-hero__inner container">
					<p className="eyebrow">Engineering / Field Notes / 2026</p>
					<h1 id="notes-page-title">
						How the
						<br />
						<span>things</span> work.
					</h1>
					<p className="notes-hero__description">
						Technical notes from the space between writing code and
						making software behave. Architecture decisions,
						performance work, debugging investigations, APIs,
						infrastructure, databases and frontend systems.
					</p>
				</div>
			</section>

			<section
				className="notes-intro container"
				aria-labelledby="notes-intro-title"
			>
				<div className="notes-intro__label">01 / WHY</div>
				<div className="notes-intro__content">
					<h2 id="notes-intro-title">
						Code is only
						<br />
						half the story.
					</h2>
					<p>
						A portfolio can show what was built. Documentation
						should explain why it was built that way, what went
						wrong, which trade-offs mattered and what changed after
						the first implementation met reality.
					</p>
					<p>
						This archive is the layer between the portfolio and the
						deeper content: project investigations alongside shorter
						records of architectural decisions, implementation
						problems and useful engineering patterns.
					</p>
				</div>
			</section>

			<section
				className="notes-projects container"
				aria-labelledby="projects-title"
			>
				<div className="notes-section-heading">
					<span>02 / PROJECTS</span>
					<div>
						<h2 id="projects-title">
							Project
							<br />
							articles.
						</h2>
						<p>
							Projects discovered here lead to the same content
							system used for engineering articles, with the
							project route preserving the distinction in the URL
							and metadata.
						</p>
					</div>
				</div>
				<div className="project-archive-grid">
					{projects.map((project, index) => (
						<ProjectArchiveCard
							key={project.slug}
							project={project}
							number={index + 1}
						/>
					))}
				</div>
			</section>

			<section
				className="notes-archive container"
				id="notes"
				aria-labelledby="archive-title"
			>
				<div className="notes-section-heading">
					<span>03 / GENERAL ENGINEERING NOTES</span>
					<div>
						<h2 id="archive-title">
							Engineering
							<br />
							notes.
						</h2>
						<p>
							A working archive of shorter technical articles.
							Each entry is an ordinary Article document and can
							grow independently as the content develops.
						</p>
					</div>
				</div>

				<NoteFilters
					value={filter}
					onChange={setFilter}
					visibleCount={visibleNotes.length}
				/>

				<div className="notes-grid">
					{visibleNotes.map((document) => {
						const number = articleDocuments.indexOf(document) + 1;
						return (
							<NoteCard
								key={document.slug}
								document={document}
								number={number}
							/>
						);
					})}
				</div>
				{visibleNotes.length === 0 ? (
					<p className="notes-empty">No entries match this filter.</p>
				) : null}
			</section>
		</>
	);
}