import React, { FC, useState } from "react";
import {
  StyledInput,
  StyledInputInnerContainer,
  StyledInputUpperContainer,
} from "./styled";
import { ShowError } from "./ShowError";
import { useTheme } from "../../../styles/theme";

export interface IInputProps {
  value: unknown;
  name: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
}

export const Input: FC<IInputProps> = ({
  value,
  name,
  onChange,
  placeholder,
  error,
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const theme = useTheme();

  const placeholderTextColor = error
    ? theme.colors?.error
    : theme.commonConstants?.placeholderTextColor;

  return (
    <StyledInputUpperContainer>
      <StyledInputInnerContainer>
        <StyledInput
          value={value as string}
          focused={focused}
          error={!!error}
          placeholder={placeholder}
          onChangeText={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          underlineColorAndroid="transparent"
          placeholderTextColor={placeholderTextColor}
        />
      </StyledInputInnerContainer>
      <ShowError errorMessage={error} />
    </StyledInputUpperContainer>
  );
};
