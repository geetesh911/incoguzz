import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const FilledBookmarkIcon: FC<IIconInterface> = ({
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
          d="M569.988 630L360 479.988L150.012 630V150.012C150.012 116.856 176.868 90 209.988 90H510.012C543.132 90 569.988 116.856 569.988 150.012V630Z"
          fill={color || "#fff"}
        />
        <Path
          d="M569.988 630L360 479.988L150.012 630V150.012C150.012 116.856 176.868 90 209.988 90H510.012C543.132 90 569.988 116.856 569.988 150.012V630Z"
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
