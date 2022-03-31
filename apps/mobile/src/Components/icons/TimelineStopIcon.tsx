import React, { FC } from "react";
import Svg, { G, Defs, Circle } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const TimelineStopIcon: FC<IIconInterface> = ({
  color,
  height,
  width,
}) => {
  return (
    <Svg
      width={width || 50}
      height={height || 50}
      viewBox="0 0 50 50"
      fill="none"
    >
      <G>
        <Circle cx={25} cy={25} r={12} fill={color || "#FBB034"} />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
