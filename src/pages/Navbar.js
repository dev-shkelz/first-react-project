import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../shared/icons/Logo";
import OpenSignUp from "../components/users/OpenSignUp";
import { UserContext } from "../context/UserContextProvider";
import Profile from "../components/users/Profile";
import OpenLogIn from "../components/users/OpenLogIn";
import { ThemeContext } from "../theme/ThemeContextProvider";
import { LanguageContext } from "../context/LanguageContextProvide";
import L from "../utils/L";
import OpenMenuIcon from "../shared/icons/OpenMenuIcon";

const Navbar = () => {
  const { loggedUser } = useContext(UserContext);
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* ------------------Left Menu--------------- */}
      <div className="nav-menu">
        <div className="nav-menu-tools">
          {/* ------Theme------ */}
          <div className="theme-selector">
            <label>
              <L w="Theme" />:
              <select
                value={currentTheme}
                onChange={(evt) => setCurrentTheme(evt.target.value)}
              >
                <option value="default">
                  <L w="Default" />
                </option>
                <option value="light">
                  <L w="Light" />
                </option>
                <option value="dark">
                  <L w="Dark" />
                </option>
              </select>
            </label>
          </div>
          {/* -----Language------ */}
          <div className="theme-selector">
            <label>
              <L w="Language" />:
              <select
                value={language}
                onChange={(evt) => setLanguage(evt.target.value)}
              >
                <option value="en">
                  {" "}
                  <L w="English" />
                </option>
                <option value="al">
                  {" "}
                  <L w="Albanian" />
                </option>
                <option value="es">
                  {" "}
                  <L w="Spanish" />
                </option>
                <option value="fr">
                  {" "}
                  <L w="French" />
                </option>
                <option value="ja">
                  {" "}
                  <L w="Japanese" />
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="open-nav-menu">T O O L S</div>
      </div>
      {/** ------------------------------NAVBAR-------------------------------- **/}
      <nav className="navbar">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav-list">
          <ul>
            <NavLink to="/">
              <L w="Home" />
            </NavLink>
            <NavLink to="/about">
              <L w="About" />
            </NavLink>
            <NavLink to="/contact">
              {" "}
              <L w="Contact" />
            </NavLink>
            <NavLink to="/demo-app">
              {" "}
              <L w="DEMO APP" />
            </NavLink>
          </ul>
        </div>
        <div className="nav-right">
          {loggedUser ? (
            <Profile />
          ) : (
            <>
              <OpenSignUp />
              <OpenLogIn />
            </>
          )}
        </div>
        <div
          className="nav-mobile-open-menu"
          onClick={(evt) => setIsNavMobileOpen(!isNavMobileOpen)}
        >
          {isNavMobileOpen ? "X" : <OpenMenuIcon />}
        </div>
      </nav>
      {/* -------------------------------For mobile - Hidden in desktop-------------------------------- */}
      <div className={`nav-mobile ${isNavMobileOpen && `show-mobile`}`}>
        <div className="nav-mobile-list">
          <NavLink to="/">
            <L w="Home" />
          </NavLink>
          {/* <NavLink to="/products">Products</NavLink> */}
          <NavLink to="/about">
            <L w="About" />
          </NavLink>
          <NavLink to="/contact">
            {" "}
            <L w="Contact" />
          </NavLink>
          <NavLink to="/demo-app">
            {" "}
            <L w="DEMO APP" />
          </NavLink>
        </div>
        <div className="nav-mobile-buttons">
          {loggedUser ? (
            <Profile />
          ) : (
            <>
              <OpenSignUp />
              <OpenLogIn />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
