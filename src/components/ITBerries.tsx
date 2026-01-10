"use client";

export default function ITBerries() {
  return (
    <section className="bg-dark-gray py-12 sm:py-16">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - IT BERRIES Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 uppercase">
              IT BERRIES
            </h2>
            <p className="text-light-gray leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Welcome to my digital space, where ideas come to life through
              modern web technologies and elegant design. I build seamless
              experiences from concept to deployment with clean code and
              user-first thinking.
            </p>
            {/* <button className="border-2 border-white text-white px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-white hover:text-black transition-colors">
              READ MORE
            </button> */}
          </div>

          {/* Right Side - IT Logo */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-dark-gray/30">
              IT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
