import React, { createContext, useState } from "react";
export const LanguageContext = createContext();
const LanguageContextProvide = (props) => {
  const [language, setLanguage] = useState("en");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvide;
