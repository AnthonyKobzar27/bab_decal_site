import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

const TITLES = {
  extension: "Extension Request",
  feedback:  "Course Feedback",
  support:   "Support",
};

type SearchParams = Promise<{ type?: string }>;

export default async function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  const { type } = await searchParams;
  const validType = type === "extension" || type === "feedback" || type === "support"
    ? type
    : "support";

  return (
    <div className="max-w-lg space-y-6">
      <SectionHeading as="h1">{TITLES[validType]}</SectionHeading>
      <ContactForm initialType={validType} />
    </div>
  );
}
