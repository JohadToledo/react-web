import { skills } from "./Data";
// import { Element } from "react-scroll";
import Check from '../../public/assets/checklist.png'


export function Skills() {
  return (
      <section
        id="skills"
        className="overflow-hidden w-screen max-w-7xl h-auto text-yellow"
      >
        <div className="">
          <div className="text-center">
            <h1 className="my-9 text-3xl text-orange">Skill &amp; Technologies</h1>
            <p className="text-xl py-9 my-9 w-2/3 m-auto">
            These are some of the technologies I&#39;ve been exploring on my journey to mastery, with an ever-present hunger to learn and grow:
            </p>
          </div>
          
            <div className="py-4 gap-1 grid grid-cols-2 sm:w-2/3 sm:gap-2.5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skills) => (
                <div
                  key={skills}
                  className="border-solid border-teal-900 border-2 p-3 sm:p-2 mx-7 my-2"
                >
                  <div className="text-white flex">
                  <img className='mr-3 sm:w-6 hidden sm:flex bg-transparent'src={Check} alt="checklist" />
                    <span>{skills}</span>
                  </div>
                </div>
              ))}
            </div>
          
        </div>
      </section>
  );
}
