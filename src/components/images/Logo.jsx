import { useContext } from "react";
import TranslationContext from "../../context/TranslationContext";

export default function Logo() {
    const { t } = useContext(TranslationContext);
    return (
        <h2 className="text-xl font-bold">{t('name')}</h2>
    )
}