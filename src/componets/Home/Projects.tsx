import { useEffect } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../../utils";

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
    <div className="flex flex-col items-center justify-center p-10 max-w-7xl mx-auto min-h-screen">
      {/* Header Section */}
      <div className="mb-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
          My Selected Projects
        </h1>
        <p className="text-xl lg:text-2xl text-gray-900">
          Here are some of my projects that I have worked on.
        </p>
      </div>

      {/* Projects List */}
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="section
            flex flex-col-reverse md:flex-row 
            items-center justify-center lg:justify-between
            md:gap-10 lg:gap-20 border rounded-2xl p-10 my-5 lg:my-10 lg:p-20
            transition-transform duration-300 ease-in-out
          "
        >
          <div className="my-5 max-w-md md:max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
              {project.title}
            </h2>
            <h6 className="text-xl font-medium text-gray-700">{project.subtitle}</h6>
            <p className="hidden lg:block mt-5 text-lg text-gray-600">
              {project.description}
            </p>

            <Link
              to={`/projects/${project.id}`}
              className="inline-block mt-6 font-semibold text-lg text-indigo-600 hover:text-indigo-800"
            >
              View Project &rarr;
            </Link>
          </div>
          <img
            className="border rounded-xl w-full max-w-sm lg:max-w-lg h-auto object-cover"
            src={project.image}
            alt={`${project.title} screenshot`}
          />
        </div>
      ))}
    </div>
  );
};
