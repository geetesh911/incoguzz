import React, { FC } from "react";
import { Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyledBottomMenuContainer, StyledMenuItem } from "./styled";
import { RouteIcons } from "../../../Navigation/constants";
import { useTheme } from "../../../styles/theme";

export const BottomMenu: FC<BottomTabBarProps> = ({
  state: navigationState,
  descriptors,
  navigation,
}) => {
  const theme = useTheme();
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

        const activeColor = theme?.colors?.primary;
        const color = theme?.objectBackgrounds?.secondary;

        const iconColor = isFocused ? activeColor : color;

        return (
          <StyledMenuItem
            key={route.name}
            onPress={onPress}
            accessibilityRole="button"
            onLongPress={onLongPress}
            style={{
              borderColor: theme?.objectBackgrounds?.primary,
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
