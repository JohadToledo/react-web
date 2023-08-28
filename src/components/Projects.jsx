// import { CodeIcon } from "@heroicons/react/24/solid"
import { projects } from './Data.js';

export function Projects() {
  return (
    <section
      id="projects"
      className="project-section overflow-hidden w-screen max-w-7xl h-[150vh] text-center"
    >
      <div className="container flex flex-col justify-center items-center">
        <div className="">
          <h1 className="my-9">Projects</h1>
          <p className="text-xl">
          Welcome to my project gallery, where you can explore a collection of endeavors that showcase <br/>my dedication to <strong>crafting</strong> exceptional digital experiences.
          </p>
        </div>
        <div className=" flex flex-wrap justify-around m-16">
          {projects.map((project) => (
            <a href={project.link} key={project.image} className="project-item">
              <div className=" flex relative w-96 h-72 m-12">
                <img
                  alt="gallery"
                  className="project-item-img absolute w-full h-full object-cover object-center inset-0 rounded"
                  src={project.image}
                />
                <div className="px-2 py-2.5 relative z-10 w-full border-4 border-gray-800 opacity-0 hover:opacity-100 rounded">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
