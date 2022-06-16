import React, { FC, useState } from "react";
import {
  StyledBottomTabContainer,
  StyledBottomTabItem,
  StyledWheelPicker,
  StyledWheelPickerItemContainer,
} from "./styled";

interface IBottomTabsProps {
  activeIndex: number;
  changeActiveIndex: (position: number) => void;
}

export const BottomTabs: FC<IBottomTabsProps> = ({
  activeIndex,
  changeActiveIndex,
}) => {
  const [tabItems] = useState<string[]>(["MEDIA", "TEXT", "AUDIO"]);

  const renderItem = (tabItem: string, index: number) => (
    <StyledWheelPickerItemContainer
      first={index === 0}
      last={index === tabItems.length - 1}
    >
      <StyledBottomTabItem active={activeIndex === index} key={tabItem}>
        {tabItem}
      </StyledBottomTabItem>
    </StyledWheelPickerItemContainer>
  );
  return (
    <StyledBottomTabContainer>
      <StyledWheelPicker
        data={tabItems}
        renderItem={({ item, index }) => renderItem(item, index)}
        initialScrollToIndex={activeIndex}
        onSelected={({ index }) => changeActiveIndex(index)}
        showsHorizontalScrollIndicator={false}
        scrollAnimation
        magnet
        selectOnPress
        horizontal
      />
    </StyledBottomTabContainer>
  );
};
