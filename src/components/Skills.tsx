"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
  SiGit,
  SiGithub,
  SiElectron,
  SiNestjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiOpenai,
  SiFirebase,
  SiPostman,
  SiJsonwebtokens,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { FaBrain, FaServer, FaMobileAlt, FaPlug, FaStore } from "react-icons/fa";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const usingNow = [
    { name: "HTML5", color: "from-orange-500 to-orange-600", icon: SiHtml5 },
    { name: "CSS3", color: "from-blue-500 to-blue-600", icon: SiCss3 },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-500", icon: SiJavascript },
    { name: "TypeScript", color: "from-blue-700 to-blue-800", icon: SiTypescript },
    { name: "React.js", color: "from-cyan-400 to-cyan-500", icon: SiReact },
    { name: "Next.js", color: "from-gray-900 to-black", icon: SiNextdotjs },
    { name: "Tailwind CSS", color: "from-teal-400 to-teal-500", icon: SiTailwindcss },
    { name: "Bootstrap", color: "from-purple-600 to-purple-700", icon: SiBootstrap },
    { name: "Material UI", color: "from-blue-600 to-blue-700", icon: SiMui },
    { name: "Redux", color: "from-purple-500 to-purple-600", icon: SiRedux },
    { name: "Git", color: "from-red-600 to-red-700", icon: SiGit },
    { name: "GitHub", color: "from-gray-800 to-gray-900", icon: SiGithub },
    { name: "Electron.js", color: "from-indigo-600 to-indigo-700", icon: SiElectron },
    { name: "System Design", color: "from-yellow-600 to-yellow-700", icon: FaServer },
    { name: "Zustand", color: "from-orange-500 to-orange-600", icon: FaStore },
  ];

  const learning = [
    { name: "Node.js", color: "from-green-700 to-green-800", icon: SiNodedotjs },
    { name: "NestJS", color: "from-rose-600 to-rose-700", icon: SiNestjs },
    { name: "Express.js", color: "from-gray-700 to-gray-800", icon: SiExpress },
    { name: "MongoDB", color: "from-green-500 to-green-600", icon: SiMongodb },
    { name: "AI Integrations", color: "from-pink-500 to-pink-600", icon: FaBrain },
  ];

  const otherSkills = [
    { name: "Python", color: "from-yellow-400 to-yellow-500", icon: SiPython },
    { name: "C", color: "from-blue-600 to-blue-700", icon: SiC },
    { name: "C++", color: "from-blue-700 to-blue-800", icon: SiCplusplus },
    { name: "REST APIs", color: "from-blue-500 to-blue-600", icon: FaPlug },
    { name: "Pusher (Realtime)", color: "from-red-500 to-red-600", icon: FaServer },
    { name: "Firebase", color: "from-yellow-500 to-yellow-600", icon: SiFirebase },
    { name: "Postman", color: "from-orange-600 to-orange-700", icon: SiPostman },
    { name: "JWT Auth", color: "from-indigo-500 to-indigo-600", icon: SiJsonwebtokens },
    { name: "Responsive UI/UX", color: "from-teal-600 to-teal-700", icon: FaMobileAlt },
  ];

  const SkillCard = ({
    skill,
    index,
    delay = 0,
  }: {
    skill: { name: string; color: string; icon: any };
    index: number;
    delay?: number;
  }) => {
    const IconComponent = skill.icon;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }
        }
        transition={{ duration: 0.4, delay: delay + index * 0.05 }}
        whileHover={{ y: -8, scale: 1.05 }}
        className="group flex flex-col items-center cursor-pointer"
      >
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:rotate-6`}
        >
          <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
        </div>
        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 text-center font-medium leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {skill.name}
        </span>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#050505] dark:to-[#0a0a0a] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tl from-green-100/30 to-blue-100/30 dark:from-green-900/10 dark:to-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* SKILLS Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-30"></div>
              <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105" suppressHydrationWarning>
                SKILLS
              </button>
            </div>
          </div>
        </motion.div>

        {/* USING NOW */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark-gray dark:text-gray-100 mb-8 sm:mb-10 flex items-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            USING NOW:
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8">
            {usingNow.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} delay={0.3} />
            ))}
          </div>
        </motion.div>

        {/* LEARNING */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark-gray dark:text-gray-100 mb-8 sm:mb-10 flex items-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></span>
            LEARNING:
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8">
            {learning.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} delay={0.5} />
            ))}
          </div>
        </motion.div>

        {/* OTHER SKILLS */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-dark-gray dark:text-gray-100 mb-8 sm:mb-10 flex items-center gap-3">
            <span className="w-12 h-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-full"></span>
            OTHER SKILLS:
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 sm:gap-8">
            {otherSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} delay={0.7} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
