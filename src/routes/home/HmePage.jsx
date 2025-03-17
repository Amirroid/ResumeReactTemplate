import BackDropImage from "../../components/images/BackDropImage";
import MyInformationSection from "../../components/my_information/MyInformationSection";
import MyImage from "../../components/images/MyImage";
import SkillsMarque from "../../components/skills/SkillsMarque";
import Header from "../../components/layouts/home/Header";
import AppLayout from "../../components/layouts/app/AppLayout";

export default function HomePage() {
  return (
    <AppLayout>
      <div className="relative min-h-screen">
        <Header />
        <BackDropImage />
        <div className="absolute top-0 flex justify-center items-center w-full h-full pointer-events-none">
          <MyImage />
        </div>

        <MyInformationSection />
      </div>

      <SkillsMarque />
    </AppLayout>
  );
}