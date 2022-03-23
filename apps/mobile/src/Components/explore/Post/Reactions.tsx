import React, { FC } from "react";
import { StyledReaction, StyledReactionsContainer } from "./styled";
import { LaughEmoji } from "../../icons/LaughEmoji";
import { CoolEmoji } from "../../icons/CoolEmoji";
import { HeartEmoji } from "../../icons/HeartEmoji";
import { FireEmoji } from "../../icons/FireEmoji";
import { PopperEmoji } from "../../icons/PopperEmoji";

export const Reactions: FC = () => {
  const reactions = [
    { name: "like", Component: HeartEmoji },
    { name: "laugh", Component: LaughEmoji },
    { name: "cool", Component: CoolEmoji },
    { name: "fire", Component: FireEmoji },
    { name: "celebrate", Component: PopperEmoji },
  ];
  return (
    <StyledReactionsContainer>
      {reactions.map(Reaction => (
        <StyledReaction
          key={Reaction.name}
          onPress={() => console.log(Reaction.name)}
        >
          <Reaction.Component height={35} width={35} />
        </StyledReaction>
      ))}
    </StyledReactionsContainer>
  );
};
