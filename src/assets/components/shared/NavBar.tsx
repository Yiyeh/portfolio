import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gradient-to-br from-indigo-50 via-white to-sky-50 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-gray-600 font-bold transition text-2xl">
          YiyehDev
        </div>

        {/* Hamburger Button (Visible in mobile) */}
        <button
          className="text-gray-600 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex justify-end md:space-x-2 md:bg-transparent md:shadow-none`}
        >
          <NavBarItem title="Inicio" path="#home" toggleMenu={toggleMenu} />
          <NavBarItem title="Sobre mí" path="#sobre-mi" toggleMenu={toggleMenu} />
          <NavBarItem title="Proyectos" path="#projects" toggleMenu={toggleMenu} />
          <NavBarItem title="Contacto" path="#footer" toggleMenu={toggleMenu} />
        </ul>
      </div>
    </nav>
  );
};

interface NavBarItemProps {
  title: string;
  path: string;
  toggleMenu: () => void;
}

export const NavBarItem = ({ title, path, toggleMenu }: NavBarItemProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      toggleMenu();
    }
  };

  return (
    <li className="md:ml- ">
      {path.startsWith("#") ? (
        <a
          href={path}
          onClick={handleScroll}
          className="block px-4 py-2 text-gray-600 hover:text-gray-800 md:inline-block md:px-2"
        >
          {title}
        </a>
      ) : (
        <NavLink
          to={path}
          onClick={toggleMenu}
          className={({ isActive }) =>
            `block px-4 py-2 text-gray-600 hover:text-gray-800 md:inline-block md:px-2 ${
              isActive ? "font-bold text-blue-600" : ""
            }`
          }
        >
          {title}
        </NavLink>
      )}
    </li>
  );
};
