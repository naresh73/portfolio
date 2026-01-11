"use client";

import { ArrowUp, Linkedin, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-dark-gray to-black dark:from-[#050505] dark:to-[#000000] py-12 sm:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Back to Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center text-gray-400 hover:text-white transition-colors mx-auto"
            suppressHydrationWarning
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-gray-700 flex items-center justify-center mb-2 group-hover:border-gray-500 transition-colors">
                <ArrowUp className="w-5 h-5" />
              </div>
            </motion.div>
            <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">
              BACK TO TOP
            </span>
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <motion.a
            href="mailto:nareshsharma0318@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.a>
          <motion.a
            href="https://github.com/naresh73"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700/20 to-gray-800/20 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/naresh-sharma-067501225/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700/20 to-blue-800/20 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-500 text-xs sm:text-sm">
            © {currentYear} Naresh Sharma. All Rights Reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Crafted with passion and modern web technologies
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

