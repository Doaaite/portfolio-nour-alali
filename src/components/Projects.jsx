import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import circle from "../assets/h2_banner_shape04.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import arrow from "../assets/arrow.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";

export default function Projects() {
  const projects = [
    {
      title: "Bbye Travel Dashboard",
      description:
        "A complete admin dashboard system built for Bbye Travel to manage bookings, land trips, visa services, and overall content. The platform allows administrators to efficiently organize reservations, update trip details, and handle customer requests with a clean and user-friendly interface. The system was designed with scalability in mind, ensuring smooth performance and reliable data management. It also supports bilingual content management (Arabic & English) for both static and dynamic data, making it adaptable for diverse users.",
      company: "Worked at Freelance",
      image: project3,
      tech: [
        "React.js",
        "Radix ui",
        "React Query",
        "TailwindCSS",
        "Axios (OOP)",
        "Firebase",
        "Vite",
        "Framer motion",
        "i18next",
      ],
      link: "https://control.alberam.sy/",
    },

    {
      title: "Bbye Travel",
      description:
        "A modern landing page designed for a travel agency to showcase its core services, including flight tickets, road trips, and visa applications.The page was built with a responsive layout and a clean UI to make the services clear and attractive to potential clients. It also includes multilingual support (Arabic & English) to ensure accessibility for a wider audience.",
      company: "Worked at Freelance",
      image: project1,
      tech: ["React js", "Radix ui", "TailwindCSS", "Framer motion", "i18next"],
      link: "https://bbyetravel.com/",
    },

    {
      title: "Mwedk Platform, Between you and Beauty",
      description:
        "The leading Saudi platform that connects clients with the best beauty salons and spa centers across the Kingdom. The system provides a seamless booking experience for men and women, offering tailored services with advanced features like appointment scheduling, service management, and secure online payments. Designed with scalability and performance in mind, it delivers a smooth and user-friendly experience.",
      company: "Worked at Majarat Albanfsaj",
      image: project4,
      tech: [
        "Next.js",
        "TailwindCSS",
        "Redux",
        "Axios",
        "Framer motion",
        "i18next",
      ],
      link: "https://mdk.majara-dev.com/",
    },
    {
      title: "Community Management Platform",
      description: `
    <div class="space-y-3">
      <p>A comprehensive platform for collaboration and group communication, fully developed by me. It includes:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>File Management:</strong> Personal storage and shared group files.</li>
        <li><strong>Community:</strong> Posts, interactions, and discussions.</li>
        <li><strong>Calendar & Events:</strong> Create, schedule, and manage events with ease.</li>
        <li><strong>User & Groups Management:</strong> Full control over users, permissions, and memberships.</li>
      </ul>
      <p>Built with scalability, usability, and real-time collaboration in mind.</p>
    </div>
  `,
      company: "Worked at Ugrait Tech",
      image: project6,
      tech: [
        "React.js",
        "Radix ui",
        "TailwindCSS",
        "Redux",
        "React Query",
        "Axios (oop)",
        "recharts",
        "i18next",
      ],
    },
    {
      title: "Guidance Educational Platform",
      description: `
    <div class="space-y-3">
      <p>An online educational system offering interactive courses and assessments. The platform provides:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Courses:</strong> Access to structured online learning materials.</li>
        <li><strong>Exams:</strong> Integrated testing system to evaluate student progress.</li>
        <li><strong>Certificates:</strong> Dynamic certificate generation for students upon completion, built using <em>React Konva</em> for custom design and export.</li>
      </ul>
      <p>The system ensures a smooth and engaging learning experience with a focus on usability and performance.</p>
    </div>
  `,
      company: "Freelance Project",
      image: project8,
      tech: [
        "React.js",
        "Radix ui",
        "TailwindCSS",
        "React Konva",
        "Redux",
        "React Query",
        "Axios (oop)",
        "recharts",
      ],
    },
    {
      title: "Nurvu Boost (ERP System)",
      description: `
    <div class="space-y-3">
      <p>An advanced ERP system developed to streamline company operations. My work focused on building key modules:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Employees:</strong> Manage employee data, roles, and permissions.</li>
        <li><strong>Requests:</strong> Handle requests with dynamic approval workflows.</li>
        <li><strong>Charts:</strong> Interactive dashboards for key performance metrics.</li>
        <li><strong>Delivery:</strong> Track and organize deliveries with real-time updates.</li>
      </ul>
      <p>Designed with scalability, modularity, and performance in mind.</p>
    </div>
  `,
      company: "Worked at BIS Technology",
      image: project5,
      tech: ["React.js", "Bootstrap", "Redux", "Axios", "recharts"],
    },
    {
      title: "Miamed System",
      description: `
    <div class="space-y-3">
      <p>A web-based system designed to track and manage the activities of medical representatives. It provides:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700">
        <li><strong>Task Management:</strong> Assign and track tasks for each medical representative, linked to specific work plans and dates.</li>
        <li><strong>Product Management:</strong> Organize and monitor medical products efficiently.</li>
        <li><strong>Vacations:</strong> Manage medical representatives' leave and vacation requests.</li>
        <li><strong>General Matters:</strong> Handle additional administrative and organizational needs.</li>
      </ul>
      <p>The system ensures better organization, accountability, and efficiency for medical teams.</p>
    </div>
  `,
      company: "Worked at Peak Link",
      image: project7,
      tech: [
        "React.js",
        "Bootstrap",
        "Redux",
        "Axios",
        "Firebase",
        "React beautiful-dnd",
      ],
    },
    {
      title: "Educational & Consulting Platform",
      description:
        "A professional online platform developed for Dr. Mohammed Al-Khaldi, offering specialized courses and consultation services. The platform provides users with access to various educational programs, secure electronic payment integration, and a smooth user experience. I contributed to the project during my work at Majarat Albanfsaj, specifically in the front-end design and development using HTML, CSS, and JavaScript. The system was designed to meet the needs of clients in Saudi Arabia with scalability, reliability, and performance in mind.",
      company: "Worked at Majarat Albanfsaj",
      image: project2,
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"],
      link: "https://drrmohh.com/",
    },
  ];
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
    <section className="py-12 bg-gray-50 relative" id="my-projects">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <img src={arrow} className="absolute arrowSwing z-50" />

        <div className="absolute bottom-2 left-1/4 md:top-1/2 md:bottom-auto lg:left-0 xl:left-[-30px] z-10">
          <button className="custom-prev bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition">
            <ArrowLeft size={20} />
          </button>
        </div>

        <div className="absolute bottom-2 right-1/4 md:top-1/2 md:bottom-auto lg:right-0 xl:right-[-40px] z-10">
          <button className="custom-next bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition">
            <ArrowRight size={20} />
          </button>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2 gap-10 items-center py-10 px-4 relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div
                    className="text-gray-600 mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                  <p className="text-gray-800 font-medium">{project.company}</p>
                  <motion.img
                    src={circle}
                    alt="Floating Circle"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"
                    animate={path}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="shadow-xl rounded-xl overflow-hidden bg-white p-4"
                >
                  <div className="bg-gray-50 flex flex-col justify-center items-center p-6 rounded-xl mb-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl w-full max-w-[500px] object-cover border"
                    />
                    {project?.link && (
                      <a
                        href={project?.link ? project?.link : "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 px-6 py-2 rounded-full pill text-white font-medium  hover:scale-105 transition-transform duration-300"
                      >
                        Visit Site
                      </a>
                    )}
                  </div>

                  <div className="bg-white p-4 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-gray-100 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
