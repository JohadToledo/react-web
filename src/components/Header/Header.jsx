import './header.css'
import { Link } from 'react-scroll'


function Header() {
  return (
    <div className="header-content">
      <div> Johad Toledo </div>
      <nav>
        <Link>Skills</Link>
        <Link>Projects</Link>
        <Link>About</Link>
        <Link>Contacts</Link>
      
      </nav>
    </div>
  );
}

export default Header;
