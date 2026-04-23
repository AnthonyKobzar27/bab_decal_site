export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Exam Logistics", href: "/exam-logistics" },
  { label: "Calendar", href: "/" },
  { label: "Policies", href: "/policies" },
  {
    label: "Resources",
    href: "/resources",
    children: [{ label: "Instructional Machine Setup", href: "/resources/machine-setup" }],
  },
  { label: "Staff", href: "/staff" },
  {
    label: "Project 1",
    href: "/project1",
    children: [
      { label: "Getting Started", href: "/project1/getting-started" },
      { label: "Remus", href: "/project1/remus" },
      { label: "Spica", href: "/project1/spica" },
      { label: "Polaris", href: "/project1/polaris" },
      { label: "Vega", href: "/project1/vega" },
      { label: "Deneb", href: "/project1/deneb" },
      { label: "Antares", href: "/project1/antares" },
      { label: "Rigel", href: "/project1/rigel" },
      { label: "Customizing", href: "/project1/customizing" },
      { label: "Deliverables", href: "/project1/deliverables" },
      { label: "Troubleshooting", href: "/project1/troubleshooting" },
    ],
  },
  {
    label: "Project 2",
    href: "/project2",
    children: [
      { label: "Story", href: "/project2/story" },
      { label: "Policies and Deliverables", href: "/project2/policies" },
      { label: "Getting Started", href: "/project2/getting-started" },
      { label: "Design Overview", href: "/project2/design" },
      { label: "Library Functions", href: "/project2/library" },
      { label: "Users and Authentication", href: "/project2/users" },
      { label: "File Operations", href: "/project2/files" },
      { label: "Sharing and Revocation", href: "/project2/sharing" },
      { label: "Debugging and Errors", href: "/project2/debugging" },
      { label: "Advice and Tips", href: "/project2/advice" },
      { label: "Appendix", href: "/project2/appendix" },
    ],
  },
  {
    label: "Project 3",
    href: "/project3",
    children: [
      { label: "Story", href: "/project3/story" },
      { label: "Getting Started", href: "/project3/getting-started" },
      { label: "General Tips", href: "/project3/tips" },
      { label: "Flag 1", href: "/project3/flag1" },
      { label: "Flag 2", href: "/project3/flag2" },
      { label: "Flag 3", href: "/project3/flag3" },
      { label: "Flag 4", href: "/project3/flag4" },
      { label: "Flag 5", href: "/project3/flag5" },
      { label: "Flag 6", href: "/project3/flag6" },
      { label: "Flag 7", href: "/project3/flag7" },
      { label: "Flag 8", href: "/project3/flag8" },
      { label: "Deliverables", href: "/project3/deliverables" },
    ],
  },
];

export const utilityLinks = [
  { label: "Textbook", href: "#" },
  { label: "Ed", href: "#" },
  { label: "OH Queue", href: "#" },
  { label: "Attendance", href: "#" },
  { label: "Extensions", href: "#" },
  { label: "Feedback", href: "#" },
  { label: "Support", href: "#" },
];
