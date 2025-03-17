import SecondaryButton from "../buttons/SecondaryButton";
import Logo from "../images/Logo";
import Menu from "../menu/Menu";

export default function Header({ currentPage, onClickContactMe, onMenuClick }) {
  const menuItems = ["Home", "Projects", "Tech Stacks"];
  return (
    <div className="px-horizontal md:px-horizontal-md py-vertical fixed top-0 transition-all delay-200 left-0 right-0 z-50 backdrop-blur-lg shadow-md bg-[rgba(0,0,0,0.8)]">
      <div className="flex items-center w-full relative">
        <div className="absolute left-0"><Logo /></div>
        <div className="mx-auto"><Menu menuItems={menuItems} enabledItem={currentPage} onMenuClick={onMenuClick} /></div>
        <div className="absolute right-0"><SecondaryButton onClick={onClickContactMe}><span className="font-bold">Contact Me</span></SecondaryButton></div>
      </div>
    </div>
  );
}
