import type { Metadata } from "next";
import { PolicySection } from "@/components/policies/PolicySection";
import { Divider } from "@/components/ui/Divider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  PROJECT1_DUE,
  PROJECT1_MAX_TEAM_SIZE,
  project1Requirements,
} from "@/lib/data/project1";

export const metadata: Metadata = { title: "Project 1" };

/** Project 1 spec. All content lives in src/lib/data/project1.ts. */
export default function Project1Page() {
  return (
    <div className="max-w-3xl space-y-10">
      <div className="space-y-2">
        <SectionHeading as="h1">Project 1</SectionHeading>
        <p className="text-sm" style={{ color: "var(--cs-muted)" }}>
          Due {PROJECT1_DUE} · Teams of up to {PROJECT1_MAX_TEAM_SIZE}
        </p>
      </div>

      <PolicySection id="overview" title="Overview">
        <p>
          Build something cool to show your mastery of Solidity. Be as creative as possible. You
          will be presenting your projects to each other.
        </p>
      </PolicySection>

      <Divider />

      <PolicySection id="requirements" title="Requirements">
        <ol className="list-decimal pl-5 space-y-1">
          {project1Requirements.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ol>
      </PolicySection>

      <Divider />

      <PolicySection id="ai-policy" title="No AI">
        <p className="font-medium" style={{ color: "var(--cs-exam-text)" }}>
          No AI for this project. Everything you submit must be written by your team.
        </p>
      </PolicySection>
    </div>
  );
}
