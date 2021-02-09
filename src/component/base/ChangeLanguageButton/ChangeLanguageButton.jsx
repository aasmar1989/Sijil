import React from 'react';
import { useTranslation } from 'react-i18next';
import "./style.css"

export const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang)
  }

  const getLanguage = () => i18n.language || window.localStorage.i18nLng
  
  return (
    <nav className="change-lang-wrap">
    {getLanguage() === "ar" 
      ? <button className="change-lang-btn" onClick={() => handleClick('en')}>
      English
        </button>
      : <button className="change-lang-btn" onClick={() => handleClick('ar')}>
      العربية
        </button>
    }
    </nav>
  );
}