import React from "react";
import SectionHeader from "./SectionHeader";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Delivered", value: "30+" },
  { label: "Happy Clients", value: "20+" },
  { label: "Awards", value: "3" },
];

export default function About() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="About"
            title="From idea to pixel‑perfect"
            subtitle="I partner with startups and teams to ship polished, high‑performing interfaces."
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-6 text-center">
                <div className="text-3xl font-extrabold text-primary">
                  {s.value}
                </div>
                <div className="text-sm text-ink/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="card p-6">
            <div className="aspect-[4/3] rounded-xl bg-indigo-50" />
            <p className="mt-4 text-ink/70 text-sm leading-relaxed">
              I’m Nour, a frontend engineer focused on React ecosystems. I love
              turning complex flows into simple, joyful experiences and building
              robust component systems.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              {["React", "Next.js", "Tailwind", "Framer Motion", "Vite"].map(
                (s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-indigo-100 text-ink/80 text-xs"
                  >
                    {s}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
