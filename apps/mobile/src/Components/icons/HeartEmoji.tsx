import React, { FC } from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const HeartEmoji: FC<IIconInterface> = ({ height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <Path
        d="M490.009 99c-53.983 0-101.668 27.172-130.099 68.559C331.479 126.172 283.794 99 229.811 99 142.718 99 72 169.718 72 256.811c0 192.36 287.91 365.286 287.91 365.286s287.91-172.926 287.91-365.286C647.82 169.718 577.102 99 490.009 99Z"
        fill="url(#a)"
      />
      <Path
        opacity={0.5}
        d="M555.329 113.037c86.373 137.657 6.838 318.321-88.712 369.605-105.447 56.682-177.605 30.05-326.958-54.703C224.772 540.763 359.91 621.918 359.91 621.918s287.91-172.926 287.91-365.286c0-63.7-37.968-118.763-92.491-143.595Z"
        fill="url(#b)"
      />
      <Path
        opacity={0.5}
        d="M490.009 99c-53.983 0-101.668 27.172-130.099 68.559C331.479 126.172 283.794 99 229.811 99 142.718 99 72 169.718 72 256.811c0 192.36 287.91 365.286 287.91 365.286s287.91-172.926 287.91-365.286C647.82 169.718 577.102 99 490.009 99Z"
        fill="url(#c)"
      />
      <Path
        opacity={0.5}
        d="M490.009 99c-53.983 0-101.668 27.172-130.099 68.559C331.479 126.172 283.794 99 229.811 99 142.718 99 72 169.718 72 256.811c0 192.36 287.91 365.286 287.91 365.286s287.91-172.926 287.91-365.286C647.82 169.718 577.102 99 490.009 99Z"
        fill="url(#d)"
      />
      <Path
        opacity={0.24}
        d="M320.503 163.057c15.835 37.248-19.254 87.813-78.456 112.825-59.201 25.012-119.842 15.295-135.677-21.773-15.835-37.069 19.254-87.813 78.455-112.825 59.202-25.012 119.843-15.475 135.678 21.773Z"
        fill="url(#e)"
      />
      <Path
        opacity={0.24}
        d="M513.401 132.828c22.493 24.832 8.638 73.957-30.77 109.586-39.408 35.629-89.612 44.446-112.105 19.614-22.493-24.832-8.637-73.957 30.77-109.586 39.408-35.629 89.612-44.446 112.105-19.614Z"
        fill="url(#f)"
      />
      <Path
        opacity={0.32}
        d="M492.888 140.927c79.175 26.991 154.752 143.955 26.992 289.709-76.477 87.273-159.97 131.359-266.137 114.085 57.402 47.865 106.346 77.376 106.346 77.376S648 449.171 648 256.811C647.82 169.718 577.102 99 490.009 99c-53.983 0-101.668 27.172-130.099 68.559 0 0 75.036-46.426 132.978-26.632Z"
        fill="url(#g)"
      />
      <Defs>
        <RadialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-29.408 605.405 -406.388) scale(450.51 357.37)"
        >
          <Stop offset={0.248} stopColor="red" />
          <Stop offset={0.864} stopColor="#C20000" />
        </RadialGradient>
        <RadialGradient
          id="b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(337.8946 -190.45598 151.08066 268.03746 288.698 217.27)"
        >
          <Stop offset={0.248} stopColor="red" />
          <Stop offset={1} stopColor="#C20000" />
        </RadialGradient>
        <RadialGradient
          id="c"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-29.408 605.405 -406.388) scale(450.51 357.37)"
        >
          <Stop stopColor="#fff" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="d"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(294.82422 -145.6856 71.98934 145.68497 439.506 397.842)"
        >
          <Stop stopColor="#BD2719" stopOpacity={0.25} />
          <Stop offset={1} stopColor="#BD2719" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="e"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(108.62997 -43.20891 26.84066 67.47913 213.402 208.582)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="f"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(73.31236 -63.19985 39.26136 45.5435 441.798 197.614)"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <LinearGradient
          id="g"
          x1={419.323}
          y1={827.539}
          x2={475.106}
          y2={75.374}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#860805" />
          <Stop offset={1} stopColor="#BD2719" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
