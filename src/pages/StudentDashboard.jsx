// src/pages/StudentDashboard.jsx
import React from "react";
import AssignmentList from "../components/AssignmentList";

export default function StudentDashboard({ assignments, submitted, onRequestSubmit }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">My Assignments</h2>
          <p className="text-sm text-[color:var(--muted)] mt-1">Track and submit your assignments</p>
        </div>
        <div className="text-sm text-[color:var(--muted)]">Profile: Student</div>
      </div>

      <AssignmentList assignments={assignments} submitted={submitted} onRequestSubmit={onRequestSubmit} />
    </div>
  );
}
