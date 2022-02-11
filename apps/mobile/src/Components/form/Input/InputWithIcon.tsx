import React, { FC, useState } from "react";
import {
  StyledInputWithIcon,
  StyledInputWithIconIconContainer,
  StyledPasswordInputInnerContainer,
  StyledPasswordInputUpperContainer,
} from "./styled";
import { IInputProps } from "./Input";
import { ShowError } from "./ShowError";
import { useTheme } from "../../../styles/theme";

interface IInputWithIconProps extends IInputProps {
  icon: JSX.Element;
}

export const InputWithIcon: FC<IInputWithIconProps> = ({
  value,
  name,
  onChange,
  placeholder,
  error,
  icon,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

  const theme = useTheme();

  const placeholderTextColor = error
    ? theme.colors?.error
    : theme.commonConstants?.placeholderTextColor;

  return (
    <StyledPasswordInputUpperContainer>
      <StyledPasswordInputInnerContainer focused={focused} error={!!error}>
        <StyledInputWithIconIconContainer>
          {icon}
        </StyledInputWithIconIconContainer>
        <StyledInputWithIcon
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
      </StyledPasswordInputInnerContainer>
      <ShowError errorMessage={error} />
    </StyledPasswordInputUpperContainer>
  );
};
