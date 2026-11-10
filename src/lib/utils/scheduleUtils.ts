import type { CSSProperties } from "react";
import { type ScheduleItem } from "@/lib/data/schedule";

/** Groups a flat schedule array into arrays of rows per week, preserving order. */
export function groupScheduleByWeek(items: ScheduleItem[]): ScheduleItem[][] {
  const map = new Map<number, ScheduleItem[]>();

  for (const item of items) {
    const group = map.get(item.week) ?? [];
    group.push(item);
    map.set(item.week, group);
  }

  return Array.from(map.values());
}

/**
 * Background tint for a schedule entry: warm yellow for exams, the page
 * background for breaks, none otherwise. Shared by the desktop table and the
 * phone list so both tint the same rows.
 */
export function getScheduleRowStyle(item: ScheduleItem): CSSProperties | undefined {
  if (item.isExam) return { background: "var(--cs-exam-bg)" };
  if (item.isBreak) return { background: "var(--cs-break-bg)" };
  return undefined;
}
