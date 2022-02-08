import React, { FC } from "react";
import { Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyledBottomMenuContainer, StyledMenuItem } from "./styled";
import { RouteIcons } from "../../../constants/RoutesName";
import { dark, light, themes } from "../../../styles/theme";
import { useAppSelector } from "../../../redux/hooks";
import { ThemeEnum } from "@incoguzz/redux";

export const BottomMenu: FC<BottomTabBarProps> = ({
  state: navigationState,
  descriptors,
  navigation,
}) => {
  const themeMode = useAppSelector(state => state.theme.theme);

  return (
    <StyledBottomMenuContainer>
      {navigationState?.routes?.map((route, index) => {
        const isFocused = navigationState.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: route.params,
            });
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const activeColor = themes[themeMode]?.colors?.primary;
        const color = themes[themeMode]?.objectBackgrounds?.secondary;

        const iconColor = isFocused ? activeColor : color;

        return (
          <StyledMenuItem
            key={route.name}
            onPress={onPress}
            accessibilityRole="button"
            onLongPress={onLongPress}
            style={{
              borderColor: themes[themeMode]?.objectBackgrounds?.primary,
              borderTopWidth: 3,
            }}
          >
            <Text>
              {RouteIcons({ color: iconColor, routeName: route.name })}
            </Text>
          </StyledMenuItem>
        );
      })}
    </StyledBottomMenuContainer>
  );
};
