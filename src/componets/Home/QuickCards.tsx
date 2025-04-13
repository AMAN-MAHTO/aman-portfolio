import { useMemo } from "react";
import { useRef, useEffect } from "react";
import { experiences } from "../../utils";

export const ExperienceSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add("cursor-grabbing");
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // drag speed
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sortedExperiences = useMemo(() => {
    return experiences.sort(
      (a, b) => new Date(b.sDate).getTime() - new Date(a.sDate).getTime()
    );
  }, []);

  return (
    <div className=" items-center justify-center p-10 max-w-3xl lg:max-w-5xl xl:max-w-7xl py-10 px-4  mx-auto ">
      {/* <h2 className="text-3xl font-bold text-center mb-6">Experience</h2> */}
      <div
        ref={scrollRef}
        className="scroll overflow-x-scroll scrollbar-hide no-scrollbar"
      >
        <div className="flex flex-col md:flex-row gap-6 w-max px-4">
          {sortedExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="max-w-sm  lg:max-w-sm bg-white rounded-xl p-10 
              flex flex-col justify-between border"
            >
              <div>
                <h3 className="text-xl font-semibold  mb-1">{exp.title}</h3>
                <p className="text-gray-600 mb-2">{exp.company}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {new Date(exp.sDate).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                  })}
                  -
                  {exp.eDate === "Present"
                    ? "Present"
                    : new Date(exp.eDate).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                      })}
                </p>
                <p className="text-sm text-gray-700  mb-6">{exp.description}</p>
                <div className="iconBtn max-w-10  !bg-yellow-200 hover:!bg-yellow-300">
                  <img
                    src="https://cdn.prod.website-files.com/6659affa71a3c7c8796f55fd/6662f34a7c4001ead54601b4_icon-arrow.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
