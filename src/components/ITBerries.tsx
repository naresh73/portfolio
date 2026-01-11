"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Sparkles } from "lucide-react";

export default function ITBerries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-br from-dark-gray via-gray-900 to-black dark:from-[#050505] dark:via-[#000000] dark:to-[#000000] py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <Code2 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 uppercase tracking-tight">
              IT BERRIES
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg md:text-xl">
              Welcome to my digital space, where ideas come to life through
              modern web technologies and elegant design. I build seamless
              experiences from concept to deployment with clean code and
              user-first thinking.
            </p>
            <div className="flex items-center gap-2 text-blue-400">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Building the future, one line of code at a time</span>
            </div>
          </motion.div>

          {/* Right Side - Animated IT Logo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <div className="relative">
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                IT
              </motion.div>
              <div className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl font-bold text-gray-800/30 dark:text-gray-900/50 blur-sm -z-10">
                IT
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
