import { projects } from "./Data.js";
import { useRef, useEffect } from "react";

export function Projects() {
  const targetRef = useRef(null);

  const handleAnimation = () => {
    const targetElement = targetRef.current;
    setTimeout(() => {
      targetElement.classList.add("fade-in");
    }, 400);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handleAnimation();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <section
      id="projects"
      className="overflow-hidden w-screen max-w-7xl h-auto text-center flex justify-center"
    >
      <div className="container max-w-[980px] flex flex-col justify-center items-center">
        <div className="">
          <h1 className="my-9 text-3xl">Projects</h1>
          <p className="text-xl px-10">
            Welcome to my project gallery, where you can explore a collection of
            endeavors that showcase <br />
            my dedication to <strong>crafting</strong> exceptional digital
            experiences.
          </p>
        </div>
        <div
          ref={targetRef}
          className="flex flex-col py-10 opacity-0"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-xl shadow-darkpetro flex flex-col items-center bg-petroleo rounded-[1rem] m-5 sm:m-12"
            > 
              <div className="w-auto title-font text-3xl m-4 bg-transparent py-5">
              <span className="pl-2 sm:pl-0 bg-transparent text-cel text-lightindi font-mono"> Featured Project - </span>
              <a
              
                href={project.link}
                rel="noreferrer"
                target="_blank"
                className="font-medium hover:text-indigo text-aqua bg-transparent link"
              >
                {project.title}
              </a>
              </div>
              <div className="flex flex-col lg:flex-row bg-transparent mx-5 sm:mx-10">
                <div className="lg:w-[55%] sm:h-80 rounded-[1rem]">
                  <a
                    href={project.link}
                    key={project.image}
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-[1rem] w-[30rem] h-96  opacity-70 hover:opacity-100"
                  >
                    <img
                      alt={project.title}
                      className="w-full h-full rounded-[1rem]"
                      src={project.image}
                    />
                  </a>
                </div>
                <div className="py-5 sm:px-5 sm:py-2.5 lg:w-1/2 flex items-center justify-center sm:text-xl bg-transparent">
                  <p className="md:w-4/5 leading-relaxed bg-transparent">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="text-lightindi bg-transparent flex py-5 sm:py-10">
                {project.technologies.map((technology, index) => (
                  <h3
                    key={index}
                    className="px-2 sm:px-5 bg-transparent text-2xl font-mono font-black"
                  >
                    {technology}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
