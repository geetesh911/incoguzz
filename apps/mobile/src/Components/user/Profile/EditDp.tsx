import React, { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import {
  StyledEditButton,
  StyledEditDpContainer,
  StyledEditDpImage,
  StyledEditDpImageContainer,
} from "./styled";
import { defaultUserImage } from "../../../constants/defaultImages";
import { EditIcon } from "../../icons";

export const EditDp: FC = () => {
  const userData = useAppSelector(state => state.user.userData);

  return (
    <StyledEditDpContainer>
      <StyledEditDpImageContainer>
        <StyledEditDpImage
          source={{ uri: userData?.profile?.dpUrl || defaultUserImage }}
        />
        <StyledEditButton>
          <EditIcon height={20} width={20} />
        </StyledEditButton>
      </StyledEditDpImageContainer>
    </StyledEditDpContainer>
  );
};
