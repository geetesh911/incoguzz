import React, { FC } from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  G,
} from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const LaughDimEmoji: FC<IIconInterface> = ({ height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <G opacity={0.5}>
        <Path
          d="M333 648c159.058 0 288-128.942 288-288S492.058 72 333 72 45 200.942 45 360s128.942 288 288 288Z"
          fill="url(#a)"
        />
        <Path
          opacity={0.5}
          d="M333 648c159.058 0 288-128.942 288-288S492.058 72 333 72 45 200.942 45 360s128.942 288 288 288Z"
          fill="url(#b)"
        />
        <Path
          d="M531.344 330.651c-2.278 0-4.556.938-6.298 2.279-49.586 39.266-104.533 71.564-163.5 96.089-58.967 24.391-120.614 40.473-183.467 47.71-2.279.268-4.423 1.206-6.165 2.814-5.093 4.959-10.855 18.092 16.35 47.978v.134c37.658 36.854 120.078 94.883 233.857 47.709 113.512-47.039 130.8-146.479 131.47-199.281-1.742-40.205-15.144-45.566-22.247-45.432Z"
          fill="url(#c)"
        />
        <Path
          d="M170.172 540.518c15.412 34.576-7.773 67.41-36.318 73.977-28.546 6.432-60.844-11.526-64.328-47.442-8.175-82.018 84.966-136.026 84.966-136.026s-5.092 62.853 15.68 109.491Z"
          fill="url(#d)"
        />
        <Path
          d="M132.112 548.291c-9.917 35.916-62.72 40.07-62.72-.804-.536 6.298-.536 12.731 0 19.432 3.485 35.916 35.783 53.874 64.328 47.442 28.545-6.433 51.73-39.401 36.318-73.977-20.638-46.504-15.546-109.357-15.546-109.357-31.225 75.451-17.556 99.708-22.38 117.264Z"
          fill="url(#e)"
        />
        <Path
          d="M151.542 521.219c13.402 60.576-54.41 87.647-80.677 54.009 7.37 30.287 36.586 45.029 62.853 39.132 28.545-6.432 51.73-39.4 36.318-73.976-20.638-46.504-15.546-109.357-15.546-109.357s-13.937 40.473-2.948 90.192Z"
          fill="url(#f)"
        />
        <Path
          d="M155.696 557.94c-9.247 46.235-59.637 47.576-82.152 25.731 5.093 12.329 14.34 21.443 25.061 26.669 56.689 15.144 81.08-43.421 72.235-67.812l-.804-2.01c-.402-.804-.804-1.742-1.072-2.68-19.299-46.236-14.474-106.811-14.474-106.811-15.144 69.152 12.463 70.224 1.206 126.913Z"
          fill="url(#g)"
        />
        <Path
          opacity={0.75}
          d="M154.491 431.027s-55.617 64.998-47.71 101.316c7.907 36.318-31.494 34.844-31.36 13.669.134-37.39 40.875-89.522 79.07-114.985Z"
          fill="url(#h)"
        />
        <Path
          d="M417.029 562.901c47.04-19.566 76.523-48.648 94.749-79.471-34.576-1.072-73.976 5.226-117.934 23.452-44.091 18.227-76.389 41.813-99.975 67.008 34.576 8.711 75.987 8.443 123.16-10.989Z"
          fill="url(#i)"
        />
        <Path
          d="M575.702 372.463c13.535 35.381 53.204 42.215 77.997 26.535 24.793-15.679 34.844-51.193 11.927-79.069-52.266-63.657-156.262-36.05-156.262-36.05s48.112 41.009 66.338 88.584Z"
          fill="url(#j)"
        />
        <Path
          d="M608.268 351.154c32.431 18.36 72.77-16.082 43.823-44.896a102.517 102.517 0 0 1 13.669 13.804c22.917 27.875 12.866 63.39-11.927 79.069-24.793 15.68-64.462 8.845-77.997-26.535-18.226-47.575-66.338-88.584-66.338-88.584 75.317 31.225 82.822 58.163 98.77 67.142Z"
          fill="url(#k)"
        />
        <Path
          d="M575.299 345.794c33.37 52.266 100.512 23.453 95.286-18.896 16.216 26.669 5.896 57.76-16.752 72.1-24.793 15.68-64.462 8.845-77.997-26.535-18.227-47.576-66.338-88.585-66.338-88.585s38.462 18.897 65.801 61.916Z"
          fill="url(#l)"
        />
        <Path
          d="M598.35 374.606c39.267 26.268 75.853-8.443 76.255-39.936 5.093 12.329 5.093 25.195 1.072 36.72-29.349 50.792-88.048 26.669-99.037 3.082l-.804-2.01c-.269-.804-.671-1.742-1.073-2.68-19.03-46.37-65.265-85.77-65.265-85.77 59.637 38.194 40.741 58.431 88.852 90.594Z"
          fill="url(#m)"
        />
        <Path
          opacity={0.75}
          d="M509.498 284.011s85.234 6.701 105.336 37.927c20.103 31.225 46.772 2.412 31.896-12.598-26.535-26.267-92.203-34.308-137.232-25.329Z"
          fill="url(#n)"
        />
        <Path
          d="M176.335 476.863c-.402 0-.804.134-1.206.402-3.618 1.876-20.37 13.267 13.268 50.122v.134c15.143 14.875 37.658 33.236 66.606 46.637-27.876-14.474-9.918-36.184 33.101-48.246 43.02-12.061 99.038-35.112 99.038-35.112l-25.597-61.781c-59.503 24.659-121.82 40.741-185.21 47.844Z"
          fill="url(#o)"
        />
        <Path
          d="M526.385 331.857c.402-.268.67-.536 1.072-.67 3.886-1.206 23.855-4.959 26.133 44.895h.134c-.268 21.309-3.216 50.122-14.072 80.142 9.515-29.886-18.628-32.566-57.492-10.722-38.999 21.845-94.884 45.298-94.884 45.298l-25.597-61.782c59.369-24.658 114.852-57.358 164.706-97.161Z"
          fill="url(#p)"
        />
        <Path
          d="M533.352 396.718c6.969-4.959 9.918-13.938 7.371-22.113l-8.979-29.617c-49.988 39.534-105.47 71.966-164.973 96.625a694.916 694.916 0 0 1-184.942 48.38l14.608 27.339c4.02 7.505 12.463 11.794 20.906 10.453 56.555-9.113 112.171-24.927 165.644-47.039 53.472-22.247 103.862-50.39 150.365-84.028Z"
          fill="url(#q)"
        />
        <Path
          d="M460.584 191.545c-2.144-2.815-5.629-3.485-8.577-1.609-15.546 9.381-39.803 32.03-61.513 57.493-17.288 20.236-31.226 60.843-24.391 70.492 7.639 10.722 44.761 7.639 60.307 5.763 24.391-2.814 55.483-9.515 69.554-19.432 3.753-2.681 4.021-6.031 3.083-8.309-1.341-3.217-5.093-4.825-9.516-4.155-48.915 7.237-83.491 6.701-86.44-.134 0 0-6.164-10.051 15.948-38.998 13.402-17.69 29.082-34.308 38.865-44.226 5.494-6.566 5.628-12.865 2.68-16.885Z"
          fill="url(#r)"
        />
        <Path
          d="M451.871 189.934c-15.546 9.381-41.947 28.814-61.513 57.493-17.958 26.267-31.226 60.843-24.391 70.492 4.423 6.165 18.762 7.773 33.102 7.639h1.742c-15.411-5.092-26.803-14.071-19.432-35.648 4.691-13.536 18.092-54.812 79.203-98.368-2.144-2.68-5.628-3.35-8.711-1.608Z"
          fill="url(#s)"
        />
        <Path
          d="M499.045 295.938c-1.34-3.216-5.092-4.824-9.515-4.154-48.915 7.237-83.492 6.701-86.44-.134 4.959 11.525 7.639 17.154 48.514 12.061 30.287-3.752 44.493-6.03 44.359.536 3.618-2.68 4.021-6.03 3.082-8.309Z"
          fill="url(#t)"
        />
        <Path
          d="M123.667 331.054c-.402-3.484 1.608-6.432 4.958-7.236 17.69-4.289 50.658-5.495 84.162-2.949 26.535 2.01 65.132 20.907 67.142 32.566 2.144 13-26.267 36.989-38.596 46.772-19.299 15.278-45.968 32.566-62.988 35.38-4.556.804-7.103-1.34-8.175-3.618-1.34-3.217.134-6.969 3.753-9.784 39.668-29.483 63.791-54.276 60.977-61.245 0 0-2.68-11.391-38.865-16.216-21.978-2.948-44.761-3.752-58.699-3.886-8.309-.402-12.999-4.825-13.669-9.784Z"
          fill="url(#u)"
        />
        <Path
          d="M128.625 323.817c17.69-4.288 49.988-9.247 84.162-2.948 31.226 5.897 65.132 20.906 67.142 32.566 1.206 7.505-7.773 18.762-17.958 28.813-.402.402-.804.804-1.206 1.072l-.134.134c7.237-14.473 9.113-28.947-11.391-38.998-12.866-6.299-51.597-25.865-125.573-13.67-.402-3.082 1.608-6.031 4.958-6.969Z"
          fill="url(#v)"
        />
        <Path
          d="M170.304 432.101c-1.34-3.217.135-6.969 3.753-9.783 39.669-29.484 63.791-54.277 60.977-61.246 4.691 11.66 6.701 17.556-25.731 42.885-24.123 18.763-35.782 27.072-30.958 31.762-4.422.804-7.102-1.34-8.041-3.618Z"
          fill="url(#w)"
        />
        <Path
          d="M207.693 223.035c-4.422-10.721-18.762-12.598-38.596-4.289-16.886 6.969-49.988 31.628-61.915 74.915-2.145 8.041 6.432 8.309 9.381 2.547 10.185-19.835 45.029-54.277 79.337-64.328 13.804-4.02 11.793-8.845 11.793-8.845Z"
          fill="url(#x)"
        />
        <Path
          d="M324.825 174.657c-4.422-10.721 4.289-22.113 24.123-30.288 16.886-6.968 57.761-12.999 96.76 9.248 7.237 4.154 1.34 10.453-4.825 8.443-21.174-6.835-70.224-6.567-101.584 10.587-12.597 6.701-14.474 2.01-14.474 2.01Z"
          fill="url(#y)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="d"
          x1={36.985}
          y1={482.446}
          x2={199.155}
          y2={551.685}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.072} stopColor="#17BAFD" />
          <Stop offset={0.208} stopColor="#D0F1FF" />
          <Stop offset={0.668} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="e"
          x1={250.443}
          y1={597.373}
          x2={25.174}
          y2={458.133}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D0F1FF" />
          <Stop offset={0.668} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="f"
          x1={56.765}
          y1={447}
          x2={209.936}
          y2={614.481}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.566} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="g"
          x1={69.061}
          y1={453.103}
          x2={192.186}
          y2={606.072}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.566} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="h"
          x1={138.249}
          y1={577.03}
          x2={89.191}
          y2={392.732}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#80D9FD" />
        </LinearGradient>
        <LinearGradient
          id="j"
          x1={628.93}
          y1={237.246}
          x2={563.22}
          y2={400.878}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.072} stopColor="#17BAFD" />
          <Stop offset={0.208} stopColor="#D0F1FF" />
          <Stop offset={0.668} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="k"
          x1={559.261}
          y1={469.449}
          x2={620.089}
          y2={211.701}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D0F1FF" />
          <Stop offset={0.668} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="l"
          x1={589.877}
          y1={226.169}
          x2={599.999}
          y2={452.904}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.566} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="m"
          x1={585.498}
          y1={239.179}
          x2={606.604}
          y2={434.407}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.566} stopColor="#80D9FD" />
          <Stop offset={1} stopColor="#0098D5" />
        </LinearGradient>
        <LinearGradient
          id="n"
          x1={624.207}
          y1={375.731}
          x2={528.575}
          y2={210.724}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#80D9FD" />
        </LinearGradient>
        <LinearGradient
          id="o"
          x1={185.423}
          y1={538.034}
          x2={374.344}
          y2={459.779}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#512D00" />
        </LinearGradient>
        <LinearGradient
          id="p"
          x1={563.24}
          y1={381.525}
          x2={374.319}
          y2={459.78}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#512D00" />
        </LinearGradient>
        <LinearGradient
          id="s"
          x1={357.701}
          y1={306.306}
          x2={480.133}
          y2={219.134}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#512D00" />
        </LinearGradient>
        <LinearGradient
          id="t"
          x1={412.58}
          y1={313.761}
          x2={491.925}
          y2={279.512}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#512D00" />
        </LinearGradient>
        <LinearGradient
          id="v"
          x1={277.784}
          y1={339.785}
          x2={129.563}
          y2={364.719}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#512D00" />
        </LinearGradient>
        <LinearGradient
          id="w"
          x1={244.357}
          y1={383.946}
          x2={164.03}
          y2={415.835}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#512D00" />
        </LinearGradient>
        <LinearGradient
          id="x"
          x1={158.974}
          y1={264.176}
          x2={147.358}
          y2={236.133}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#7A4400" />
        </LinearGradient>
        <LinearGradient
          id="y"
          x1={388.317}
          y1={169.18}
          x2={376.701}
          y2={141.136}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.001} stopColor="#3C2200" />
          <Stop offset={1} stopColor="#7A4400" />
        </LinearGradient>
        <RadialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-22.5 806.354 -456.243) scale(347.514)"
        >
          <Stop stopColor="#FFDF30" />
          <Stop offset={1} stopColor="#FFB82E" />
        </RadialGradient>
        <RadialGradient
          id="b"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-22.5 806.354 -456.243) scale(273.405)"
        >
          <Stop stopColor="#FFE95F" />
          <Stop offset={1} stopColor="#FFBB47" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="c"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-22.5 1424.882 -727.384) scale(158.69)"
        >
          <Stop offset={0.001} stopColor="#7A4400" />
          <Stop offset={1} stopColor="#643800" />
        </RadialGradient>
        <RadialGradient
          id="i"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(121.50736 -50.331 15.21552 36.73279 410.379 540.556)"
        >
          <Stop offset={0.248} stopColor="red" />
          <Stop offset={1} stopColor="#C10000" />
        </RadialGradient>
        <RadialGradient
          id="q"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-22.5 1313.597 -705.244) scale(348.011)"
        >
          <Stop offset={0.001} stopColor="#fff" />
          <Stop offset={1} stopColor="#A8BBBD" />
        </RadialGradient>
        <RadialGradient
          id="r"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-53.0958 -42.08623 27.2276 -34.35021 430.034 278.248)"
        >
          <Stop offset={0.001} stopColor="#7A4400" />
          <Stop offset={1} stopColor="#643800" />
        </RadialGradient>
        <RadialGradient
          id="u"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-83.402 311.35 69.548) scale(67.7517 43.8333)"
        >
          <Stop offset={0.001} stopColor="#7A4400" />
          <Stop offset={1} stopColor="#643800" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};
