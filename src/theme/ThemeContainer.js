import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";
import "./Theme.css";

const ThemeContainer = (props) => {
  const { currentTheme } = useContext(ThemeContext);
  console.log(currentTheme);
  const themeClassName = () => {
    if (currentTheme === "light") {
      return "light-theme";
    }
    if (currentTheme === "dark") {
      return "dark-theme";
    } else if (currentTheme === "default") {
      return "";
    }
  };
  //   console.log("Theme className", themeClassName());
  return (
    <div className={`theme-container ${themeClassName()}`}>
      {props.children}
    </div>
  );
};

export default ThemeContainer;
