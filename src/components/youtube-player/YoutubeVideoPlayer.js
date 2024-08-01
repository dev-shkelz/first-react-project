//An Youtube(iframe) video that takes the width and height
//of the container(div) in which it's in.

import YouTube from "react-youtube";

const YoutubeVideoPlayer = ({ videoId, width, height }) => {
  const opts = {
    // height: "100%",
    // width: "100%",
    width: `${width}%`,
    height: `${height}%`,
    playerVars: {
      autoplay: 1, // Autoplay the video
      controls: 1, // Hide player controls
      rel: 0, // Don't show related videos at the end
      showinfo: 0, // Hide video title and uploader information
      loop: 1, // Loop the video
      mute: 1, // Mute the video
      modestbranding: 1, // Minimize YouTube branding
      iv_load_policy: 3, // Hide video annotations
      fs: 0, // Disable fullscreen button
      playsinline: 1, // Play video inline on iOS instead of fullscreen
    },
  };
  const onPlayerReady = (event) => {
    event.target.playVideo();
  };

  const onPlayerEnd = (event) => {
    event.target.playVideo();
  };
  return (
    //`Youtube` here comes from `react-youtube` library.
    <YouTube
      videoId={videoId ? videoId : "eroWCJodVa8"}
      opts={opts}
      onReady={onPlayerReady}
      onEnd={onPlayerEnd}
    />
  );
};

export default YoutubeVideoPlayer;
