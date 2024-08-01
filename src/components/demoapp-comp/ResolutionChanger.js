//A resolution changer App that changes a youtube video based on user's inputs".
//The user can choose any video from youtube.

import React, { useContext, useState } from "react";
import YoutubeApp from "../youtube-player/YoutubeApp";
import "./ResolutionChanger.css";
import { Link, useNavigate } from "react-router-dom";
import L from "../../utils/L";
import { LanguageContext } from "../../context/LanguageContextProvide";
import { UserContext } from "../../context/UserContextProvider";

const ResolutionChanger = () => {
  const [youtubeId, setYoutubeId] = useState("");
  console.log("youtubeId", typeof youtubeId.value);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [sideColor, setSideColor] = useState("");
  const [appBackground, setAppBackground] = useState("");
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const [isYoutubeAppOpened, setIsYoutubeAppOpened] = useState(false);
  const [fullScreen, setFullScreen] = useState(0);
  const [volume, setVolume] = useState(0);

  const navigate = useNavigate();
  const { language, setLanguage } = useContext(LanguageContext);
  const { loggedUser } = useContext(UserContext);

  const handleUrlChange = (evt) => {
    const inputUrl = evt.target.value.trim(); // Trim whitespace
    const extractedId = extractYoutubeId(inputUrl);
    setYoutubeId(extractedId);
  };

  const extractYoutubeId = (url) => {
    // Regular expression to match YouTube video ID
    const regExp = /(?:\?|&)v=([^&]+)/;
    // Extract video ID using regex
    const match = url.match(regExp);
    // If match is found, return video ID; otherwise, return empty string
    return match ? match[1] : "";
  };

  const handleResolutionChange = (evt) => {
    // setResolution(evt.target.value);
    switch (evt.target.value) {
      case "560x400":
        setWidth("560px");
        setHeight("400px");
        break;
      case "960x600":
        setWidth("960px");
        setHeight("600px");
        break;
      case "1024x768":
        setWidth("1024px");
        setHeight("768px");
        break;
      case "1200x800":
        setWidth("1200px");
        setHeight("800px");
        break;
      case "1280x960":
        setWidth("1280px");
        setHeight("960px");
        break;

      default: {
        setWidth("1200px");
        setHeight("800px");
      }
    }
  };
  if (!loggedUser) {
    return (
      <div className="login-required">
        <p>
          <L w="Experience our demo app today! Sign up and log in to explore its features" />
          .
        </p>
        <Link to="/">
          <L w="Go Home" />
        </Link>
      </div>
    );
  }
  return (
    <div className="resolution-changer" style={{ background: appBackground }}>
      {/*-----------------------------Settings Menu----------------------------------*/}
      {!isMenuHidden && (
        <div
          className="resolution-options"
          style={{ background: appBackground }}
        >
          {/* ----------YouTube URL----------- */}
          <label>
            <L w="Enter YouTube URL" />:
            <input type="text" value={youtubeId} onChange={handleUrlChange} />
          </label>
          {/* ------------Resolution------------ */}
          <label>
            <L w="Choose Resolution" />:
            <select onChange={handleResolutionChange}>
              <option>
                <L w="Default" />
              </option>
              <option value="560x400">560x400</option>
              <option value="960x600">960x600</option>
              <option value="1024x768">1024x768</option>
              <option value="1200x800">1200x800</option>
              <option value="1280x960">1280x960</option>
            </select>
          </label>
          {/* -----------Random Width------------- */}
          <label>
            <L w="Choose Random Width" />:
            <input
              type="text"
              value={width}
              placeholder='E.g: "900px"'
              onChange={(evt) => setWidth(evt.target.value)}
            />
          </label>
          {/* ---------Random Height--------------- */}
          <label>
            <L w="Choose Random Height" />:
            <input
              type="text"
              value={height}
              placeholder='E.g: "400px"'
              onChange={(evt) => setHeight(evt.target.value)}
            />
          </label>
          {/* --------------Side Color-------------- */}
          <label>
            <L w="Select Side Color" />:
            <select
              value={sideColor ? sideColor : "#BEFC6F"}
              onChange={(evt) => setSideColor(evt.target.value)}
            >
              {/* <option value="#66000000">Transparent</option> */}
              <option value="#BEFC6F">
                <L w="Default" />
              </option>
              <option value="black">
                <L w="Black" />
              </option>
              <option value="white">
                <L w="White" />
              </option>
              <option value="#08B0EB">
                <L w="Blue" />
              </option>
              <option value="#F03311">
                <L w="Red" />
              </option>
              <option value="#2ecc71">
                <L w="Green" />
              </option>
              <option value="#EBE108">
                <L w="Yellow" />
              </option>
              <option value="#EDAE05">
                <L w="Orange" />
              </option>
            </select>
          </label>
          {/* ----------------Background---------------- */}
          <label>
            <L w="Select Background" />:
            <select
              value={appBackground}
              onChange={(evt) => setAppBackground(evt.target.value)}
            >
              <option value="#262424">
                <L w="Default" />
              </option>
              <option value="black">
                <L w="Black" />
              </option>
              <option value="#08B0EB">
                <L w="Blue" />
              </option>
              <option value="#F03311">
                <L w="Red" />
              </option>
              <option value="#2ecc71">
                <L w="Green" />
              </option>
              <option value="#EBE108">
                <L w="Yellow" />
              </option>
              <option value="#EDAE05">
                <L w="Orange" />
              </option>
            </select>
          </label>
          {/* ------------------Language---------------- */}
          <label>
            <L w="Language" />:
            <select
              value={language}
              onChange={(evt) => setLanguage(evt.target.value)}
            >
              <option value="en">
                <L w="English" />
              </option>
              <option value="al">
                <L w="Albanian" />
              </option>
              <option value="es">
                <L w="Spanish" />
              </option>
              <option value="fr">
                <L w="French" />
              </option>
              <option value="ja">
                <L w="Japanese" />
              </option>
            </select>
          </label>
        </div>
        // ---------------------End of Settings Menu------------------------
      )}
      <div className="youtube-app-wrapper">
        {isYoutubeAppOpened ? (
          <YoutubeApp
            width={width || "1200px"}
            height={height || "768px"}
            videoId={youtubeId}
            background={sideColor}
            // heightTop="5px"
            // heightBottom="5px"
            widthLeft="10px"
            widthRight="10px"
          />
        ) : (
          <div className="before-app-wrapper">
            <div className="reso-logo">
              <L w="Reso" />
            </div>
            <h1>
              <L w="Welcome to Youtube" />{" "}
              <span className="blue">
                <L w="ResoChanger" />
              </span>
            </h1>
            <h2>
              <L w="Please" />{" "}
              <span className="blue">
                <L w="OpenApp" />
              </span>{" "}
              <L w="to get started" />
            </h2>
          </div>
        )}
      </div>

      <div className="settings-buttons">
        {!isYoutubeAppOpened && (
          <Link to="/">
            <button>
              <L w="Go Home" />
            </button>
          </Link>
        )}
        {isMenuHidden && (
          <button
            onClick={() => {
              setIsYoutubeAppOpened(!isYoutubeAppOpened);
              // isYoutubeAppOpened && navigate("/");
              setYoutubeId("");
              setSideColor("#BEFC6F");
              setWidth("");
              setHeight("");
              setAppBackground("");
            }}
          >
            {!isYoutubeAppOpened ? <L w="Open" /> : <L w="Close" />}{" "}
            <L w="App" />
          </button>
        )}
        {isYoutubeAppOpened && (
          <button
            onClick={() => {
              setIsMenuHidden(!isMenuHidden);
            }}
          >
            {isMenuHidden ? <L w="Open" /> : <L w="Hide" />} <L w="Settings" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ResolutionChanger;
