import { Link } from "react-scroll";
import Menu from "./Menu";

export function Header() {
  return (
    <section
      id="header"
      style={{ zIndex: 1 }}
      className="p-5 fixed w-screen lg:w-screen md:w-screen sm:w-screen mx-auto text-2xl text-petroleo"
    >
      <div className="flex justify-between items-center sm:px-10">
        <div className=" "> Johad Toledo </div>
        <div className=" ">
          <nav className="hidden gap-5 sm:flex">
            <Link className="cursor-pointer" to="projects">
              Projects
            </Link>
            <Link className="cursor-pointer" to="skills">
              Skills
            </Link>
            <Link className="cursor-pointer" to="contact">
              Contacts
            </Link>
          </nav>
        </div>
        <Menu />
      </div>
    </section>
  );
}
