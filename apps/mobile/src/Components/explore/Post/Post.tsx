import React, { FC } from "react";
import {
  StyledCaptionContainer,
  StyledCaptionText,
  StyledPostContainer,
  StyledReactionsContainer,
  StyledReactionsEmoji,
} from "./styled";
import { PostVideo } from "./PostVideo";
import { PostImageCarousel } from "./PostImageCarousel";

interface IPostProps {
  url: string;
}

export const Post: FC<IPostProps> = ({ url }) => {
  const dummyUrls = [
    "https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg",
    "https://i.picsum.photos/id/866/1500/700.jpg?hmac=OMx1p3NO_fbaq4H-cTQmTpnjFVq54rp5U-bNzSM8N1M",
    "https://res.cloudinary.com/geeteshpp/image/upload/v1647415142/mountain-climber_jjis3c.jpg",
    "https://res.cloudinary.com/geeteshpp/image/upload/v1645083626/Frame_25_fkfw7a.png",
    "https://i.picsum.photos/id/237/1920/2554.jpg?hmac=FK3Rl-Yws08bivJOmeRRhQ6PABf_UrDLtvgXz8U3FRw",
    "https://images.unsplash.com/photo-1565800847038-b509fad821f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    "https://i.picsum.photos/id/866/760/1920.jpg?hmac=YldQoEleiOk6kl3J_FOcs4K1Xh-UsxgAgJJLmzBfvCk",
  ];
  return (
    <>
      <StyledPostContainer>
        <PostVideo videoUrl={url} />
        {/* <PostImageCarousel imgUrls={dummyUrls} /> */}
      </StyledPostContainer>
      <StyledReactionsContainer>
        {["👏", "😲", "💯", "🔥", "🤩"].map(emoji => (
          <StyledReactionsEmoji key={emoji}>{emoji}</StyledReactionsEmoji>
        ))}
      </StyledReactionsContainer>
      <StyledCaptionContainer>
        <StyledCaptionText>
          Architecture fans document their favorite structures.
        </StyledCaptionText>
      </StyledCaptionContainer>
    </>
  );
};
