import CameraRoll from "@react-native-community/cameraroll";
import React, { createRef, FC, useEffect, useState } from "react";
import { IOption } from "../../form";
import { GalleryHeader } from "./GalleryHeader";
import { GalleryToolbar } from "./GalleryToolbar";
import LocalMasonryList, {
  LocalMasonryListProps,
} from "../../shared/List/MasonryList";
import {
  StyledBigImage,
  StyledBouncyCheckbox,
  StyledGalleryContainer,
  StyledImage,
  StyledImageContainer,
  StyledImagesContainer,
} from "./styled";
import { StyleSheet } from "react-native";
import { TapAndLongPressGesture } from "../../shared";
import { useTheme } from "../../../styles/theme";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export const Gallery: FC = () => {
  const [albums, setAlbums] = useState<IOption[]>([]);
  const [photos, setPhotos] = useState<CameraRoll.PhotoIdentifiersPage>();
  const [selectedAlbum, setSelectedAlbum] = useState<IOption>();
  const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const getAlbums = async () => {
    const galleryAlbums = await CameraRoll.getAlbums({ assetType: "All" });
    const initialAlbum = { label: "Recent", value: undefined };
    setAlbums([
      initialAlbum,
      ...galleryAlbums.map<IOption>(album => ({
        label: album.title,
        value: album.title,
      })),
    ]);

    setSelectedAlbum(initialAlbum);
  };

  const getPhotos = async (endCursor?: string) => {
    const albumPhotos = await CameraRoll.getPhotos({
      assetType: "All",
      first: endCursor ? parseInt(endCursor) + 100 : 100,
      groupName: selectedAlbum?.value,
    });

    setPhotos(albumPhotos);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  useEffect(() => {
    getPhotos();
  }, [selectedAlbum]);

  const renderItem: LocalMasonryListProps<CameraRoll.PhotoIdentifier>["renderItem"] =
    ({ item, i }) => {
      const theme = useTheme();
      const checkboxRef = createRef<BouncyCheckbox>();

      return (
        <StyledImageContainer key={`${item.node.image.uri}${i}`}>
          <TapAndLongPressGesture
            onLongPress={() => setShowCheckboxes(true)}
            onPress={() => checkboxRef?.current?.onPress?.()}
          >
            <StyledImage
              source={{ uri: item.node.image.uri }}
              style={{ borderWidth: 1 }}
            />
          </TapAndLongPressGesture>
          {showCheckboxes && (
            <StyledBouncyCheckbox
              ref={checkboxRef}
              isChecked={selectedImages?.includes(item.node.image.uri)}
              fillColor={theme.colors.primary}
              onPress={(isChecked: boolean) => {
                const images = [...selectedImages];

                if (isChecked) {
                  images.push(item.node.image.uri);
                } else {
                  const imageIndex = images.findIndex(
                    image => image === item.node.image.uri,
                  );
                  images.splice(imageIndex, 1);
                }

                setSelectedImages(images);
              }}
              size={20}
            />
          )}
        </StyledImageContainer>
      );
    };

  return (
    <StyledGalleryContainer>
      <StyledImagesContainer>
        <StyledBigImage
          source={{
            uri:
              selectedImages[selectedImages.length - 1] ||
              photos?.edges?.[0]?.node?.image?.uri,
          }}
          style={{ borderWidth: 1 }}
        />
      </StyledImagesContainer>
      <GalleryToolbar
        albums={albums}
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
        onAlbumChange={() => setSelectedImages([])}
        onMultiplePageClick={() => {
          setShowCheckboxes(!showCheckboxes);

          if (!!showCheckboxes) {
            setSelectedImages([]);
          }
        }}
        isMultiplePageClickActive={showCheckboxes}
      />
      {photos?.edges && (
        <LocalMasonryList
          contentContainerStyle={masonaryListStyles.masonryList}
          numColumns={4}
          data={photos?.edges}
          renderItem={renderItem}
          onEndReached={() => {
            if (photos.page_info.has_next_page) {
              getPhotos(photos.page_info.end_cursor);
            }
          }}
          onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={false}
        />
      )}
    </StyledGalleryContainer>
  );
};

const masonaryListStyles = StyleSheet.create({
  masonryList: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
});
