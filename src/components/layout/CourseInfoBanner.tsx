import { MapPin, Clock, Video } from "lucide-react";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { INSTRUCTORS, LECTURE_TIME, LECTURE_ROOM } from "@/lib/constants";

/** Displays instructor names, lecture time, and room/streaming links. */
export function CourseInfoBanner() {
  return (
    <div className="border-b border-[var(--cs-border)] bg-[var(--cs-surface)] py-3">
      <div className="mx-auto max-w-[68.75rem] px-4 flex flex-wrap gap-x-8 gap-y-1.5 text-sm text-[var(--cs-muted)]">
        <div>
          <span className="font-semibold text-[var(--cs-text)]">Instructors: </span>
          {INSTRUCTORS.join(", ")}
        </div>

        <div className="flex items-center gap-1.5">
          <Clock className="h-4 w-4 opacity-50" aria-hidden="true" />
          <span>{LECTURE_TIME}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 opacity-50" aria-hidden="true" />
          <span>{LECTURE_ROOM}</span>
        </div>

        <div className="flex items-center gap-3">
          <Video className="h-4 w-4 opacity-50" aria-hidden="true" />
          <ExternalLink href="#" className="text-sm">Zoom</ExternalLink>
          <ExternalLink href="#" className="text-sm">YouTube Playlist</ExternalLink>
        </div>
      </div>
    </div>
  );
}
