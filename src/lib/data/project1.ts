// Project 1 · Solidity project spec.
// The page at /project-1 renders everything from this file, so edit the
// spec here rather than in the page component.

/** Display-only due label including the time. Never parsed as a Date. */
export const PROJECT1_DUE = "Friday, Nov 13, 11:59 PM PT";
export const PROJECT1_MAX_TEAM_SIZE = 3;
export const PROJECT1_MIN_SOLIDITY_LINES = 100;
export const PROJECT1_WRITEUP_WORDS = 200;

/** The deliverables every team must hit, rendered as a numbered list. */
export const project1Requirements: string[] = [
  `At least ${PROJECT1_MIN_SOLIDITY_LINES} lines of Solidity, with your smart contract submitted.`,
  `A ${PROJECT1_WRITEUP_WORDS}-word writeup of what you built.`,
  "A nice frontend with RainbowKit / ethers.js integration.",
  "A presentation of your project to the class.",
];
