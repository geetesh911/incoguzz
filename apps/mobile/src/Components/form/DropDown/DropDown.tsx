import { Modal, ScrollView, StyleProp, ViewStyle } from "react-native";
import React, { FC, useState } from "react";
import {
  StyledDropDownContainer,
  StyledDropDownValue,
  StyledOptionsContainer,
  StyledOptionsCloseButton,
  StyledOptionsCloseIcon,
  StyledOptionsHeader,
  StyledOptionsHeaderText,
  StyledOptionsModalContainer,
  StyledOptionContainer,
  StyledOptionText,
  StyledDropDownIcon,
} from "./styled";

export interface IOption {
  label: string;
  value: string | undefined;
}

interface IDropDownProps {
  value: IOption;
  options: IOption[];
  style?: StyleProp<ViewStyle>;
  onChange: (value: IOption) => void;
}

export const DropDown: FC<IDropDownProps> = ({
  value,
  options,
  style,
  onChange,
}) => {
  const [isOptionModalVisible, setIsOptionModalVisible] =
    useState<boolean>(false);

  return (
    <>
      <StyledDropDownContainer
        onPress={() => setIsOptionModalVisible(true)}
        style={style}
      >
        <StyledDropDownValue>{value?.label}</StyledDropDownValue>
        <StyledDropDownIcon name="keyboard-arrow-down" />
      </StyledDropDownContainer>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isOptionModalVisible}
        onRequestClose={() => {
          setIsOptionModalVisible(!isOptionModalVisible);
        }}
      >
        <StyledOptionsModalContainer>
          <StyledOptionsContainer>
            <StyledOptionsHeader>
              <StyledOptionsHeaderText>Options</StyledOptionsHeaderText>
              <StyledOptionsCloseButton
                onPress={() => setIsOptionModalVisible(false)}
              >
                <StyledOptionsCloseIcon name="close" />
              </StyledOptionsCloseButton>
            </StyledOptionsHeader>
            <ScrollView>
              {options?.map(option => (
                <StyledOptionContainer
                  onPress={() => {
                    onChange?.(option);
                    setIsOptionModalVisible(false);
                  }}
                  key={option.value || option.label}
                >
                  <StyledOptionText>{option.label}</StyledOptionText>
                </StyledOptionContainer>
              ))}
            </ScrollView>
          </StyledOptionsContainer>
        </StyledOptionsModalContainer>
      </Modal>
    </>
  );
};
