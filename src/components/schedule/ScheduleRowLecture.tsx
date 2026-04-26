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
      <div className="flex gap-2 mt-0.5">
        {item.lectureSlides && (
          <ExternalLink href={item.lectureSlides} className="text-xs">Slides</ExternalLink>
        )}
        {item.lectureRecording && (
          <ExternalLink href={item.lectureRecording} className="text-xs">Recording</ExternalLink>
        )}
      </div>
    </div>
  );
}
