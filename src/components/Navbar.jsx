// src/components/Navbar.jsx
import React from "react";
import { Menu } from "lucide-react"; // optional icon (if not installed, replace with emoji or svg)

export default function Navbar({ onMenuClick, role }) {
  const userInfo =
    role === "student"
      ? { name: "Bob Student", image: "https://i.pravatar.cc/150?img=32" }
      : { name: "Clara Prof", image: "https://i.pravatar.cc/150?img=45" };

  return (
    <nav className="w-full flex items-center justify-between px-4 md:px-8 py-3 card-glass shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-md bg-[color:var(--glass)] border border-[rgba(255,255,255,0.1)]"
        >
          <Menu size={20} />
        </button>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#5b21b6] to-[#06b6d4] text-white font-semibold shadow">
          AD
        </div>
        <div>
          <h1 className="text-lg font-semibold">Assignment Dashboard</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end text-sm">
          <p className="font-semibold">{userInfo.name}</p>
          <p className="text-[color:var(--muted)] text-xs capitalize">{role}</p>
        </div>
        <img
          src={userInfo.image}
          alt="Profile"
          className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.1)]"
        />
      </div>
    </nav>
  );
}
