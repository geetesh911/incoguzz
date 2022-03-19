import React, { FC } from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const PauseIcon: FC<IIconInterface> = ({ color, height, width }) => {
  return (
    <Svg
      width={width || 1900}
      height={height || 1900}
      viewBox="0 0 1900 1900"
      fill="none"
    >
      <G>
        <Path
          d="M1450.73 31.6667C1416.99 31.6641 1384.6 44.9586 1360.6 68.6687C1336.59 92.3789 1322.9 124.594 1322.48 158.333V1741.67C1322.48 1775.68 1335.99 1808.3 1360.04 1832.35C1384.09 1856.4 1416.71 1869.92 1450.73 1869.92C1484.74 1869.92 1517.36 1856.4 1541.42 1832.35C1565.47 1808.3 1578.98 1775.68 1578.98 1741.67V158.333C1578.56 124.594 1564.87 92.3789 1540.86 68.6687C1516.85 44.9586 1484.47 31.6641 1450.73 31.6667V31.6667ZM449.271 31.6667C415.529 31.6641 383.146 44.9586 359.139 68.6687C335.133 92.3789 321.437 124.594 321.021 158.333V1741.67C321.021 1775.68 334.533 1808.3 358.584 1832.35C382.636 1856.4 415.257 1869.92 449.271 1869.92C483.285 1869.92 515.905 1856.4 539.957 1832.35C564.008 1808.3 577.521 1775.68 577.521 1741.67V158.333C577.104 124.594 563.408 92.3789 539.402 68.6687C515.395 44.9586 483.012 31.6641 449.271 31.6667V31.6667Z"
          fill={color || "#fff"}
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
};