import { skills } from "./Data";
import { Element } from "react-scroll";
import Check from 'C:/Develop/react-personal-web/react-web/src/assets/checklist.png'


export function Skills() {
  return (
    <Element id="skills" name="skills">
      <section
        id="skill"
        className="overflow-hidden max-w-[75rem] min-h-[80vh]"
      >
        <div className="">
          <div className="text-center my-24">
            <h1>Skill &amp; Technologies</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              veniam. Sint qui quaerat ratione nesciunt? Architecto vel est
              molestias molestiae. Quam, quae amet. Laboriosam, voluptatum illo.
              Voluptate ipsa numquam consequuntur?
            </p>
          </div>
          
            <div className="gap-2.5 flex flex-wrap justify-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              {skills.map((skills) => (
                <div
                  key={skills}
                  className="border-solid border-teal-900 border-2 p-2.5"
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
    </Element>
  );
}
