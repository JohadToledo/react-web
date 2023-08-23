import { skills } from "./data";
import { Element } from "react-scroll";

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
          <div className="w-full mx-auto my-10 p-12">
            <div className="w-full p-5 gap-2.5 flex flex-wrap my-0.5 mx-0 justify-around ">
              {skills.map((skills) => (
                <div
                  key={skills}
                  className="border-solid border-amber-900 border-5 p-2.5 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                >
                  <div className="text-white flex justify-center w-[20vw]">
                    <span>{skills}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
