import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const NotificationIcon: FC<IIconInterface> = ({ color }) => {
  return (
    <Svg width={24} height={24}>
      <Path
        d="M18.333 14.167H1.667a2.5 2.5 0 002.5-2.5V7.5A5.832 5.832 0 0110 1.667 5.832 5.832 0 0115.833 7.5v4.167a2.5 2.5 0 002.5 2.5zM11.442 17.5a1.667 1.667 0 01-2.884 0"
        fill={color || "#FFF"}
        strokeWidth={2}
        stroke={color || "#FFF"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
