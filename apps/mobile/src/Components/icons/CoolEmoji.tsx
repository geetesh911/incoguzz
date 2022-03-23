import React, { FC } from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { IIconInterface } from "./interfaces";

export const CoolEmoji: FC<IIconInterface> = ({ height, width }) => {
  return (
    <Svg
      width={width || 720}
      height={height || 720}
      viewBox="0 0 720 720"
      fill="none"
    >
      <Path
        d="M636.869 401.413V263.536h-60.044v57.657C561.443 284.874 525.777 260 483.223 260c-45.737 0-83.504 28.737-96.689 69.523C373.342 288.737 335.574 260 289.838 260c-35.7 0-66.559 17.503-84.654 44.574C187.491 276.653 156.401 260 121.742 260 63.738 260 20 303.738 20 361.742c0 57.997 43.738 101.734 101.742 101.734 34.924 0 66-16.646 83.449-44.567 18.102 27.071 48.953 44.567 84.647 44.567 45.736 0 83.497-28.73 96.689-69.516 13.192 40.786 50.959 69.516 96.689 69.516 42.554 0 78.22-24.874 93.602-61.193v57.657H700v-58.527h-63.131Zm-477.952-22.379-4.855 8.745c-5.8 10.438-17.884 16.667-32.32 16.667-25.718 0-41.691-16.361-41.691-42.704 0-26.344 15.973-42.704 41.691-42.704 14.456 0 26.268 6.12 32.388 16.782l4.91 8.554 36.346-21.066c-4.692 11.812-7.283 24.759-7.283 38.434 0 13.674 2.591 26.622 7.283 38.433l-36.469-21.141Zm130.921 25.412c-24.548 0-41.691-17.558-41.691-42.704 0-25.147 17.143-42.704 41.691-42.704 24.548 0 41.69 17.564 41.69 42.704 0 25.139-17.142 42.704-41.69 42.704Zm193.385 0c-24.548 0-41.691-17.558-41.691-42.704 0-25.147 17.143-42.704 41.691-42.704 24.548 0 41.691 17.564 41.691 42.704 0 25.139-17.143 42.704-41.691 42.704Z"
        fill="url(#a)"
      />
      <Path
        d="M29.815 361.743c0-52.02 38.638-91.922 91.916-91.922 32.069 0 60.35 15.912 75.752 40.909l-34.843 20.202c-7.827-13.634-22.977-21.712-40.909-21.712-31.314 0-51.517 20.958-51.517 52.523 0 31.566 20.203 52.523 51.517 52.523 17.932 0 33.334-8.078 40.909-21.719l34.843 20.203c-15.15 24.997-43.432 40.909-75.752 40.909-53.278 0-91.916-39.896-91.916-91.916Z"
        fill="url(#b)"
      />
      <Path
        d="M197.92 361.745c0-52.02 41.161-91.923 91.916-91.923 50.755 0 91.916 39.903 91.916 91.923s-41.161 91.915-91.916 91.915c-50.755 0-91.916-39.895-91.916-91.915Zm143.433 0c0-31.566-22.726-52.524-51.51-52.524-28.791 0-51.517 20.958-51.517 52.524 0 31.565 22.726 52.523 51.517 52.523 28.777 0 51.51-20.958 51.51-52.523Z"
        fill="url(#c)"
      />
      <Path
        d="M690.183 411.237v38.889H586.636V273.36h40.409v137.877h63.138Z"
        fill="url(#d)"
      />
      <Path
        d="M391.305 361.745c0-52.02 41.161-91.923 91.916-91.923 50.755 0 91.915 39.903 91.915 91.923s-41.16 91.915-91.915 91.915c-50.762 0-91.916-39.895-91.916-91.915Zm143.426 0c0-31.566-22.726-52.524-51.51-52.524-28.791 0-51.517 20.958-51.517 52.524 0 31.565 22.726 52.523 51.517 52.523 28.784 0 51.51-20.958 51.51-52.523Z"
        fill="url(#e)"
      />
      <Path
        d="M165.44 415.797c-11.709 9.813-27.234 15.219-43.704 15.219-40.14 0-69.279-29.131-69.279-69.272 0-40.14 29.145-69.278 69.286-69.278 16.347 0 31.845 5.433 43.636 15.307a2.909 2.909 0 0 0 4.094-.361 2.914 2.914 0 0 0-.361-4.093c-12.838-10.738-29.662-16.66-47.369-16.66-43.507 0-75.086 31.579-75.086 75.085 0 43.5 31.573 75.079 75.086 75.079 17.837 0 34.674-5.889 47.431-16.578a2.9 2.9 0 0 0 .36-4.087 2.897 2.897 0 0 0-4.094-.361Z"
        fill="url(#f)"
      />
      <Path
        d="M289.837 286.625c-42.113 0-75.107 33-75.107 75.12 0 42.112 32.994 75.106 75.107 75.106 42.12 0 75.114-32.994 75.114-75.106 0-42.12-32.994-75.12-75.114-75.12Zm0 144.426c-38.862 0-69.3-30.444-69.3-69.299 0-38.869 30.444-69.313 69.3-69.313 38.87 0 69.307 30.45 69.307 69.313 0 38.855-30.437 69.299-69.307 69.299Z"
        fill="url(#g)"
      />
      <Path
        d="M483.225 286.625c-42.119 0-75.113 33-75.113 75.12 0 42.112 32.994 75.106 75.113 75.106 42.113 0 75.106-32.994 75.106-75.106 0-42.12-32.993-75.12-75.106-75.12Zm0 144.426c-38.869 0-69.306-30.444-69.306-69.299 0-38.869 30.444-69.313 69.306-69.313 38.862 0 69.299 30.45 69.299 69.313.007 38.855-30.437 69.299-69.299 69.299Z"
        fill="url(#h)"
      />
      <Path
        d="M676.154 426.178h-64.933v-135.98a2.903 2.903 0 1 0-5.807 0v138.884a2.902 2.902 0 0 0 2.904 2.903h67.836a2.903 2.903 0 1 0 0-5.807Z"
        fill="url(#i)"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={360}
          y1={276.74}
          x2={360}
          y2={508.219}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8800C7" />
          <Stop offset={1} stopColor="#3000C2" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={113.652}
          y1={269.822}
          x2={113.652}
          y2={453.658}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF8000" />
          <Stop offset={0.421} stopColor="#FFBF00" />
          <Stop offset={0.505} stopColor="#FBE07A" />
          <Stop offset={0.634} stopColor="#008EE6" />
          <Stop offset={1} stopColor="#80DAFE" />
        </LinearGradient>
        <LinearGradient
          id="c"
          x1={289.837}
          y1={269.823}
          x2={289.837}
          y2={453.659}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF8000" />
          <Stop offset={0.421} stopColor="#FFBF00" />
          <Stop offset={0.505} stopColor="#FBE07A" />
          <Stop offset={0.634} stopColor="#008EE6" />
          <Stop offset={1} stopColor="#80DAFE" />
        </LinearGradient>
        <LinearGradient
          id="d"
          x1={638.409}
          y1={273.36}
          x2={638.409}
          y2={450.126}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF8000" />
          <Stop offset={0.421} stopColor="#FFBF00" />
          <Stop offset={0.505} stopColor="#FBE07A" />
          <Stop offset={0.634} stopColor="#008EE6" />
          <Stop offset={1} stopColor="#80DAFE" />
        </LinearGradient>
        <LinearGradient
          id="e"
          x1={483.219}
          y1={269.823}
          x2={483.219}
          y2={453.659}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF8000" />
          <Stop offset={0.421} stopColor="#FFBF00" />
          <Stop offset={0.505} stopColor="#FBE07A" />
          <Stop offset={0.634} stopColor="#008EE6" />
          <Stop offset={1} stopColor="#80DAFE" />
        </LinearGradient>
        <LinearGradient
          id="f"
          x1={108.434}
          y1={360.781}
          x2={108.434}
          y2={115.778}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="g"
          x1={289.84}
          y1={360.782}
          x2={289.84}
          y2={115.778}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="h"
          x1={483.224}
          y1={360.782}
          x2={483.224}
          y2={115.778}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="i"
          x1={642.234}
          y1={360.785}
          x2={642.234}
          y2={115.781}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
