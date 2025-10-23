import React from "react";
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "text-center mx-auto" : ""}`}
    >
      {eyebrow && (
        <div className="mb-3">
          <span className="text-xs tracking-wider uppercase text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-ink/70">{subtitle}</p>}
    </div>
  );
}
