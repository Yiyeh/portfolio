import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";

export const NavBarBlog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para la autenticación
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Si hay un usuario, está autenticado
    });

    // Limpiar el listener al desmontar el componente
    return () => unsubscribe();
  }, [auth]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false); // Actualizar el estado después de cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-gradient-to-br from-indigo-50 via-white to-sky-50 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-400 font-bold transition text-2xl">
          YiyehDev
        </div>

        {/* Botón hamburguesa (Visible en móviles) */}
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

        {/* Enlaces */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white shadow-md md:static md:flex justify-end md:space-x-4 md:bg-transparent md:shadow-none`}
        >
          <NavBarItem title="Inicio" path="/" toggleMenu={toggleMenu} />
          {isAuthenticated ? (
            <>
              <NavBarItem title="Dashboard" path="/admin/posts" toggleMenu={toggleMenu} />
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-red-500 hover:text-red-600 font-bold md:inline-block md:px-2"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <NavBarItem title="Login" path="/login" toggleMenu={toggleMenu} />
          )}
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
    <li className="md:ml-2">
      {path.startsWith("#") ? (
        <a
          href={path}
          onClick={handleScroll}
          className="block px-4 py-2 text-blue-400 hover:text-blue-400 font-bold md:inline-block md:px-2"
        >
          {title}
        </a>
      ) : (
        <NavLink
          to={path}
          onClick={toggleMenu}
          className={({ isActive }) =>
            `block px-4 py-2 text-blue-400 hover:text-blue-400 font-bold md:inline-block md:px-2 ${
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
