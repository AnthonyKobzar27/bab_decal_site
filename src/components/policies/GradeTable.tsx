const weights = [
  { item: "Homeworks (7)", weight: "10%" },
  { item: "Project 1", weight: "10%" },
  { item: "Project 2", weight: "20%" },
  { item: "Project 3", weight: "10%" },
  { item: "Midterm", weight: "20%" },
  { item: "Final", weight: "30%" },
];

const bins = [
  { range: "[95, 100]", grade: "A+" },
  { range: "[90, 95)", grade: "A" },
  { range: "[85, 90)", grade: "A−" },
  { range: "[80, 85)", grade: "B+" },
  { range: "[75, 80)", grade: "B" },
  { range: "[70, 75)", grade: "B−" },
  { range: "[65, 70)", grade: "C+" },
  { range: "[60, 65)", grade: "C" },
  { range: "[55, 60)", grade: "C−" },
  { range: "[50, 55)", grade: "D" },
  { range: "[0, 50)", grade: "F" },
];

function TableHeader({ children }: { children: React.ReactNode }) {
  return (
    <th className="py-2 px-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900">
      {children}
    </th>
  );
}

function TableCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="py-2 px-4 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-800">
      {children}
    </td>
  );
}

export function GradeTable() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row">
      <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
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

      <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
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
