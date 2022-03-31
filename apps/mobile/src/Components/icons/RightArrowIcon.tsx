import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const RightArrowIcon: FC<IIconInterface> = ({
  color,
  height,
  width,
}) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <G>
        <Path
          d="M150 360H360H570M570 360L360 150M570 360L360 570"
          stroke={color || "#fff"}
          strokeWidth={60}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
