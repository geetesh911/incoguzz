import React, { FC } from "react";
import { ImageIcon } from "../../icons";
import { BookmarkIcon } from "../../icons/BookmarkIcon";
import { BookmarksBody } from "./BookmarksBody";
import Option, { IOptionProps } from "./Option";

export const UserBody: FC = () => {
  const options: IOptionProps[] = [
    { label: "Bookmarks", Icon: BookmarkIcon, body: <BookmarksBody /> },
    { label: "Posts", Icon: ImageIcon },
  ];

  return (
    <>
      {options.map(option => (
        <Option key={option.label} {...option} />
      ))}
    </>
  );
};
