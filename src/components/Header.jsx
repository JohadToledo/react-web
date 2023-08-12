
import { Link } from 'react-scroll'


function Header() {
  return (
    <div className="header-content">
      <div> Johad Toledo </div>
      <nav>
      <div>
        <Link>Skills</Link>
        <Link>Projects</Link>
        <Link>About</Link>
      </div>
      <div>
        <Link>Contacts</Link>
      </div>
      </nav>
    </div>
  );
}

export default Header;
