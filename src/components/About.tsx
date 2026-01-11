"use client";

import { DevelopmentIcon, MaintenanceIcon } from "./ions";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Code, Settings } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#050505] dark:to-[#0a0a0a] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tl from-green-100/40 to-blue-100/40 dark:from-green-900/10 dark:to-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ABOUT ME Title */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg shadow-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
                ABOUT ME
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Descriptive Text */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl">
              I'm a passionate{" "}
              <span className="font-semibold text-blue-600">Full Stack Developer</span>{" "}
              with around{" "}
              <span className="font-semibold text-purple-600">3.5 years</span> of
              experience in building scalable, high-performance web applications
              and modern user interfaces. I specialize in{" "}
              <span className="font-semibold">React.js, Next.js, and TypeScript</span> on
              the frontend, crafting responsive dashboards, admin panels, and
              user-friendly web pages with technologies like Tailwind CSS,
              Bootstrap, and Material UI. On the backend, I have a strong
              understanding of Node.js, Express.js, and MongoDB, enabling me to
              design and integrate robust APIs and data-driven solutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl mt-6">
              Recently, I developed an{" "}
              <span className="font-semibold text-blue-600">AI agent web application</span>{" "}
              that converts text into images and video frames, featuring
              real-time streaming using Pusher sockets. I'm also currently
              working on a desktop application using Electron.js, exploring
              cross-platform app development. I enjoy solving complex problems,
              learning new technologies, and building products that create
              real-world impact.
            </p>
          </div>
        </motion.div>

        {/* EXPLORE Button */}
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mb-16 sm:mb-20"
        >
          <motion.button
            onClick={scrollToPortfolio}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-base sm:text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            suppressHydrationWarning
          >
            <span>EXPLORE PORTFOLIO</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Services Section - Two Columns */}
        <div className="mt-24">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* DEVELOPMENT */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group relative"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Code className="w-10 h-10 text-white" />
              </div>
              <div className="relative bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 pt-16">
                <h3 className="text-xl sm:text-2xl font-bold text-dark-gray dark:text-gray-100 mb-4 uppercase tracking-wider">
                  DEVELOPMENT
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                  I build scalable and high-performance applications using modern
                  web technologies. From frontend interfaces to backend APIs, I
                  turn ideas into reliable solutions. Clean architecture and best
                  practices guide every line of code I write.
                </p>
              </div>
            </motion.div>

            {/* MAINTENANCE */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group relative"
            >
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <div className="relative bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 pt-16">
                <h3 className="text-xl sm:text-2xl font-bold text-dark-gray dark:text-gray-100 mb-4 uppercase tracking-wider">
                  MAINTENANCE
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                  I ensure applications stay fast, secure, and up to date over
                  time. From bug fixes to performance tuning, I keep systems
                  running smoothly. Continuous improvement is key to delivering
                  long-term value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
