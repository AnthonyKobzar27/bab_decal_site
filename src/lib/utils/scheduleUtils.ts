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
