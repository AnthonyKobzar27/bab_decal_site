import { ExternalLink } from "@/components/ui/ExternalLink";
import { type ScheduleItem } from "@/lib/data/schedule";

type Props = { item: ScheduleItem };

/** Renders the lecture cell for a single schedule row. */
export function ScheduleRowLecture({ item }: Props) {
  if (item.isBreak) {
    return <span className="italic text-sm" style={{ color: "var(--cs-muted)" }}>{item.noLecture ?? "No Lecture"}</span>;
  }
  if (item.noLecture) {
    return <span className="italic text-sm" style={{ color: "var(--cs-muted)" }}>{item.noLecture}</span>;
  }
  if (item.isExam) {
    return (
      <span className="font-semibold" style={{ color: "var(--cs-exam-text)" }}>{item.examTitle}</span>
    );
  }
  if (!item.lectureNum) return null;

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs" style={{ color: "var(--cs-muted)" }}>Lecture {item.lectureNum}</span>
      <span className="font-medium" style={{ color: "var(--cs-text)" }}>{item.lectureTitle}</span>
      {/* Wider gap and vertical padding below md give the links phone-sized tap targets. */}
      <div className="flex gap-4 md:gap-2 mt-0.5">
        {item.lectureSlides && (
          <ExternalLink href={item.lectureSlides} className="text-xs py-1 md:py-0">Slides</ExternalLink>
        )}
        {item.lectureRecording && (
          <ExternalLink href={item.lectureRecording} className="text-xs py-1 md:py-0">Recording</ExternalLink>
        )}
      </div>
    </div>
  );
}
