import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const PostsIcon: FC<IIconInterface> = ({ color, height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <G>
        <Path
          d="M630 60H90C82.0435 60 74.4129 63.1607 68.7868 68.7868C63.1607 74.4129 60 82.0435 60 90V630C60 637.956 63.1607 645.587 68.7868 651.213C74.4129 656.839 82.0435 660 90 660H630C637.956 660 645.587 656.839 651.213 651.213C656.839 645.587 660 637.956 660 630V90C660 82.0435 656.839 74.4129 651.213 68.7868C645.587 63.1607 637.956 60 630 60V60ZM240 600H120V480H240V600ZM240 420H120V300H240V420ZM240 240H120V120H240V240ZM420 600H300V480H420V600ZM420 420H300V300H420V420ZM420 240H300V120H420V240ZM600 600H480V480H600V600ZM600 420H480V300H600V420ZM600 240H480V120H600V240Z"
          fill={color || "#fff"}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};
