import React, { FC } from "react";
import { StyledReaction, StyledReactionsContainer } from "./styled";
import { LaughEmoji } from "../../icons/LaughEmoji";
import { CoolEmoji } from "../../icons/CoolEmoji";
import { HeartEmoji } from "../../icons/HeartEmoji";
import { FireEmoji } from "../../icons/FireEmoji";
import { PopperEmoji } from "../../icons/PopperEmoji";
import { IReaction, IReactions } from "./interfaces";
import Sound from "react-native-sound";

export const Reactions: FC = () => {
  const reactions: IReactions = [
    { name: "like", Component: HeartEmoji },
    { name: "laugh", Component: LaughEmoji },
    { name: "cool", Component: CoolEmoji },
    { name: "fire", Component: FireEmoji },
    { name: "celebrate", Component: PopperEmoji },
  ];

  const onReactionPress = (Reaction: IReaction) => {
    Sound.setCategory("Playback");

    const reactionSound = new Sound(
      "https://res.cloudinary.com/geeteshpp/video/upload/v1648038994/Facebook_Like_-_Sound_Effect_lzpkdb.mp3",
      undefined,
      error => {
        if (error) console.log("error", error);

        reactionSound.play(success => {
          if (success) console.log(Reaction.name);
        });
      },
    );
  };

  return (
    <StyledReactionsContainer>
      {reactions.map(Reaction => (
        <StyledReaction
          key={Reaction.name}
          onPress={() => onReactionPress(Reaction)}
        >
          <Reaction.Component height={35} width={35} />
        </StyledReaction>
      ))}
    </StyledReactionsContainer>
  );
};
