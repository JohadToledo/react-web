import "./header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <section id="header">
      <div className="header-content">
        <div> Johad Toledo </div>
        <div className="nav-bar">
          <nav>
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
