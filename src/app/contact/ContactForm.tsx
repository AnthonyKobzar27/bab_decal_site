"use client";

import { useState } from "react";
import { COURSE_EMAIL } from "@/lib/constants";

type FormType = "extension" | "feedback" | "support";

const SUBJECTS: Record<FormType, string> = {
  extension: "Extension Request",
  feedback:  "Course Feedback",
  support:   "Support Request",
};

type Props = { initialType: FormType };

export function ContactForm({ initialType }: Props) {
  const [type, setType]       = useState<FormType>(initialType);
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = SUBJECTS[type];
    const body    = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href =
      `mailto:${COURSE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "w-full rounded border border-[var(--cs-border)] bg-[var(--cs-surface)] px-3 py-2 text-sm text-[var(--cs-text)] outline-none focus:border-[var(--cs-link)] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Request type */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--cs-text)" }}>
          Request Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as FormType)}
          className={inputClass}
        >
          {(Object.entries(SUBJECTS) as [FormType, string][]).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--cs-text)" }}>
          Your Name
        </label>
        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--cs-text)" }}>
          Your Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="janesmith@berkeley.edu"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium" style={{ color: "var(--cs-text)" }}>
          Message
        </label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your request..."
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="rounded px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-80"
        style={{ background: "var(--cs-link)", color: "#fff" }}
      >
        Open in Mail App
      </button>

      <p className="text-xs" style={{ color: "var(--cs-muted)" }}>
        Clicking the button opens your default mail app pre-filled with your message addressed to{" "}
        <span style={{ color: "var(--cs-text)" }}>{COURSE_EMAIL}</span>.
      </p>
    </form>
  );
}
