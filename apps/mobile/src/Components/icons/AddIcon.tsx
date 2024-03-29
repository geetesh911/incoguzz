import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const AddIcon: FC<IIconInterface> = ({ color }) => {
  return (
    <Svg width={24} height={24}>
      <Path
        d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12zm10-5a1 1 0 011 1v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H8a1 1 0 010-2h3V8a1 1 0 011-1z"
        fill={color || "#fff"}
      />
    </Svg>
  );
};
