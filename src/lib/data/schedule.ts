export type ScheduleItem = {
  week: number;
  date: string;
  day: string;
  lectureNum?: number;
  lectureTitle?: string;
  lectureSlides?: string;
  lectureRecording?: string;
  noLecture?: string;
  discussionNum?: number;
  discussionTitle?: string;
  discussionWorksheet?: string;
  discussionSolutions?: string;
  homework?: string;
  homeworkDue?: string;
  project?: string;
  projectDue?: string;
  isExam?: boolean;
  examTitle?: string;
  isBreak?: boolean;
};

export const schedule: ScheduleItem[] = [
  // Week 1
  { week: 1, date: "Jan 21", day: "Wed", lectureNum: 1, lectureTitle: "Introduction and Security Principles" },
  { week: 1, date: "Jan 23", day: "Fri", lectureNum: 2, lectureTitle: "x86 Assembly and Call Stack", discussionNum: 0, discussionTitle: "61C Review", homework: "HW1", homeworkDue: "Jan 30", project: "Project 1 Checkpoint", projectDue: "Feb 06" },

  // Week 2
  { week: 2, date: "Jan 26", day: "Mon", lectureNum: 3, lectureTitle: "Memory Safety Vulnerabilities" },
  { week: 2, date: "Jan 28", day: "Wed", lectureNum: 4, lectureTitle: "Memory Safety Vulnerabilities II" },
  { week: 2, date: "Jan 30", day: "Fri", lectureNum: 5, lectureTitle: "Mitigating Memory Safety Vulnerabilities", discussionNum: 1, discussionTitle: "Security Principles and x86" },

  // Week 3
  { week: 3, date: "Feb 02", day: "Mon", lectureNum: 6, lectureTitle: "Intro to Cryptography" },
  { week: 3, date: "Feb 04", day: "Wed", lectureNum: 7, lectureTitle: "Pseudorandom Functions and Block Ciphers" },
  { week: 3, date: "Feb 06", day: "Fri", lectureNum: 8, lectureTitle: "Block Cipher Modes of Operation", discussionNum: 2, discussionTitle: "Memory Safety", homework: "HW2", homeworkDue: "Feb 13", project: "Project 2 Spec Quiz", projectDue: "Feb 20" },

  // Week 4
  { week: 4, date: "Feb 09", day: "Mon", lectureNum: 9, lectureTitle: "Collision-resistant Hash Functions" },
  { week: 4, date: "Feb 11", day: "Wed", lectureNum: 10, lectureTitle: "Message Authentication Codes" },
  { week: 4, date: "Feb 13", day: "Fri", lectureNum: 11, lectureTitle: "Authenticated Encryption", discussionNum: 3, discussionTitle: "Memory Safety Mitigations", project: "Project 1", projectDue: "Feb 13" },

  // Week 5
  { week: 5, date: "Feb 16", day: "Mon", noLecture: "Presidents' Day" },
  { week: 5, date: "Feb 18", day: "Wed", lectureNum: 12, lectureTitle: "Key Exchange and Diffie-Hellman" },
  { week: 5, date: "Feb 20", day: "Fri", lectureNum: 13, lectureTitle: "Public-key Encryption", discussionNum: 4, discussionTitle: "Symmetric Cryptography", homework: "HW3", homeworkDue: "Feb 27", project: "Project 2 Design Checkpoint", projectDue: "Feb 27" },

  // Week 6
  { week: 6, date: "Feb 23", day: "Mon", lectureNum: 14, lectureTitle: "Digital Signatures" },
  { week: 6, date: "Feb 25", day: "Wed", lectureNum: 15, lectureTitle: "Randomness and Crypto Implementation Bugs" },
  { week: 6, date: "Feb 27", day: "Fri", lectureNum: 16, lectureTitle: "Introduction to Web", discussionNum: 5, discussionTitle: "Integrity and Authenticity", homework: "HW4", homeworkDue: "Mar 06" },

  // Week 7
  { week: 7, date: "Mar 02", day: "Mon", lectureNum: 17, lectureTitle: "Cookies and CSRF" },
  { week: 7, date: "Mar 04", day: "Wed", lectureNum: 18, lectureTitle: "Certificates, Passwords, and Case Studies" },
  { week: 7, date: "Mar 06", day: "Fri", lectureNum: 19, lectureTitle: "XSS", discussionNum: 6, discussionTitle: "Asymmetric Cryptography", project: "Project 2 Testing Checkpoint", projectDue: "Mar 20" },

  // Week 8
  { week: 8, date: "Mar 09", day: "Mon", lectureNum: 20, lectureTitle: "UI Attacks" },
  { week: 8, date: "Mar 11", day: "Wed", isExam: true, examTitle: "Midterm Review" },
  { week: 8, date: "Mar 12", day: "Thu", isExam: true, examTitle: "Midterm Exam — 7–9 PM PT" },
  { week: 8, date: "Mar 13", day: "Fri", lectureNum: 21, lectureTitle: "SQL Injection and CAPTCHAs", discussionNum: 7, discussionTitle: "Cookies and CSRF", homework: "HW5", homeworkDue: "Mar 20" },

  // Week 9
  { week: 9, date: "Mar 16", day: "Mon", lectureNum: 22, lectureTitle: "iPhone Security" },
  { week: 9, date: "Mar 18", day: "Wed", lectureNum: 23, lectureTitle: "Intro to Networking I" },
  { week: 9, date: "Mar 20", day: "Fri", lectureNum: 24, lectureTitle: "Intro to Networking II", discussionNum: 8, discussionTitle: "SQL Injection and XSS" },

  // Week 10 — Spring Recess
  { week: 10, date: "Mar 23", day: "Mon", isBreak: true },
  { week: 10, date: "Mar 25", day: "Wed", isBreak: true },
  { week: 10, date: "Mar 27", day: "Fri", isBreak: true, homework: "HW6", homeworkDue: "Apr 10", project: "Project 2", projectDue: "Apr 01" },

  // Week 11
  { week: 11, date: "Mar 30", day: "Mon", lectureNum: 25, lectureTitle: "Local-Area Networking and Attacks" },
  { week: 11, date: "Apr 01", day: "Wed", lectureNum: 26, lectureTitle: "Internet Protocols" },
  { week: 11, date: "Apr 03", day: "Fri", lectureNum: 27, lectureTitle: "DNS", discussionNum: 9, discussionTitle: "ARP, DHCP, WPA", project: "Project 3", projectDue: "Apr 10" },

  // Week 12
  { week: 12, date: "Apr 06", day: "Mon", lectureNum: 28, lectureTitle: "Case Study: Mirai Botnet" },
  { week: 12, date: "Apr 08", day: "Wed", lectureNum: 29, lectureTitle: "TLS I" },
  { week: 12, date: "Apr 10", day: "Fri", lectureNum: 30, lectureTitle: "TLS II", discussionNum: 10, discussionTitle: "TCP and TLS", homework: "HW7", homeworkDue: "Apr 24" },

  // Week 13
  { week: 13, date: "Apr 13", day: "Mon", lectureNum: 31, lectureTitle: "Encrypted Messaging: Signal, WhatsApp, etc." },
  { week: 13, date: "Apr 15", day: "Wed", lectureNum: 32, lectureTitle: "Metadata-hiding Communication Systems" },
  { week: 13, date: "Apr 17", day: "Fri", lectureNum: 33, lectureTitle: "Intrusion Detection", discussionNum: 11, discussionTitle: "DNS" },

  // Week 14
  { week: 14, date: "Apr 20", day: "Mon", lectureNum: 34, lectureTitle: "AI Security" },
  { week: 14, date: "Apr 22", day: "Wed" },
  { week: 14, date: "Apr 24", day: "Fri", discussionNum: 12, discussionTitle: "Intrusion Detection" },

  // Week 15
  { week: 15, date: "Apr 27", day: "Mon", lectureNum: 35, lectureTitle: "AI Security" },
  { week: 15, date: "Apr 29", day: "Wed" },
  { week: 15, date: "May 01", day: "Fri", discussionNum: 13, discussionTitle: "AI Security" },

  // Week 16 — RRR Week
  { week: 16, date: "May 04", day: "Mon", noLecture: "RRR Week" },
  { week: 16, date: "May 06", day: "Wed", noLecture: "Topical Review Sessions" },
  { week: 16, date: "May 08", day: "Fri", noLecture: "Topical Review Sessions" },

  // Week 17 — Finals
  { week: 17, date: "May 13", day: "Wed", isExam: true, examTitle: "Final Exam — 7–10 PM PT" },
];
