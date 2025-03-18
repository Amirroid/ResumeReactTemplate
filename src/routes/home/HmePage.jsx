import BackDropImage from "../../components/images/BackDropImage";
import MyInformationSection from "../../components/my_information/MyInformationSection";
import MyImage from "../../components/images/MyImage";
import SkillsMarque from "../../components/anim/SkillsMarque";
import Header from "../../components/layouts/Header";
import AppLayout from "../../components/layouts/app/AppLayout";
import ProjectsSection from "../../components/sections/Projects";
import TechStacksSection from "../../components/sections/TechStacksSections"
import Footer from "../../components/layouts/Footer";
import { useEffect, useRef, useState } from "react";
import ObserveEnterExit from "../../components/anim/ObserveEnterExit";

export default function HomePage() {
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

  useEffect(() => {
    const sectionRefs = [homeRef, projectsRef, techStacksRef];

    const observer = new IntersectionObserver((entries) => {
      let maxEntry = null;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!maxEntry || entry.intersectionRect.height > maxEntry.intersectionRect.height) {
            maxEntry = entry;
          }
        }
      })
      if (maxEntry) {
        setCurrentPage(maxEntry.target.id.replace("-", " "));
      } else {
        setCurrentPage(null)
      }
    }, { threshold: .01 })
    sectionRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);



  return (
    <AppLayout>

      <div ref={homeRef} id="Home">
        <div className="relative min-h-screen">
          <BackDropImage />
          <div className="absolute top-0 justify-center items-center w-full h-full pointer-events-none md:block hidden">
            <MyImage />
          </div>

          <MyInformationSection onTalkClick={onClickContactMe} />
          <Header currentPage={currentPage} onClickContactMe={onClickContactMe} onMenuClick={onMenuClick} />
        </div>
      </div>
      <SkillsMarque />

      <div ref={projectsRef} id="Projects">
        <ProjectsSection />
      </div>
      <div ref={techStacksRef} id="Tech-Stacks">
        <TechStacksSection />
      </div>
      <Footer ref={footerRef} />
    </AppLayout>
  );
}