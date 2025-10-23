import React from "react";
export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-black/5">
      <p className="text-sm text-ink/60">
        © {new Date().getFullYear()} Nour Alali. All rights reserved.
      </p>
    </footer>
  );
}
