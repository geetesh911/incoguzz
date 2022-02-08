import React, { FC } from "react";
import { ErrorContainer, ErrorIcon, ErrorText } from "./styled";

interface IShowErrorProps {
  errorMessage?: string;
}

export const ShowError: FC<IShowErrorProps> = ({ errorMessage }) => {
  return (
    <ErrorContainer>
      {errorMessage && <ErrorIcon name="alert-circle-outline" size={15} />}
      <ErrorText>{errorMessage}</ErrorText>
    </ErrorContainer>
  );
};
