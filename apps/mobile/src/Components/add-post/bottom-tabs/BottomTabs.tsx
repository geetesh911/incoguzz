import React, { FC, useState } from "react";
import { StyledBottomTabContainer, StyledBottomTabItem } from "./styled";

interface IBottomTabsProps {
  activeIndex: number;
}

export const BottomTabs: FC<IBottomTabsProps> = ({ activeIndex }) => {
  const [tabItems] = useState<string[]>(["Media", "Text", "Audio"]);
  return (
    <StyledBottomTabContainer>
      {tabItems.map((tabItem, index) => (
        <StyledBottomTabItem
          width={100 / tabItems.length}
          active={activeIndex === index}
          key={tabItem}
        >
          {tabItem}
        </StyledBottomTabItem>
      ))}
    </StyledBottomTabContainer>
  );
};
