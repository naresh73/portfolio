"use client";

import { DevelopmentIcon, MaintenanceIcon } from "./ions";

export default function About() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ABOUT ME Title in Border Box */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="border-2 border-black px-6 sm:px-8 py-2 sm:py-3 inline-block">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase">
              ABOUT ME
            </h2>
          </div>
        </div>

        {/* Descriptive Text */}
        <div className="mb-8 sm:mb-12 text-center">
          <p className="text-dark-gray leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
            I’m a passionate Full Stack Developer with around 3.5 years of
            experience in building scalable, high-performance web applications
            and modern user interfaces. I specialize in React.js, Next.js, and
            TypeScript on the frontend, crafting responsive dashboards, admin
            panels, and user-friendly web pages with technologies like Tailwind
            CSS, Bootstrap, and Material UI. On the backend, I have a strong
            understanding of Node.js, Express.js, and MongoDB, enabling me to
            design and integrate robust APIs and data-driven solutions.
            Recently, I developed an AI agent web application that converts text
            into images and video frames, featuring real-time streaming using
            Pusher sockets. I’m also currently working on a desktop application
            using Electron.js, exploring cross-platform app development. I enjoy
            solving complex problems, learning new technologies, and building
            products that create real-world impact.
          </p>
        </div>

        {/* EXPLORE Button */}
        <div className="flex justify-center mt-24 mb-8 sm:mb-12">
          <button
            onClick={scrollToPortfolio}
            className="text-black text-base sm:text-lg font-medium hover:opacity-80 transition-opacity"
          >
            | EXPLORE |
          </button>
        </div>

        {/* ---WWW--- Separator */}
        {/* <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="flex-1 h-px bg-dark-gray"></div>
          <span className="px-2 sm:px-4 text-dark-gray text-xs sm:text-sm">
            ---WWW---
          </span>
          <div className="flex-1 h-px bg-dark-gray"></div>
        </div> */}

        {/* Services Section - Two Columns */}
        <div className="mt-24">
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* DEVELOPMENT */}
            <div className="text-left relative">
              <div className="absolute -top-6 -left-12">
                <DevelopmentIcon className="w-20 h-20" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-gray mb-3 sm:mb-4 uppercase tracking-[0.25rem]">
                DEVELOPMENT
              </h3>
              <p className="text-dark-gray/70 text-sm sm:text-base leading-relaxed">
                I build scalable and high-performance applications using modern
                web technologies. From frontend interfaces to backend APIs, I
                turn ideas into reliable solutions. Clean architecture and best
                practices guide every line of code I write..
              </p>
            </div>

            {/* MAINTENANCE */}
            <div className="text-left relative">
              <div className="absolute -top-6 -left-12">
                <MaintenanceIcon className="w-20 h-20" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-gray mb-3 sm:mb-4 uppercase tracking-[0.25rem]">
                MAINTENANCE
              </h3>
              <p className="text-dark-gray/70 text-sm sm:text-base leading-relaxed">
                I ensure applications stay fast, secure, and up to date over
                time. From bug fixes to performance tuning, I keep systems
                running smoothly. Continuous improvement is key to delivering
                long-term value..
              </p>
            </div>
          </div>
        </div>

        {/* Bottom ---WWW--- Separator */}
        {/* <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-dark-gray"></div>
          <span className="px-2 sm:px-4 text-dark-gray text-xs sm:text-sm">
            ---WWW---
          </span>
          <div className="flex-1 h-px bg-dark-gray"></div>
        </div> */}
      </div>
    </section>
  );
}
