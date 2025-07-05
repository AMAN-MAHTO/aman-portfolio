import { useEffect } from "react";
import { projectsData } from "../../utils";
const sections = document.querySelectorAll(".section");


export const Projects = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const onScroll = () => {
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          section.classList.add("shrink");
        } else {
          section.classList.remove("shrink");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center p-10 max-w-7xl mx-auto">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center mb-2 md:mb-5">
          My Selected Projects
        </h1>
        <p className="text-xl  lg:text-2xl text-center mb-5 md:mb-10 text-gray-700">
          Here are some of my projects that I have worked on.
        </p>
      </div>

      {projectsData.map((projects, index) => (
        <div
          key={index}
          className="section
          flex flex-col-reverse md:flex-row 
          items-center justify-center lg:justify-between
          md:gap-10 lg:gap-20 border rounded-2xl p-10 my-5 lg:my-10 lg:p-20"
        >
          <div className="my-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-2">
              {projects.title}
            </h1>
            <h6 className="text-xl text-gray-900">{projects.subtitle}</h6>
            <p className="hidden lg:flex mt-5 text-lg text-gray-700">
              {projects.description}
            </p>
            {projects.link && (
              <li className="textBtn">
                <a href={projects.link}>View project</a>
              </li>
            )}
          </div>
          <img
            className="border rounded-xl w-full max-w-sm lg:max-w-lg h-auto object-cover"
            src={projects.image}
            alt={`${projects.title} image`}
          ></img>
        </div>
      ))}
    </div>
  );
};
