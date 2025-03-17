import SecondaryButton from "../../buttons/SecondaryButton";
import Logo from "../../images/Logo";
import Menu from "../../menu/Menu";

export default function Header() {
  const menuItems = ["Home", "Work", "Services", "Contact"];
  return (
    <div className="px-horizontal  pt-vertical">
      <div className="flex items-center w-full relative">
        <div className="absolute left-0"><Logo /></div>
        <div className="mx-auto"><Menu menuItems={menuItems} enabledItem="Home" /></div>
        <div className="absolute right-0"><SecondaryButton><span className="font-bold">Contact Me</span></SecondaryButton></div>
      </div>
    </div>
  );
}
