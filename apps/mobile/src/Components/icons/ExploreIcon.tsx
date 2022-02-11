import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const ExploreIcon: FC<IIconInterface> = ({ color }) => {
  return (
    <Svg width={24} height={24}>
      <Path
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm7.88-2.12l-2.12 6.36 6.36-2.12 2.12-6.36z"
        fill={color || "hsl(0, 0%, 100%)"}
      />
    </Svg>
  );
};
