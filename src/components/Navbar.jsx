import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import nour from "../assets/nour.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#my-projects", label: "My Projects" },
  // { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 pl-0 pr-4 md:px-4 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-black/5 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a
          href="#home"
          className="flex items-center gap-2 font-extrabold text-lg"
        >
          <img className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[50%]" src={nour} />
          <span>Nour Alali</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-[#A66CFF] hover:font-semibold transition-all duration-300 delay-100 hover:scale-105 inline-block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-full pill text-white text-sm font-semibold shadow"
          >
            Hire Me
          </a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 shadow"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-black/5 bg-white"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  // onClick={() => setOpen(false)}
                  className="py-2 text-ink/80 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-2 rounded-full pill text-white text-sm font-semibold w-max"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
