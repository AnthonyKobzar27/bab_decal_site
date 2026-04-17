import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = { title: "Exam Logistics" };

type ExamInfo = {
  name: string;
  date: string;
  time: string;
  location: string;
  alternate?: { date: string; time: string; note: string };
};

const exams: ExamInfo[] = [
  {
    name: "Midterm",
    date: "Thursday, March 12",
    time: "7:00–9:00 PM PT",
    location: "TBD",
    alternate: {
      date: "Friday, March 13",
      time: "8:00–10:00 AM PT",
      note: "In-person only",
    },
  },
  {
    name: "Final",
    date: "Wednesday, May 13",
    time: "7:00–10:00 PM PT",
    location: "TBD",
    alternate: {
      date: "Wednesday, May 13",
      time: "4:00–7:00 PM PT",
      note: "In-person only",
    },
  },
];

function ExamCard({ exam }: { exam: ExamInfo }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 space-y-3">
      <div className="flex items-center gap-3">
        <SectionHeading as="h2">{exam.name}</SectionHeading>
        <Badge variant="red">Exam</Badge>
      </div>
      <dl className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
        <div className="flex gap-2">
          <dt className="font-medium w-20 shrink-0">Date</dt>
          <dd>{exam.date}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium w-20 shrink-0">Time</dt>
          <dd>{exam.time}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-medium w-20 shrink-0">Location</dt>
          <dd>{exam.location}</dd>
        </div>
      </dl>

      {exam.alternate && (
        <div className="mt-3 rounded-lg bg-gray-50 dark:bg-gray-800 p-4 text-sm space-y-1">
          <p className="font-medium text-gray-800 dark:text-gray-200">Alternate Time</p>
          <p className="text-gray-600 dark:text-gray-400">
            {exam.alternate.date} · {exam.alternate.time}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">{exam.alternate.note}</p>
        </div>
      )}
    </div>
  );
}

export default function ExamLogisticsPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <SectionHeading as="h1">Exam Logistics</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2">
        {exams.map((exam) => (
          <ExamCard key={exam.name} exam={exam} />
        ))}
      </div>

      <Divider />

      <section className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <SectionHeading as="h2">Rules & Reminders</SectionHeading>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Remote exam options are available <strong>only at the scheduled time</strong> with
            approved video proctoring.
          </li>
          <li>
            Alternate times are reserved for genuine scheduling conflicts — not for preference.
          </li>
          <li>Do not discuss exam content until solutions are officially released.</li>
          <li>
            Students found responsible for academic misconduct lose all remote exam privileges.
          </li>
        </ul>
      </section>
    </div>
  );
}
