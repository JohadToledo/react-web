import { projects } from "./Data.js";
import { useRef, useEffect} from "react"
import { motion, useInView } from "framer-motion";
export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        console.log(isInView)
    }, [isInView]
    )
  return (
    <motion.section
      ref={ref}
      id="projects"
      className="overflow-hidden w-screen max-w-7xl h-auto text-center text-indigo-200"
    >
      <div className="container flex flex-col justify-center items-center ">
        <div className="">
          <h1 className="my-9 text-3xl">Projects</h1>
          <p className="text-xl px-10">
            Welcome to my project gallery, where you can explore a collection of
            endeavors that showcase <br />
            my dedication to <strong>crafting</strong> exceptional digital
            experiences.
          </p>
        </div>
        <div className="flex flex-col max-[980px] py-10  ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="shadow-xl shadow-indigo-950 flex flex-col items-center bg-indigo-900 rounded-[1rem] m-5 sm:m-12"
            >
              <a
                href={project.link}
                rel="noreferrer"
                target="_blank"
                className="w-auto title-font text-3xl font-medium text-white mb-3 bg-transparent py-5 hover:text-teal-300"
              >
                {project.title}
              </a>
              <div className="flex flex-col lg:flex-row bg-transparent mx-5 sm:mx-10">
                <div className="lg:w-[55%] sm:h-96 rounded-[1rem]">
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
                  <p className="md:w-2/3 leading-relaxed bg-transparent">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className=" bg-transparent flex py-5 sm:py-10">
                {project.technologies.map((technology, index) => (
                  <h3
                    key={index}
                    className="px-2 sm:px-5 bg-transparent text-xl"
                  >
                    {technology}
                  </h3>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
