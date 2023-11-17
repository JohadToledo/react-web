  import { projects } from "./Data.js";
  import { useRef, useEffect } from "react";
  import Grainy from "./Grainy";
  import {SiGithub} from "react-icons/si";
  import {BsLink45Deg} from "react-icons/bs";
  import { SiCplusplus, SiReact, SiRedux, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiReactrouter } from "react-icons/si";
  
  export function Projects() {
    const fadeInRefs = [useRef(null), useRef(null), useRef(null)];
  
    const handleAnimation = (element) => {
      setTimeout(() => {
        element.classList.add("fade-in");
      }, 400);
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            handleAnimation(entry.target);
            observer.unobserve(entry.target);
          }
        });
      });
  
      for (const ref of fadeInRefs) {
        observer.observe(ref.current);
      }
  
      return () => {
        observer.disconnect();
      };
    });
  
    const technologyIcons = {
      SiCplusplus: SiCplusplus,
      SiReact: SiReact,
      SiRedux: SiRedux,
      SiHtml5: SiHtml5,
      SiCss3: SiCss3,
      SiJavascript: SiJavascript,
      SiBootstrap: SiBootstrap,
      SiReactrouter: SiReactrouter,
  
  
      // Add more icons as needed
    };
  
    return (
      <section
        id="projects"
        // className="overflow-hidden w-screen max-w-7xl h-auto text-center flex justify-center pt-10"
        className="relative z-10 flex w-full flex-col items-center text-center justify-center bg-cover bg-center py-16 md:py-20 lg:py-20"
      >
            <h1 className="my-10 text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]">
            Projects
            </h1>
            <p className="text-xl px-10 mb-10 lg:w-[80%]">
              Welcome to my project gallery, where you can explore a collection of
              endeavors that showcase my dedication to <strong>crafting</strong>{" "}
              exceptional digital experiences.
            </p>
          <div 
          className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-14 gap-x-6 lg:max-w-[1200px] xl:max-w-[1400px] lg:grid-cols-1">
            {projects.map((project, index) => (
              <div
                ref={fadeInRefs[index]}
                key={project.id}
                className="linearGradient opacity-0 relative bg-cover bg-no-repeat bg-center z-10 h-[600px] w-full items-stretch justify-center py-0 sm:h-[700px] sm:w-[100%] md:h-[670px] md:w-[100%] xl:max-w-[1400px] lg:h-[500px]"
                >
                <img className={`absolute -bottom-0 w-[70%] sm:w-[75%] md:w-[55%] lg:max-w-[45%] opacity-[0.7] ${
                      index % 2 === 0 ? 'left-0 rounded-bl-3xl' : 'right-0 rounded-br-3xl'
                      }`} 
                      // style={{boxShadow: "0px 0px 13px 13px #7b7b7b"}}
                            alt="portfolio" 
                            src={project.image}
                      />
                <div
                    className={`absolute top-0 text-[#0E1016] mt-6  flex items-center justify-center gap-4 lg:mt-10 ${
                      index % 2 === 0 ? 'right-0 lg:mr-14 mr-8' : 'left-0 ml-8 lg:ml-14'
                    }`}
                    >
                      
                        <a href={project.code} key={project.id} rel="noreferrer" target="_blank"
                        className="flex items-center justify-center z-10 cursor-pointer rounded-full w-[20px] h-[20px] bg-petroleo p-2 text-[20px] md:w-[25px] md:h-[25px] md:text-[24px] lg:w-[65px] lg:h-[65px] lg:text-[28px] box-content lg:box-border"
                        >
                          <SiGithub size={25} />
                        </a>
                      
                        <a href={project.link} key={project.id} rel="noreferrer" target="_blank"
                        className="flex items-center justify-center z-10 cursor-pointer w-[20px] h-[20px] rounded-full bg-petroleo p-2 text-[20px] md:w-[25px] md:h-[25px] md:text-[24px] lg:w-[65px] lg:h-[65px] lg:text-[28px] box-content lg:box-border"
                        >
                          <BsLink45Deg size={25}/>
                        </a>
                    </div>
                    <div
                    className={`absolute flex flex-col items-center text-white top-24  md:mr-12 lg:top-48 lg:ml-4 mb-10 md:mb-16 lg:mb-14 ${
                      index % 2 === 0 ?  'right-0 m-0 m-auto sm:right-14 md:right-0 md:ml-0 lg:right-10 lg:top-60 lg:mr-4 mb-10  md:mb-16 lg:mb-14' :
                                         'left-0 m-0 m-auto md:mr-12 lg:top-52 lg:ml-4 mb-10  md:mb-16 lg:mb-14 ' 
                      }`}
                    
                    >
                              <h1 className="max-w-[90%] text-[40px] m-0 m-auto leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none">{project.title}</h1>
                              <p className="mt-4 w-[90%] max-w-[457px] m-0 m-auto text-[16px] font-semibold text-[#95979D] lg:py-4">{project.description}</p>
  
                               <div 
                              //  className="mt-9 mb-9 grid grid-cols-4 gap-2">
                               className="my-5 flex w-[80%]">
                              {project.technologies.map((technology, index) => (
                                  <div
                                  key={index}
                                  className="m-auto w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] hover:"
                                  >
                                      {technologyIcons[technology] && technologyIcons[technology]({ size: 25 })}
                                      {/* {console.log(technology)} */}
                                  </div>
                              ))}
                              </div> 
                    </div>                  
                    <div className="accent"></div>
                    <div className="border-gradient"></div>
                    <div className="border-highlight" />
                    <Grainy w="100%" h="100%" svgBorderRadius="24px" style={{ borderRadius: '24px', PointerEvent: 'none'}} />
              </div>
            ))}
          </div>
      </section>
    );
  }
