import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScheduleTable } from "@/components/schedule/ScheduleTable";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <SectionHeading as="h1">Course Calendar</SectionHeading>
      <ScheduleTable />
    </div>
  );
}
