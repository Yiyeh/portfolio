import { TechBadge } from "../Shared/TechSkill";

export const SkillsAndPersonal = () => {
  return (

    <div id="sobre-mi" className="my-12 mx-auto px-6 py-12 bg-gradient-to-br from-indigo-50 via-white to-sky-50 rounded-2xl p-8 shadow-xl border border-gray-200">
      {/* Habilidades Personales y Técnicas */}
      <aside className="flex flex-col">
        
        {/* Habilidades Personales */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-6">Habilidades Personales</h2>
          <p className="text-md text-gray-700 mb-6 text-justify">
          Habilidades adicionales que enriquecen y complementan mi perfil técnico, 
          permitiéndome abordar proyectos de manera integral, adaptarme a diferentes 
          desafíos y aportar soluciones más completas y eficientes.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            <li className="bg-blue-100 text-blue-600 font-medium text-sm px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
              Trabajo en equipo
            </li>
            <li className="bg-green-100 text-green-600 font-medium text-sm px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
              Comunicación efectiva
            </li>
            <li className="bg-yellow-100 text-yellow-600 font-medium text-sm px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
              Resolución de problemas
            </li>
            <li className="bg-purple-100 text-purple-600 font-medium text-sm px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
              Adaptabilidad
            </li>
            <li className="bg-pink-100 text-pink-600 font-medium text-sm px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default">
              Aprendizaje constante
            </li>
          </ul>
        </div>

        {/* Habilidades Técnicas */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400 mb-6">Habilidades Técnicas</h2>
          <div className="skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
            <TechBadge tech="Javascript" />
            <TechBadge tech="Flutter" />
            <TechBadge tech="Unreal Engine" />
            <TechBadge tech="Unity" />
            <TechBadge tech="Dart" />
            <TechBadge tech="C#" />
            <TechBadge tech="Godot Engine" />
            <TechBadge tech="HTML" />
            <TechBadge tech="CSS" />
            <TechBadge tech="Laravel" />
            <TechBadge tech="MYSQL" />
            <TechBadge tech="GIT" />
            <TechBadge tech="Tailwind CSS" />
            <TechBadge tech="TypeScript" />
            <TechBadge tech="React" />
          </div>
          <p className="text-xs text-gray-600 mt-6">* Al clickear sobre alguna tecnología de desarrollo, te redirigirá al sitio oficial de la tecnología.</p>
        </div>
      </aside>
    </div>
  );
};
