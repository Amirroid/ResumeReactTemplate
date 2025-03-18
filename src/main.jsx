import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './routes/home/HmePage'
import './i18n'
import TranslationContext from './context/TranslationContext'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

const App = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <TranslationContext.Provider value={{ t, i18n }}>
      <HomePage />
    </TranslationContext.Provider>
  )
}

createRoot(document.getElementById('root')).render(<App />)