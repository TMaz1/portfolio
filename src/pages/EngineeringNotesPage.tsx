import { useMemo, useState } from "react";
import { projects } from "../content/projects";
import { projectDocuments } from "../content/projects/content";
import { articleDocuments } from "../content/articles";
import { NoteCard } from "../components/notes/NoteCard";
import { NoteFilters } from "../components/notes/NoteFilters";
import { ProjectArchiveCard } from "../components/notes/ProjectArchiveCard";
import type { NoteFilterCategory } from "../types/content";

export function EngineeringNotesPage() {
	const [filter, setFilter] = useState<"all" | NoteFilterCategory>("all");

	// Only projects with an explicitly authored project document
	// should appear in the Project articles section.
	const projectArticleProjects = useMemo(() => {
		const authoredProjectSlugs = new Set(
			projectDocuments.map((document) => document.slug),
		);

		return projects.filter((project) =>
			authoredProjectSlugs.has(project.slug),
		);
	}, []);

	// General Engineering Notes articles remain independently filtered
	// using the existing topic/category filters.
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
					<p className="eyebrow">Development Insights · Technical Writing</p>
					<h1 id="notes-page-title">
						Engineering
						<br />
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
						How I Build
						<br />
						&amp; Learn.
					</h2>
					<p>
						A space for project breakdowns, technical decisions, and the lessons behind my work. I write about what worked, what broke, and what I’d do differently next time.
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
							Project-based articles and a look at my process.
						</p>
					</div>
				</div>
				<div className="project-archive-grid">
					{projectArticleProjects.map((project, index) => (
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
							Lessons on software engineering, performance, and SEO from building for the web.
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