import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const LogoutIcon: FC<IIconInterface> = ({ color, height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <G>
        <Path
          d="M540 480L660 360L540 240L540 480ZM660 360L270 360Z"
          fill={color || "#fff"}
        />
        <Path
          d="M360 120L120 120C86.88 120 60 146.88 60 180L60 540C60 573.12 86.88 600 120 600L360 600M660 360L540 480L540 240L660 360ZM660 360L270 360"
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
