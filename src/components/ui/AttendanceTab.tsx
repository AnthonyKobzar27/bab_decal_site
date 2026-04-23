"use client";
import { useEffect, useState } from "react";
import {
  ATTENDANCE_DAY,
  ATTENDANCE_START,
  ATTENDANCE_END,
  ATTENDANCE_FORM_URL,
} from "@/lib/constants";

function isClassOpen(): boolean {
  // TODO: flip back to time-gated logic once ready for production
  return true;

  // Always evaluate in Pacific Time so the window is correct regardless of
  // where the student's browser is running.
  // const ptString = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
  // const pt = new Date(ptString);
  // const day = pt.getDay();
  // const mins = pt.getHours() * 60 + pt.getMinutes();
  // const start = ATTENDANCE_START.hour * 60 + ATTENDANCE_START.minute;
  // const end   = ATTENDANCE_END.hour   * 60 + ATTENDANCE_END.minute;
  // return day === ATTENDANCE_DAY && mins >= start && mins < end;
}

const DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const fmt12 = ({ hour, minute }: { hour: number; minute: number }) =>
  `${hour > 12 ? hour - 12 : hour}:${String(minute).padStart(2, "0")} ${hour >= 12 ? "PM" : "AM"}`;

export function AttendanceTab() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isClassOpen());
    const id = setInterval(() => setOpen(isClassOpen()), 30_000);
    return () => clearInterval(id);
  }, []);

  const tooltip = `Opens ${DAY_NAMES[ATTENDANCE_DAY]}s ${fmt12(ATTENDANCE_START)}–${fmt12(ATTENDANCE_END)} PT`;

  if (open) {
    return (
      <a
        href={ATTENDANCE_FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        title={tooltip}
        className="nav-tab attendance-tab attendance-tab--open group relative flex items-center px-3 text-sm font-medium whitespace-nowrap no-underline transition-colors"
      >
        Attendance
        <span className="attendance-dot" />
        <span
          className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
          style={{ background: "var(--cs-link)" }}
        />
      </a>
    );
  }

  return (
    <span
      title={tooltip}
      className="attendance-tab attendance-tab--closed relative flex items-center px-3 text-sm font-medium whitespace-nowrap cursor-not-allowed select-none"
    >
      Attendance
    </span>
  );
}
