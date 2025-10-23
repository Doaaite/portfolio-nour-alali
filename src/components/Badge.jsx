import React from "react";
export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full pill px-3 py-1 text-white text-xs font-semibold shadow">
      {children}
    </span>
  );
}
