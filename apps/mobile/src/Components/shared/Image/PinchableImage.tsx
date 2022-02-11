import React, { FC } from "react";
import { Image, ImageStyle, StyleProp } from "react-native";
import Pinchable from "react-native-pinchable";
import { RequireAtLeastOne } from "type-fest";

interface IPinchableImageProps {
  style?: StyleProp<ImageStyle>;
  uri?: string;
  imageComponent?: JSX.Element;
}

type PinchableImageProps = RequireAtLeastOne<
  IPinchableImageProps,
  "uri" | "imageComponent"
>;

export const PinchableImage: FC<PinchableImageProps> = ({
  style,
  uri,
  imageComponent,
}) => {
  return (
    <Pinchable>
      {uri ? <Image style={style} source={{ uri }} /> : imageComponent}
    </Pinchable>
  );
};
