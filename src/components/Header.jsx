import { Link } from "react-scroll";

export function Header() {
  return (
    <section
      id="header"
      className="p-5 fixed w-screen max-w-7xl z-10 mx-auto bg-transparent text-2xl text-teal-500"
    >
      <div className="flex justify-between bg-transparent">
        <div className="bg-transparent"> Johad Toledo </div>
        <div className="bg-transparent">
          <nav className="gap-5 flex bg-transparent">
            <Link className='bg-transparent text-teal-500' to="projects">Projects</Link>
            <Link className='bg-transparent text-teal-500' to="skills">Skills</Link>
            <Link className='bg-transparent text-teal-500' to="contact">Contacts</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
