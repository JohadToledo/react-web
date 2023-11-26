import {
    SiReact, SiJavascript, SiGooglefonts, SiGithub, SiGooglechrome, SiGit, SiFigma, SiTailwindcss, SiCss3, SiHtml5,
    SiNodedotjs, SiTypescript, SiFramer,
  } from "react-icons/si";
  
  
  export function Skills() {
    return (
        <section
              className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56 "
              id="skills"
          >
              <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
              <h1 className="my-10 text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]">
              Skills</h1>
                  <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                      <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                          {/* <h3>Tech</h3> */}
                          <div>
                              <div className="grid grid-cols-5 gap-10" 
                              
                              >
                                  <SiJavascript size={50}/>
                                  <SiReact size={50}/>
                                  <SiTailwindcss size={50}/>
                                  <SiFigma size={50}/>
                                  <SiHtml5 size={50}/>
                                  <SiCss3 size={50}/>
                                  <SiTypescript size={50}/>
                                  <SiGit size={50}/>
                                  <SiGithub size={50}/>
                                  <SiGooglechrome size={50}/>
                                  <SiGooglefonts size={50}/>
                                  <SiNodedotjs size={50}/>
                                  <SiFramer size={50}/>
                                  
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    );
  }
