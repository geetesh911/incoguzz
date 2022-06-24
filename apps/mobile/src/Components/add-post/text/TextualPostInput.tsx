import { PostType } from "@incoguzz/graphql";
import { setPostText, setPostType } from "@incoguzz/redux";
import { useNavigation } from "@react-navigation/native";
import React, { useImperativeHandle, useState, forwardRef } from "react";
import {
  PostUploadScreenNavigationProp,
  RouteNames,
} from "../../../Navigation";
import { useAppDispatch } from "../../../redux/hooks";
import { AddPostHeader } from "../header";
import { StyledTextualPostInput } from "./styled";

export interface ITextualPostInputRef {
  getTextInput(): string;
}

export const TextualPostInput = forwardRef<ITextualPostInputRef, {}>(
  (_props, ref) => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<PostUploadScreenNavigationProp>();

    const [textInput, setTextInput] = useState<string>("");

    useImperativeHandle(
      ref,
      () => ({
        getTextInput: () => textInput,
      }),
      [textInput],
    );

    const onSubmit = () => {
      dispatch(setPostType(PostType.Textual));
      dispatch(setPostText(textInput));

      navigation.navigate(RouteNames.PostUpload);
    };

    return (
      <>
        <AddPostHeader disabled={!textInput} onSubmit={onSubmit} />
        <StyledTextualPostInput
          multiline
          disableFocus
          textAlignVertical="top"
          name="textInput"
          value={textInput}
          placeholder="What's happening?"
          onChange={value => setTextInput(value)}
        />
      </>
    );
  },
);
