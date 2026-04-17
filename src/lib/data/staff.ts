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
    name: "Henry Corrigan-Gibbs",
    pronouns: "he/him",
    email: "henrycg@berkeley.edu",
    role: "instructor",
    roleLabel: "Instructor",
    bio: "Interests include biking, running, woodworking, seeing live music, and eating all types of pastries. Holds office hours as open discussion sessions on security and related topics.",
  },
  {
    name: "Raluca Ada Popa",
    pronouns: "she/her",
    email: "raluca.popa@berkeley.edu",
    role: "instructor",
    roleLabel: "Instructor",
    bio: "Originally from Transylvania; leads Gemini Security at Google DeepMind. Hobbies include family, running, and abstract painting.",
  },
  {
    name: "Frederick Dehmel",
    pronouns: "he/him",
    email: "dehmelf@berkeley.edu",
    role: "head-ta",
    roleLabel: "Head TA",
    bio: "Junior. Focuses on cryptography and theoretical computer science; third semester as Head Exam-Writing TA.",
  },
  {
    name: "Jonah Bedouch",
    pronouns: "he/him",
    email: "jonahbedouch@berkeley.edu",
    role: "head-ta",
    roleLabel: "Head TA",
    bio: "Senior in EECS. Handles logistics; also teaches CS168.",
  },
  {
    name: "Tanya Bhakhri",
    pronouns: "she/her",
    email: "tanya.bhakhri@berkeley.edu",
    role: "head-ta",
    roleLabel: "Head TA (Student Support)",
    bio: "Rising senior from New Jersey. Student support coordinator.",
  },
  { name: "Aaron Liem", email: "", role: "ta", roleLabel: "TA" },
  { name: "Brandon Wong", email: "", role: "ta", roleLabel: "TA" },
  { name: "Connor Chang", email: "", role: "ta", roleLabel: "TA" },
  { name: "Darya Kaviani", email: "", role: "ta", roleLabel: "TA", bio: "Ph.D. student researching cryptographic systems and AI security." },
  { name: "Jade Chen", email: "", role: "ta", roleLabel: "TA" },
  { name: "Nazar Ospanov", email: "", role: "ta", roleLabel: "TA" },
  { name: "EvanBot", email: "", role: "ta", roleLabel: "TA" },
  { name: "Alena Chao", email: "", role: "tutor", roleLabel: "Tutor" },
  { name: "Gabriel Han", email: "", role: "tutor", roleLabel: "Tutor" },
  { name: "Soklynin Nou", email: "", role: "tutor", roleLabel: "Tutor" },
];
