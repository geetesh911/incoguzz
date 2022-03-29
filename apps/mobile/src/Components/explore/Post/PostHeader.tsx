import React, { FC } from "react";
import { PageHeader } from "../../shared";

interface IPostHeaderProps {
  heading: string;
}

export const PostHeader: FC<IPostHeaderProps> = ({ heading }) => {
  return <PageHeader text={heading} />;
};
