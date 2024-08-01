import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContextProvide";
import { translations } from "./translations";

// const LanguageTranslator = ({ word }) => {
//   const { language } = useContext(LanguageContext);

//   const translatedWord = () => {
//     if (translations[language] && translations[language][word]) {
//       return translations[language][word];
//     }
//     return word; // Fallback if translation not found
//   };

//   return <>{translatedWord()}</>;

const L = ({ w }) => {
  const { language } = useContext(LanguageContext);

  const translatedWord = () => {
    if (translations[language] && translations[language][w]) {
      return translations[language][w];
    }
    return w; // Fallback if translation not found
  };

  return <>{translatedWord()}</>;
};

export default L;
