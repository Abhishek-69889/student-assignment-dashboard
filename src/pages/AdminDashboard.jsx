// src/pages/AdminDashboard.jsx
import React from "react";
import AdminAssignmentList from "../components/AdminAssignmentList";

export default function AdminDashboard({ assignments, students, onResetAll }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Professor Dashboard</h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">Overview of student progress</p>
        </div>
        <div>
          <button
            onClick={onResetAll}
            className="px-3 py-1 rounded-md bg-[color:var(--accent-2)]/10 border border-[rgba(255,255,255,0.03)] text-sm"
          >
            Reset all submissions
          </button>
        </div>
      </div>

      <AdminAssignmentList assignments={assignments} students={students} />
    </div>
  );
}
