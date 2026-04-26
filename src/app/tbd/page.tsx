import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COURSE_EMAIL } from "@/lib/constants";

export const metadata: Metadata = { title: "Coming Soon" };

export default function TBDPage() {
  return (
    <div className="max-w-md space-y-4 py-4">
      <SectionHeading as="h1">Coming Soon</SectionHeading>
      <p className="text-sm" style={{ color: "var(--cs-muted)" }}>
        This resource will be available before the semester begins. Check back soon, or email{" "}
        <a
          href={`mailto:${COURSE_EMAIL}`}
          className="underline underline-offset-2 transition-colors"
          style={{ color: "var(--cs-link)" }}
        >
          {COURSE_EMAIL}
        </a>{" "}
        with any urgent questions.
      </p>
    </div>
  );
}
