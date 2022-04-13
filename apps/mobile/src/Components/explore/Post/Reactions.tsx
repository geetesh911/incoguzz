import React, { FC } from "react";
import { StyledReaction, StyledReactionsContainer } from "./styled";
import { LaughEmoji } from "../../icons/LaughEmoji";
import { CoolEmoji } from "../../icons/CoolEmoji";
import { HeartEmoji } from "../../icons/HeartEmoji";
import { FireEmoji } from "../../icons/FireEmoji";
import { PopperEmoji } from "../../icons/PopperEmoji";
import { IReaction, IReactions } from "./interfaces";
import Sound from "react-native-sound";
import {
  PostReactionDocument,
  PostReactionMutation,
  PostReactionMutationVariables,
  ReactionType,
} from "@incoguzz/graphql";
import { useMutation } from "@apollo/client";

interface IReactionsProps {
  postId: string;
}

export const Reactions: FC<IReactionsProps> = ({ postId }) => {
  const [postReaction] = useMutation<
    PostReactionMutation,
    PostReactionMutationVariables
  >(PostReactionDocument);

  const reactions: IReactions = [
    { name: ReactionType.Like, Component: HeartEmoji },
    { name: ReactionType.Laugh, Component: LaughEmoji },
    { name: ReactionType.Cool, Component: CoolEmoji },
    { name: ReactionType.Fire, Component: FireEmoji },
    { name: ReactionType.Celebrate, Component: PopperEmoji },
  ];

  const onReactionPress = (reaction: IReaction) => {
    Sound.setCategory("Playback");

    const reactionSound = new Sound(
      "https://res.cloudinary.com/geeteshpp/video/upload/v1648038994/Facebook_Like_-_Sound_Effect_lzpkdb.mp3",
      undefined,
      error => {
        if (error) console.log("error", error);

        reactionSound.play(success => {
          if (success) {
            postReaction({
              variables: {
                postReactionInput: { postId, reactionType: reaction.name },
              },
            });
          }
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
