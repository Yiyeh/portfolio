import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";

export const MiExxperience = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="flex flex-col mt-10 gap-6 items-start justify-start text-gray-600 bg-white/70 rounded-2xl p-6 sm:p-10 shadow-xl mx-auto">
      {/* Título */}
      <ReactMarkdown className="prose prose-blue">{t("home.titleExperience")}</ReactMarkdown>

      {/* Subtítulo */}
      <ReactMarkdown className="prose prose-blue">{t("home.subtitle")}</ReactMarkdown>

      {/* Lista de aprendizajes */}
      <ReactMarkdown className="prose prose-blue">{t("home.learningTitle")}</ReactMarkdown>
      <ul className="list-disc pl-6">
        {(t("home.learningList", { returnObjects: true }) as string[]).map((item, index) => (
          <li key={index}>
            <ReactMarkdown className="prose prose-blue">{item}</ReactMarkdown>
          </li>
        ))}
      </ul>

      {/* Dashboard */}
      <ReactMarkdown className="prose prose-blue">{t("home.dashboardTitle")}</ReactMarkdown>
      <ReactMarkdown className="prose prose-blue">{t("home.dashboardDescription")}</ReactMarkdown>
      <ul className="list-disc pl-6">
        {(t("home.dashboardList", { returnObjects: true }) as string[]).map((item, index) => (
          <li key={index}>
            <ReactMarkdown className="prose prose-blue">{item}</ReactMarkdown>
          </li>
        ))}
      </ul>

      {/* Reto */}
      <ReactMarkdown className="prose prose-blue">{t("home.challengeTitle")}</ReactMarkdown>
      <ReactMarkdown className="prose prose-blue">{t("home.challengeDescription")}</ReactMarkdown>

      {/* GitHub */}
      <ReactMarkdown className="prose prose-blue">{t("home.githubText")}</ReactMarkdown>
      <ReactMarkdown className="prose prose-blue">{t("home.githubLink")}</ReactMarkdown>
    </div>
  );
};