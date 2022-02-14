import React, { FC } from "react";
import { useTheme } from "../../../styles/theme";
import { RoundIcon, RoundIconProps } from "../../shared";
import { StyledAddPostItemContainer, StyledAddPostItemLabel } from "./styled";

type IAddPostItemProps = RoundIconProps & {
  itemLabel: string;
};

export const AddPostItem: FC<IAddPostItemProps> = ({
  itemLabel,
  iconName,
  iconComponent,
}) => {
  const theme = useTheme();
  return (
    <StyledAddPostItemContainer
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? theme.hoverColors.light
            : theme.objectBackgrounds.primary,
        },
      ]}
    >
      {iconComponent || <RoundIcon iconName={iconName as string} />}
      <StyledAddPostItemLabel>{itemLabel}</StyledAddPostItemLabel>
    </StyledAddPostItemContainer>
  );
};
