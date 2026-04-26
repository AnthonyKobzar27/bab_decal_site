import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  id?: string;
};

const sizeMap = {
  h1: "text-3xl font-bold tracking-tight",
  h2: "text-2xl font-bold tracking-tight",
  h3: "text-xl font-semibold",
  h4: "text-lg font-semibold",
};

export function SectionHeading({ children, as: Tag = "h2", className, id }: Props) {
  return (
    <Tag id={id} className={cn(sizeMap[Tag], className)} style={{ color: "var(--cs-text)" }}>
      {children}
    </Tag>
  );
}
