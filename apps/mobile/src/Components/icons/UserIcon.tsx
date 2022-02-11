import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const UserIcon: FC<IIconInterface> = ({ color }) => {
  return (
    <Svg width={24} height={24}>
      <Path
        d="M4 19a2 2 0 002 2h12a2 2 0 002-2 4 4 0 00-4-4H8a4 4 0 00-4 4zM8 7a4 4 0 118 0 4 4 0 01-8 0z"
        fill={color || "hsl(0, 0%, 100%)"}
      />
    </Svg>
  );
};
