import "./header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <section id="header" className="p-5 fixed w-screen max-w-7xl z-10 mx-auto bg-transparent">
      <div className="flex justify-between ">
        <div> Johad Toledo </div>
        <div className="">
          <nav className="gap-5 flex">
            <Link to="skills">Skills</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contacts</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;
