"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  const [selectedTech, setSelectedTech] = useState("");

  // Filter projects based on selected technology
  const filteredProjects = selectedTech
    ? projects.filter((item) =>
        item.iconLists.some((icon) => icon.includes(selectedTech))
      )
    : projects;

  // List of technologies to filter by
  const techFilters = [
    { name: "HTML", icon: "/html-5-svgrepo-com.svg" },
    { name: "CSS", icon: "/css-svgrepo-com.svg" },
    { name: "JavaScript", icon: "/javascript-svgrepo-com.svg" },
    { name: "React", icon: "/react-svgrepo-com.svg" },
    { name: "TypeScript", icon: "/ts.svg" },
    { name: "Three.js", icon: "/three.svg" },
    // Add more technologies as needed
  ];

  return (
    <div className="py-20" id="projetos">
      <h1 className="heading">
        Meus<span className="text-cyan-500"> Projetos</span>
      </h1>

      {/* Tech Filter Icons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {techFilters.map((tech) => (
          <button
            key={tech.name}
            onClick={() => setSelectedTech(tech.icon)}
            className={`p-2 border rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
              selectedTech === tech.icon
                ? "border-purple-500 bg-purple-500/20 shadow-lg"
                : "border-gray-400 hover:bg-gray-200"
            }`}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 transition-transform duration-300"
              style={{
                transform: selectedTech === tech.icon ? "rotate(360deg)" : "none",
              }}
            />
          </button>
        ))}
        {/* Conditionally Render Reset Filter Button */}
        {selectedTech && (
          <button
            onClick={() => setSelectedTech("")}
            className="p-2 border border-gray-400 rounded-full hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-110"
          >
            Mostrar todos os projetos
          </button>
        )}
      </div>

      {/* Display Filtered Projects */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {filteredProjects.map((item) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw] transition-all duration-300 ease-in-out transform hover:scale-105"
            key={item.id}
          >
            <PinContainer
              title="Visitar"
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute w-full h-full overflow-hidden lg:rounded-3xl transition-transform duration-500"
                  style={{
                    transform: "scale(1.05)",
                  }}
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center transition-transform duration-300 transform hover:scale-110"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon${index + 1}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple transition-transform duration-300 transform hover:scale-110">
                    Ver projeto
                  </p>
                  <FaLocationArrow
                    className="ms-3 transition-transform duration-300 transform hover:translate-x-1"
                    color="#CBACF9"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
