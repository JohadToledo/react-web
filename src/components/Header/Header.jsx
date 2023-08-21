// import "./header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <section id="header">
      <div className="bg-white text-black header-content">
        <div> Johad Toledo </div>
        <div className="bg-white text-white nav-bar">
          <nav className="text-white">
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
