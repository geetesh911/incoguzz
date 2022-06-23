import styled from "styled-components/native";
import { MultiColorTextInput } from "../../form";

export const StyledCaptionInput = styled(MultiColorTextInput)`
  height: 90%;
  border-radius: 0;
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;

export const StyledCaptionText = styled.Text<{ highlight: boolean }>`
  color: ${({ theme, highlight }) =>
    highlight ? theme.colors.primary : theme.textColors.primary};
`;
