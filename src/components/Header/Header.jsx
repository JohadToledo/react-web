import './header.css'
import { Link } from 'react-scroll'


function Header() {
  return (
    <section id='header'>
      <div className="header-content">
        <div> Johad Toledo </div>
        <div className="navBar">
          <nav>
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>About</Link>
            <Link>Contacts</Link>
          </nav>
        </div>
    </div>
    </section>
  );
}

export default Header;
