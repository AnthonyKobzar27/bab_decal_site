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
  homeworkLink?: string;
  homeworkDue?: string;
  project?: string;
  projectDue?: string;
  isExam?: boolean;
  examTitle?: string;
  isBreak?: boolean;
};

const HW_REPO = "https://github.com/BerkeleyBlockchain/dev-decal-sp23";

// Fall 2026 · Blockchain Dev Decal
// First lecture: August 31, 2026 (Monday) — one meeting per week
// 4 homeworks spaced evenly: weeks 1, 5, 9, 12 (~3-4 week gaps)
// Slides served from /public/slides/
export const schedule: ScheduleItem[] = [
  // Week 1 — Aug 31 · HW1 assigned
  {
    week: 1,
    date: "Aug 31",
    day: "Mon",
    lectureNum: 1,
    lectureTitle: "Intro to Blockchain",
    lectureSlides: "/slides/lecture-01-intro-to-blockchain.pptx",
    homework: "HW1",
    homeworkLink: HW_REPO,
    homeworkDue: "Sep 21",
  },

  // Week 2 — Labor Day, no class
  {
    week: 2,
    date: "Sep 7",
    day: "Mon",
    isBreak: true,
    noLecture: "Labor Day — No Class",
  },

  // Week 3 — Sep 14
  {
    week: 3,
    date: "Sep 14",
    day: "Mon",
    lectureNum: 2,
    lectureTitle: "Developer Tools",
    lectureSlides: "/slides/lecture-02-developer-tools.pptx",
  },

  // Week 4 — Sep 21
  {
    week: 4,
    date: "Sep 21",
    day: "Mon",
    lectureNum: 3,
    lectureTitle: "Solidity Syntax",
    lectureSlides: "/slides/lecture-03-solidity-syntax.pptx",
  },

  // Week 5 — Sep 28 · HW2 assigned
  {
    week: 5,
    date: "Sep 28",
    day: "Mon",
    lectureNum: 4,
    lectureTitle: "Writing Efficient & Secure Solidity",
    lectureSlides: "/slides/lecture-04-efficient-secure-solidity.pptx",
    homework: "HW2",
    homeworkLink: HW_REPO,
    homeworkDue: "Oct 19",
  },

  // Week 6 — Oct 5
  {
    week: 6,
    date: "Oct 5",
    day: "Mon",
    lectureNum: 5,
    lectureTitle: "Ethers.js",
    lectureSlides: "/slides/lecture-05-ethers-js.pptx",
  },

  // Week 7 — Oct 12
  {
    week: 7,
    date: "Oct 12",
    day: "Mon",
    lectureNum: 6,
    lectureTitle: "Rust Intro",
    lectureSlides: "/slides/lecture-06-rust-intro.pptx",
  },

  // Week 8 — Oct 19 (slides TBD)
  {
    week: 8,
    date: "Oct 19",
    day: "Mon",
    lectureNum: 7,
    lectureTitle: "TBD",
  },

  // Week 9 — Oct 26 · HW3 assigned
  {
    week: 9,
    date: "Oct 26",
    day: "Mon",
    lectureNum: 8,
    lectureTitle: "Rust II",
    lectureSlides: "/slides/lecture-08-rust-ii.pptx",
    homework: "HW3",
    homeworkLink: HW_REPO,
    homeworkDue: "Nov 16",
  },

  // Week 10 — Nov 2 (slides TBD)
  {
    week: 10,
    date: "Nov 2",
    day: "Mon",
    lectureNum: 9,
    lectureTitle: "TBD",
  },

  // Week 11 — Nov 9
  {
    week: 11,
    date: "Nov 9",
    day: "Mon",
    lectureNum: 10,
    lectureTitle: "CosmWasm Contracts",
    lectureSlides: "/slides/lecture-10-cosmwasm-contracts.pptx",
  },

  // Week 12 — Nov 16 · HW4 assigned
  {
    week: 12,
    date: "Nov 16",
    day: "Mon",
    lectureNum: 11,
    lectureTitle: "Trading, DEXs, and Uniswap",
    lectureSlides: "/slides/lecture-11-trading-dexs-uniswap.pptx",
    homework: "HW4",
    homeworkLink: HW_REPO,
    homeworkDue: "Nov 30",
  },

  // Week 13 — Thanksgiving Recess
  {
    week: 13,
    date: "Nov 23",
    day: "Mon",
    isBreak: true,
    noLecture: "Thanksgiving Recess — No Lecture",
  },

  // Week 14 — Nov 30, final class
  {
    week: 14,
    date: "Nov 30",
    day: "Mon",
    lectureNum: 12,
    lectureTitle: "Final Project Presentations & Course Wrap-up",
  },

  // Week 15 — RRR Week
  {
    week: 15,
    date: "Dec 7",
    day: "Mon",
    noLecture: "RRR Week — No Class",
  },
];
