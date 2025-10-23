const testimonials = [
  {
    id: 1,
    name: "Alaa K.",
    role: "PM, Fintech",
    quote:
      "Nour elevated our dashboard UX beyond expectations. Velocity improved and users loved it.",
  },
  {
    id: 2,
    name: "Marwan S.",
    role: "Founder, Travel",
    quote:
      "Clean code, great communication, and flawless delivery. Highly recommended.",
  },
  {
    id: 3,
    name: "Reem H.",
    role: "Design Lead",
    quote:
      "Pixel‑perfect implementation and performance‑minded. Would collaborate again!",
  },
];

// src/components/Testimonials.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Social Proof"
          title="What clients say"
          subtitle="A few kind words from partners and teammates."
        />
        <div className="mt-10 relative max-w-3xl mx-auto">
          <div className="card p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg leading-relaxed">
                  “{testimonials[index].quote}”
                </p>
                <div className="mt-5 text-sm text-ink/70">
                  {testimonials[index].name} — {testimonials[index].role}
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex justify-between">
              <button
                onClick={prev}
                className="px-4 py-2 rounded-xl bg-white border border-black/5 hover:bg-ink hover:text-white transition"
              >
                Prev
              </button>
              <button
                onClick={next}
                className="px-4 py-2 rounded-xl pill text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
