import { projects } from "./Data.js";
import { useRef, useEffect } from "react";

export function Projects() {
  const targetRef = useRef(null);
  
  const handleAnimation = () => {
    const targetElement = targetRef.current;
    setTimeout(() => {
      targetElement.classList.add("fade-in");
    }, 300);
  };

  // Use the Intersection Observer to trigger the animation
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
      className="overflow-hidden w-screen max-w-7xl h-auto text-center text-yellow"
    >
      <div className="container flex flex-col justify-center items-center ">
        <div className="">
          <h1 className="my-9 text-3xl text-orange">Projects</h1>
          <p className="text-xl px-10">
            Welcome to my project gallery, where you can explore a collection of
            endeavors that showcase <br />
            my dedication to <strong>crafting</strong> exceptional digital
            experiences.
          </p>
        </div>
        <div
          ref={targetRef}
          className="flex flex-col max-[980px] py-10 opacity-0"
        >

 
          {projects.map((project) => (
            <div
              key={project.id}
              className="linearGradient flex flex-col items-center rounded-3xl m-5 sm:m-12 z-1"
            >
              <div className="max-w-5xl w-80 m-0 m-auto h-5/6 border-2 border-white text-red rounded-3xl relative">
                  <div 
                  className=" w-full; h-[500px] rounded-3xl flex flex-col bg-transparent " >
                  <div className="h-16 flex justify-end p-5  bg-transparent mt-2 gap-1 rounded-3xl ">
                    <button>
                    <a
                    href={project.link}
                    key={project.image}
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-[1rem] w-[30rem] h-96  opacity-70 hover:opacity-100 rounded-2xl"
                  >
                    <div className="stroke-red hover:stroke-lblue bg-transparent m-auto rounded-2xl">
                    <span dangerouslySetInnerHTML={{ __html: project.iconGit }}></span>
                    </div>
                  </a>
                    </button>
                    <button>
                    <a
                    href={project.link}
                    key={project.image}
                    rel="noreferrer"
                    target="_blank"
                    className="rounded-[1rem] w-[30rem] h-96  opacity-70 hover:opacity-100"
                  >
                    <div className="stroke-red stroke-[0.5] hover:stroke-black bg-transparent">
                    <span dangerouslySetInnerHTML={{ __html: project.iconLink }}></span>
                    </div>
                  </a>
                    </button>
                  </div>
                  <div  className="sm:w-1/2 bg-transparent ">
                            <h2 className="bg-transparent">{project.title}</h2>
                            <p className="bg-transparent p-5">{project.description}</p>
                  </div>
                  {/* <div className="flex flex-col-reverse h-full rounded-3xl bg-yellow"> */}
                        <div className="w-4/5 flex items-end sm:mr-5">
                            <img className="max-w-full w-2/3 rounded-bl-3xl bottom-0 absolute" style={{boxShadow: "5px -3px 13px #7b7b7b"}}
                                alt="portfolio" 
                                src={project.image}/>
                        </div>
                  {/* </div> */}
                  </div>
              </div>
              

              {/* <a
                href={project.link}
                rel="noreferrer"
                target="_blank"
                className="w-auto title-font text-3xl font-medium text-yellow m-4 bg-transparent py-5 hover:text-orayellow"
              >
                <span className="bg-transparent text-bordo">Featured Project - </span> {project.title}
              </a> */}

               <div className="flex flex-col lg:flex-row bg-transparent mx-5 sm:mx-10">
                {/*<div className="lg:w-[55%] sm:h-96 rounded-[1rem]">
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
                </div> */}
                {/* <div className="py-5 sm:px-5 sm:py-2.5 lg:w-1/2 flex items-center justify-center sm:text-xl bg-transparent">
                  <p className="md:w-2/3 leading-relaxed bg-transparent">
                    {project.description}
                  </p>
                </div> */}
              </div>
              {/* <div className=" bg-transparent flex py-5 sm:py-10">
                {project.technologies.map((technology, index) => (
                  <h3
                    key={index}
                    className="px-2 sm:px-5 bg-transparent text-xl text-bordo"
                  >
                    {technology}
                  </h3>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
