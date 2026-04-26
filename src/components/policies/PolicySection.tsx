import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

/** A single named policy section with an anchor for deep-linking. */
export function PolicySection({ id, title, children, className }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-20 space-y-3", className)}
    >
      <SectionHeading as="h2" id={`${id}-heading`}>
        {title}
      </SectionHeading>
      <div className="prose max-w-none text-sm leading-relaxed" style={{ color: "var(--cs-text)" }}>
        {children}
      </div>
    </section>
  );
}
