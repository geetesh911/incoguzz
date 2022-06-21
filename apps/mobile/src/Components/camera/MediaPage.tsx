import React, { FC } from "react";
import {
  StyledControlButton,
  StyledMediaImage,
  StyledMediaPageContainer,
  StyledRightButtonRow,
} from "./styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import IonIcon from "react-native-vector-icons/Ionicons";
import { setCapturedMedia } from "@incoguzz/redux/dist/reducers/camera";
import { VideoPlayer } from "../shared";

const MediaPage: FC = () => {
  const dispatch = useAppDispatch();

  const capturedMedia = useAppSelector(state => state.camera.capturedMedia);

  return (
    <StyledMediaPageContainer>
      {capturedMedia.type === "video" ? (
        <VideoPlayer
          resizeMode={"contain"}
          style={{ flex: 1 }}
          source={{ uri: capturedMedia.path }}
          showFullScreenButton={false}
        />
      ) : (
        <StyledMediaImage source={{ uri: `file://${capturedMedia.path}` }} />
      )}
      <StyledRightButtonRow>
        <StyledControlButton onPress={() => dispatch(setCapturedMedia())}>
          <IonIcon name="close" color="white" size={24} />
        </StyledControlButton>
      </StyledRightButtonRow>
    </StyledMediaPageContainer>
  );
};

export default MediaPage;
