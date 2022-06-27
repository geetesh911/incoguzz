import React, { FC } from "react";
import {
  StyledMessageItemContainer,
  StyledUserIconContainer,
  StyledUserIcon,
  StyledMessageDetailsContainer,
  StyledUserName,
  StyledUserMessage,
  StyledTimeDetailsContainer,
  StyledTimeDetailsText,
} from "./styled";

export const MessageItem: FC = () => {
  return (
    <StyledMessageItemContainer>
      <StyledUserIconContainer>
        <StyledUserIcon
          source={{
            uri: "https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000",
          }}
        />
      </StyledUserIconContainer>
      <StyledMessageDetailsContainer>
        <StyledUserName>Geetesh Laddha</StyledUserName>
        <StyledUserMessage numberOfLines={1} ellipsizeMode="tail">
          Hey Leo. Check out this amazing photo I took!
        </StyledUserMessage>
      </StyledMessageDetailsContainer>
      <StyledTimeDetailsContainer>
        <StyledTimeDetailsText>Now</StyledTimeDetailsText>
      </StyledTimeDetailsContainer>
    </StyledMessageItemContainer>
  );
};
