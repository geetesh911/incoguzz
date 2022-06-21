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
  mediaType?: IOption;
  setSelectedAlbum: React.Dispatch<React.SetStateAction<IOption | undefined>>;
  setMediaType: React.Dispatch<React.SetStateAction<IOption>>;
  onAlbumChange?: () => void;
  onMultiplePageClick?: () => void;
  onCameraClick?: () => void;
  isMultiplePageClickActive?: boolean;
}

export const GalleryToolbar: FC<IGalleryToolbarProps> = ({
  albums,
  selectedAlbum,
  mediaType,
  setSelectedAlbum,
  setMediaType,
  onAlbumChange,
  onMultiplePageClick,
  onCameraClick,
  isMultiplePageClickActive,
}) => {
  const mediaOptions = ["Photos", "Videos"].map<IOption>(option => ({
    label: option,
    value: option,
  }));
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
      <StyledDropDown
        value={mediaType as IOption}
        options={mediaOptions}
        onChange={value => {
          setMediaType(value);
          onAlbumChange?.();
        }}
      />
      {mediaType?.value === "Photos" && (
        <StyledIconButton
          onPress={onMultiplePageClick}
          active={isMultiplePageClickActive}
        >
          <MaterialCommunityIcon
            name="page-multiple"
            color={"white"}
            size={20}
          />
        </StyledIconButton>
      )}
      <StyledIconButton onPress={onCameraClick}>
        <IonIcon name="camera-outline" color="white" size={20} />
      </StyledIconButton>
    </StyledToolbarContainer>
  );
};
