import React, { FC, useState } from "react";
import {
  StyledInput,
  StyledInputInnerContainer,
  StyledInputUpperContainer,
} from "./styled";
import { ShowError } from "./ShowError";
import { themes } from "../../../styles/theme";
import { useAppSelector } from "../../../redux/hooks";

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
  const themeMode = useAppSelector(state => state.theme.theme);

  const [focused, setFocused] = useState<boolean>(false);

  const placeholderTextColor = error
    ? themes[themeMode].colors?.error
    : themes[themeMode].commonConstants?.placeholderTextColor;

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
