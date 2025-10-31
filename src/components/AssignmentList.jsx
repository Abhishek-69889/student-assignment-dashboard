// src/components/AssignmentList.jsx
import React from "react";

export default function AssignmentList({ assignments, submitted, onRequestSubmit }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {assignments.map((a) => (
        <article key={a.id} className="p-4 rounded-lg card-glass border border-[rgba(255,255,255,0.03)]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-sm mt-1 text-[color:var(--muted)]">{a.description}</p>
              <a
                href={a.driveLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-xs font-medium underline text-[color:var(--accent-2)]"
              >
                Open Submission Link
              </a>
            </div>

            <div className="flex flex-col items-end gap-2">
              {submitted[a.id] ? (
                <span className="text-sm px-3 py-1 rounded-full bg-green-600/20 text-green-300 font-semibold">
                  ✅ Submitted
                </span>
              ) : (
                <button
                  onClick={() => onRequestSubmit(a.id)}
                  className="px-3 py-1 rounded-md bg-[color:var(--accent)] text-black font-medium"
                >
                  Mark submitted
                </button>
              )}
              <span className="text-[color:var(--muted)] text-xs mt-2">Due in 4 days</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
