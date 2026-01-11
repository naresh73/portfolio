"use client";

import { Mail, Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BannerImg from "../assets/images/banner.avif";

// Deterministic particle positions (same on server and client)
const PARTICLE_POSITIONS = Array.from({ length: 20 }, (_, i) => ({
  x: ((i * 137.5) % 100) * 19.2, // Deterministic x position
  y: ((i * 197.3) % 100) * 10.8, // Deterministic y position
  duration: 2 + ((i * 47) % 3), // Deterministic duration
  delay: (i * 0.1) % 1, // Deterministic delay
}));

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col md:flex-row pt-16 md:pt-20 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#0a0a0a] dark:via-[#050505] dark:to-[#0a0a0a]"></div>
      {isMounted && (
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        ></div>
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {PARTICLE_POSITIONS.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 dark:bg-blue-500 rounded-full"
            initial={{
              x: `${(particle.x / 1920) * 100}%`,
              y: `${(particle.y / 1080) * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              y: [
                `${(particle.y / 1080) * 100}%`,
                `${((particle.y + 200) / 1080) * 100}%`,
                `${(particle.y / 1080) * 100}%`,
              ],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left Panel - Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:pl-16 md:pr-8 py-12 md:py-0 min-h-[60vh] md:min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-800/50"
        >
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-xs md:text-sm font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider">
            Web Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-dark-gray dark:text-gray-100 mb-3 md:mb-4"
        >
          Hi, I am
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight animate-gradient"
        >
          Naresh Sharma
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-xl"
        >
          Crafting exceptional digital experiences with modern technologies and
          creative solutions.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-3 md:gap-4 mb-8"
        >
          <motion.a
            href="mailto:nareshsharma0318@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.a>
          <motion.a
            href="https://github.com/naresh73"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-lg shadow-gray-900/25 hover:shadow-xl hover:shadow-gray-900/40 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/naresh-sharma-067501225/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-700/25 hover:shadow-xl hover:shadow-blue-700/40 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ y: 5 }}
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Right Panel - Image with Modern Design */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative w-full md:w-1/2 hidden sm:flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-screen"
      >
        {/* Decorative gradient circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 dark:from-purple-900/10 dark:to-pink-900/10 rounded-full blur-2xl"></div>
        </div>

        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border-4 border-white/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10"></div>
          <Image
            src={BannerImg.src || BannerImg}
            alt="Naresh Sharma - Web Developer"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
            priority
          />
        </motion.div>

        {/* Floating badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-20 right-8 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-xl border border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
              Available for projects
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
