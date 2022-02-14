import React, { FC } from "react";
import {
  Post,
  StyledAnimatedPagerView,
  StyledPostPageContainer,
} from "../../Components/explore/Post";
import { PostHeader } from "../../Components/explore/Post/PostHeader";

export const PostScreen: FC = () => {
  return (
    <>
      <PostHeader />
      <StyledAnimatedPagerView
        initialPage={0}
        layoutDirection="ltr"
        overdrag={true}
        scrollEnabled={true}
        pageMargin={0}
        orientation="vertical"
        transitionStyle="scroll"
        showPageIndicator={true}
      >
        {[
          "https://i.picsum.photos/id/237/1920/2554.jpg?hmac=FK3Rl-Yws08bivJOmeRRhQ6PABf_UrDLtvgXz8U3FRw",
          "https://images.unsplash.com/photo-1565800847038-b509fad821f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
          "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
          "https://i.picsum.photos/id/866/1500/700.jpg?hmac=OMx1p3NO_fbaq4H-cTQmTpnjFVq54rp5U-bNzSM8N1M",
          "https://i.picsum.photos/id/866/760/1920.jpg?hmac=YldQoEleiOk6kl3J_FOcs4K1Xh-UsxgAgJJLmzBfvCk",
          "https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg",
        ].map(imgUrl => (
          <StyledPostPageContainer key={imgUrl}>
            <Post imgUrl={imgUrl} />
          </StyledPostPageContainer>
        ))}
      </StyledAnimatedPagerView>
    </>
  );
};
