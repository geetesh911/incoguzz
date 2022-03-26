import React, { FC, useState } from "react";
import { FullScreenImage } from "../../shared";
import {
  StyledUserDetailsContainer,
  StyledUserDp,
  StyledUserDpContainer,
  StyledUserHeaderContainer,
  StyledUserName,
  StyledUserTextButton,
  StyledUserTextButtonText,
} from "./styled";

interface IUserHeaderProps {
  name: string;
  dpUrl: string;
}

export const UserHeader: FC<IUserHeaderProps> = ({ name, dpUrl }) => {
  const [isDpFullScreen, setIsDpFullScreen] = useState<boolean>(false);

  const displayDpFullScreen = () => {
    setIsDpFullScreen(true);
  };
  const closeDpFullScreen = () => {
    setIsDpFullScreen(false);
  };

  return (
    <>
      <StyledUserHeaderContainer>
        <StyledUserDetailsContainer>
          <StyledUserName numberOfLines={1} ellipsizeMode="tail">
            {name}
          </StyledUserName>
          <StyledUserTextButton>
            <StyledUserTextButtonText>
              View and edit profile
            </StyledUserTextButtonText>
          </StyledUserTextButton>
        </StyledUserDetailsContainer>
        <StyledUserDpContainer onPress={displayDpFullScreen}>
          <StyledUserDp source={{ uri: dpUrl }} />
        </StyledUserDpContainer>
      </StyledUserHeaderContainer>
      {isDpFullScreen && (
        <FullScreenImage open={isDpFullScreen} onClose={closeDpFullScreen} />
      )}
    </>
  );
};
