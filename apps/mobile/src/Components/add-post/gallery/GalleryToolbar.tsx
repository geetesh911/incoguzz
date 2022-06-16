import React, { FC } from "react";
import { IOption } from "../../form";
import {
  StyledDropDown,
  StyledIconButton,
  StyledToolbarContainer,
} from "./styled";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/Foundation";

interface IGalleryToolbarProps {
  albums: IOption[];
  selectedAlbum?: IOption;
  setSelectedAlbum: React.Dispatch<React.SetStateAction<IOption | undefined>>;
  onAlbumChange?: () => void;
  onMultiplePageClick?: () => void;
  isMultiplePageClickActive?: boolean;
}

export const GalleryToolbar: FC<IGalleryToolbarProps> = ({
  albums,
  selectedAlbum,
  setSelectedAlbum,
  onAlbumChange,
  onMultiplePageClick,
  isMultiplePageClickActive,
}) => {
  return (
    <StyledToolbarContainer>
      <StyledDropDown
        value={selectedAlbum as IOption}
        options={albums}
        onChange={value => {
          setSelectedAlbum(value);
          onAlbumChange?.();
        }}
      />
      <StyledIconButton
        onPress={onMultiplePageClick}
        active={isMultiplePageClickActive}
      >
        <MaterialCommunityIcon name="page-multiple" color={"white"} size={20} />
      </StyledIconButton>
      <StyledIconButton>
        <IonIcon name="camera-outline" color="white" size={20} />
      </StyledIconButton>
    </StyledToolbarContainer>
  );
};
