import type { NoteFilterCategory } from "../../types/content";

export const noteFilters: Array<{
	label: string;
	value: "all" | NoteFilterCategory;
}> = [
	{ label: "All", value: "all" },
	{ label: "Backend", value: "backend" },
	{ label: "Frontend", value: "frontend" },
	{ label: "Infrastructure", value: "infrastructure" },
	{ label: "Performance", value: "performance" },
	{ label: "Research", value: "research" },
	{ label: "General", value: "general" },
];

type NoteFiltersProps = {
	value: "all" | NoteFilterCategory;
	onChange: (value: "all" | NoteFilterCategory) => void;
	visibleCount: number;
};

export function NoteFilters({
	value,
	onChange,
	visibleCount,
}: NoteFiltersProps) {
	return (
		<div className="note-filters" aria-label="Filter engineering notes">
			<div
				className="note-filters__buttons"
				role="group"
				aria-label="Note categories"
			>
				{noteFilters.map((filter) => (
					<button
						key={filter.value}
						type="button"
						className={
							value === filter.value ? "is-active" : undefined
						}
						aria-pressed={value === filter.value}
						onClick={() => onChange(filter.value)}
					>
						{filter.label}
					</button>
				))}
			</div>
			<span aria-live="polite">
				{String(visibleCount).padStart(2, "0")} entries
			</span>
		</div>
	);
}