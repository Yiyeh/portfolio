import { ProjectCard } from "../shared/ProjectCard"

export const Projects = () => {
  return (

      <div id="projects" className="flex flex-col mx-auto gap-6 items-center justify-center ">
        <ProjectCard 
          title="Git Gud Aiming" 
          src="/img/gitgud.jpg"
          info="Juego diseñado para mejorar la precisión y velocidad de apuntado en FPS, con niveles interactivos y gráficos de calidad, desarrollado en Unreal Engine 4."
          link="https://yiyeh.itch.io/gitgud-aiming"
          githubLink="" // Añadido link a GitHub
          linkName="Itch.io"
          githubName="GitHub"
          tech={['Unreal Engine']}               
        />
        <ProjectCard 
          title="Chile Miniapps" 
          src="/img/chileminiapps.jpg"
          info="Aplicación que agrupa información útil y actualizada para los chilenos, incluyendo farmacias de turno, valor de divisas, agenda de servicios públicos y emergencias, pronóstico del clima, entre otros datos de interés." 
          link="https://play.google.com/store/apps/details?id=com.YiyehDev.resources_chile"
          githubLink="https://github.com/Yiyeh/chile-miniapps" // Añadido link a GitHub
          linkName="Google PlayStore"
          githubName="GitHub"
          tech={['Dart', 'Flutter']}               
        />
        <ProjectCard 
          title="FlaiteGPT" 
          src="/img/flaite-gpt.jpg"
          info="Aplicación creada para aprender React, que simula un chatbot similar a ChatGPT, utilizando la API de OpenAI (APIKEY actualmente caída)."
          link="https://flaitegpt.netlify.app/"
          githubLink="https://github.com/Yiyeh/FlaiteGPT" // Añadido link a GitHub
          linkName="FlaiteGPT"
          githubName="GitHub"
          tech={['Javascript', 'HTML', 'CSS', 'React']}               
        />
        <ProjectCard 
          title="Pomodoro App" 
          src="/img/pomodoro.jpg"
          info="Temporizador Pomodoro sencillo creado para practicar la gestión de estados en React. Funciona con ciclos de 25 minutos de trabajo seguidos de 5 minutos de descanso, y emite un sonido 'ding' en cada transición."
          link="https://pomodoro-yiyeh.vercel.app/"
          githubLink="https://github.com/Yiyeh/PomodoroApp" // Añadido link a GitHub
          linkName="Pomodoro App"
          githubName="GitHub"
          tech={['Javascript', 'HTML', 'CSS', 'React', 'Tailwind CSS']}               
        />
      </div>
  
  )
}
