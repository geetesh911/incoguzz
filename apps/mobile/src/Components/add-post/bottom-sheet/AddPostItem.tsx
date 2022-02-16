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
    <StyledAddPostItemContainer>
      <RoundIcon iconName={iconName as string} iconComponent={iconComponent} />
      <StyledAddPostItemLabel>{itemLabel}</StyledAddPostItemLabel>
    </StyledAddPostItemContainer>
  );
};
