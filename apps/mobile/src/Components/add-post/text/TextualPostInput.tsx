import React, { useImperativeHandle, useState, forwardRef } from "react";
import { StyledTextualPostInput } from "./styled";

export interface ITextualPostInputRef {
  getTextInput(): string;
}

export const TextualPostInput = forwardRef<ITextualPostInputRef, {}>(
  (_props, ref) => {
    const [textInput, setTextInput] = useState<string>("");

    useImperativeHandle(
      ref,
      () => ({
        getTextInput: () => textInput,
      }),
      [textInput],
    );

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
  },
);
