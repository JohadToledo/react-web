// import { skills } from "./Data";
// import { Element } from "react-scroll";
// import Check from '../../public/assets/checklist.png'
import {
  SiReact, SiJavascript, SiGooglefonts, SiGithub, SiGooglechrome, SiGit, SiFigma, SiTailwindcss, SiCss3, SiHtml5,
  SiNodedotjs,
  // SiAdobephotoshop, SiAstro, SiCinema4D, SiCplusplus,  SiFramer, 
  //  
  // SiIntellijidea, SiKotlin, SiLua,
  // SiNeovim, SiNextdotjs,  SiRust, SiTypescript, SiWebstorm, SiZig
} from "react-icons/si";


export function Skills() {
  return (
      // <section
      //   id="skills"
      //   className="overflow-hidden w-screen max-w-7xl h-auto text-yellow"
      // >
      //   <div className="">
      //     <div className="text-center">
      //       <h1 className="my-9 text-3xl text-orange">Skill &amp; Technologies</h1>
      //       <p className="text-xl py-9 my-9 w-2/3 m-auto">
      //       These are some of the technologies I&#39;ve been exploring on my journey to mastery, with an ever-present hunger to learn and grow:
      //       </p>
      //     </div>

      // <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
      //               <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
      //                   <h3>Tech</h3>
      //                   <div>
      //                       <div className="grid grid-cols-5 gap-4" 
      //                       // delay={0.1} stepSize={0.1} iconSize={50}
      //                       >
      //                           <SiJavascript size={50}/>
      //                           <SiReact size={50}/>
      //                           <SiTailwindcss size={50}/>
      //                           <SiFigma size={50}/>
      //                           <SiHtml5 size={50}/>
      //                           <SiCss3 size={50}/>
      //                           <SiGit size={50}/>
      //                           <SiGithub size={50}/>
      //                           <SiGooglechrome size={50}/>
      //                           <SiGooglefonts size={50}/>
      //                           <SiNodedotjs size={50}/>
                                
                                
      //                       </div>
      //                   </div>
      //               </div>
      //           </div>
      
          
      //   </div>
      // </section>

      
      <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="tools"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <h1
                  className={"mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"}
                >Tools</h1>

                <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
                        <h3>Tech</h3>
                        <div>
                            <div className="grid grid-cols-5 gap-4" 
                            // delay={0.1} stepSize={0.1} iconSize={50}
                            >
                                <SiJavascript size={50}/>
                                <SiReact size={50}/>
                                <SiTailwindcss size={50}/>
                                <SiFigma size={50}/>
                                <SiHtml5 size={50}/>
                                <SiCss3 size={50}/>
                                <SiGit size={50}/>
                                <SiGithub size={50}/>
                                <SiGooglechrome size={50}/>
                                <SiGooglefonts size={50}/>
                                <SiNodedotjs size={50}/>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
  );
}
