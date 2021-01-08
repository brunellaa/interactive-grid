import React from "react";
import VideoContent from "./content-types/VideoContent";
import CarouselContent from "./content-types/CarouselContent";
import IframeContent from "./content-types/IframeContent";

const ModalContent = ({ modalData }) => {
  const { type, data } = modalData;
  let contentToRender = "";
  switch (type) {
    case "video":
      contentToRender = <VideoContent data={data} />;
      break;
    case "carousel":
      contentToRender = <CarouselContent data={data} />;
      break;
    case "iframe":
      contentToRender = <IframeContent data={data} />;
      break;
    default:
      break;
  }

  return <>{contentToRender}</>;
};

export default ModalContent;
