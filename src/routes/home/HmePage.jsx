import BackDropImage from "../../components/images/BackDropImage";
import MyInformationSection from "../../components/my_information/MyInformationSection";
import MyImage from "../../components/images/MyImage";
import SkillsMarque from "../../components/anim/SkillsMarque";
import Header from "../../components/layouts/Header";
import AppLayout from "../../components/layouts/app/AppLayout";
import ProjectsSection from "../../components/sections/Projects";
import TechStacksSection from "../../components/sections/TechStacksSections"
import Footer from "../../components/layouts/Footer";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="relative min-h-screen">
        <BackDropImage />
        <div className="absolute top-0 justify-center items-center w-full h-full pointer-events-none md:block hidden">
          <MyImage />
        </div>

        <MyInformationSection />
        <Header />
      </div>

      <SkillsMarque />
      <ProjectsSection />
      <TechStacksSection />
      <Footer />
    </AppLayout>
  );
}