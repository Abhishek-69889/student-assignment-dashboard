// src/components/AdminAssignmentList.jsx
import React from "react";

export default function AdminAssignmentList({ assignments, students }) {
  return (
    <div className="grid gap-4">
      {assignments.map((a) => (
        <div key={a.id} className="p-4 rounded-lg card-glass border border-[rgba(255,255,255,0.03)]">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{a.title}</h3>
              <p className="text-sm text-[color:var(--muted)] mt-1">{a.description}</p>
            </div>
            <div className="text-sm text-[color:var(--muted)]">Submissions: {students.filter(s => s.submitted).length}/{students.length}</div>
          </div>

          <div className="mt-4 grid gap-3">
            {students.map((s) => (
              <div key={s.id} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="text-xs text-[color:var(--muted)]">Student ID: {s.id}</p>
                </div>
                <div className="w-48">
                  <div className="w-full bg-white/5 rounded h-3 overflow-hidden">
                    <div
                      className={`h-3 ${s.submitted ? "bg-green-500" : "bg-red-400"}`}
                      style={{ width: s.submitted ? "100%" : "30%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
