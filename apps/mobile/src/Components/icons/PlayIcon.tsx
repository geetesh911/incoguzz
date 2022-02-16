import React, { FC } from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const PlayIcon: FC<IIconInterface> = ({ color, height, width }) => {
  return (
    <Svg
      width={width || 1920}
      height={height || 1920}
      viewBox="0 0 1920 1920"
      fill="none"
    >
      <G clipPath="url(#clip0_55_36)">
        <G>
          <Path
            d="M328.393 67.102c-81.34 22.373-142.345 91.934-153.326 174.105-5.287 41.899-5.287 1395.683 0 1438.803 10.574 83.8 78.493 156.62 163.087 174.92 28.876 6.51 84.187 3.26 111.436-5.69 11.388-4.07 289.978-167.6 619.41-363.67 636.89-379.13 625.5-371.8 652.75-418.58 36.6-63.87 36.6-150.109 0-213.975-27.25-46.781-17.08-40.272-634.05-407.601C768.85 255.038 495.141 93.136 480.093 85.407c-15.048-8.135-37.01-16.678-48.398-19.525-27.249-6.102-78.086-5.696-103.302 1.22z"
            fill={color || "#fff"}
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_55_36">
          <Path
            fill={color || "#fff"}
            transform="translate(171 61)"
            d="M0 0H1578V1798H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
