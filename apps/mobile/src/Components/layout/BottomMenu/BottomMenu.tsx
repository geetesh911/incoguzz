import React, { FC } from "react";
import { Text } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyledBottomMenuContainer, StyledMenuItem } from "./styled";
import { RouteIcons, RouteNames } from "../../../Navigation/constants";
import { useTheme } from "../../../styles/theme";
import { SheetManager } from "react-native-actions-sheet";
import { AddPostScreen } from "../../../Screens/AppScreens/AddPostScreen";
import { useAppSelector } from "../../../redux/hooks";

export const BottomMenu: FC<BottomTabBarProps> = ({
  state: navigationState,
  descriptors,
  navigation,
}) => {
  const bottomSheetIds = useAppSelector(state => state.app.bottomSheetIds);

  const theme = useTheme();

  return (
    <StyledBottomMenuContainer>
      {navigationState?.routes?.map((route, index) => {
        const isFocused = navigationState.index === index;
        const onAddPress = () => {
          SheetManager.show(bottomSheetIds?.addPost);
        };

        const onPress = () => {
          if (route.name === RouteNames.AddPost) {
            onAddPress();
            return;
          }
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
      <AddPostScreen />
    </StyledBottomMenuContainer>
  );
};
