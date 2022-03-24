import React, { FC } from "react";
import { PostType } from "@incoguzz/graphql";
import { AudioIcon, ImageIcon, TextIcon, VideoIcon } from "../../icons";
import { useTheme } from "../../../styles/theme";

export interface IPostIconProps {
  type: PostType;
}

export const PostIcon: FC<IPostIconProps> = ({ type }) => {
  const theme = useTheme();
  const height = 15;
  const width = 15;
  const color = theme?.textColors?.primary;

  const Component: Record<PostType, JSX.Element | null> = {
    [PostType.Photo]: <ImageIcon height={height} width={width} color={color} />,
    [PostType.Video]: <VideoIcon height={height} width={width} color={color} />,
    [PostType.Audio]: <AudioIcon height={height} width={width} color={color} />,
    [PostType.Textual]: (
      <TextIcon height={height} width={width} color={color} />
    ),
    [PostType.Clip]: null,
    [PostType.Poll]: null,
  };

  return Component[type] || null;
};
