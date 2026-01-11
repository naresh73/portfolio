"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ZuriImg from "../assets/images/zuri.png";
import PrepMyVehicleImg from "../assets/images/prepmyvehicle.webp";
import MusePOSImg from "../assets/images/musepos.png";
import QuartusTechImg from "../assets/images/quartustech.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: any;
  techStack?: string[];
  category?: string;
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Zuri",
      category: "AI Creative Platform",
      description:
        "A cutting-edge AI-powered creative platform designed for modern paid-social marketing teams, enabling them to produce images, edits, and social-ready videos 10× faster. Built the entire frontend from scratch using React.js, Next.js, TypeScript, and Tailwind CSS. The platform streamlines the creative pipeline from brief to export-ready assets in one unified chat interface. Key features include brand-lock functionality that auto-loads color palettes, fonts, and aspect ratios from saved presets; inline editing capabilities eliminating the need for Photoshop; AI-powered video ideation with a built-in timeline editor; and CapCut-style tools including trims, captions, speed-ramps, and LUTs. The application exports to multiple formats (9:16, 1:1, 16:9) in a single render pass. Implemented real-time progress tracking using Pusher & Pusher JS for seamless video generation updates. Utilized Zustand for efficient state management and TanStack React Query for optimized data fetching and caching. Additionally, developed a comprehensive admin panel featuring user information management, credit allocation system, and plan-based access control, allowing administrators to monitor user activity, manage subscription tiers, and track usage analytics for the 10,000+ paid-social ads teams using the platform.",
      image: ZuriImg,
      techStack: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "Pusher",
        "TanStack Query",
      ],
    },
    {
      id: 2,
      title: "Prep My Vehicle",
      category: "Web Application",
      description:
        "Project description will be provided here. This is a placeholder for the Prep My Vehicle project overview.",
      image: PrepMyVehicleImg,
    },
    {
      id: 3,
      title: "Muse POS",
      category: "Point of Sale System",
      description:
        "Project description will be provided here. This is a placeholder for the Muse POS project overview.",
      image: MusePOSImg,
    },
    {
      id: 4,
      title: "Quartus Tech",
      category: "Technology Solutions",
      description:
        "Project description will be provided here. This is a placeholder for the Quartus Tech project overview.",
      image: QuartusTechImg,
    },
  ];

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0a0a0a] dark:via-[#050505] dark:to-[#0a0a0a] py-20 md:py-32 overflow-hidden min-h-screen"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-100/30 to-blue-100/30 dark:from-green-900/10 dark:to-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wider">
              Featured Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          ></motion.div>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Showcasing innovative solutions and cutting-edge applications
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 1, y: 0 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center gap-8 lg:gap-12`}
                >
                  {/* Image Section with Modern Card Design */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:group-hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.1)]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
                      <Image
                        src={project.image.src || project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          hoveredProject === project.id
                            ? "scale-110"
                            : "scale-100"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* Overlay gradient on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-dark-gray/60 via-transparent to-transparent transition-opacity duration-300 ${
                          hoveredProject === project.id
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      ></div>
                      {/* Hover indicator */}
                      <div
                        className={`absolute bottom-6 right-6 z-20 transition-all duration-300 ${
                          hoveredProject === project.id
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                          <ExternalLink className="w-5 h-5 text-dark-gray" />
                        </div>
                      </div>
                    </div>
                    {/* Decorative element */}
                    <div
                      className={`absolute -z-10 w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl transition-opacity duration-500 ${
                        hoveredProject === project.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    ></div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`w-full lg:w-1/2 flex flex-col justify-center ${
                      isEven
                        ? "lg:items-end lg:text-right"
                        : "lg:items-start lg:text-left"
                    }`}
                  >
                    <div className="max-w-2xl">
                      {/* Category Badge */}
                      {project.category && (
                        <div
                          className={`inline-flex items-center gap-2 mb-4 ${
                            isEven ? "lg:ml-auto" : ""
                          }`}
                        >
                          <span className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wider">
                            {project.category}
                          </span>
                          <div className="w-8 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark-gray dark:text-gray-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      {project.techStack && (
                        <div
                          className={`flex flex-wrap gap-2 mb-6 ${
                            isEven ? "lg:justify-end" : "lg:justify-start"
                          }`}
                        >
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA Button */}
                      <button
                        className={`group/btn inline-flex items-center gap-2 px-6 py-3 bg-dark-gray dark:bg-gray-800 text-white dark:text-gray-100 rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-500/10 hover:-translate-y-0.5 ${
                          isEven ? "lg:ml-auto" : ""
                        }`}
                        suppressHydrationWarning
                      >
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modern Footer */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 md:mt-32 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 font-medium">
              More projects coming soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
