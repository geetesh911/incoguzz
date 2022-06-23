import React, { FC, useState } from "react";
import {
  StyledInput,
  StyledInputInnerContainer,
  StyledInputUpperContainer,
} from "./styled";
import { ShowError } from "./ShowError";
import { useTheme } from "../../../styles/theme";
import { StyleProp, TextStyle } from "react-native";

export interface IMultiColorTextInputProps {
  value: (JSX.Element | string)[];
  name: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  multiline?: boolean;
  disableFocus?: boolean;
  style?: StyleProp<TextStyle>;
  textAlignVertical?: "auto" | "top" | "bottom" | "center";
}

export const MultiColorTextInput: FC<IMultiColorTextInputProps> = ({
  value,
  onChange,
  placeholder,
  error,
  multiline,
  style,
  disableFocus,
  textAlignVertical,
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
          style={style}
          multiline={multiline}
          focused={disableFocus ? false : focused}
          error={!!error}
          placeholder={placeholder}
          onChangeText={onChange}
          textAlignVertical={textAlignVertical}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          underlineColorAndroid="transparent"
          placeholderTextColor={placeholderTextColor}
        >
          {value}
        </StyledInput>
      </StyledInputInnerContainer>
      <ShowError errorMessage={error} />
    </StyledInputUpperContainer>
  );
};
