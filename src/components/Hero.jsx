import { motion } from "framer-motion";
import Badge from "./Badge";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import circle3 from "../assets/circle3.png";
import arrow from "../assets/arrow.png";
import hero from "../assets/hero.png";
import SocialMedia from "./SocialMedia";
import cvFile from "../assets/CV.pdf";

export default function Hero() {
  return (
    <section
      id="home"
      className="section pt-36 bg-gradient-to-b from-white via-white to-indigo-50/40 relative overflow-hidden h-auto"
    >
      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30 pill"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-20 pill"></div>

      <div className="container grid md:grid-cols-2 gap-10 items-center relative">
        <img src={circle1} className="absolute top-10 xl:left-10 floatOne" />
        <img src={circle2} className="absolute top-10 left-0 floatTwo" />
        <img
          src={circle3}
          className="absolute top-0 xl:top-20 xl:left-[-50px] floatRotate"
        />
        <img
          src={arrow}
          className="absolute bottom-[-50px] md:top-20 right-[50px] lg:right-[5px] xl:right-[-50px] arrowSwing"
        />
        <div>
          <Badge>Available for freelance</Badge>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Creative Frontend Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-5 text-ink/70 text-lg"
          >
            I craft fast, beautiful interfaces with React js, Next js, Vite,
            Tailwind and delightful motion.
          </motion.p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={cvFile}
              download="Nour-Alali-CV.pdf"
              className="px-6 py-3 rounded-full pill text-white font-semibold shadow bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Download my CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-ink text-[#6C5CE7] font-semibold shadow hover:bg-ink/90"
            >
              Let’s Talk
            </a>
          </div>
          <SocialMedia />
        </div>
        <img src={hero} className="h-[350px] md:h-[550px]" />
      </div>
    </section>
  );
}
