//I created a Youtube player app that hides the title of the video,
//and youtube-logo.
//THE DOWNSIDE: The video isn't shown fully as the side divs
//cover some space of the video.

import React from "react";
import YoutubeVideoPlayer from "./YoutubeVideoPlayer";
import "./YoutubeApp.css";
import L from "../../utils/L";

//The divs 'top, bottom, left, right' are used to cover the sides of
//the youtube video player, in order to hide the title and the logo.

//`YoutubeApp` is called in two components(`Youtube page` and `Hero`).
//Only `width, height, and videoId` are use in `Hero`.

const YoutubeApp = ({
  width,
  height,
  videoId,
  background,
  heightTop,
  heightBottom,
  widthLeft,
  widthRight,
}) => {
  return (
    <div className="youtube-container" style={{ width: width, height: height }}>
      {/* Youtube video id goes here */}
      <YoutubeVideoPlayer videoId={videoId} height={height} width={width} />

      <div
        className="player-top"
        style={{ background: background, height: heightTop }}
      >
        <L w="WELCOME TO RESO TV" />
      </div>
      <div
        className="player-bottom"
        style={{ background: background, height: heightBottom }}
      />
      <div
        className="player-left"
        style={{ background: background, width: widthLeft }}
      />
      <div
        className="player-right"
        style={{ background: background, width: widthRight }}
      />
    </div>
  );
};

export default YoutubeApp;
