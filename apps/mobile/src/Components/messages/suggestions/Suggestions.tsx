import React, { FC } from "react";
import {
  StyledSuggestionHeading,
  StyledSuggestionsContainer,
  StyledUserImageContainer,
  StyledUserImage,
  StyledUserContainer,
  StyledSuggestionTextContainer,
  StyledAddUserIcon,
} from "./styled";

export const Suggestions: FC = () => {
  return (
    <StyledSuggestionsContainer>
      <StyledSuggestionTextContainer>
        <StyledSuggestionHeading>Suggestions</StyledSuggestionHeading>
      </StyledSuggestionTextContainer>
      <StyledUserContainer>
        <StyledUserImageContainer>
          <StyledAddUserIcon name="add" />
        </StyledUserImageContainer>
        {[1, 2, 3, 4].map(user => (
          <StyledUserImageContainer key={user}>
            <StyledUserImage
              source={{
                uri: "https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000",
              }}
            />
          </StyledUserImageContainer>
        ))}
      </StyledUserContainer>
    </StyledSuggestionsContainer>
  );
};
