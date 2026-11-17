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

/**
 * Phase 3.5 and Phase 4 blurbs.
 * Keep each one a single paragraph at the same scale as Phases 1, 2, and 3
 * on the course project page: one list item, no nested requirement bullets.
 * The page prints COURSE_PROJECT_DUE in the phase title, so do not repeat it here.
 */
export const rustCompanionCliSummary =
  "Build a small Rust CLI that grows on the Solidity project your team already deployed. You should be able to call that contract from the terminal on testnet. Submit your repository.";

export const finalProjectSummary =
  "Build a real improvement on Project 1 that incorporates Rust. Submit a short write-up of why you built it and what value it provides, a live demo connecting a wallet and making a real testnet transaction, and a live deployed site connected to your verified testnet contract, with the contract address, an explorer link, and a README on deploying from scratch.";
