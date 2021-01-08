import React from "react";
import ReactPlayer from "react-player";

const VideoContent = ({ data }) => {
  const {
    url,
    width,
    height,
    autoplay,
    onEndHandler,
    onProgressHandler,
  } = data;

  return (
    <ReactPlayer
      width={width ? width : "100%"}
      height={height ? height : "60vh"}
      playing={autoplay}
      controls={true}
      url={url}
      onEnded={onEndHandler}
      onProgress={onProgressHandler}
    />
  );
};
export default VideoContent;
