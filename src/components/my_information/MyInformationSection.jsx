import { useContext, useEffect, useRef, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Spacer from "../spacer/Spacer";
import useAnimate from "../../hooks/useAnimate";
import TranslationContext from "../../context/TranslationContext";

export default function MyInformationSection({ onTalkClick }) {
    const headingRef = useRef(null);
    const [textWidth, setTextWidth] = useState("auto");
    const { t, i18n } = useContext(TranslationContext);
    const isEnglish = i18n.language === 'en';

    useEffect(() => {
        const updateWidth = () => {
            if (headingRef.current) {
                const range = document.createRange();
                range.selectNodeContents(headingRef.current);
                const rect = range.getBoundingClientRect();
                setTextWidth(`${rect.width}px`);
            }
        };

        updateWidth();

        const resizeObserver = new ResizeObserver(updateWidth);
        if (headingRef.current) {
            resizeObserver.observe(headingRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="flex md:flex-row flex-col md:h-auto h-[65vh] justify-between mt-12 px-horizontal md:px-horizontal-md">
            <div className="max-w-[40%]">
                <h1
                    ref={headingRef}
                    className={`text-7xl font-bold leading-[4.3rem] w-fit break-words whitespace-pre-line ${isEnglish && 'tracking-wider'}`}
                >
                    {t('name')}
                </h1>

                <p
                    className="text-sm font-light mt-4 break-words whitespace-normal"
                    style={{ width: textWidth, wordWrap: "break-word" }}
                >
                    {t('intrduction')}
                </p>
                <Spacer height={1.7} />
                <PrimaryButton onClick={onTalkClick}>{t('lets_talk')}</PrimaryButton>
            </div>
            <div className="space-y-4">
                <ExperienceItem title="4" description={t('years_of_experience')} isEnglish={isEnglish} />
            </div>
        </div>
    );
}

function ExperienceItem({ title, description, isEnglish }) {
    const [displayedTitle, setDisplayedTitle] = useAnimate({ value: 0 });
    useEffect(() => {
        setTimeout(() => {
            setDisplayedTitle(title);
        }, 1000);
    }, [title]);

    return (
        <div
            className={`flex flex-col ${isEnglish ? 'items-end' : 'items-start'} justify-center`}
            style={{ transform: `rotate(${isEnglish ? '10deg' : '-10deg'})` }}
        >
            <h2 className="text-7xl font-bold"><span className="text-primary">+</span>{parseInt(displayedTitle).toFixed(0)}</h2>
            <p className="text-sm font-light">{description}</p>
        </div>
    );
}