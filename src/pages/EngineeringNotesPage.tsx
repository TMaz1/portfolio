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
			articleDocuments.filter((document) => {
				if (!document.archive) return false;
				return (
					filter === "all" ||
					document.archive.filterCategories.includes(filter)
				);
			}),
		[filter],
	);

	return (
		<>
			<section className="notes-hero" aria-labelledby="notes-page-title">
				<div className="notes-hero__inner container">
					<p className="eyebrow"> / 2026</p>
					<h1 id="notes-page-title">
						Engineering
						<span className="hero__emphasis">Notes.</span>
					</h1>
					<p className="notes-hero__description">
						Technical notes from architecture decisions,
						performance work, debugging investigations, APIs,
						infrastructure, databases and frontend systems.
					</p>

					<div className="hero-links">
						<a className="button"
							href="#notes"
							onClick={(event) => {
								event.preventDefault();
								document.getElementById("notes")?.scrollIntoView({
									behavior: "smooth",
									block: "start",
								});
							}}
						>
							Articles →
						</a>

						<a
							className="button"
							href="https://www.linkedin.com/in/tayyaba-maz"
							target="_blank"
							rel="noreferrer"
						>
							LinkedIn ↗
						</a>
					</div>
				</div>
			</section>

			<section
				className="notes-intro container"
				aria-labelledby="notes-intro-title"
			>
				<div className="notes-intro__label">01 / WHY</div>
				<div className="notes-intro__content">
					<h2 id="notes-intro-title">
						What I’m
						<br />
						Learning.
					</h2>
					<p>
						I like keeping notes on the things I build and learn along the way. Not just what worked, but the decisions behind it, the problems I ran into, and the things I’d do differently next time.
					</p>
					<p>
						This is where I collect those notes, from project deep-dives and technical decisions to smaller lessons, experiments and patterns I’ve found useful.
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
							A selection of projects I've built, with notes on how they work and why I built them.
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
					<span>03 / Articles</span>
					<div>
						<h2 id="archive-title">
							Technical
							<br />
							Writing.
						</h2>
						<p>
							Notes on software engineering, performance, SEO and the things I've learned building for the web.
						</p>
					</div>
				</div>

				<NoteFilters
					value={filter}
					onChange={setFilter}
					visibleCount={visibleNotes.length}
				/>

				<div className="notes-grid">
					{visibleNotes.map((document, index) => (
						<NoteCard
							key={document.slug}
							document={document}
							number={index + 1}
						/>
					))}
				</div>
				{visibleNotes.length === 0 ? (
					<p className="notes-empty">No entries match this filter.</p>
				) : null}
			</section>
		</>
	);
}