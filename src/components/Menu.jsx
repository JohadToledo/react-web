import { useState } from 'react';
import { Link } from "react-scroll";


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button
        className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
        onClick={toggleDropdown}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
              : 'opacity-50 group-hover:opacity-100'
          }`}
        />
      </button>
      {isOpen ? (
        <div  className="absolute top-12 right-20 mt-2 py-2 w-2/3 h-38 bg-transparent border border-gray-300 rounded-lg shadow-lg z-10">
          <ul>
            <li  className="px-4 py-2 hover:bg-gray-100">
            <Link onClick={toggleDropdown} className='bg-transparent text-teal-500' to="projects">Projects</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
            <Link onClick={toggleDropdown} className='bg-transparent text-teal-500' to="skills">Skills</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100">
            <Link onClick={toggleDropdown} className='bg-transparent text-teal-500' to="contact">Contacts</Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}