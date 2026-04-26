import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";
import { PolicySection } from "@/components/policies/PolicySection";

export const metadata: Metadata = { title: "Exam Logistics" };

export default function ExamLogisticsPage() {
  return (
    <div className="max-w-3xl space-y-10">
      <SectionHeading as="h1">Exam Logistics</SectionHeading>

      <PolicySection id="midterm" title="Midterm Quiz">
        <p><strong>Date:</strong> Monday, October 19</p>
        <p><strong>Time:</strong> During class · Time TBD</p>
        <p><strong>Location:</strong> TBD</p>
        <p className="mt-2">
          <strong>Alternate:</strong> By appointment — email{" "}
          <a href="mailto:blockchaindecal@berkeley.edu">blockchaindecal@berkeley.edu</a> to schedule.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="final" title="Final Showcase">
        <p><strong>Date:</strong> Monday, November 30</p>
        <p><strong>Time:</strong> During class · Time TBD</p>
        <p><strong>Location:</strong> TBD</p>
        <p className="mt-2">
          <strong>Alternate:</strong> By arrangement — contact course staff. Only available for
          documented conflicts.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="rules" title="Rules & Reminders">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            The midterm quiz covers Weeks 1–7 of lecture material (through Rust Intro). It is
            closed-book but you may bring one handwritten cheat sheet (front and back).
          </li>
          <li>
            The final showcase is a live demo of your course project — all team members must be
            present and able to answer questions about any part of the project.
          </li>
          <li>
            Alternate arrangements are only available for documented conflicts. Preference for a
            different time is not sufficient.
          </li>
          <li>Do not discuss midterm quiz content with students who have not yet taken it.</li>
        </ul>
      </PolicySection>
    </div>
  );
}
