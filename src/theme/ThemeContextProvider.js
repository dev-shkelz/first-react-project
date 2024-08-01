import React, { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [currentTheme, setCurrentTheme] = useState("default");
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
