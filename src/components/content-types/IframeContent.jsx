import React from "react";

const IframeContent = ({ data }) => {
  const { src, title, width, height } = data;
  return (
    <iframe
      src={src}
      title={title}
      width={width ? width : "100%"}
      height={height ? height : "100%"}
    ></iframe>
  );
};

export default IframeContent;
