import { projects } from "./Data.js";

export default function Portfolio() {
  return (
    <section className="overflow-hidden w-screen max-w-7xl h-auto text-center">
      <div className="container flex flex-col justify-center items-center">
        <div className="">
          <h1 className="my-9">Projects</h1>
          <p className="text-xl px-10">
            Welcome to my project gallery, where you can explore a collection of
            endeavors that showcase <br />
            my dedication to <strong>crafting</strong> exceptional digital
            experiences.
          </p>
        </div>
        <div className="flex flex-col max-w-5xl">
          {projects.map((project) => (
            <div key={project.id}>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                </h1>
                <div className="flex flex-row">
                <a href={project.link} key={project.image} className="w-1/2">
                    <div className="flex relative py-5">
                    <img
                    alt={project.title}
                    className="w-full h-full rounded"
                    src={project.image}
                    />
                    </div>
                </a>
                <div className="px-2 py-2.5 w-1/2 ">
                  <p className="leading-relaxed">{project.description}</p>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
