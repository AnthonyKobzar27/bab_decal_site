import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { SITE_TITLE, COURSE_SUBTITLE } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${SITE_TITLE} · ${COURSE_SUBTITLE}`,
    template: `%s · ${SITE_TITLE}`,
  },
  description: "Blockchain Dev Decal — Fall 2026, UC Berkeley",
  icons: { icon: "/bab.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to main content</a>

        {/* Sticky top bar */}
        <Navbar />

        {/* Below navbar: sidebar + content side by side */}
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex flex-col flex-1 min-w-0">
            <main id="main-content" className="flex-1 px-12 py-8 pr-16">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
