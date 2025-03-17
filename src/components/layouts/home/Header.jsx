import { useEffect, useState } from "react";
import SecondaryButton from "../../buttons/SecondaryButton";
import Logo from "../../images/Logo";
import Menu from "../../menu/Menu";

export default function Header() {
  const menuItems = ["Home", "Work", "Services", "Contact"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className={`px-horizontal md:px-horizontal-md py-vertical fixed top-0 transition-all delay-200 left-0 right-0 z-50 ${isScrolled ? "backdrop-blur-lg shadow-md bg-[rgba(0,0,0,0.8)]" : "bg-black"}`}>
      <div className="flex items-center w-full relative">
        <div className="absolute left-0"><Logo /></div>
        <div className="mx-auto"><Menu menuItems={menuItems} enabledItem="Home" /></div>
        <div className="absolute right-0"><SecondaryButton><span className="font-bold">Contact Me</span></SecondaryButton></div>
      </div>
    </div>
  );
}
