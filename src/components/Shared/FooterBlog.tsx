export const FooterBlog = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-50 via-white to-sky-50 text-blue-700 py-8">
      <div className="container mx-auto px-6">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo o Nombre */}
          <div className="text-2xl text-blue-400 font-bold tracking-wide mb-4 md:mb-0">
            YiyehDev
          </div>
          {/* Enlaces de navegación */}
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-blue-400 font-bold hover:text-blue-800 transition"
            >
              Sobre mí
            </a>
            <a
              href="/"
              className="text-blue-400 font-bold hover:text-blue-800 transition"
            >
              Proyectos
            </a>
            <a
              href="/"
              className="text-blue-400 font-bold hover:text-blue-800 transition"
            >
              Contacto
            </a>
          </div>
        </div>
        {/* Separador */}
        <hr className="my-6 border-blue-200" />
        {/* Derechos reservados */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-blue-400 font-bold  mb-4 md:mb-0">
             {new Date().getFullYear()} YiyehDev.
          </p>
          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/_Yiyeh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-bold hover:text-blue-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23.643 4.937a9.59 9.59 0 01-2.828.797A4.917 4.917 0 0023 3.14c-.94.555-1.98.959-3.084 1.184A4.916 4.916 0 0016.616 3c-2.718 0-4.92 2.201-4.92 4.917 0 .386.044.762.127 1.124A13.94 13.94 0 011.671 3.15a4.882 4.882 0 00-.666 2.473 4.917 4.917 0 002.187 4.1 4.902 4.902 0 01-2.228-.616v.062c0 2.28 1.618 4.182 3.77 4.612a4.946 4.946 0 01-2.224.084 4.925 4.925 0 004.6 3.419A9.868 9.868 0 010 20.93a13.9 13.9 0 007.548 2.212c9.051 0 14-7.496 14-13.986 0-.212-.005-.425-.014-.637A10.012 10.012 0 0024 4.59a9.64 9.64 0 01-2.357.646z" />
              </svg>
            </a>
            <a
              href="https://github.com/Yiyeh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-bold hover:text-blue-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.011-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.469-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.004-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.623-5.475 5.92.43.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.287 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="/#contact"
              className="text-blue-400 font-bold hover:text-blue-800 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M12 13.065L0 6.194V6c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2v.194l-12 6.871zm11-2.07V18c0 1.104-.896 2-2 2H3c-1.104 0-2-.896-2-2v-7.005l11 6.327 11-6.327z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
