import { motion } from "framer-motion";
import devIllustration from "../assets/h2_about_img.png";
import blure from "../assets/h2_about_shape01.png";
import circle from "../assets/h2_about_shape03.png";
import { useEffect, useState } from "react";

export default function AboutMe() {
  const [path, setPath] = useState({ x: [0], y: [0] });

  useEffect(() => {
    const randomPath = {
      x: [
        0,
        Math.random() * 400 - 200,
        Math.random() * 400 - 200,
        Math.random() * 400 - 200,
        0,
      ],
      y: [
        0,
        Math.random() * 300 - 150,
        Math.random() * 300 - 150,
        Math.random() * 300 - 150,
        0,
      ],
    };
    setPath(randomPath);
  }, []);
  return (
    <section className="py-20 bg-white " id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        <motion.img
          src={circle}
          alt="Floating Circle"
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-80"
          animate={path}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex-1 flex justify-center relative"
          transition={{ duration: 0.6 }}
        >
          <img src={blure} className="absolute z-5 top-8 " />
          <img
            src={devIllustration}
            alt="Developer Illustration"
            className="relative z-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left"
          
        >
          <h2 className="text-xl md:text-2xl  mb-4 text-[#A66CFF]">
            Frontend Software Engineer
          </h2>
          <h3 className=" text-3xl md:text-4xl font-bold text-gray-700 mb-6">
            I Build Modern & Scalable Web Apps
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Hello there! I'm Nour, a Software Engineer specialized in Frontend
            Development with expertise in React.js and Next.js. I graduated from
            Damascus University – Faculty of Information technology Engineering,
            and I’m passionate about crafting modern, elegant, and user-friendly
            web applications. With hands-on experience in building scalable
            projects, I’ve gained the skills to transform ideas into functional
            digital products that truly stand out. I enjoy every stage of
            development — from brainstorming and collaboration to writing clean,
            optimized, and maintainable code.
          </p>
          <div className="text-lg font-medium flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.41 10.5904L20.36 8.54041V5.63041C20.36 5.09998 20.1493 4.59127 19.7742 4.2162C19.3991 3.84113 18.8904 3.63041 18.36 3.63041H15.46L13.41 1.63041C13.0353 1.25791 12.5284 1.04883 12 1.04883C11.4716 1.04883 10.9647 1.25791 10.59 1.63041L8.54 3.64041H5.63C5.09957 3.64041 4.59086 3.85113 4.21579 4.2262C3.84071 4.60127 3.63 5.10998 3.63 5.64041V8.54041L1.63 10.5904C1.43677 10.7719 1.28157 10.9901 1.17342 11.2322C1.06526 11.4742 1.00631 11.7354 1 12.0004C0.999579 12.5286 1.20808 13.0354 1.58 13.4104L3.64 15.4604V18.3704C3.64 18.9008 3.85071 19.4096 4.22579 19.7846C4.60086 20.1597 5.10957 20.3704 5.64 20.3704H8.54L10.59 22.4204C10.965 22.7923 11.4719 23.0008 12 23.0004C12.5281 23.0008 13.035 22.7923 13.41 22.4204L15.46 20.3604H18.37C18.9004 20.3604 19.4091 20.1497 19.7842 19.7746C20.1593 19.3996 20.37 18.8908 20.37 18.3604V15.4604L22.42 13.4104C22.7925 13.0357 23.0016 12.5288 23.0016 12.0004C23.0016 11.472 22.7925 10.9651 22.42 10.5904H22.41ZM18.36 14.6404V18.3604H14.64L12 21.0004L9.36 18.3604H5.64V14.6404L3 12.0004L5.64 9.36041V5.64041H9.36L12 3.00041L14.64 5.64041H18.36V9.36041L21 12.0004L18.36 14.6404Z"
                fill="#A66CFF"
              />
              <path
                d="M11 12.7304L8.71004 10.4404L7.29004 11.8504L11 15.5604L16.71 9.85043L15.29 8.44043L11 12.7304Z"
                fill="#A66CFF"
              />
            </svg>
            Available for Work & Collaboration
          </div>
        </motion.div>
      </div>
    </section>
  );
}
