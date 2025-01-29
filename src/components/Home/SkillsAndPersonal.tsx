import { useTranslation } from "react-i18next";
import { TechBadge } from "../Shared/TechSkill";

export const SkillsAndPersonal = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "Trabajo en equipo", color: "blue" },
    { name: "Comunicación efectiva", color: "green" },
    { name: "Resolución de problemas", color: "yellow" },
    { name: "Adaptabilidad", color: "purple" },
    { name: "Aprendizaje constante", color: "pink" }
  ];

  const techStack = [
    "Javascript", "Flutter", "Unreal Engine", "Unity", "Dart", "C#",
    "Godot Engine", "HTML", "CSS", "Laravel", "MYSQL", "GIT",
    "Tailwind CSS", "TypeScript", "React"
  ];

  return (

    <div id="sobre-mi" className="my-12 mx-auto px-6 py-12 bg-gradient-to-br from-indigo-50 via-white to-sky-50 rounded-2xl p-8 shadow-xl border border-gray-200">
      {/* Habilidades Personales y Técnicas */}
      <aside className="flex flex-col">

        {/* Habilidades Personales */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-blue-400 mb-6"> {t("skillsAndPersonal.personalSkills.title")}</h2>
          <p className="text-md text-gray-700 mb-6 text-justify">
            {t("skillsAndPersonal.personalSkills.description")}
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <li
                key={index}
                className={`bg-${skill.color}-100 text-${skill.color}-600 font-medium text-sm px-4 py-2 rounded-full shadow transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-default`}
              >
                {t(`skillsAndPersonal.personalSkills.skills.${index}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* Habilidades Técnicas */}
        <div>
          <h2 className="text-3xl font-extrabold text-blue-400 mb-6">{t("skillsAndPersonal.technicalSkills.title")}</h2>
          <div className="skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
            {techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-6">{t("skillsAndPersonal.technicalSkills.description")}</p>
        </div>
      </aside>
    </div>
  );
};
