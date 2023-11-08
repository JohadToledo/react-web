import { projects } from "./Data.js";
import { useRef, useEffect } from "react";
import Grainy from "./Grainy";

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
      <div className="container flex flex-col justify-center items-center m-auto">
        <div className="py-10">
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
          className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] xl:max-w-[1400px] lg:grid-cols-1"
          // className="flex flex-col max-[980px] py-10 opacity-0"
        >
          {projects.map((project, index) => (
            
            <div
              key={project.id}
              className="relative bg-cover bg-no-repeat bg-center z-10 h-[550px] w-full items-stretch justify-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] xl:max-w-[1400px] lg:h-[500px]"
            >
                  <img className={`absolute -bottom-0 w-[70%] sm:w-[85%] md:w-[60%] lg:max-w-[50%] ${
                    index % 2 === 0 ? 'left-0 rounded-bl-3xl' : 'right-0 rounded-br-3xl'
                    }`} 
                    style={{boxShadow: "0px 0px 13px 4px #7b7b7b"}}
                          alt="portfolio" 
                          src={project.image}/
                          >
                  <div
                  className={`absolute top-0 text-[#0E1016] mt-6  flex items-center justify-center gap-4 lg:mt-10 ${
                    index % 2 === 0 ? 'right-0 lg:mr-14 mr-8' : 'left-0 ml-8 lg:ml-14'
                  }`}
                  >
                    
                      <a href={project.gitLink} key={project.image} rel="noreferrer" target="_blank"
                      className="rounded-full w-[20px] bg-lorange p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[65px] lg:text-[28px] box-content lg:box-border"
                      >
                        <div className="stroke-red hover:stroke-lblue bg-transparent m-auto rounded-2xl">
                          <span dangerouslySetInnerHTML={{ __html: project.iconGit }}></span>
                        </div>
                      </a>
                    
                      <a href={project.link} key={project.image} rel="noreferrer" target="_blank"
                      className="w-[20px] rounded-full bg-lorange p-5 text-[20px] md:w-[25px] md:text-[24px] lg:w-[65px] lg:text-[28px] box-content lg:box-border"
                      >
                        <div className="stroke-red stroke-[0.5] hover:stroke-black bg-transparent">
                          <span dangerouslySetInnerHTML={{ __html: project.iconLink }}></span>
                        </div>
                      </a>
                  </div>
                  <div
                  className={`absolute text-white top-32 ml-10 md:mr-12 lg:top-52 lg:ml-4 mb-10 md:mb-16 lg:mb-14 ${
                    index % 2 === 0 ?  'right-0 mr-0 ml-10 sm:right-14 md:right-0 md:ml-0 lg:right-10 lg:top-60  lg:mr-4 mb-10  md:mb-16 lg:mb-14' :'left-10 ml-0 md:mr-12 lg:top-52 lg:ml-4 mb-10  md:mb-16 lg:mb-14 ' 
                    }`}
                  
                  >
                            <h1 className="bg-transparent text-3xl pb-2">{project.title}</h1>
                            <p>This is the whole text that I gonna display here</p>
                            {/* <p className="bg-transparent p-5 pb-5">{project.description}</p> */}
                  </div>                  
                  <div className="accent"></div>
                  <Grainy w="100%" h="100%" svgBorderRadius="22px" style={{ borderRadius: '24px', PointerEvent: 'none'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
