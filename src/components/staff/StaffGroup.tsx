import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaffCard } from "./StaffCard";
import { type StaffMember } from "@/lib/data/staff";

type Props = {
  title: string;
  members: StaffMember[];
  columns?: 2 | 3 | 4;
};

const colClass: Record<2 | 3 | 4, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
};

/** A labeled group of staff cards (e.g. Instructors, Head TAs). */
export function StaffGroup({ title, members, columns = 3 }: Props) {
  if (members.length === 0) return null;

  return (
    <section className="space-y-4">
      <SectionHeading as="h2">{title}</SectionHeading>
      <div className={`grid gap-4 ${colClass[columns]}`}>
        {members.map((member) => (
          <StaffCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
