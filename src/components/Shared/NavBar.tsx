import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";
//import { motion } from "framer-motion";



export const NavBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" top-0 left-0 w-full p-4 bg-gradient-to-br from-indigo-50 via-white to-sky-50 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-400 font-bold transition text-2xl ml-10 ">
          YiyehDev
        </div>

        <div className="flex w-full items-center justify-center  ml-4">
          <LanguageSwitcher />
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
          className={`${isOpen ? "block" : "hidden"
            } absolute z-50 top-16 left-0  bg-white shadow-md md:static md:flex justify-end md:space-x-2 md:bg-transparent md:shadow-none min-w-lg`}
        >
          <NavBarItem title={t("navBar.home")} path="#home" toggleMenu={toggleMenu} isOpen={isOpen} />
          <NavBarItem title={t("navBar.about")} path="#sobre-mi" toggleMenu={toggleMenu} isOpen={isOpen} />
          <NavBarItem title={t("navBar.projects")} path="#projects" toggleMenu={toggleMenu} isOpen={isOpen} />
          <NavBarItem title={t("navBar.contact")} path="#contact" toggleMenu={toggleMenu} isOpen={isOpen} />
          <NavBarItem title={t("navBar.blog")} path="/blog" toggleMenu={toggleMenu} isOpen={isOpen} />
        </ul>
      </div>
    </nav>
  );
};

interface NavBarItemProps {
  title: string;
  path: string;
  toggleMenu: () => void;
  isOpen: boolean
}

export const NavBarItem = ({ title, path, toggleMenu}: NavBarItemProps) => {
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


    return (<li className=" ">
      {path.startsWith("#") ? (
        <a
          href={path}
          onClick={handleScroll}
          className="block min-w-screen  md:min-w-0 justify-center px-4 py-2 font-bold text-blue-400 hover:text-blue-600 md:inline-block md:px-2 whitespace-nowrap s"
        >
          {title}
        </a>
      ) : (
        <NavLink
          to={path}
          onClick={toggleMenu}
          className={({ isActive }) =>
            `block min-w-screen md:min-w-0 px-4 py-2 text-blue-400 hover:blue-gray-600 md:inline-block md:px-2 font-bold ${isActive ? "font-bold text-blue-600 whitespace-nowrap" : ""
            }`
          }
        >
          {title}
        </NavLink>
      )}
    </li>
    );
  
};



// export const NavBarItem = ({ title, path, toggleMenu, isOpen }: NavBarItemProps) => {
//   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     if (path.startsWith("#")) {
//       e.preventDefault();
//       const targetId = path.slice(1);
//       const targetElement = document.getElementById(targetId);
//       if (targetElement) {
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//       toggleMenu();
//     }
//   };

//   if (isOpen) {

//     return (<li className=" ">
//       {path.startsWith("#") ? (
//         <a
//           href={path}
//           onClick={handleScroll}
//           className="flex min-w-screen items-center justify-center px-4 py-2 font-bold text-blue-400 hover:text-blue-600 md:inline-block md:px-2"
//         >
//           {title}
//         </a>
//       ) : (
//         <NavLink
//           to={path}
//           onClick={toggleMenu}
//           className={({ isActive }) =>
//             `flex min-w-screen items-center justify-center px-4 py-2 text-blue-400 hover:blue-gray-600 md:inline-block md:px-2 font-bold ${isActive ? "font-bold text-blue-600" : ""
//             }`
//           }
//         >
//           {title}
//         </NavLink>
//       )}
//     </li>
//     );

//   } else {

//     return (<li className=" ">
//       {path.startsWith("#") ? (
//         <a
//           href={path}
//           onClick={handleScroll}
//           className="block px-4 py-2 font-bold text-blue-400 hover:text-blue-600 md:inline-block md:px-2"
//         >
//           {title}
//         </a>
//       ) : (
//         <NavLink
//           to={path}
//           onClick={toggleMenu}
//           className={({ isActive }) =>
//             `block px-4 py-2 text-blue-400 hover:blue-gray-600 md:inline-block md:px-2 font-bold ${isActive ? "font-bold text-blue-600" : ""
//             }`
//           }
//         >
//           {title}
//         </NavLink>
//       )}
//     </li>
//     );
//   }
// };
