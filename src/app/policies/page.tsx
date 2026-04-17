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
          In general, course staff does not control enrollment; we follow department enrollment
          policies. Non-CS majors cannot receive enrollment codes. Students planning to enroll
          later should email{" "}
          <a href="mailto:cs161@berkeley.edu" className="text-blue-600 dark:text-blue-400 underline">
            cs161@berkeley.edu
          </a>
          . Concurrent enrollment students with pending applications will be added automatically
          within 3–4 days.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="prerequisites" title="Prerequisites">
        <p>
          The course requires CS61B, CS70, and CS61C, though prerequisites are not formally
          enforced. Basic C, Python, and Git knowledge are assumed. Project 2 uses Go without
          dedicated syntax instruction.
        </p>
        <p className="mt-2">
          <strong>CS61C:</strong> Understanding C, assembly, number system conversions, complex C
          programs, GDB debugging, and assembly code reading is essential.
        </p>
        <p className="mt-2">
          <strong>CS61B:</strong> If you can implement a linked list from scratch, test your own
          code, and work in a 500–1000 line codebase, you have met this requirement.
        </p>
        <p className="mt-2">
          <strong>CS70:</strong> Understanding modular arithmetic, set notation, and mathematical
          proofs is needed.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="lecture" title="Lecture">
        <p>
          Lectures occur Mondays, Wednesdays, and Fridays from 3:00–4:00 PM PT, with attempted
          Zoom livestreaming. Attendance earns 0.1% extra credit per lecture (maximum 2% for 20
          lectures), starting Week 3.
        </p>
        <p className="mt-2 text-red-700 dark:text-red-400 font-medium">
          Do not claim attendance credit if you are not actually in the lecture hall. Falsely
          claiming attendance results in a −2% grade penalty and an academic misconduct case.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="discussions" title="Discussion Sections">
        <p>
          Regular sections focus on current material (1 hour). Bridge sections offer gentler pacing
          covering the previous week's content. Exam prep sections use past exam problems.
          Discussions are optional but recommended — attendance is not taken.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="office-hours" title="Office Hours">
        <p>
          TAs and instructors hold office hours throughout the semester using an online queue to
          process help tickets. Instructor hours address higher-level content questions; homework
          and project help requires TA office hours.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="exams" title="Exams">
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>Midterm:</strong> Thursday, March 12, 7–9 PM PT
          </li>
          <li>
            <strong>Midterm alternate:</strong> Friday, March 13, 8–10 AM PT (in-person only)
          </li>
          <li>
            <strong>Final:</strong> Wednesday, May 13, 7–10 PM PT
          </li>
          <li>
            <strong>Final alternate:</strong> Wednesday, May 13, 4–7 PM PT (in-person only)
          </li>
        </ul>
        <p className="mt-3">
          Remote exam options are available only at scheduled times with video proctoring
          approval. Alternates are only available for genuine scheduling conflicts, not for
          exam-spacing preference.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="homeworks" title="Homeworks">
        <p>
          Seven homeworks are released weekly, due Fridays at 11:59 PM PT via Gradescope.
          Homeworks cannot be turned in late unless you have approved extensions or
          accommodations. Auditors may join using the code <code className="font-mono bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">G2DR3D</code>.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="projects" title="Projects">
        <p>
          Three projects, available individually or in pairs. Projects cannot be turned in late
          without approved extensions or accommodations. Projects 1 and 3 allow unlimited
          submissions and most students receive full scores on coding portions.
        </p>
        <p className="mt-2">
          Project 2 includes hidden autograder tests run after final submission. The average
          coding score on Project 2 is approximately 60%, distributed similarly to an exam.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="grading" title="Grading">
        <GradeTable />
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Grade bins are guaranteed only for students completing all three projects (minimum 50%
          per project). Grades are at course staff's discretion for anyone who fails to complete
          any project without explicit approval. Treat these bins as a minimum potential grade.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="collaboration" title="Collaboration Policy">
        <p>
          Write all solutions strictly by yourself (with your partner on projects). Discussing
          course topics is encouraged; sharing code or solutions is not.
        </p>
        <p className="mt-2 font-semibold text-red-700 dark:text-red-400">
          DO NOT give anyone your code. DO NOT post project solutions online.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>Do not ask for homework or project solutions on Stack Overflow or similar sites.</li>
          <li>Do not receive help from students who took the course in previous years.</li>
          <li>Partners must work synchronously in a pair-programming style.</li>
          <li>Use GitHub private repositories to keep your solutions private.</li>
        </ul>
        <p className="mt-3">
          Violations result in referral to the Center for Student Conduct, negative points on the
          entire assignment, and possible course failure.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="ai-policy" title="Generative AI Policy">
        <p>
          CS 161 staff believe the best learning happens in the absence of generative AI tools.
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <strong>As a Student:</strong> You may ask AI to reword material or generate practice
            problems. You cannot use AI to complete homework or projects.
          </li>
          <li>
            <strong>As a Systems Designer:</strong> You may ask AI to reword specifications. You
            cannot ask AI to design components or write design documents.
          </li>
          <li>
            <strong>As an Engineer (Project 2):</strong> You may ask AI to explain Go syntax and
            write small boilerplate (with citation). You cannot use uncited generated code or have
            AI implement substantial portions.
          </li>
        </ul>
      </PolicySection>

      <Divider />

      <PolicySection id="ethics" title="Ethics">
        <p>
          We discuss attacks in this class, some of them quite nasty. This is not an invitation to
          undertake these attacks in any fashion other than with the informed consent of all
          involved and affected parties.
        </p>
      </PolicySection>
    </div>
  );
}
