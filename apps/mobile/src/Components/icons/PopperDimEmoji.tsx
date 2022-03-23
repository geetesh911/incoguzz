import React, { FC } from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  G,
  RadialGradient,
} from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const PopperDimEmoji: FC<IIconInterface> = ({ height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <G opacity={0.5}>
        <Path
          d="m148.489 644.79 358.55-166.242L250.841 222.35 84.598 580.741c-2.384 5.721-11.443 28.766 13.191 50.699 26.701 23.681 44.978 15.734 50.7 13.35Z"
          fill="url(#a)"
        />
        <Path
          d="m214.922 299.751-26.7 58.01c-8.582 20.82 143.674 174.507 229.656 162.11l89.161-41.322c-105.69 48.792-305.149-150.508-292.117-178.798Z"
          fill="url(#b)"
        />
        <Path
          d="m160.885 416.725-6.198 13.191-20.979 45.137c-.159 17.8 91.544 109.345 148.919 107.438l72.791-33.694c-78.831 13.668-203.592-112.842-194.533-132.072Z"
          fill="url(#c)"
        />
        <Path
          d="M86.345 577.243c7.629 15.258 44.978 52.448 75.97 61.189l76.923-35.601.476-.317c-47.361 21.773-127.463-58.964-128.893-77.718l-24.476 52.447Z"
          fill="url(#d)"
        />
        <Path
          opacity={0.75}
          d="m148.489 644.79 358.55-166.242L250.841 222.35 84.598 580.741c-2.384 5.721-11.443 28.766 13.191 50.699 26.701 23.681 44.978 15.734 50.7 13.35Z"
          fill="url(#e)"
        />
        <Path
          opacity={0.75}
          d="m148.489 644.79 358.55-166.242L250.841 222.35 84.598 580.741c-2.384 5.721-11.443 28.766 13.191 50.699 26.701 23.681 44.978 15.734 50.7 13.35Z"
          fill="url(#f)"
        />
        <Path
          d="M373.376 223.621c-4.291 8.741-12.715 10.013-18.913 8.105l10.172-20.184s11.443 2.543 11.761-4.927l.476 10.49-3.496 6.516Z"
          fill="url(#g)"
        />
        <Path
          d="M401.825 112.369s7.311-3.338 11.92-12.874C418.354 89.96 395.627 72 395.627 72l-10.648 18.595s17.959 11.761 12.396 15.734c-5.721 3.974 4.45 6.04 4.45 6.04Z"
          fill="url(#h)"
        />
        <Path
          d="M587.775 265.26c3.338-29.244-16.37-38.939-23.522-38.144 0 0-1.271-9.536 11.443-12.555 8.424-1.908 29.879 17.164 24.317 38.779l-12.238 11.92Z"
          fill="url(#i)"
        />
        <Path
          d="M510.058 476.322c-17.8 17.8-89.637-25.429-160.68-96.313-70.883-70.883-114.113-142.879-96.312-160.68 17.8-17.8 89.637 25.429 160.68 96.313 70.883 71.042 113.954 142.879 96.312 160.68Z"
          fill="url(#j)"
        />
        <Path
          d="M504.019 464.558c-13.509 13.509-78.035-29.084-143.992-95.2-65.957-66.115-108.709-130.483-95.2-143.992 13.509-13.509 78.035 29.084 143.992 95.2s108.709 130.483 95.2 143.992Z"
          fill="url(#k)"
        />
        <Path
          d="M413.586 99.497s-8.264 17.641-9.377 19.549c-4.132 6.993-15.734 9.377-36.554 6.516-20.82-2.861-26.859-1.748-27.813-1.589-.954.317-13.191-9.536-13.191-9.536l1.112-10.013s2.861-3.814 12.397-2.543c17.005 2.543 67.069 10.966 73.426-2.384Z"
          fill="url(#l)"
        />
        <Path
          d="M454.91 394.63c16.688-19.072 32.263-4.132 42.117-17.8l-16.847-17.165c-9.854 13.509-24.158.795-41.799 19.39l16.529 15.575Z"
          fill="url(#m)"
        />
        <Path
          d="M273.886 163.228c23.045 13.668 2.543 32.422 15.575 43.071l17.96-16.052c-13.033-10.649 5.721-29.085-17.324-42.753l-16.211 15.734Z"
          fill="url(#n)"
        />
        <Path
          d="M517.845 233.954c.636-.159.954-3.973 10.331-10.649 9.377-6.675 30.515 3.656 33.217 5.245 2.861 1.59.477 27.813.477 27.813s-26.383-28.131-39.575-21.614c-13.191 6.357-4.45-.795-4.45-.795Z"
          fill="url(#o)"
        />
        <Path
          d="M521.342 299.275s-.953 10.331-5.721 15.099c-8.583 8.423-22.251-4.291-39.574.318 0 0 7.946-20.185 8.741-21.774 0 0 6.993-4.291 14.145-.159 7.311 3.973 13.668 5.245 18.118 2.861 4.45-2.384 4.291 3.655 4.291 3.655Z"
          fill="url(#p)"
        />
        <Path
          d="M567.91 253.819s-17.006 7.788-19.231 8.9c-2.225 1.113-7.311-38.461 4.927-42.435 12.397-3.973 20.82-5.403 22.092-5.562 1.271-.318-21.297 2.066-7.788 39.097ZM515.621 314.211c6.993-7.31 16.528-18.118 16.052-21.137-2.225-19.39-17.96-62.143-3.497-69.93 0 0-13.509 9.535-17.641 12.396-4.132 2.861-7.152 10.49-6.834 23.045.794 21.933 18.277 49.11 11.92 55.626Z"
          fill="#FFBF00"
        />
        <Path
          d="M467.306 157.346c-11.602 81.532-92.499 159.408-92.499 159.408l10.967 16.688s88.048-91.704 99.332-173.553l-17.8-2.543Z"
          fill="url(#q)"
        />
        <Path
          d="M318.068 123.335c-1.907 3.496 3.656 9.377 17.006 25.588s47.998 59.123 38.144 74.698l10.648-21.933s.159-17.482-10.33-34.488c-16.529-26.7-48.157-55.467-45.773-62.619l-9.695 18.754Z"
          fill="url(#r)"
        />
        <Path
          d="M388.952 371.427a6.516 6.516 0 1 0 .001-13.033 6.516 6.516 0 0 0-.001 13.033Z"
          fill="url(#s)"
        />
        <Path
          d="M479.703 100.609a6.516 6.516 0 1 0 0-13.033 6.516 6.516 0 0 0 0 13.033Z"
          fill="url(#t)"
        />
        <Path
          d="M418.515 195.174a6.516 6.516 0 1 0 0-13.032 6.516 6.516 0 0 0 0 13.032Z"
          fill="url(#u)"
        />
        <Path
          d="M457.134 314.53a6.516 6.516 0 1 0 0-13.032 6.516 6.516 0 0 0 0 13.032Z"
          fill="url(#v)"
        />
        <Path
          d="M624.648 298.638a6.516 6.516 0 1 0 0-13.032 6.516 6.516 0 0 0 0 13.032Z"
          fill="url(#w)"
        />
        <Path
          d="M583.167 436.113a6.517 6.517 0 1 0-.002-13.034 6.517 6.517 0 0 0 .002 13.034Z"
          fill="url(#x)"
        />
        <Path
          d="M555.99 352.196a6.516 6.516 0 1 0 0-13.032 6.516 6.516 0 1 0 0 13.032Z"
          fill="url(#y)"
        />
        <Path
          d="M591.749 175.145a6.517 6.517 0 1 0-.002-13.034 6.517 6.517 0 0 0 .002 13.034Z"
          fill="url(#z)"
        />
        <Path
          d="M518.642 196.441a6.517 6.517 0 1 0-.002-13.034 6.517 6.517 0 0 0 .002 13.034Z"
          fill="url(#A)"
        />
        <Path
          d="M462.855 453.911c66.434-54.514 178.958-65.798 178.958-65.798l3.655-25.111s-133.185 15.893-203.75 77.082c7.628 5.245 14.621 9.854 21.137 13.827Z"
          fill="url(#B)"
        />
        <Path
          d="M296.137 296.89c4.45 6.039 9.377 12.079 14.622 18.436 14.145-31.151 11.125-55.626 11.125-55.626l-17.324-10.807c1.749 19.23-4.132 37.666-8.423 47.997Z"
          fill="url(#C)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="a"
          x1={63.557}
          y1={272.418}
          x2={347.213}
          y2={608.565}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.254} stopColor="#FBE07A" />
          <Stop offset={1} stopColor="#FF40BF" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={217.715}
          y1={297.02}
          x2={453.109}
          y2={532.415}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.254} stopColor="#9F00E8" />
          <Stop offset={1} stopColor="#7000A3" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={152.468}
          y1={425.172}
          x2={315.723}
          y2={588.427}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.254} stopColor="#9F00E8" />
          <Stop offset={1} stopColor="#7000A3" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={103.117}
          y1={532.28}
          x2={206.434}
          y2={635.597}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.254} stopColor="#9F00E8" />
          <Stop offset={1} stopColor="#7000A3" />
        </LinearGradient>
        <LinearGradient
          id="g"
          x1={374.58}
          y1={217.684}
          x2={413.591}
          y2={205.225}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#BD2719" />
          <Stop offset={1} stopColor="#FF4E0D" />
        </LinearGradient>
        <LinearGradient
          id="h"
          x1={410.852}
          y1={120.887}
          x2={393.386}
          y2={77.493}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#BD2719" />
          <Stop offset={1} stopColor="#FF4E0D" />
        </LinearGradient>
        <LinearGradient
          id="i"
          x1={605.121}
          y1={253.418}
          x2={540.061}
          y2={211.731}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCB4B" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="j"
          x1={438.434}
          y1={168.4}
          x2={293.073}
          y2={626.691}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.254} stopColor="#FBE07A" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="k"
          x1={486.157}
          y1={273.599}
          x2={263.068}
          y2={430.064}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FBE07A" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          id="l"
          x1={306.585}
          y1={114.579}
          x2={378.635}
          y2={113.487}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#BD2719" />
          <Stop offset={1} stopColor="#FF4E0D" />
        </LinearGradient>
        <LinearGradient
          id="m"
          x1={476.193}
          y1={363.045}
          x2={458.867}
          y2={394.133}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF9214" />
          <Stop offset={1} stopColor="#FF4E0D" />
        </LinearGradient>
        <LinearGradient
          id="n"
          x1={273.783}
          y1={124.071}
          x2={299.983}
          y2={199.032}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#80DAFE" />
          <Stop offset={1} stopColor="#008EE6" />
        </LinearGradient>
        <LinearGradient
          id="o"
          x1={541.524}
          y1={269.738}
          x2={535.527}
          y2={194.12}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCB4B" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="p"
          x1={478.018}
          y1={301.609}
          x2={519.799}
          y2={308.377}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCB4B" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="q"
          x1={449.303}
          y1={160.28}
          x2={387.323}
          y2={415.352}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.254} stopColor="#E100FF" />
          <Stop offset={1} stopColor="#7000A3" />
        </LinearGradient>
        <LinearGradient
          id="r"
          x1={327.399}
          y1={118.484}
          x2={373.249}
          y2={194.901}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF9214" />
          <Stop offset={1} stopColor="#FF4E0D" />
        </LinearGradient>
        <LinearGradient
          id="s"
          x1={376.489}
          y1={328.235}
          x2={401.234}
          y2={401.013}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCB4B" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="t"
          x1={459.823}
          y1={61.502}
          x2={500.578}
          y2={128.458}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FBE07A" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="u"
          x1={417.542}
          y1={185.052}
          x2={427.731}
          y2={223.624}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#80DAFE" />
          <Stop offset={1} stopColor="#008EE6" />
        </LinearGradient>
        <LinearGradient
          id="v"
          x1={452.742}
          y1={295.64}
          x2={458.961}
          y2={313.432}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#80DAFE" />
          <Stop offset={1} stopColor="#008EE6" />
        </LinearGradient>
        <LinearGradient
          id="w"
          x1={629.375}
          y1={276.91}
          x2={617.73}
          y2={314.026}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCB4B" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="x"
          x1={581.247}
          y1={387.961}
          x2={584.886}
          y2={467.29}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFCB4B" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <LinearGradient
          id="y"
          x1={551.721}
          y1={333.366}
          x2={557.939}
          y2={351.158}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.254} stopColor="#9F00E8" />
          <Stop offset={1} stopColor="#7000A3" />
        </LinearGradient>
        <LinearGradient
          id="z"
          x1={604.399}
          y1={146.914}
          x2={580.383}
          y2={188.397}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#80DAFE" />
          <Stop offset={1} stopColor="#008EE6" />
        </LinearGradient>
        <LinearGradient
          id="A"
          x1={516.961}
          y1={180.679}
          x2={524.966}
          y2={225.073}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF9214" />
          <Stop offset={1} stopColor="#FF4E0D" />
        </LinearGradient>
        <LinearGradient
          id="B"
          x1={396.678}
          y1={405.164}
          x2={628.718}
          y2={409.931}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#80DAFE" />
          <Stop offset={1} stopColor="#008EE6" />
        </LinearGradient>
        <LinearGradient
          id="C"
          x1={268.493}
          y1={379.359}
          x2={324.119}
          y2={241.088}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FBE07A" />
          <Stop offset={1} stopColor="#E81CA2" />
        </LinearGradient>
        <RadialGradient
          id="e"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-80.42855 141.59136 -43.34796 -24.62307 217.259 384.894)"
        >
          <Stop stopColor="#fff" stopOpacity={0.5} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="f"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(151.7 98.926 307.246) scale(258.133 80.5086)"
        >
          <Stop stopColor="#440063" stopOpacity={0.75} />
          <Stop offset={1} stopColor="#420061" stopOpacity={0} />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};
