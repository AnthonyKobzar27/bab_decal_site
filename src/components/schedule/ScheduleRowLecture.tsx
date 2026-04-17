import { ExternalLink } from "@/components/ui/ExternalLink";
import { type ScheduleItem } from "@/lib/data/schedule";

type Props = { item: ScheduleItem };

/** Renders the lecture cell for a single schedule row. */
export function ScheduleRowLecture({ item }: Props) {
  if (item.isBreak) {
    return <span className="text-gray-400 italic text-sm">Spring Recess — No Lecture</span>;
  }
  if (item.noLecture) {
    return <span className="text-gray-400 italic text-sm">{item.noLecture}</span>;
  }
  if (item.isExam) {
    return (
      <span className="font-semibold text-red-700 dark:text-red-400">{item.examTitle}</span>
    );
  }
  if (!item.lectureNum) return null;

  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs text-gray-400 dark:text-gray-500">Lecture {item.lectureNum}</span>
      <span className="font-medium text-gray-900 dark:text-gray-100">{item.lectureTitle}</span>
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
