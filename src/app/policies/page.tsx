import type { Metadata } from "next";
import { PolicySection } from "@/components/policies/PolicySection";
import { GradeTable } from "@/components/policies/GradeTable";
import { Divider } from "@/components/ui/Divider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "Policies" };

export default function PoliciesPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <SectionHeading as="h1">Course Policies</SectionHeading>

      <PolicySection id="enrollment" title="Enrollment">
        <p>
          The Blockchain Dev Decal is open to all UC Berkeley students regardless of major. No prior
          blockchain experience is required — curiosity and a willingness to learn are the only
          prerequisites. To join the waitlist or ask enrollment questions, email{" "}
          <a href="mailto:blockchaindecal@berkeley.edu">
            blockchaindecal@berkeley.edu
          </a>
          .
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="prerequisites" title="Prerequisites">
        <p>
          The course assumes basic programming experience — at the level of CS61A or equivalent.
          You should be comfortable reading and writing Python or JavaScript. No prior knowledge of
          cryptography, distributed systems, or Solidity is expected; we teach everything from
          scratch.
        </p>
        <p className="mt-2">
          Familiarity with the command line and Git is helpful but not required. We will cover the
          necessary tooling in the first two weeks.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="lecture" title="Lecture">
        <p>
          Lectures are held Thursdays 2:00–3:00 PM PT. Attendance is taken each week via the
          Attendance tab in the course header. Lecture recordings are posted to the{" "}
          <a href="https://www.youtube.com/@BlockchainatBerkeley" target="_blank" rel="noopener noreferrer">
            Blockchain at Berkeley YouTube channel
          </a>{" "}
          within 48 hours.
        </p>
        <p className="mt-2 font-medium" style={{ color: "var(--cs-exam-text)" }}>
          Do not submit attendance if you did not attend. Fraudulent attendance submissions result
          in a deduction and may be escalated to the Center for Student Conduct.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="assignments" title="Assignments">
        <p>
          Weekly assignments reinforce the lecture material and typically take 1–3 hours to
          complete. Assignments are submitted via Gradescope and are due the following Wednesday at
          11:59 PM PT. Late submissions are not accepted unless you have an approved extension.
        </p>
        <p className="mt-2">
          Assignments may include written reflections, short coding exercises in Solidity or
          JavaScript, and conceptual questions about protocol design.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="project" title="Course Project">
        <p>
          The course project is the centerpiece of the Decal. Teams of 2–4 students design and
          build a decentralized application over the second half of the semester, culminating in a
          live demo at the end-of-semester showcase. See the{" "}
          <a href="/course-project">Course Project</a> page for full details, milestones, and
          grading rubric.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="grading" title="Grading">
        <GradeTable />
        <p className="mt-4 text-xs" style={{ color: "var(--cs-muted)" }}>
          The Blockchain Dev Decal is a P/NP course. The grade bins above correspond to the
          minimum score required for a passing grade (70%). Students who do not submit a course
          project will not receive a passing grade regardless of other scores.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="collaboration" title="Collaboration Policy">
        <p>
          Discussion of course concepts and general problem-solving approaches is encouraged. Sharing
          exact solutions to assignments is not permitted.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Write all assignment solutions yourself (with your project partner on project work).</li>
          <li>Do not copy code from other students or post solutions publicly.</li>
          <li>Cite any external resources (Stack Overflow, documentation, etc.) you use.</li>
          <li>Use private GitHub repositories to keep your project code off public forums.</li>
        </ul>
      </PolicySection>

      <Divider />

      <PolicySection id="ai-policy" title="Generative AI Policy">
        <p>
          AI tools are a real part of modern blockchain development, and we don't pretend otherwise.
          However, using AI to complete assignments defeats the purpose of the course.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <strong>Assignments:</strong> Do not use AI to generate your answers. You may use AI to
            clarify concepts, but the written response must be your own.
          </li>
          <li>
            <strong>Project:</strong> You may use AI to generate boilerplate and explore syntax, but
            core contract logic and architecture must come from your team. Cite AI-generated
            snippets in comments.
          </li>
        </ul>
      </PolicySection>

      <Divider />

      <PolicySection id="conduct" title="Code of Conduct">
        <p>
          We are committed to a welcoming environment for students of all backgrounds. Harassment,
          discrimination, or exclusionary behavior of any kind is not tolerated. Please report
          concerns to any instructor or to{" "}
          <a href="mailto:blockchaindecal@berkeley.edu">blockchaindecal@berkeley.edu</a>.
        </p>
      </PolicySection>
    </div>
  );
}
