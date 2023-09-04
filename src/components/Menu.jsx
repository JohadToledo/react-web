import { useState } from 'react';

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
        <div className="absolute top-12 right-0 mt-2 py-2 w-36 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {/* Dropdown content */}
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
            <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
            <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}