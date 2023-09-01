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
        <div className="flex flex-col max-w-5xl ">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col py-10 bg-cyan-700 border rounded my-12">
                <h1 className="title-font text-lg font-medium text-white mb-3 bg-transparent">
                    {project.title}
                </h1>
                <div className="flex flex-row bg-transparent mx-10">
                    <div className="relative">
                    <a href={project.link} key={project.image} className="w-1/2 h-full opacity-70 hover:opacity-100">
                    <img
                    alt={project.title}
                    className="w-full h-full rounded h-80"
                    src={project.image}
                    />
                    </a>
                    </div>
                <div className="px-5 py-2.5 w-1/2 flex items-center justify-center text-xl bg-transparent">
                  <p className="w-2/3 leading-relaxed bg-transparent">{project.description}</p>
                </div>
                
                </div>
                <div className="px-5 bg-transparent">
                    <h3 className="px-5 pt-10 bg-transparent">{project.technologies}</h3>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
