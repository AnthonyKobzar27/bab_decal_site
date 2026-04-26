import { cn } from "@/lib/cn";
import { type ScheduleItem } from "@/lib/data/schedule";
import { ScheduleRowLecture } from "./ScheduleRowLecture";
import { ScheduleRowDiscussion } from "./ScheduleRowDiscussion";
import { ScheduleRowAssignments } from "./ScheduleRowAssignments";

type Props = {
  item: ScheduleItem;
  isFirstOfWeek: boolean;
  weekRowSpan: number;
};

/** A single row in the course schedule table. */
export function ScheduleRow({ item, isFirstOfWeek, weekRowSpan }: Props) {
  const isExamRow = item.isExam;
  const isBreakRow = item.isBreak;

  const rowStyle = isExamRow
    ? { background: "var(--cs-exam-bg)" }
    : isBreakRow
    ? { background: "var(--cs-break-bg)" }
    : undefined;

  return (
    <tr
      className="border-b border-[var(--cs-border)] align-top"
      style={rowStyle}
    >
      {/* Week number cell — spans all rows in the week */}
      {isFirstOfWeek && (
        <td
          rowSpan={weekRowSpan}
          className={cn(
            "py-2 px-3 text-center text-sm font-semibold align-middle w-12",
            "border-r border-[var(--cs-border)]"
          )}
          style={{ color: "var(--cs-text)" }}
        >
          {item.week}
        </td>
      )}

      {/* Date */}
      <td className="py-2 px-3 w-[7.5rem] whitespace-nowrap text-sm" style={{ color: "var(--cs-text)" }}>
        <div className="font-medium">{item.date}</div>
        <div className="text-xs" style={{ color: "var(--cs-muted)" }}>{item.day}</div>
      </td>

      {/* Lecture */}
      <td className="py-2 px-3">
        <ScheduleRowLecture item={item} />
      </td>

      {/* Discussion */}
      <td className="py-2 px-3">
        <ScheduleRowDiscussion item={item} />
      </td>

      {/* Assignments */}
      <td className="py-2 px-3">
        <ScheduleRowAssignments item={item} />
      </td>
    </tr>
  );
}
