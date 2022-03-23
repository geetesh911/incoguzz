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

export const FireDimEmoji: FC<IIconInterface> = ({ height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <G opacity={0.5}>
        <Path
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#a)"
        />
        <Path
          d="M469.759 245.139c37.948-69.968-56.076-79.624-56.245-122.655 0 0-16.602 44.386 23.04 74.711 32.357 24.565 33.205 47.944 33.205 47.944Z"
          fill="url(#b)"
        />
        <Path
          d="M270.189 111.301c-14.4 14.23 5.422 73.016-39.642 96.226 0 0-15.247-64.546 39.642-96.226Z"
          fill="url(#c)"
        />
        <Path
          opacity={0.5}
          d="M164.647 343.738C152.111 365.253 135 405.065 135 461.479c0 63.021 80.301 178.899 211.595 178.899 128.245 0 227.859-98.767 227.859-183.642 0-30.664-8.47-69.798-27.275-97.582-1.355 17.45-5.591 41.167-18.635 53.534-6.777 6.438-15.247 9.318-24.565 8.302l-9.487-.847 2.88-8.979c.339-.847 24.903-81.149 7.115-128.753-7.115 17.449-19.313 39.981-34.221 41.167l-8.471.677.17-8.47c.677-35.068-20.838-53.704-45.741-75.219-35.577-30.833-75.727-65.732-60.989-154.334-24.734 14.569-72.847 54.72-60.819 137.562 6.099 41.506-8.301 72.339-8.809 73.694l-1.694 3.558-3.727.678c-7.115 1.355-14.57-1.525-21.346-7.963-9.148-8.978-17.449-25.92-17.788-48.96-13.892 14.231-33.036 38.796-33.036 66.749 0 45.91 22.363 95.378 22.532 95.887l6.268 13.891-14.908-3.218c-38.964-8.471-53.534-44.725-57.261-74.372Z"
          fill="url(#d)"
        />
        <Path
          d="M413.513 122.484c-3.388 25.582 6.777 62.344 23.04 74.711 14.909 11.351 31.68 30.833 33.036 47.944 25.411-49.808-10.335-68.273-30.833-75.558-8.64-3.05-24.565-20.838-25.243-47.097Z"
          fill="url(#e)"
        />
        <Path
          d="M335.414 115.196c-56.244 88.094 16.772 181.101-20.837 236.838-37.61 55.736-75.727 4.235-78.269-30.664 0 0 .339 112.829 56.076 157.384 55.736 44.555-107.238 34.899-129.6-19.482 0 0 0 181.101 183.811 181.101 183.812 0 214.476-168.565 214.476-168.565s-66.918 57.092-111.473 12.536c0 0 33.374-58.447 41.845-118.418 0 0-23.04 14.569-58.448 8.979 0 0 19.652-84.198-20.498-111.812-51.502-35.407-95.04-119.774-77.083-147.897Z"
          fill="url(#f)"
        />
        <Path
          d="M349.474 218.879c-29.477 38.795 27.953 138.409-32.357 177.882-33.375 21.854-52.518-4.404-52.518-4.404s8.979 40.32 44.894 76.235-54.042 84.536-127.059 21.684c0 0 25.073 150.946 194.993 125.535 187.539-27.953 173.647-167.379 173.647-167.379s-50.823 79.962-123.162 41.675c0 0 45.572-63.529 45.572-99.953 0 0-30.833 18.297-66.071.678 0 0 16.772-84.706-3.219-97.412-47.943-30.663-54.72-74.541-54.72-74.541Z"
          fill="url(#g)"
        />
        <Path
          opacity={0.5}
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#h)"
        />
        <Path
          opacity={0.5}
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#i)"
        />
        <Path
          d="M146.519 422.176c3.897 95.718 82.673 210.41 205.835 210.41 123.163 0 184.659-129.939 188.556-206.005 0 0-23.04 44.725-75.05 53.704-52.009 8.979 3.558-89.45-32.866-147.727 0 0-32.188 101.477-77.929 105.204-45.741 3.727-84.537-67.087-84.537-105.204 0 0-28.122 68.611-21.176 123.162 10.673 82.842-102.833-33.544-102.833-33.544Z"
          fill="url(#j)"
        />
        <Path
          opacity={0.5}
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#k)"
        />
        <Path
          opacity={0.5}
          d="M469.759 245.139c37.948-69.968-56.076-79.624-56.245-122.655 0 0-16.602 44.386 23.04 74.711 32.357 24.565 33.205 47.944 33.205 47.944Z"
          fill="url(#l)"
        />
        <Path
          d="M270.189 111.301c-14.23 14.23-5.082 59.125-39.642 96.226 0 0-15.247-64.546 39.642-96.226Z"
          fill="url(#m)"
        />
        <Path
          opacity={0.5}
          d="M270.189 111.301c-14.4 14.23 5.422 73.016-39.642 96.226 0 0-15.247-64.546 39.642-96.226Z"
          fill="url(#n)"
        />
        <Path
          opacity={0.5}
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#o)"
        />
        <Path
          opacity={0.25}
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#p)"
        />
        <Path
          opacity={0.25}
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#q)"
        />
        <Path
          opacity={0.25}
          d="M469.588 315.783C471.452 222.099 329.146 234.974 365.739 72c0 0-95.548 37.609-78.777 152.979 5.76 39.642-8.131 69.289-8.131 69.289-14.062 2.88-35.916-25.073-28.292-68.273 0 0-50.146 37.44-50.146 85.553s23.209 99.106 23.209 99.106c-57.769-12.536-52.009-90.466-52.009-90.466S135 369.148 135 461.478C135 533.308 215.979 648 346.595 648c130.617 0 235.483-101.308 235.483-191.435 0-39.473-13.384-90.466-42.353-118.25 0 0 3.896 78.777-35.069 75.05 0 0 32.189-102.833-1.524-149.93 0 0-16.264 50.824-33.544 52.348Z"
          fill="url(#r)"
        />
      </G>
      <Defs>
        <RadialGradient
          id="e"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(302.417 0 0 302.418 481.584 8.257)"
        >
          <Stop offset={0.001} stopColor="#FFED1C" stopOpacity={0.6} />
          <Stop offset={0.948} stopColor="#FFED1C" stopOpacity={0.026} />
          <Stop offset={0.991} stopColor="#FFED1C" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="h"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(233.937 0 0 189.91 355.578 513.393)"
        >
          <Stop offset={0.001} stopColor="#FFBC47" />
          <Stop offset={0.294} stopColor="#FFBF4B" stopOpacity={0.707} />
          <Stop offset={0.562} stopColor="#FEC656" stopOpacity={0.438} />
          <Stop offset={0.82} stopColor="#FCD368" stopOpacity={0.18} />
          <Stop offset={1} stopColor="#FBE07A" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="i"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(226.728 0 0 184.058 355.578 503.777)"
        >
          <Stop offset={0.001} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="j"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(278.519 0 0 324.28 256.161 545.599)"
        >
          <Stop offset={0.001} stopColor="#FFED1C" stopOpacity={0.6} />
          <Stop offset={0.948} stopColor="#FFED1C" stopOpacity={0.026} />
          <Stop offset={0.991} stopColor="#FFED1C" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="k"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-4.43444 87.91373 -71.36447 -3.59968 355.591 503.753)"
        >
          <Stop offset={0.001} stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="l"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(404.25 122.324) scale(99.9161)"
        >
          <Stop offset={0.001} stopColor="#FFED1C" />
          <Stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
          <Stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
          <Stop offset={1} stopColor="#FFF686" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="m"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(44.7746 -67.4208 15.31148 10.16846 239.492 170.4)"
        >
          <Stop offset={0.001} stopColor="#FFED1C" stopOpacity={0.6} />
          <Stop offset={0.948} stopColor="#FFED1C" stopOpacity={0.026} />
          <Stop offset={0.991} stopColor="#FFED1C" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="n"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-6.41071 72.4403 -29.14779 -2.57948 255.519 106.935)"
        >
          <Stop offset={0.001} stopColor="#FFED1C" />
          <Stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
          <Stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
          <Stop offset={1} stopColor="#FFF686" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="o"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(382.047 109.503) scale(311.768)"
        >
          <Stop offset={0.001} stopColor="#FF4C00" />
          <Stop offset={0.135} stopColor="#FF5B0C" stopOpacity={0.866} />
          <Stop offset={0.394} stopColor="#FF842C" stopOpacity={0.607} />
          <Stop offset={0.749} stopColor="#FFC45F" stopOpacity={0.251} />
          <Stop offset={1} stopColor="#FFF686" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="p"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(523.848 362.083) scale(165.481)"
        >
          <Stop offset={0.001} stopColor="#FFED1C" />
          <Stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
          <Stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
          <Stop offset={1} stopColor="#FFF686" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="q"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(185.103 421.062) scale(176.382)"
        >
          <Stop offset={0.001} stopColor="#FFED1C" />
          <Stop offset={0.2} stopColor="#FFEE2B" stopOpacity={0.801} />
          <Stop offset={0.584} stopColor="#FFF254" stopOpacity={0.417} />
          <Stop offset={1} stopColor="#FFF686" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="r"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(20.49573 301.433 -183.2409 12.45934 352.945 385.412)"
        >
          <Stop stopColor="#FF4C00" stopOpacity={0} />
          <Stop offset={0.987} stopColor="#FF4C00" stopOpacity={0.989} />
          <Stop offset={0.999} stopColor="#FF4C00" />
        </RadialGradient>
        <LinearGradient
          id="a"
          x1={387.188}
          y1={663.92}
          x2={283.335}
          y2={-88.694}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="red" />
          <Stop offset={0.232} stopColor="#FF1500" />
          <Stop offset={0.737} stopColor="#FF3D00" />
          <Stop offset={0.999} stopColor="#FF4C00" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={508.883}
          y1={647.128}
          x2={405.03}
          y2={-105.487}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="red" />
          <Stop offset={0.232} stopColor="#FF1500" />
          <Stop offset={0.737} stopColor="#FF3D00" />
          <Stop offset={0.999} stopColor="#FF4C00" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={321.114}
          y1={673.035}
          x2={217.261}
          y2={-79.579}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="red" />
          <Stop offset={0.232} stopColor="#FF1500" />
          <Stop offset={0.737} stopColor="#FF3D00" />
          <Stop offset={0.999} stopColor="#FF4C00" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={384.39}
          y1={535.722}
          x2={157.451}
          y2={-112.398}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF8000" />
          <Stop offset={0.639} stopColor="#FF5B00" />
          <Stop offset={0.999} stopColor="#FF4C00" />
        </LinearGradient>
        <LinearGradient
          id="f"
          x1={296.267}
          y1={103.221}
          x2={378.324}
          y2={563.508}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF8000" />
          <Stop offset={0.023} stopColor="#FE7F02" stopOpacity={0.977} />
          <Stop offset={0.666} stopColor="#ED582A" stopOpacity={0.334} />
          <Stop offset={1} stopColor="#E74939" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="g"
          x1={359.986}
          y1={600.612}
          x2={377.722}
          y2={277.419}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FFBC47" />
          <Stop offset={0.187} stopColor="#FFB137" stopOpacity={0.813} />
          <Stop offset={0.722} stopColor="#FF940F" stopOpacity={0.278} />
          <Stop offset={1} stopColor="#FF8900" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
