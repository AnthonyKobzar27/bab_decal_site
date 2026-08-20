export type StaffMember = {
  name: string;
  pronouns?: string;
  email: string;
  role: "instructor" | "head-ta" | "ta" | "tutor";
  roleLabel: string;
  bio?: string;
  photo?: string;
};

export const staff: StaffMember[] = [
  {
    name: "Elson Liu",
    email: "blockchaindecal@berkeley.edu",
    role: "instructor",
    roleLabel: "Instructor",
  },
  {
    name: "Yadukrishna Ragu",
    email: "blockchaindecal@berkeley.edu",
    role: "instructor",
    roleLabel: "Instructor",
  },
  {
    name: "Anthony Kobzar",
    email: "blockchaindecal@berkeley.edu",
    role: "instructor",
    roleLabel: "Instructor",
  },
  {
    name: "Nithya Appannagaari",
    email: "blockchaindecal@berkeley.edu",
    role: "instructor",
    roleLabel: "Instructor",
  },
];
