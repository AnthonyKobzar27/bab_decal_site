import { type ScheduleItem } from "@/lib/data/schedule";
import { getScheduleRowStyle } from "@/lib/utils/scheduleUtils";
import { ScheduleRowLecture } from "./ScheduleRowLecture";
import { ScheduleRowDiscussion } from "./ScheduleRowDiscussion";
import { ScheduleRowAssignments } from "./ScheduleRowAssignments";

type Props = { weeks: ScheduleItem[][] };

/**
 * Phone layout of the course calendar. Five table columns don't fit on a
 * narrow screen, so each entry stacks its lecture, discussion and assignments
 * under a "Wk · date" line. Reuses the same cell components as ScheduleTable.
 */
export function ScheduleList({ weeks }: Props) {
  return (
    <ol
      className="border border-[var(--cs-border)] divide-y divide-[var(--cs-border)]"
      style={{ borderRadius: 4, background: "var(--cs-surface)" }}
    >
      {weeks.flatMap((weekItems) =>
        weekItems.map((item, indexWithinWeek) => (
          <li
            // Key on position, not `date`: several rows can share DATE_TBD.
            key={`${item.week}-${indexWithinWeek}`}
            className="px-4 py-3 space-y-2 text-sm"
            style={getScheduleRowStyle(item)}
          >
            <p className="text-xs" style={{ color: "var(--cs-muted)" }}>
              <span className="font-semibold" style={{ color: "var(--cs-text)" }}>
                Wk {item.week}
              </span>
              {" · "}
              {item.date} {item.day}
            </p>
            <ScheduleRowLecture item={item} />
            <ScheduleRowDiscussion item={item} />
            <ScheduleRowAssignments item={item} />
          </li>
        ))
      )}
    </ol>
  );
}
