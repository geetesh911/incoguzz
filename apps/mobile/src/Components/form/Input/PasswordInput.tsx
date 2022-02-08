import React, { FC, useState } from "react";
import {
  PasswordIcon,
  StyledPasswordInput,
  StyledPasswordInputInnerContainer,
  StyledPasswordInputUpperContainer,
} from "./styled";
import { IInputProps } from "./Input";
import { ShowError } from "./ShowError";
import { Pressable } from "react-native";
import { themes } from "../../../styles/theme";
import { useAppSelector } from "../../../redux/hooks";

interface IPasswordInputProps extends IInputProps {}

export const PasswordInput: FC<IPasswordInputProps> = ({
  value,
  name,
  onChange,
  placeholder,
  error,
}) => {
  const themeMode = useAppSelector(state => state.theme.theme);

  const [focused, setFocused] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const icon = !visible ? "eye-slash" : "eye";

  const placeholderTextColor = error
    ? themes[themeMode].colors?.error
    : themes[themeMode].commonConstants?.placeholderTextColor;

  return (
    <StyledPasswordInputUpperContainer>
      <StyledPasswordInputInnerContainer focused={focused} error={!!error}>
        <StyledPasswordInput
          value={value as string}
          placeholder={placeholder}
          onChangeText={changedValue => onChange(changedValue)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          underlineColorAndroid="transparent"
          textContentType={"password"}
          secureTextEntry={!visible}
          placeholderTextColor={placeholderTextColor}
        />
        <Pressable onPress={() => setVisible(!visible)}>
          <PasswordIcon name={icon} color={"#9e9e9e"} size={17} />
        </Pressable>
      </StyledPasswordInputInnerContainer>
      <ShowError errorMessage={error} />
    </StyledPasswordInputUpperContainer>
  );
};
