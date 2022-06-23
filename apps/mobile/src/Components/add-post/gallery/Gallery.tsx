import CameraRoll, { AssetType } from "@react-native-community/cameraroll";
import React, {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { IOption } from "../../form";
import { GalleryToolbar } from "./GalleryToolbar";
import LocalMasonryList, {
  LocalMasonryListProps,
} from "../../shared/List/MasonryList";
import {
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
import { GalleryMediaViewer } from "./GalleryMediaViewer";
import { Camera } from "../../camera/Camera";
import { setPostUrl } from "@incoguzz/redux";
import { useAppDispatch } from "../../../redux/hooks";

const MAX_PHOTO_COUNT = 4;

export interface IGalleryRef {
  getMediaType(): "Photos" | "Videos";
  getImages(): string[];
  getVideo(): string;
}

export const Gallery = forwardRef<IGalleryRef, {}>((_props, ref) => {
  const dispatch = useAppDispatch();

  const [mediaType, setMediaType] = useState<IOption>({
    label: "Photos",
    value: "Photos",
  });
  const [albums, setAlbums] = useState<IOption[]>([]);
  const [photos, setPhotos] = useState<CameraRoll.PhotoIdentifiersPage>();
  const [selectedAlbum, setSelectedAlbum] = useState<IOption>();
  const [showCheckboxes, setShowCheckboxes] = useState<boolean>(false);
  const [selectedImageObject, setSelectedImageObject] =
    useState<CameraRoll.PhotoIdentifier>();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImageObjects, setSelectedImageObjects] = useState<
    CameraRoll.PhotoIdentifier[]
  >([]);
  const [isCameraRunning, setIsCameraRunning] = useState<boolean>(false);

  const getAlbums = async () => {
    const galleryAlbums = await CameraRoll.getAlbums({
      assetType: mediaType.value as AssetType,
    });
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
      assetType: mediaType.value as AssetType,
      first: endCursor ? parseInt(endCursor) + 100 : 100,
      groupName: selectedAlbum?.value,
    });

    if (!selectedImageObject) {
      setSelectedImageObject(albumPhotos.edges[0]);
    }
    setPhotos(albumPhotos);
  };

  useEffect(() => {
    getAlbums();
  }, [mediaType]);

  useEffect(() => {
    getPhotos();
  }, [selectedAlbum, mediaType]);

  const renderItem: LocalMasonryListProps<CameraRoll.PhotoIdentifier>["renderItem"] =
    ({ item, i }) => {
      const theme = useTheme();
      const checkboxRef = createRef<BouncyCheckbox>();
      const maxCountCondition =
        selectedImageObjects.length < MAX_PHOTO_COUNT ||
        selectedImages?.includes(item.node.image.uri);

      return (
        <StyledImageContainer key={`${item.node.image.uri}${i}`}>
          <TapAndLongPressGesture
            onLongPress={() => {
              if (mediaType.value === "Videos") return;

              setShowCheckboxes(true);
              setSelectedImages([item.node.image.uri]);
              setSelectedImageObjects([item]);
              setSelectedImageObject(item);
            }}
            onPress={() => {
              if (showCheckboxes && maxCountCondition) {
                checkboxRef?.current?.onPress?.();
                return;
              }
              (maxCountCondition || item.node.type.includes("video")) &&
                setSelectedImageObject(item);
            }}
          >
            <StyledImage
              source={{ uri: item.node.image.uri }}
              style={{
                borderWidth: 1,
                opacity:
                  item.node.image.uri === selectedImageObject?.node.image.uri
                    ? 0.2
                    : 1,
              }}
            />
          </TapAndLongPressGesture>
          {showCheckboxes && maxCountCondition && (
            <StyledBouncyCheckbox
              ref={checkboxRef}
              isChecked={selectedImages?.includes(item.node.image.uri)}
              fillColor={theme.colors.primary}
              onPress={(isChecked: boolean) => {
                const images = [...selectedImages];
                const imageObjects = [...selectedImageObjects];

                if (isChecked && maxCountCondition) {
                  images.push(item.node.image.uri);
                  imageObjects.push(item);
                } else {
                  const imageIndex = images.findIndex(
                    image => image === item.node.image.uri,
                  );
                  images.splice(imageIndex, 1);
                  imageObjects.splice(imageIndex, 1);
                }

                setSelectedImageObjects(imageObjects);
                setSelectedImages(images);
                setSelectedImageObject(imageObjects[imageObjects.length - 1]);
              }}
              size={20}
            />
          )}
        </StyledImageContainer>
      );
    };

  useEffect(() => {
    dispatch(
      setPostUrl(
        selectedImageObjects?.map(imageObject => imageObject?.node?.image?.uri),
      ),
    );
  }, [selectedImageObjects]);

  useImperativeHandle(
    ref,
    () => ({
      getMediaType: () => mediaType.value as "Photos" | "Videos",
      getImages: () =>
        selectedImageObjects.map(imageObject => imageObject?.node?.image?.uri),
      getVideo: () => selectedImageObjects?.[0]?.node?.image?.uri,
    }),
    [mediaType, selectedImageObjects],
  );

  if (isCameraRunning)
    return <Camera onClose={() => setIsCameraRunning(false)} />;

  return (
    <StyledGalleryContainer>
      <StyledImagesContainer>
        <GalleryMediaViewer
          media={selectedImageObject as CameraRoll.PhotoIdentifier}
        />
      </StyledImagesContainer>
      <GalleryToolbar
        albums={albums}
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
        mediaType={mediaType}
        setMediaType={setMediaType}
        onAlbumChange={() => {
          setSelectedImages([]);
          setSelectedImageObjects([]);
          setShowCheckboxes(false);
        }}
        onMultiplePageClick={() => {
          setShowCheckboxes(!showCheckboxes);
          setSelectedImageObjects([
            selectedImageObject as CameraRoll.PhotoIdentifier,
          ]);
          setSelectedImages([selectedImageObject?.node.image.uri as string]);

          if (!!showCheckboxes) {
            setSelectedImages([]);
            setSelectedImageObjects([]);
          }
        }}
        onCameraClick={() => {
          setSelectedImages([]);
          setSelectedImageObjects([]);
          setShowCheckboxes(false);
          setIsCameraRunning(true);
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
});

const masonaryListStyles = StyleSheet.create({
  masonryList: {
    paddingHorizontal: 0,
    alignSelf: "stretch",
  },
});
