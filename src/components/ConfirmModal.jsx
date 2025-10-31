// src/components/ConfirmModal.jsx
import React from "react";

export default function ConfirmModal({ open, title, description, onCancel, onConfirm }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />
      <div className="relative w-full max-w-md mx-4 card-glass p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm mt-2 text-[color:var(--muted)]">{description}</p>

        <div className="mt-4 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-transparent border border-[rgba(255,255,255,0.06)] text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-[color:var(--accent)] text-black text-sm font-semibold"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
