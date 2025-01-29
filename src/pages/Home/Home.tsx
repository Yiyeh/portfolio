import { NavBar } from "../../components/Shared/NavBar";
import { HomeHeader } from "../../components/Home/HomeHeader";
import { SkillsAndPersonal } from "../../components/Home/SkillsAndPersonal";
import { Projects } from "../../components/Home/Projects";
import { Footer } from "../../components/Shared/Footer";
import { SendContact } from "../../components/Home/Contact";


export const Home = () => {

  return (
    <>
      <NavBar />
      <div id="home" className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col items-center pb-12">
        <div className="sm:w-2xl md:w-3xl lg:w-6xl sm:max-w-2xl md:max-w-3xl lg:max-w-6xl px-4 sm:px-6 md:px-8">
          <section id="home" className="mt-8 sm:mt-12 md:mt-16">
            <HomeHeader />
            <SkillsAndPersonal />
            <Projects />
            <SendContact/>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
