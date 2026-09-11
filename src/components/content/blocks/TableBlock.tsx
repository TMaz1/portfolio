import type { ContentTable } from "../../../types/content";

export function TableBlock({ table }: { table: ContentTable }) {
	return (
		<div className="content-block content-table-wrap">
			<table className="content-table">
				<thead>
					<tr>
						{table.headers.map((header) => (
							<th key={header}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{table.rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((cell, cellIndex) => (
								<td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}