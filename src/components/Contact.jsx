import { useState } from "react";
import SectionHeader from "./SectionHeader";
import emailjs from "@emailjs/browser";
import SocialMedia from "./SocialMedia";
import cvFile from "../assets/CV.pdf";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;

    emailjs
      .sendForm(
        "service_o4bpw39", // service id
        "template_dikhhvc", // template id
        form,
        "4ozM52lx2zxF2WZMa" // public key
      )
      .then(
        () => {
          setStatus("sent");
          form.reset();
        },
        (error) => {
          console.error(error);
          setStatus("idle");
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="section bg-gradient-to-t from-white to-indigo-50/40"
    >
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="Let’s build something great"
            subtitle="Tell me about your project and timeline. I’ll get back within 24 hours."
          />
          <div className="mt-6 text-sm text-ink/70">
            Email:{" "}
            <a className="underline" href="mailto:nouralali562@gmail.com">
              nouralali562@gmail.com
            </a>
          </div>
          <a
                        href={cvFile}
                        download="Nour-Alali-CV.pdf"
                        className="mt-6 px-6 py-3 rounded-full pill text-white font-semibold shadow bg-indigo-600 hover:bg-indigo-700 transition"
                      >
                        Download my CV
                      </a>
          <SocialMedia />
        </div>

        <form onSubmit={onSubmit} className="card p-6 grid gap-4">
          <input
            name="name"
            required
            placeholder="Full name"
            className="px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email address"
            className="px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="px-4 py-3 rounded-xl border border-black/10 focus:outline-none focus:ring-2 focus:ring-primary/40"
          ></textarea>
          <button
            disabled={status !== "idle"}
            className="px-5 py-3 rounded-xl pill text-white font-semibold disabled:opacity-60"
          >
            {status === "idle"
              ? "Send Message"
              : status === "sending"
              ? "Sending…"
              : "Sent ✓"}
          </button>
        </form>
      </div>
    </section>
  );
}
