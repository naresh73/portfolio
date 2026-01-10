"use client";

import Image from "next/image";
import ZuriImg from "../assets/images/zuri.png";
import PrepMyVehicleImg from "../assets/images/prepmyvehicle.webp";
import MusePOSImg from "../assets/images/musepos.png";
import QuartusTechImg from "../assets/images/quartustech.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: any; // Using any for imported images
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Zuri",
      description:
        "Project description will be provided here. This is a placeholder for the Zuri project overview.",
      image: ZuriImg,
    },
    {
      id: 2,
      title: "Prep My Vehicle",
      description:
        "Project description will be provided here. This is a placeholder for the Prep My Vehicle project overview.",
      image: PrepMyVehicleImg,
    },
    {
      id: 3,
      title: "Muse POS",
      description:
        "Project description will be provided here. This is a placeholder for the Muse POS project overview.",
      image: MusePOSImg,
    },
    {
      id: 4,
      title: "Quartus Tech",
      description:
        "Project description will be provided here. This is a placeholder for the Quartus Tech project overview.",
      image: QuartusTechImg,
    },
  ];

  return (
    <section id="portfolio" className="bg-white">
      {/* Header with Mountain Image */}
      <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-b from-green-700 via-green-600 to-gray-500 flex items-center justify-center overflow-hidden">
        {/* Mountain landscape effect */}
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-gray-600 via-gray-500 to-transparent"></div>
          <div className="absolute bottom-0 left-1/4 w-1/3 h-2/3 bg-gradient-to-t from-gray-700 via-gray-600 to-transparent transform -skew-x-12"></div>
          <div className="absolute bottom-0 right-1/4 w-1/3 h-3/4 bg-gradient-to-t from-gray-700 via-gray-600 to-transparent transform skew-x-12"></div>
        </div>
        <div className="relative bg-black border-2 border-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mx-4">
          <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold uppercase">
            PORTFOLIO
          </h2>
        </div>
      </div>

      {/* Portfolio Projects */}
      <div className="bg-white">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1; // Second item (index 1) and onwards even indices

          return (
            <div
              key={project.id}
              className={`flex flex-col ${
                isEven ? "md:flex-row-reverse" : "md:flex-row"
              } items-center min-h-[500px] md:min-h-[600px]`}
            >
              {/* Text Content Section */}
              <div
                className={`w-full md:w-1/2 bg-light-gray flex flex-col justify-center px-6 sm:px-8 md:pl-16 md:pr-8 py-12 md:py-0 min-h-[400px] md:min-h-[600px]`}
              >
                {/* Logo/Title Section */}
                <div className="mb-4 md:mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-gray mb-2">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-dark-gray/70 text-sm sm:text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Image Section */}
              <div
                className={`w-full md:w-1/2 bg-dark-gray flex items-center justify-center relative min-h-[400px] md:min-h-[600px]`}
              >
                <div className="relative w-full h-full max-w-2xl mx-4 md:mx-8">
                  <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                    <Image
                      src={project.image.src || project.image}
                      alt={project.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Text */}
      <div className="bg-dark-gray py-8">
        <p className="text-white text-center text-sm">And many more to come!</p>
      </div>
    </section>
  );
}
