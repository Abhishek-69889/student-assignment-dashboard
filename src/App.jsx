// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ConfirmModal from "./components/ConfirmModal";
import { assignments, students as initStudents } from "./data";

export default function App() {
  const [role, setRole] = useState("student");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [submitted, setSubmitted] = useState({});
  const [modal, setModal] = useState({ open: false, id: null, action: null });

  const toggleSidebar = () => setSidebarOpen((p) => !p);

  const openConfirm = ({ id, action }) => setModal({ open: true, id, action });
  const closeConfirm = () => setModal({ open: false, id: null, action: null });
  const handleConfirm = () => {
    if (modal.action === "submit") {
      setSubmitted((p) => ({ ...p, [modal.id]: true }));
    } else if (modal.action === "bulk-reset") {
      setSubmitted({});
    }
    closeConfirm();
  };

  return (
    <div className="min-h-screen flex bg-[var(--bg)] text-[var(--text)]">
      <Sidebar
        role={role}
        setRole={setRole}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <div className="flex-1 flex flex-col">
        <Navbar onMenuClick={toggleSidebar} role={role} />

        <main className="p-6 md:p-8 transition-all">
          <div className="max-w-7xl mx-auto">
            {role === "student" ? (
              <StudentDashboard
                assignments={assignments}
                submitted={submitted}
                onRequestSubmit={(id) => openConfirm({ id, action: "submit" })}
              />
            ) : (
              <AdminDashboard
                assignments={assignments}
                students={initStudents}
                onResetAll={() => openConfirm({ action: "bulk-reset" })}
              />
            )}
          </div>
        </main>
      </div>

      <ConfirmModal
        open={modal.open}
        title={
          modal.action === "submit"
            ? "Confirm submission"
            : "Reset all submissions"
        }
        description={
          modal.action === "submit"
            ? "Are you sure you want to mark this assignment as submitted?"
            : "This will reset all student submission statuses. Continue?"
        }
        onCancel={closeConfirm}
        onConfirm={handleConfirm}
      />
    </div>
  );
}
