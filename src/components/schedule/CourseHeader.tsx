import Image from "next/image";
import { Clock, MapPin, Video, Mail } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Divider } from "@/components/ui/Divider";
import { INSTRUCTORS, LECTURE_TIME, LECTURE_ROOM, COURSE_EMAIL } from "@/lib/constants";

/** Course info banner displayed above the schedule table on the home page. */
export function CourseHeader() {
  return (
    <div className="space-y-4">
      {/*
        Grid: text in column 1, logo in column 2.
        - Phones: the logo sits on the names row, vertically centred on them,
          and the detail row spans both columns to get the full width.
        - sm and up: the logo spans five rows. The text sits in rows 2-4 and the
          1fr rows above and below take up the logo's extra height, so the text
          stays together and is centred against the logo.
      */}
      <div className="grid grid-cols-[minmax(0,1fr)_auto] sm:grid-rows-[1fr_auto_auto_auto_1fr] items-center gap-x-4 sm:gap-x-6">
        {/* Instructor names */}
        <p className="col-start-1 row-start-1 sm:row-start-2 text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--cs-muted)" }}>
          Instructors
        </p>
        <h2 className="col-start-1 row-start-2 sm:row-start-3 text-xl sm:text-2xl font-bold" style={{ color: "var(--cs-text)" }}>
          {INSTRUCTORS.join(" & ")}
        </h2>

        {/* Detail row */}
        <div
          className="col-span-2 sm:col-span-1 row-start-3 sm:row-start-4 mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
          style={{ color: "var(--cs-text)" }}
        >
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

        {/* Blockchain Decal logo: small beside the names on phones, scaling
            up with the viewport beside the whole header from sm. */}
        <Image
          src="/blockchaindecal.png"
          alt="Blockchain Decal logo"
          width={240}
          height={240}
          className="col-start-2 row-start-2 sm:row-start-1 sm:row-span-5 opacity-90 w-14 sm:w-32 md:w-44 xl:w-60 h-auto"
          priority
        />
      </div>

      <Divider />
    </div>
  );
}
