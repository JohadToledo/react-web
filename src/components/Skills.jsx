import { skills } from "./Data";
// import { Element } from "react-scroll";
import Check from '../../public/assets/checklist.png'


export function Skills() {
  return (
      <section
        id="skills"
        className="overflow-hidden w-screen max-w-7xl h-auto"
      >
        <div className="">
          <div className="text-center">
            <h1 className="my-9 text-3xl">Skill &amp; Technologies</h1>
            <p className="text-xl py-9 my-9 w-2/3 m-auto">
            These are some of the technologies I&#39;ve been exploring on my journey to mastery, with an ever-present hunger to learn and grow:
            </p>
          </div>
          
            <div className="py-4 w-full gap-3 flex flex-wrap justify-center lg:w-4/5 sm:gap-2.5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skills) => (
                <div
                  key={skills}
                  className="border-solid border-teal-900 border-2 p-2.5  mx-5 my-2"
                >
                  <div className="text-white flex w-[20vw]">
                  <img className='mr-3 w-6 bg-transparent'src={Check} alt="checklist" />
                    <span>{skills}</span>
                  </div>
                </div>
              ))}
            </div>
          
        </div>
      </section>
  );
}
