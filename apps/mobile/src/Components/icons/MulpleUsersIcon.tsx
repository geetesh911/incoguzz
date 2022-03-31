import React, { FC } from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const MultipleUsersIcon: FC<IIconInterface> = ({
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
      <G clipPath="url(#clip0_278_15)">
        <G>
          <Path
            d="M690.012 630V569.988C689.976 515.304 652.932 467.568 600.012 453.888M479.988 93.888C533.088 107.496 570.24 155.34 570.24 210.168C570.24 264.96 533.088 312.804 479.988 326.412M510.012 630V569.988C510.012 503.712 456.264 450 389.988 450H150.012C83.7363 450 29.9883 503.712 29.9883 569.988V630H510.012ZM150.012 209.988C150.012 143.712 203.724 90 270 90C336.276 90 389.988 143.712 389.988 209.988C389.988 276.264 336.276 330.012 270 330.012C203.724 330.012 150.012 276.264 150.012 209.988Z"
            stroke={color || "white"}
            strokeWidth={60}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_278_15">
          <Rect width={720} height={720} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
