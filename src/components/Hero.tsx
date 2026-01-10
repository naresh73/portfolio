"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import BannerImg from "../assets/images/banner.avif";
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row pt-16 md:pt-20"
    >
      {/* Left Panel - Light Gray */}
      <div className="w-full md:w-1/2 bg-light-gray flex flex-col justify-center px-6 sm:px-8 md:pl-16 md:pr-8 py-12 md:py-0 min-h-[60vh] md:min-h-screen">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-dark-gray mb-3 md:mb-4">
          Hi, I am
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-dark-gray mb-4 md:mb-6 leading-tight">
          Naresh Sharma
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-dark-gray/70 mb-8 md:mb-12">
          Full-Stack Developer
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 md:gap-4">
          <a
            href="mailto:nareshsharma0318@gmail.com"
            className="w-10 h-10 md:w-12 md:h-12 bg-dark-gray rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
          <a
            href="https://github.com/naresh73"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-dark-gray rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/naresh-sharma-067501225/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 bg-dark-gray rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
        </div>
      </div>

      {/* Right Panel - Black with Photo */}
      <div className="w-full md:w-1/2 bg-black hidden sm:flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] md:min-h-screen">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-lg overflow-hidden mx-4">
          <Image
            src={BannerImg.src || BannerImg}
            alt="Naresh Sharma - Full-Stack Developer"
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
            priority
          />
        </div>
        {/* <p className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-white text-[10px] sm:text-xs px-2 sm:px-4 max-w-[200px] sm:max-w-none">
          this is not my photo, but I dearly hope to get one just like this
        </p> */}
      </div>
    </section>
  );
}
