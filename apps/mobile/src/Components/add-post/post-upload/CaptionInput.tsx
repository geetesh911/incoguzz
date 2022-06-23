import React, { forwardRef, useImperativeHandle, useState } from "react";
import { StringUtil } from "../../../utils/string.util";
import { StyledCaptionInput, StyledCaptionText } from "./styled";

export interface ICaptionInputRef {
  getCaption(): string;
  getTags(): string[] | undefined;
}

const PATTERN_HASHTAG = /(^|\s)(#[a-z\d-_]+)/gi;

export const CaptionInput = forwardRef<ICaptionInputRef, {}>((_props, ref) => {
  const [caption, setCaption] = useState<(JSX.Element | string)[]>([]);
  const [captionText, setCaptionText] = useState<string>("");

  const handleChange = (value: string) => {
    const strings = StringUtil.regexifyString({
      pattern: PATTERN_HASHTAG,
      input: value,
      decorator(match, _index) {
        return `$${match}`;
      },
    }) as string[];

    setCaptionText(value);
    setCaption(
      strings.map((string, index) => (
        <StyledCaptionText
          key={`${string}-${index}`}
          highlight={string.includes("$")}
        >
          {string?.replace("$", "")}
        </StyledCaptionText>
      )),
    );
  };

  useImperativeHandle(
    ref,
    () => ({
      getCaption: () => captionText,
      getTags: () =>
        captionText
          .match(PATTERN_HASHTAG)
          ?.map(hashtag => hashtag?.trim().replace("\n", "").replace("#", "")),
    }),
    [caption],
  );
  return (
    <StyledCaptionInput
      multiline
      disableFocus
      textAlignVertical="top"
      name="caption"
      value={caption}
      placeholder="Caption..."
      onChange={value => handleChange(value)}
    />
  );
});
