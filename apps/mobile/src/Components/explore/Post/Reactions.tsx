import React, { FC, useState } from "react";
import { StyledReaction, StyledReactionsContainer } from "./styled";
import { IReaction, IReactions } from "./interfaces";
import Sound from "react-native-sound";
import {
  PostReactionDocument,
  PostReactionMutation,
  PostReactionMutationVariables,
  ReactionType,
} from "@incoguzz/graphql";
import { useMutation } from "@apollo/client";
import {
  LaughEmoji,
  CoolEmoji,
  HeartEmoji,
  FireEmoji,
  PopperEmoji,
  HeartDimEmoji,
  LaughDimEmoji,
  CoolDimEmoji,
  FireDimEmoji,
  PopperDimEmoji,
} from "../../icons";

interface IReactionsProps {
  postId: string;
  activeReaction?: ReactionType;
}

export const Reactions: FC<IReactionsProps> = ({ postId, activeReaction }) => {
  const [userReaction, setReaction] = useState<ReactionType | undefined>(
    activeReaction,
  );

  const [postReactionMutation] = useMutation<
    PostReactionMutation,
    PostReactionMutationVariables
  >(PostReactionDocument, {
    onCompleted: ({ postReaction }) => {
      if (postReaction.deleted) {
        setReaction(undefined);
        return;
      }
      setReaction(postReaction.reaction);
    },
  });

  const reactions: IReactions = [
    {
      name: ReactionType.Like,
      Component: HeartEmoji,
      DimmedComponent: HeartDimEmoji,
    },
    {
      name: ReactionType.Laugh,
      Component: LaughEmoji,
      DimmedComponent: LaughDimEmoji,
    },
    {
      name: ReactionType.Cool,
      Component: CoolEmoji,
      DimmedComponent: CoolDimEmoji,
    },
    {
      name: ReactionType.Fire,
      Component: FireEmoji,
      DimmedComponent: FireDimEmoji,
    },
    {
      name: ReactionType.Celebrate,
      Component: PopperEmoji,
      DimmedComponent: PopperDimEmoji,
    },
  ];

  const onReactionPress = (Reaction: IReaction) => {
    Sound.setCategory("Playback");

    const reactionSound = new Sound(
      "https://res.cloudinary.com/geeteshpp/video/upload/v1648038994/Facebook_Like_-_Sound_Effect_lzpkdb.mp3",
      undefined,
      error => {
        if (error) console.log("error", error);

        reactionSound.play();
      },
    );
    postReactionMutation({
      variables: {
        postReactionInput: { postId, reactionType: Reaction.name },
      },
    });
  };

  const REACTION_BASE_SIZE = 35;
  const REACTION_SELECTED_SIZE = 40;

  const reactionSize = (Reaction: IReaction) => {
    if (!userReaction || Reaction.name !== userReaction)
      return REACTION_BASE_SIZE;
    return REACTION_SELECTED_SIZE;
  };

  return (
    <StyledReactionsContainer>
      {reactions.map(Reaction => (
        <StyledReaction
          key={Reaction.name}
          onPress={() => onReactionPress(Reaction)}
        >
          {Reaction.name === userReaction || !userReaction ? (
            <Reaction.Component
              height={reactionSize(Reaction)}
              width={reactionSize(Reaction)}
            />
          ) : (
            <Reaction.DimmedComponent
              height={reactionSize(Reaction)}
              width={reactionSize(Reaction)}
            />
          )}
        </StyledReaction>
      ))}
    </StyledReactionsContainer>
  );
};
