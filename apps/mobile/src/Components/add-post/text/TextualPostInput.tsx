import React, { useState } from "react";
import { StyledTextualPostInput } from "./styled";

export const TextualPostInput = () => {
  const [textInput, setTextInput] = useState<string>("");
  return (
    <StyledTextualPostInput
      multiline
      disableFocus
      textAlignVertical="top"
      name="textInput"
      value={textInput}
      placeholder="What's happening?"
      onChange={value => setTextInput(value)}
    />
  );
};
