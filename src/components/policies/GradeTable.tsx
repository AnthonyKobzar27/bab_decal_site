const weights = [
  { item: "Attendance", weight: "20%" },
  { item: "Assignments", weight: "40%" },
  { item: "Course Project", weight: "40%" },
];

const bins = [
  { range: "[90, 100]", grade: "A" },
  { range: "[80, 90)", grade: "B" },
  { range: "[70, 80)", grade: "C" },
  { range: "[0, 70)", grade: "NP" },
];

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th
      className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider"
      style={{ color: "var(--cs-muted)", background: "var(--cs-bg)" }}
    >
      {children}
    </th>
  );
}

function TableCell({ children }: { children: React.ReactNode }) {
  return (
    <td
      className="py-2 px-4 text-sm border-t"
      style={{ color: "var(--cs-text)", borderColor: "var(--cs-border)" }}
    >
      {children}
    </td>
  );
}

export function GradeTable() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--cs-border)" }}>
        <table>
          <thead>
            <tr>
              <TableHeader>Component</TableHeader>
              <TableHeader>Weight</TableHeader>
            </tr>
          </thead>
          <tbody>
            {weights.map((row) => (
              <tr key={row.item}>
                <TableCell>{row.item}</TableCell>
                <TableCell>{row.weight}</TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--cs-border)" }}>
        <table>
          <thead>
            <tr>
              <TableHeader>Score Range</TableHeader>
              <TableHeader>Grade</TableHeader>
            </tr>
          </thead>
          <tbody>
            {bins.map((row) => (
              <tr key={row.range}>
                <TableCell>{row.range}</TableCell>
                <TableCell>{row.grade}</TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
