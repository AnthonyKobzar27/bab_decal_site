export type ScheduleItem = {
  /** Lesson number shown in the "Wk" column. Counts lessons, not calendar weeks. */
  week: number;
  /** Display-only date label, e.g. "Sep 14" or DATE_TBD. Never parsed as a Date. */
  date: string;
  day: string;
  lectureNum?: number;
  lectureTitle?: string;
  /** Anyone-with-the-link URL to a deck in the course Google Drive folder. */
  lectureSlides?: string;
  lectureRecording?: string;
  noLecture?: string;
  discussionNum?: number;
  discussionTitle?: string;
  discussionWorksheet?: string;
  discussionSolutions?: string;
  homework?: string;
  homeworkLink?: string;
  /** Display-only due label including the time, e.g. "Sep 28, 11:59 PM". */
  homeworkDue?: string;
  project?: string;
  projectDue?: string;
  isExam?: boolean;
  examTitle?: string;
  isBreak?: boolean;
};

/** Placeholder for rows whose date has not been decided yet. */
export const DATE_TBD = "TBD";

const HW_REPO = "https://github.com/BerkeleyBlockchain/fa26-dev-decal";

/**
 * Returns the GitHub URL of a homework folder on the HW_REPO main branch.
 * `folder` must match the repo's folder name exactly; spaces are encoded as %20.
 */
function hwFolderUrl(folder: string): string {
  return `${HW_REPO}/tree/main/${encodeURIComponent(folder)}`;
}

// Fall 2026 · Blockchain Dev Decal
// Lessons meet on Mondays. `week` counts lessons, not calendar weeks:
// weeks 1–4 are Sep 14, Sep 28, Oct 12 and Oct 19 (no lesson Sep 21 or Oct 5).
// Dates from week 5 onward are TBD; those rows keep the planned lecture order.
// HWn is released in week n and is due at 11:59 PM on the day of the next lesson.
// Slides: only decks in the course Google Drive folder, linked as
// anyone-with-the-link URLs. Nothing is served from /public/slides/.
export const schedule: ScheduleItem[] = [
  // Week 1 — Sep 14 · HW1 assigned
  {
    week: 1,
    date: "Sep 14",
    day: "Mon",
    lectureNum: 1,
    lectureTitle: "Intro to Blockchain",
    homework: "HW1",
    homeworkLink: hwFolderUrl("HW1 - Build a Blockchain in Python"),
    homeworkDue: "Sep 28, 11:59 PM",
  },

  // Week 2 — Sep 28 · HW2 assigned
  {
    week: 2,
    date: "Sep 28",
    day: "Mon",
    lectureNum: 2,
    lectureTitle: "Developer Tools",
    lectureSlides: "https://docs.google.com/presentation/d/1Aed9-6MRnOzXeuq2BF92hPtrqwycWIFNR8-2LBmp4SQ/edit?usp=sharing",
    homework: "HW2",
    homeworkLink: hwFolderUrl("HW2 - Deploy Your ERC721"),
    homeworkDue: "Oct 12, 11:59 PM",
  },

  // Week 3 — Oct 12 · HW3 assigned
  {
    week: 3,
    date: "Oct 12",
    day: "Mon",
    lectureNum: 3,
    lectureTitle: "Solidity Syntax",
    lectureSlides: "https://drive.google.com/file/d/16pIW8HzTIzzgXfN7C9GrJpV25peaGYHy/view?usp=sharing",
    homework: "HW3",
    homeworkLink: hwFolderUrl("HW3 - Implementing NFT Marketplace"),
    homeworkDue: "Oct 19, 11:59 PM",
  },

  // Week 4 — Oct 19 · HW4 assigned (due on week 5's date, still TBD)
  {
    week: 4,
    date: "Oct 19",
    day: "Mon",
    lectureNum: 4,
    lectureTitle: "Writing Efficient & Secure Solidity",
    homework: "HW4",
    homeworkLink: hwFolderUrl("HW4 - Etherjs"),
    homeworkDue: "TBD (11:59 PM on Week 5's lecture day)",
  },

  // Week 5
  {
    week: 5,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 5,
    lectureTitle: "Ethers.js",
  },

  // Week 6
  {
    week: 6,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 6,
    lectureTitle: "Rust Intro",
  },

  // Week 7
  {
    week: 7,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 7,
    lectureTitle: "TBD",
  },

  // Week 8
  {
    week: 8,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 8,
    lectureTitle: "Rust II",
  },

  // Week 9
  {
    week: 9,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 9,
    lectureTitle: "TBD",
  },

  // Week 10
  {
    week: 10,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 10,
    lectureTitle: "CosmWasm Contracts",
  },

  // Week 11
  {
    week: 11,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 11,
    lectureTitle: "Trading, DEXs, and Uniswap",
  },

  // Week 12 — Thanksgiving Recess
  {
    week: 12,
    date: DATE_TBD,
    day: "Mon",
    isBreak: true,
    noLecture: "Thanksgiving Recess — No Lecture",
  },

  // Week 13 — final class
  {
    week: 13,
    date: DATE_TBD,
    day: "Mon",
    lectureNum: 12,
    lectureTitle: "Final Project Presentations & Course Wrap-up",
  },

  // Week 14 — RRR Week
  {
    week: 14,
    date: DATE_TBD,
    day: "Mon",
    noLecture: "RRR Week — No Class",
  },
];
