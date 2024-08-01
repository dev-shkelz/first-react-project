import YoutubeApp from "../../youtube-player/YoutubeApp";

import "./Hero.css";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    //Yoube app player accepts 3 props(width, height and videoId).
    <>
      <div className="hero">
        <YoutubeApp width="70vw" height="70vh" videoId="bBb63qYZciw" />
      </div>

      <SearchBar />
    </>
  );
};

export default Hero;
