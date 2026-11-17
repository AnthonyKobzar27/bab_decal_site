import type { Metadata } from "next";
import { PolicySection } from "@/components/policies/PolicySection";
import { Divider } from "@/components/ui/Divider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  COURSE_PROJECT_DUE,
  courseProjectWeights,
  finalProjectRequirements,
} from "@/lib/data/courseProject";

export const metadata: Metadata = { title: "Course Project" };

export default function CourseProjectPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <SectionHeading as="h1">Course Project</SectionHeading>

      <PolicySection id="overview" title="Overview">
        <p>
          The Blockchain Dev Decal course project is your opportunity to design, build, and ship a
          real decentralized application (DApp) from the ground up. Over the semester you will move
          from concept to deployed product — writing smart contracts in Solidity, connecting them to
          a web frontend, and presenting your work to the broader Blockchain at Berkeley community.
        </p>
        <p className="mt-2">
          Projects are completed in teams of 2–4. Every team member is expected to contribute
          meaningfully to both the on-chain and off-chain layers of the project.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="phases" title="Project Phases">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>Phase 1 — Proposal (Week 4):</strong> Submit a one-page project proposal
            describing your idea, the problem it solves, a high-level architecture diagram, and your
            team&apos;s breakdown of responsibilities. Proposals are reviewed by course staff for scope
            and feasibility.
          </li>
          <li>
            <strong>Phase 2 — Smart Contract Milestone (Week 8):</strong> Your core Solidity
            contracts must be written, tested with Hardhat or Foundry, and deployed to a testnet
            (Sepolia or Base Sepolia). Submit your test suite and a short write-up of your contract
            architecture and any security considerations you addressed.
          </li>
          <li>
            <strong>Phase 3 — Frontend Integration (Week 11):</strong> Connect your contracts to a
            web interface using ethers.js or wagmi. Users should be able to interact with your DApp
            through MetaMask without touching a terminal. Submit a live demo link and a short
            walkthrough video.
          </li>
          <li>
            <strong>Phase 3.5: Rust Companion CLI</strong>
            <p className="mt-1">
              Build a Rust command-line tool, managed with Cargo, that works with the Solidity
              contract your team already deployed. The goal is to put this unit&apos;s Rust concepts
              (ownership and borrowing, enums and <code>match</code>, <code>Result</code>-based
              error handling, crates) to work on your own project. Staff will provide a starter
              template that handles the RPC connection and contract bindings, so your time goes
              into the Rust logic.
            </p>
            <p className="mt-2">Requirements:</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                At least two read commands that call view functions on your deployed contract and
                print clean, formatted output (for example <code>status</code>,{" "}
                <code>balance &lt;address&gt;</code>).
              </li>
              <li>
                One command that fetches and summarizes your contract&apos;s past events (for example
                total votes cast, trade history, top holders).
              </li>
              <li>
                One write command that sends a transaction to your contract. It must require an
                explicit <code>--confirm</code> flag, and keys must be read from environment
                variables, never hardcoded or committed.
              </li>
              <li>
                Model your contract&apos;s data with your own Rust structs and enums, and handle every
                RPC or parse failure with <code>Result</code> and <code>match</code>. No{" "}
                <code>unwrap()</code> or <code>expect()</code> outside tests.
              </li>
              <li>
                At least 3 unit tests (<code>cargo test</code>) on your non-network logic.
              </li>
              <li>
                A README with setup, an example run of every command, and a short paragraph on one
                place where Rust&apos;s ownership or borrowing rules changed how you wrote the code.
              </li>
            </ul>
            <p className="mt-2">
              Stretch goals: a live <code>watch</code> mode that streams new events; caching event
              history locally; comparing CLI numbers against your frontend; publishing a release
              binary.
            </p>
            <p className="mt-2">
              Submit your repo link and a terminal recording (2 minutes max) showing every command
              running against your testnet contract. Due {COURSE_PROJECT_DUE}, together with the
              final project.
            </p>
          </li>
          <li>
            <strong>
              Phase 4: Final Demo &amp; Writeup (due {COURSE_PROJECT_DUE}, the Friday before RRR
              week):
            </strong>{" "}
            Present your project at the end-of-semester showcase. Submit a final technical writeup
            covering architecture, design decisions, known limitations, and what you would do
            differently with more time.
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {finalProjectRequirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
          </li>
        </ul>
      </PolicySection>

      <Divider />

      <PolicySection id="requirements" title="Technical Requirements">
        <ul className="list-disc pl-5 space-y-2">
          <li>At least one deployed, verified Solidity smart contract on a public EVM testnet.</li>
          <li>A test suite with ≥ 80% branch coverage on your contract logic.</li>
          <li>A working web frontend that connects to a wallet and calls your contracts.</li>
          <li>A Rust CLI that interacts with your contract.</li>
          <li>
            No use of upgradeable proxy patterns unless explicitly approved — keep the scope focused
            and auditable.
          </li>
          <li>
            A documented threat model: what can go wrong, and what mitigations did you implement?
          </li>
        </ul>
      </PolicySection>

      <Divider />

      <PolicySection id="ideas" title="Project Ideas">
        <p>
          You are encouraged to come up with your own idea. Below are a few starting points if
          you&apos;re looking for inspiration:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>A decentralized voting system with on-chain tallying and anonymized ballots.</li>
          <li>A token-gated study group platform where NFT ownership grants access.</li>
          <li>A simple AMM (automated market maker) with a custom bonding curve.</li>
          <li>An on-chain prediction market for campus events.</li>
          <li>A DAO governance framework for a student organization treasury.</li>
          <li>A cross-chain bridge prototype between two EVM-compatible testnets.</li>
        </ul>
      </PolicySection>

      <Divider />

      <PolicySection id="grading" title="Grading">
        <p>The project is worth <strong>40%</strong> of your final grade, broken down as follows:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          {courseProjectWeights.map((row) => (
            <li key={row.item}>
              <strong>{row.item}:</strong> {row.weight}
            </li>
          ))}
        </ul>
        <p className="mt-3">
          Grading emphasizes thoughtful design and security awareness over feature count. A simple,
          well-tested, and clearly explained DApp will outscore a complex one with no test coverage
          or documentation.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="resources" title="Useful Resources">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <a href="https://docs.soliditylang.org" target="_blank" rel="noopener noreferrer">
              Solidity Documentation
            </a>
          </li>
          <li>
            <a href="https://hardhat.org/docs" target="_blank" rel="noopener noreferrer">
              Hardhat Docs
            </a>
          </li>
          <li>
            <a href="https://book.getfoundry.sh" target="_blank" rel="noopener noreferrer">
              Foundry Book
            </a>
          </li>
          <li>
            <a href="https://wagmi.sh" target="_blank" rel="noopener noreferrer">
              wagmi (React hooks for Ethereum)
            </a>
          </li>
          <li>
            <a href="https://docs.openzeppelin.com/contracts" target="_blank" rel="noopener noreferrer">
              OpenZeppelin Contracts
            </a>
          </li>
          <li>
            <a href="https://consensys.github.io/smart-contract-best-practices" target="_blank" rel="noopener noreferrer">
              Smart Contract Security Best Practices
            </a>
          </li>
          <li>
            <a href="https://doc.rust-lang.org/book/" target="_blank" rel="noopener noreferrer">
              The Rust Book
            </a>
          </li>
          <li>
            <a href="https://alloy.rs/" target="_blank" rel="noopener noreferrer">
              Alloy Docs
            </a>
          </li>
        </ul>
      </PolicySection>
    </div>
  );
}
