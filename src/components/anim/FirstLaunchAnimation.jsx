import React, { useContext, useEffect, useState } from "react";
import ChangeThemeContext from "../../context/ChangeThemeContext";
import TranslationContext from "../../context/TranslationContext";

export default function FirstLaunchAnimation({ children }) {
    const [visible, setVisible] = useState(false);
    const { _, i18n } = useContext(TranslationContext);

    const onChangeTheme = () => {
        setVisible(false);
        setTimeout(() => {
            const newLang = i18n.language === "fa" ? "en" : "fa";
            i18n.changeLanguage(newLang)
            setVisible(true);
        }, 500)
    }

    useEffect(() => {
        if (visible) return
        setVisible(true);
    }, []);

    return (
        <ChangeThemeContext.Provider value={onChangeTheme}>
            <div className="max-w-screen overflow-hidden min-h-screen bg-black flex flex-col items-center justify-center gap-4">
                {React.Children.map(children, (child, index) => (
                    <div
                        className={`transition-all duration-700 ease-[cubic-bezier(0.4, 0.0, 0.2, 1.0)] delay-[${index * 100}ms]
                        ${visible ? "opacity-100 blur-none mr-0" : "opacity-0 blur-lg mr-12"}`}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </ChangeThemeContext.Provider>
    );
}
