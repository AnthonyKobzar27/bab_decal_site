import type { Metadata } from "next";
import { staff } from "@/lib/data/staff";
import { StaffGroup } from "@/components/staff/StaffGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Staff" };

function filterByRole(role: (typeof staff)[number]["role"]) {
  return staff.filter((m) => m.role === role);
}

export default function StaffPage() {
  return (
    <div className="space-y-12">
      <SectionHeading as="h1">Course Staff</SectionHeading>

      <StaffGroup title="Instructors" members={filterByRole("instructor")} columns={2} />
      <StaffGroup title="Head TAs" members={filterByRole("head-ta")} columns={3} />
      <StaffGroup title="Teaching Assistants" members={filterByRole("ta")} columns={4} />
      <StaffGroup title="Tutors" members={filterByRole("tutor")} columns={4} />
    </div>
  );
}
