import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScheduleTable } from "@/components/schedule/ScheduleTable";
import { CourseHeader } from "@/components/schedule/CourseHeader";

export default function HomePage() {
  return (
    <div className="space-y-6 mx-6">
      <CourseHeader />
      <SectionHeading as="h1">Course Calendar</SectionHeading>
      <ScheduleTable />
    </div>
  );
}
