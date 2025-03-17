import BackDropImage from "../../components/images/BackDropImage";
import MyInformationSection from "../../components/my_information/MyInformationSection";
import MyImage from "../../components/images/MyImage";
import SkillsMarque from "../../components/anim/SkillsMarque";
import Header from "../../components/layouts/Header";
import AppLayout from "../../components/layouts/app/AppLayout";
import ProjectsSection from "../../components/sections/Projects";
import TechStacksSection from "../../components/sections/TechStacksSections"
import Footer from "../../components/layouts/Footer";
import { useRef, useState } from "react";
import ObserveEnterExit from "../../components/anim/ObserveEnterExit";

export default function HomePage() {
  const threshold = .8
  const [currentPage, setCurrentPage] = useState(0)
  const footerRef = useRef(null)
  const onClickContactMe = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" })
  }
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const techStacksRef = useRef(null)
  const onMenuClick = (item) => {
    const offset = 100

    let targetElement = null
    switch (item) {
      case "Home":
        targetElement = homeRef.current
        break
      case "Projects":
        targetElement = projectsRef.current
        break
      case "Tech Stacks":
        targetElement = techStacksRef.current
        break
    }

    if (targetElement) {
      const topPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top: topPosition, behavior: "smooth" })
    }
  }



  return (
    <AppLayout>
      <div ref={homeRef}>
        <ObserveEnterExit threshold={threshold} onEnter={() => setCurrentPage("Home")}>
          <div className="relative min-h-screen">
            <BackDropImage />
            <div className="absolute top-0 justify-center items-center w-full h-full pointer-events-none md:block hidden">
              <MyImage />
            </div>

            <MyInformationSection />
            <Header currentPage={currentPage} onClickContactMe={onClickContactMe} onMenuClick={onMenuClick} />
          </div>
        </ObserveEnterExit>
      </div>
      <SkillsMarque />

      <div ref={projectsRef}>
        <ObserveEnterExit threshold={threshold} onEnter={() => setCurrentPage("Projects")}>
          <ProjectsSection />
        </ObserveEnterExit>
      </div>
      <div ref={techStacksRef}>
        <ObserveEnterExit threshold={threshold} onEnter={() => setCurrentPage("Tech Stacks")}>
          <TechStacksSection />
        </ObserveEnterExit>
      </div>
      <Footer ref={footerRef} />
    </AppLayout>
  );
}