// import { CodeIcon } from "@heroicons/react/24/solid"
import { projects } from "./Data";

export function Projects() {
  return (
    <section
      id="projects"
      className="project-section overflow-hidden max-w-[75rem] h-[150vh] text-center mx-auto my-0"
    >
      <div className="container flex flex-col justify-center items-center h-full">
        <div className="my-9">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="">Apps I&apos;ve Built</h1>
          <p className="">
            Here you can find out some projects that I&apos;ve been builting
            out.
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
