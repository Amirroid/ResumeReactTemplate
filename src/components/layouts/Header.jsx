import SecondaryButton from "../buttons/SecondaryButton";
import Logo from "../images/Logo";
import Menu from "../menu/Menu";

export default function Header({ currentPage, onClickContactMe, onMenuClick }) {
  const menuItems = ["Home", "Projects", "Tech Stacks"];
  return (
    <div className="px-horizontal md:px-horizontal-md py-vertical fixed top-0 transition-all delay-200 left-0 right-0 z-50 backdrop-blur-lg shadow-md bg-[rgba(0,0,0,0.8)]">
      <div className="flex flex-wrap md:flex-nowrap items-center w-full relative">
        <div className="flex justify-between items-center w-full md:flex-1">
          <div><Logo /></div>
          <div className="block md:hidden">
            <SecondaryButton onClick={onClickContactMe}>
              <span className="font-bold">Contact Me</span>
            </SecondaryButton>
          </div>
        </div>
        <div className="w-full md:w-auto flex justify-center mt-2 md:mt-0">
          <Menu menuItems={menuItems} enabledItem={currentPage} onMenuClick={onMenuClick} />
        </div>
        <div className="hidden md:flex-1 md:flex md:justify-end">
          <SecondaryButton onClick={onClickContactMe}>
            <span className="font-bold">Contact Me</span>
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}