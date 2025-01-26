import { NavBar } from "../assets/components/shared/NavBar";
import { HomeHeader } from "../assets/components/Home/HomeHeader";
import { SkillsAndPersonal } from "../assets/components/Home/SkillsAndPersonal";
import { Projects } from "../assets/components/Home/Projects";
import { Footer } from "../assets/components/shared/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div id="home" className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 flex flex-col items-center pb-12 mt-16 ">
        <div className="w-full md:w-6xl px-4 sm:px-6 md:px-8 mx-auto">
          <section id="home" className="mt-8 sm:mt-12 lg:mt-16">
            <HomeHeader />
            <SkillsAndPersonal />
            <Projects />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};
