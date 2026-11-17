// Course project spec shared by /course-project.
// Due labels are display-only strings. Never parse them as Dates.

/** Shared deadline for the Rust Companion CLI and the final project. */
export const COURSE_PROJECT_DUE = "Friday, December 4, 2026, 11:59 PM PT";

/**
 * Breakdown of the course project, which is 40% of the final grade.
 * Weights are display strings and must sum to 40.
 */
export const courseProjectWeights: { item: string; weight: string }[] = [
  { item: "Proposal", weight: "5%" },
  { item: "Smart Contract Milestone", weight: "10%" },
  { item: "Frontend Integration", weight: "10%" },
  { item: "Rust Companion CLI", weight: "5%" },
  { item: "Final Demo & Writeup", weight: "10%" },
];

/** Extra requirements added to Phase 4, rendered under the phase summary. */
export const finalProjectRequirements: string[] = [
  "The final project must include a meaningful improvement on top of what the team built in the earlier phases (new feature, better UX, security or gas improvements, etc.), not just the earlier deliverables resubmitted.",
  "The writeup and presentation must give a strong rationale: why the team built this project, what problem it solves, and what value it provides to users.",
  "In the final presentation, teams must live-demo connecting a wallet and completing a real transaction on testnet, and show it confirmed (e.g. on a block explorer).",
  "The final submission must be deployable. Teams must submit a live deployed frontend URL (e.g. Vercel/Netlify) connected to their verified contract on testnet, with the contract address and block explorer link, and a README with steps to run and deploy it from scratch. Projects that only run locally don't meet the requirement.",
];
