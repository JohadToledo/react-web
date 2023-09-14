import { Link } from "react-scroll";
import Menu from "./Menu";

export function Header() {
  return (
    <section
      id="header"
      style={{ zIndex: 1 }}
      className="p-5 fixed  w-screen lg:w-screen md:w-screen sm:w-screen lg:max-w-7xl mx-auto   text-2xl text-teal-500"
    >
      <div className="flex justify-between   items-center">
        <div className=" "> Johad Toledo </div>
        <div className=" ">
          <nav className="hidden gap-5 sm:flex  ">
            <Link className="  text-teal-500" to="projects">
              Projects
            </Link>
            <Link className="  text-teal-500" to="skills">
              Skills
            </Link>
            <Link className="  text-teal-500" to="contact">
              Contacts
            </Link>
          </nav>
        </div>
        <Menu />
      </div>
    </section>
  );
}
