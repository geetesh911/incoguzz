import React, { FC } from "react";
import { RequireAtLeastOne } from "type-fest";
import { StyledRoundIcon, StyledRoundIconContainer } from "./styled";

interface IRoundIconProps {
  iconComponent?: JSX.Element;
  iconName?: string;
}

export type RoundIconProps = RequireAtLeastOne<
  IRoundIconProps,
  "iconComponent" | "iconName"
>;

export const RoundIcon: FC<RoundIconProps> = ({ iconComponent, iconName }) => {
  return (
    <StyledRoundIconContainer>
      {iconComponent || <StyledRoundIcon name={iconName as string} />}
    </StyledRoundIconContainer>
  );
};
