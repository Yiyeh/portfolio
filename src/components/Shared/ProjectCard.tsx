import { TechBadge } from "./TechSkill";

interface Props {
  title: string;
  src?: string;
  info: string;
  link?: string;
  linkName?: string;
  githubLink?: string; // Añadido link de GitHub
  githubName?: string; // Nombre del GitHub
  tech: string[];
}

export const ProjectCard = ({ title, src = "/img/github.jpg", info, link, linkName, githubLink, githubName, tech: text }: Props) => {
  return (
    <div className="p-6 shadow-lg shadow-violet-200 rounded-xl bg-white transition-transform transform hover:scale-102 hover:shadow-xl  flex flex-col">
      {/* Título */}
      <h2 className="text-3xl font-extrabold text-blue-400 mb-6 ">{title}</h2>

      <div className="flex gap-12">

        {/* Imagen */}
        <div className="rounded-lg overflow-hidden mb-4 shadow-md hidden md:block">
        
          
          <img
            className="w-full md:w-150 md:h-48 lg:h-48 object-cover hover:opacity-90 transition-opacity  "
            src={src}
            alt={title}
          />
        </div>

        {/* Descripción */}
        <div className="flex flex-col justify-between">

          <p className=" md:w-100 lg:w-150 text-md text-gray-600 pr-4 mb-4 text-justify">{info}</p>

          <div className="flex flex-col items-end justify-start">


          <div className="flex justify-end gap-4 mb-4">
            {/* Link (opcional) */}
            {link && (
              <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-1 bg-blue-100 text-blue-600 font-semibold text-md rounded-lg shadow-md hover:-rotate-z-2 hover:bg-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {linkName || "Ver más"}
              </a>
            )}

            {/* Botón de GitHub (opcional) */}
            {githubLink && (
              <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-1 bg-gray-600 text-white font-semibold text-md rounded-lg shadow-md hover:-rotate-z-2 hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {githubName || "Ver en GitHub"}
              </a>
            )}
          </div>

          
          <div className="techInCard flex flex-wrap mt-auto gap-2 justify-end">
            {text.map((techItem, i) => (
              <TechBadge key={i + techItem} tech={techItem} />
            ))}
          </div>
          
          </div>
          {/* Tecnologías */}

        </div>

      </div>
      {/* Contenedor de los botones */}

    </div>
  );
};
