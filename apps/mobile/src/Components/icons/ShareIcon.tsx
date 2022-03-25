import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const ShareIcon: FC<IIconInterface> = ({ color, height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <G>
        <Path d="M480 180L360 60L240 180H480ZM360 60V450Z" fill="white" />
        <Path
          d="M120 360V600C120 633.12 146.88 660 180 660H540C573.12 660 600 633.12 600 600V360M360 60L480 180H240L360 60ZM360 60V450"
          stroke="white"
          strokeWidth={60}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
