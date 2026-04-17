import { schedule } from "@/lib/data/schedule";
import { ScheduleRow } from "./ScheduleRow";
import { groupScheduleByWeek } from "@/lib/utils/scheduleUtils";

/** Full course calendar table. */
export function ScheduleTable() {
  const weeks = groupScheduleByWeek(schedule);

  /* border-radius: 4px matches Just the Docs table style */
  return (
    <div className="overflow-x-auto border border-[var(--cs-border)]" style={{ borderRadius: 4 }}>
      <table className="w-full text-sm">
        <thead>
          <tr
            className="border-b border-[var(--cs-border)] text-left text-xs font-semibold uppercase tracking-wider"
            style={{ background: "var(--cs-bg)", color: "var(--cs-muted)" }}
          >
            {/* cell padding: 0.5rem vertical, 0.75rem horizontal from Just the Docs */}
            <th className="py-2 px-3 w-12">Wk</th>
            <th className="py-2 px-3 w-[7.5rem]">Date</th>
            <th className="py-2 px-3">Lecture</th>
            <th className="py-2 px-3">Discussion</th>
            <th className="py-2 px-3">Assignments</th>
          </tr>
        </thead>
        <tbody style={{ background: "var(--cs-surface)" }}>
          {weeks.map((weekItems) =>
            weekItems.map((item, indexWithinWeek) => (
              <ScheduleRow
                key={`${item.week}-${item.date}`}
                item={item}
                isFirstOfWeek={indexWithinWeek === 0}
                weekRowSpan={weekItems.length}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
