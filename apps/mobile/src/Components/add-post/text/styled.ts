import styled from "styled-components/native";
import { Input } from "../../form";

export const StyledTextualPostInput = styled(Input)`
  height: 90%;
  border-radius: 0;
  background-color: ${({ theme }) => theme.backgrounds.primary};
`;
