import ChangeLanguageButton from "../buttons/ChangeLanguageButton";
import Logo from "../images/Logo";
import Menu from "../menu/Menu";
import TranslationContext from "../../context/TranslationContext";
import { useContext } from "react";
import ChangeThemeContext from "../../context/ChangeThemeContext";

export default function Header({ currentPage, onMenuClick }) {
  const { t, _ } = useContext(TranslationContext);
  const onChangeTheme = useContext(ChangeThemeContext);
  const menuItems = [t("home_section"), t("projects_section"), t("tech_stacks_section")];
  const toggleLanguage = () => {
    onChangeTheme();
  };
  return (
    <div className="px-horizontal md:px-horizontal-md py-vertical fixed top-0 transition-all delay-200 left-0 right-0 z-50 backdrop-blur-lg shadow-md bg-[rgba(0,0,0,0.8)]">
      <div className="flex flex-wrap md:flex-nowrap items-center w-full relative">
        <div className="flex justify-between items-center w-full md:flex-1">
          <div><Logo /></div>
          <div className="block md:hidden">
            <ChangeLanguageButton onClick={toggleLanguage} />
          </div>
        </div>
        <div className="w-full md:w-auto flex  mt-4 md:mt-0">
          <Menu menuItems={menuItems} enabledItem={currentPage} onMenuClick={onMenuClick} />
        </div>
        <div className="hidden md:flex-1 md:flex md:justify-end">
          <ChangeLanguageButton onClick={toggleLanguage} />
        </div>
      </div>
    </div>
  );
}
