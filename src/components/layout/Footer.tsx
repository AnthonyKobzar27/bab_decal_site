import { SITE_TITLE, COURSE_SUBTITLE, COURSE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--cs-border)] bg-[var(--cs-util-bg)] py-8 mt-12">
      <div className="mx-auto max-w-[68.75rem] px-4 text-sm text-[var(--cs-muted)] flex flex-col sm:flex-row gap-2 justify-between">
        <p>
          {SITE_TITLE} · {COURSE_SUBTITLE}
        </p>
        <p>
          Questions? Email{" "}
          <a
            href={`mailto:${COURSE_EMAIL}`}
            className="underline underline-offset-2 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            {COURSE_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
