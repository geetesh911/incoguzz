import React, { FC } from "react";
import { useTheme } from "../../../styles/theme";
import { IIconInterface } from "../../icons";
import { StyledOptionContainer, StyledOptionText } from "./styled";
import { StyleProp, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  TabParamList,
  UserPostsScreenNavigationProp,
} from "../../../Navigation";

export interface IOptionProps {
  label: string;
  Icon: React.ComponentType<IIconInterface>;
  body?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  navigateTo?: keyof TabParamList;
}

export const Option: FC<IOptionProps> = ({
  label,
  Icon,
  body,
  style,
  navigateTo,
}) => {
  const theme = useTheme();

  const navigation = useNavigation<UserPostsScreenNavigationProp>();

  const onPress = () => {
    navigateTo && navigation.navigate(navigateTo);
  };

  return (
    <>
      <StyledOptionContainer style={style} onPress={onPress}>
        <StyledOptionText>{label}</StyledOptionText>
        <Icon color={theme?.colors?.primary} height={20} width={20} />
      </StyledOptionContainer>
      {body}
    </>
  );
};

export default Option;
