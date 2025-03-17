import BackDropImage from "../../components/images/BackDropImage";
import MyInformationSection from "../../components/my_information/MyInformationSection";
import MyImage from "../../components/images/MyImage";
import SkillsMarque from "../../components/anim/SkillsMarque";
import Header from "../../components/layouts/home/Header";
import AppLayout from "../../components/layouts/app/AppLayout";
import ProjectsSection from "../../components/sections/Projects";
import Spacer from "../../components/spacer/Spacer";
export default function HomePage() {
  return (
    <AppLayout>
      <div className="relative min-h-screen">
        <Header />
        <BackDropImage />
        <div className="absolute top-0 justify-center items-center w-full h-full pointer-events-none md:block hidden">
          <MyImage />
        </div>

        <MyInformationSection />
      </div>

      <SkillsMarque />
      <ProjectsSection />
      <Spacer height={10} />
    </AppLayout>
  );
}