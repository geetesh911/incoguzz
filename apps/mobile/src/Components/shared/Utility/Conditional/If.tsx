import React, { FC } from "react";

interface IIfProps {
  condition: boolean;
}

export const If: FC<IIfProps> = ({ children, condition }) => {
  if (condition) {
    return <>{children}</>;
  }
  return null;
};
