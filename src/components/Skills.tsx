"use client";

export default function Skills() {
  const usingNow = [
    { name: "HTML5", color: "bg-orange-500" },
    { name: "CSS3", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "TypeScript", color: "bg-blue-700" },
    { name: "React.js", color: "bg-cyan-400" },
    { name: "Next.js", color: "bg-gray-900 text-white" },
    { name: "Tailwind CSS", color: "bg-teal-400" },
    { name: "Bootstrap", color: "bg-purple-600" },
    { name: "Material UI", color: "bg-blue-600" },
    { name: "Redux", color: "bg-purple-500" },
    { name: "Git", color: "bg-red-600" },
    { name: "GitHub", color: "bg-gray-800 text-white" },
  ];

  const learning = [
    { name: "Electron.js", color: "bg-indigo-600" },
    { name: "NestJS", color: "bg-rose-600" },
    { name: "Advanced Node.js", color: "bg-green-600" },
    { name: "Express.js", color: "bg-gray-700 text-white" },
    { name: "MongoDB", color: "bg-green-500" },
    { name: "AI Integrations", color: "bg-pink-500" },
    { name: "System Design", color: "bg-yellow-600" },
  ];

  const otherSkills = [
    { name: "Node.js", color: "bg-green-700" },
    { name: "REST APIs", color: "bg-blue-500" },
    { name: "Pusher (Realtime)", color: "bg-red-500" },
    { name: "Firebase", color: "bg-yellow-500" },
    { name: "Postman", color: "bg-orange-600" },
    { name: "JWT Auth", color: "bg-indigo-500" },
    { name: "Responsive UI/UX", color: "bg-teal-600" },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* ---WWW--- Separator */}
        {/* <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="flex-1 h-px bg-dark-gray"></div>
          <span className="px-2 sm:px-4 text-dark-gray text-xs sm:text-sm">---WWW---</span>
          <div className="flex-1 h-px bg-dark-gray"></div>
        </div> */}

        {/* SKILLS Button */}
        <div className="mb-8 sm:mb-12">
          <button className="bg-black text-white px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity">
            SKILLS
          </button>
        </div>

        {/* USING NOW */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-dark-gray mb-6 sm:mb-8">
            USING NOW:
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {usingNow.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${skill.color} rounded-lg flex items-center justify-center mb-2`}
                >
                  <span className="text-white text-[10px] sm:text-xs font-bold">
                    {skill.name.substring(0, 2)}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-dark-gray text-center font-medium leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LEARNING */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-bold text-dark-gray mb-6 sm:mb-8">
            LEARNING:
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {learning.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${skill.color} rounded-lg flex items-center justify-center mb-2`}
                >
                  <span className="text-white text-[10px] sm:text-xs font-bold">
                    {skill.name.substring(0, 2)}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-dark-gray text-center font-medium leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* OTHER SKILLS */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-dark-gray mb-6 sm:mb-8">
            OTHER SKILLS:
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {otherSkills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${
                    skill.color
                  } rounded-lg flex items-center justify-center mb-2`}
                >
                  <span className="text-white text-[10px] sm:text-xs font-bold">
                    {skill.name.substring(0, 2)}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs text-dark-gray text-center font-medium leading-tight">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
