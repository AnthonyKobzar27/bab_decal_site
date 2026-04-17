import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { CourseInfoBanner } from "@/components/layout/CourseInfoBanner";
import { Footer } from "@/components/layout/Footer";
import { SITE_TITLE, COURSE_SUBTITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_TITLE} · ${COURSE_SUBTITLE}`,
    template: `%s · ${SITE_TITLE}`,
  },
  description: "CS161 Computer Security — Spring 2026, UC Berkeley",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <UtilityBar />
        <Navbar />
        <CourseInfoBanner />
        {/* max-width 68.75rem and 2rem padding matches Just the Docs content area */}
        <main id="main-content" className="mx-auto w-full max-w-[68.75rem] px-8 py-8 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
