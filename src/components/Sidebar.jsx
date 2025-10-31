// src/components/Sidebar.jsx
import React from "react";
import { X } from "lucide-react"; // optional close icon

export default function Sidebar({ role, setRole, open, setOpen }) {
  return (
    <>
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out bg-[color:var(--surface)] card-glass p-5 flex flex-col gap-6`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Course: Web Dev</h2>
          <button
            className="md:hidden p-1 rounded bg-[color:var(--glass)]"
            onClick={() => setOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-4">
          <button
            onClick={() => {
              setRole("student");
              setOpen(false);
            }}
            className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
              role === "student"
                ? "bg-[color:var(--accent)]/10 border-l-4 border-[color:var(--accent)]"
                : "hover:bg-white/5"
            }`}
          >
            Student Dashboard
          </button>

          <button
            onClick={() => {
              setRole("admin");
              setOpen(false);
            }}
            className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
              role === "admin"
                ? "bg-[color:var(--accent-2)]/10 border-l-4 border-[color:var(--accent-2)]"
                : "hover:bg-white/5"
            }`}
          >
            Professor Dashboard
          </button>
        </nav>

        
      </aside>
    </>
  );
}
