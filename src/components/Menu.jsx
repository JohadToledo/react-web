import { useState } from "react";
import { Link } from "react-scroll";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-petroleo transition ease transform duration-300`;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <div
        style={{
          zIndex: 10,
          overflow: "hidden",
          transition: "height 0.5s",
          height: isOpen ? 200 : 0,
          backgroundColor: "#1b1b32",
        }}
        className="fixed  top-0 right-0  w-full h-38 border border-gray-300 rounded-lg shadow-lg"
      >
        <ul className="grid grid-col text-center py-5">
          <Link
            onClick={toggleDropdown}
            className="bg-transparent text-teal-500 py-2"
            to="projects"
          >
            Projects
          </Link>
          <Link
            onClick={toggleDropdown}
            className="bg-transparent text-teal-500 py-2"
            to="skills"
          >
            Skills
          </Link>
          <Link
            onClick={toggleDropdown}
            className="bg-transparent text-teal-500 py-2"
            to="contact"
          >
            Contacts
          </Link>
        </ul>
      </div>
      <button
        className="fixed right-4 top-4 z-10 flex flex-col h-12 w-12 border-2 border-petroleo rounded justify-center items-center group"
        onClick={toggleDropdown}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </div>
  );
}
