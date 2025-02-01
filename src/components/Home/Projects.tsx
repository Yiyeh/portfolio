import { useTranslation } from "react-i18next";
import { ProjectCard } from "../Shared/ProjectCard"

export const Projects = () => {
  const { t } = useTranslation();
  return (

    <div id="projects" className="flex flex-col mx-auto gap-6 items-center justify-center ">
      <ProjectCard
        title={t('projects.portfolio.title')}
        src="/img/yiyehdev.png"
        info={t('projects.portfolio.description')}
        link="https://yiyehdev.com"
        githubLink="https://github.com/Yiyeh/portfolio" // Añadido link a GitHub
        linkName="YiyehDev"
        githubName="GitHub"
        tech={['React', 'Tailwind CSS']}
      />
      <ProjectCard
        title={t('projects.gitGudAiming.title')}
        src="/img/gitgud.jpg"
        info={t('projects.gitGudAiming.description')}
        link="https://yiyeh.itch.io/gitgud-aiming"
        githubLink="" // Añadido link a GitHub
        linkName="Itch.io"
        githubName="GitHub"
        tech={['Unreal Engine']}
      />
      <ProjectCard
        title={t('projects.chileMiniapps.title')}
        src="/img/chileminiapps.jpg"
        info={t('projects.chileMiniapps.description')}
        link="https://play.google.com/store/apps/details?id=com.YiyehDev.resources_chile"
        githubLink="https://github.com/Yiyeh/chile-miniapps" // Añadido link a GitHub
        linkName="Google PlayStore"
        githubName="GitHub"
        tech={['Dart', 'Flutter']}
      />
      <ProjectCard
        title={t('projects.flaiteGPT.title')}
        src="/img/flaite-gpt.jpg"
        info={t('projects.flaiteGPT.description')}
        link="https://flaitegpt.netlify.app/"
        githubLink="https://github.com/Yiyeh/FlaiteGPT" // Añadido link a GitHub
        linkName="FlaiteGPT"
        githubName="GitHub"
        tech={['Javascript', 'HTML', 'CSS', 'React']}
      />
      <ProjectCard
        title={t('projects.pomodoroApp.title')}
        src="/img/pomodoro.jpg"
        info={t('projects.pomodoroApp.description')}
        link="https://pomodoro-yiyeh.vercel.app/"
        githubLink="https://github.com/Yiyeh/PomodoroApp" // Añadido link a GitHub
        linkName="Pomodoro App"
        githubName="GitHub"
        tech={['Javascript', 'HTML', 'CSS', 'React', 'Tailwind CSS']}
      />

      <ProjectCard
        title={t('projects.tokTik.title')}
        info={t('projects.tokTik.description')}
        githubLink="https://github.com/Yiyeh/TokTik" // Añadido link a GitHub
        linkName="TokTik"
        githubName="GitHub"
        tech={['Dart', 'Flutter']}
      />
      <ProjectCard
        title={t('projects.yesNoMaybeApp.title')}
        info={t('projects.yesNoMaybeApp.description')}
        githubLink="https://github.com/Yiyeh/chatYesNoMaybe" // Añadido link a GitHub
        linkName="Yes No App"
        githubName="GitHub"
        tech={['Dart', 'Flutter']}
      />
    </div>

  )
}
