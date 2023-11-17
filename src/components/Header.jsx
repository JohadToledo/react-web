import { Link } from "react-scroll";
import Menu from "./Menu";

export function Header() {
  return (
    <section
      id="header"
      className="p-5 fixed w-screen lg:w-screen md:w-screen sm:w-screen mx-auto text-2xl text-petroleo z-50 bg-indigo "
    >
      <div className="flex justify-between items-center sm:px-10">
        <div className=""> Johad Toledo </div>
        <div className="">
          <nav className="hidden gap-5 sm:flex">
            <Link className="cursor-pointer font-mono" to="projects">
              Projects
            </Link>
            <Link className="cursor-pointer font-mono" to="skills">
              Skills
            </Link>
            <Link className="cursor-pointer font-mono" to="contact">
              Contacts
            </Link>
          </nav>
        </div>
        <Menu />
      </div>
    </section>
  );
}
