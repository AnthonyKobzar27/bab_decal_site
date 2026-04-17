import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { ExternalLink } from "@/components/ui/ExternalLink";

export const metadata: Metadata = { title: "Resources" };

const pastExamSemesters = [
  { sem: "Fall 2025", midterm: "#", final: "#", highlighted: true },
  { sem: "Summer 2025", midterm: "#", final: "#", highlighted: true },
  { sem: "Spring 2025", midterm: "#", final: "#", highlighted: true },
  { sem: "Fall 2024", midterm: "#", final: "#", highlighted: true },
  { sem: "Summer 2024", midterm: "#", final: "#", highlighted: true },
  { sem: "Spring 2024", midterm: "#", final: "#", highlighted: false },
  { sem: "Fall 2023", midterm: "#", final: "#", highlighted: false },
  { sem: "Spring 2023", midterm: "#", final: "#", highlighted: false },
  { sem: "Fall 2022", midterm: "#", final: "#", highlighted: false },
];

const pastSites = {
  spring: [
    { label: "Spring 2025", href: "#" },
    { label: "Spring 2024", href: "#" },
    { label: "Spring 2023", href: "#" },
  ],
  summer: [
    { label: "Summer 2025", href: "#" },
    { label: "Summer 2024", href: "#" },
    { label: "Summer 2023", href: "#" },
  ],
  fall: [
    { label: "Fall 2025", href: "#" },
    { label: "Fall 2024", href: "#" },
    { label: "Fall 2023", href: "#" },
  ],
};

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <SectionHeading as="h1">Resources</SectionHeading>

      {/* Past Exams */}
      <section className="space-y-4">
        <SectionHeading as="h2">Past Exams</SectionHeading>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Staff recommends focusing on exams from{" "}
          <strong className="text-gray-900 dark:text-gray-100">Summer 2024 and later</strong>{" "}
          (highlighted below) as the most representative of this semester's exam style.
        </p>

        <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 text-left text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                <th className="py-3 px-4">Semester</th>
                <th className="py-3 px-4">Midterm</th>
                <th className="py-3 px-4">Final</th>
              </tr>
            </thead>
            <tbody>
              {pastExamSemesters.map((row) => (
                <tr
                  key={row.sem}
                  className={
                    row.highlighted
                      ? "bg-blue-50 dark:bg-blue-950/20 font-medium border-t border-gray-100 dark:border-gray-800"
                      : "border-t border-gray-100 dark:border-gray-800"
                  }
                >
                  <td className="py-2.5 px-4 text-gray-800 dark:text-gray-200">{row.sem}</td>
                  <td className="py-2.5 px-4">
                    <ExternalLink href={row.midterm} className="text-xs">Exam</ExternalLink>
                    {" · "}
                    <ExternalLink href={row.midterm} className="text-xs">Solutions</ExternalLink>
                  </td>
                  <td className="py-2.5 px-4">
                    <ExternalLink href={row.final} className="text-xs">Exam</ExternalLink>
                    {" · "}
                    <ExternalLink href={row.final} className="text-xs">Solutions</ExternalLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* Past Course Websites */}
      <section className="space-y-4">
        <SectionHeading as="h2">Past Course Websites</SectionHeading>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {(["spring", "summer", "fall"] as const).map((season) => (
            <div key={season} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 capitalize">
                {season}
              </h3>
              <ul className="space-y-1">
                {pastSites[season].map((site) => (
                  <li key={site.label}>
                    <ExternalLink href={site.href} className="text-sm">
                      {site.label}
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
