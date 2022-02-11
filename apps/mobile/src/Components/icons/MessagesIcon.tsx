import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const MessagesIcon: FC<IIconInterface> = ({ color }) => {
  return (
    <Svg width={24} height={24}>
      <Path
        d="M21 11.5a8.386 8.386 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.386 8.386 0 01-3.8-.9L3 21l1.9-5.7a8.386 8.386 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.386 8.386 0 013.8-.9h.5a8.48 8.48 0 018 8z"
        fill={color || "hsl(0, 0%, 100%)"}
      />
    </Svg>
  );
};
