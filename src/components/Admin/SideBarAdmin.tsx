import { Home, FileText, MessageSquare, Folder } from "lucide-react";

export const SideBarAdmin = () => {
  return (
    <aside className="flex flex-col flex-grow  items-center bg-gradient-to-br from-indigo-50 via-white to-sky-50 shadow-lg backdrop-blur-xl h-screen w-64 p-6 rounded-r-3xl">
      {/* Logo */}
      <a href="/" className="mb-12">
        <h1 className="text-3xl font-bold text-blue-500 tracking-wide hover:text-blue-600 transition duration-300">
          YiyehDev
        </h1>
      </a>

      {/* Menú */}
      <ul className="w-full space-y-4">
        <li>
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 w-full text-blue-500 font-medium rounded-xl transition duration-300 hover:bg-blue-100 hover:text-blue-600"
          >
            <Home size={20} />
            Inicio
          </a>
        </li>

        <li>
          <a
            href="/Admin/Posts"
            className="flex items-center gap-3 px-4 py-3 w-full text-blue-500 font-medium rounded-xl transition duration-300 hover:bg-blue-100 hover:text-blue-600"
          >
            <FileText size={20} />
            Posts
          </a>
        </li>

        <li>
          <a
            href="/Admin/Messages"
            className="flex items-center gap-3 px-4 py-3 w-full text-blue-500 font-medium rounded-xl transition duration-300 hover:bg-blue-100 hover:text-blue-600"
          >
            <MessageSquare size={20} />
            Mensajes
          </a>
        </li>

        <li>
          <a
            href="/Admin/Projects"
            className="flex items-center gap-3 px-4 py-3 w-full text-blue-500 font-medium rounded-xl transition duration-300 hover:bg-blue-100 hover:text-blue-600"
          >
            <Folder size={20} />
            Proyectos
          </a>
        </li>
      </ul>
    </aside>
  );
};
