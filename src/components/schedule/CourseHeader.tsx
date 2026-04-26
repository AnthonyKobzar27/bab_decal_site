import Image from "next/image";
import { Clock, MapPin, Video, Mail } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Divider } from "@/components/ui/Divider";
import { INSTRUCTORS, LECTURE_TIME, LECTURE_ROOM, COURSE_EMAIL } from "@/lib/constants";

/** Course info banner displayed above the schedule table on the home page. */
export function CourseHeader() {
  return (
    <div className="space-y-4">
      {/* Top row: text info left, logo right */}
      <div className="flex items-center justify-between gap-6">
        <div className="space-y-3 min-w-0">
          {/* Instructor names */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--cs-muted)" }}>
              Instructors
            </p>
            <h2 className="text-2xl font-bold" style={{ color: "var(--cs-text)" }}>
              {INSTRUCTORS.join(" & ")}
            </h2>
          </div>

          {/* Detail row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" style={{ color: "var(--cs-text)" }}>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 opacity-60 shrink-0" aria-hidden="true" />
              {LECTURE_TIME}
            </span>

            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 opacity-60 shrink-0" aria-hidden="true" />
              {LECTURE_ROOM}
            </span>

            <span className="flex items-center gap-2">
              <Video className="h-4 w-4 opacity-60 shrink-0" aria-hidden="true" />
              <ExternalLink href="https://www.youtube.com/@BlockchainatBerkeley">YouTube</ExternalLink>
            </span>

            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 opacity-60 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${COURSE_EMAIL}`}
                className="hover:underline"
                style={{ color: "var(--cs-link)" }}
              >
                {COURSE_EMAIL}
              </a>
            </span>
          </div>
        </div>

        {/* Blockchain Decal logo */}
        <Image
          src="/blockchaindecal.png"
          alt="Blockchain Decal logo"
          width={240}
          height={240}
          className="shrink-0 opacity-90 -ml-8"
          priority
        />
      </div>

      <Divider />
    </div>
  );
}
