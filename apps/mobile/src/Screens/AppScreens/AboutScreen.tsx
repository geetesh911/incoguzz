import React, { FC } from "react";
import { ZoomableImage } from "../../Components/shared/ZoomableImage/ZoomableImage";

export const AboutScreen: FC = () => {
  return (
    <ZoomableImage
      imageSource={{
        uri: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      }}
    />
  );
};
