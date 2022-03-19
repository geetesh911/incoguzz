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
import { PostAudio } from "./PostAudio";
import { PostText } from "./PostText";

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

  const dummyText = `What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  
  Why do we use it?
  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  
  
  Where does it come from?
  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  
  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
  
  Where can I get some?
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;
  return (
    <>
      <StyledPostContainer>
        {/* <PostVideo videoUrl={url} /> */}
        {/* <PostAudio audioUrl={url} /> */}
        {/* <PostImageCarousel imgUrls={dummyUrls} /> */}
        <PostText text={dummyText} />
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
