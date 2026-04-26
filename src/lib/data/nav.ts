import { ATTENDANCE_FORM_URL } from "@/lib/constants";

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Exam Logistics", href: "/exam-logistics" },
  { label: "Calendar", href: "/" },
  { label: "Policies", href: "/policies" },
  { label: "Resources", href: "/resources" },
  { label: "Staff", href: "/staff" },
  { label: "Course Project", href: "/course-project" },
];

export const utilityLinks = [
  { label: "Textbook",   href: "/tbd" },
  { label: "Ed",         href: "/tbd" },
  { label: "OH Queue",   href: "/tbd" },
  { label: "Attendance", href: ATTENDANCE_FORM_URL },
  { label: "Extensions", href: "/contact?type=extension" },
  { label: "Feedback",   href: "/contact?type=feedback" },
  { label: "Support",    href: "/contact?type=support" },
];
