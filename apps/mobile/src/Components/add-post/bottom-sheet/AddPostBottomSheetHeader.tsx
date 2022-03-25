import React, { FC } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { BottomSheetHeader } from "./BottomSheetHeader";

export const AddPostBottomSheetHeader: FC = () => {
  const bottomSheetIds = useAppSelector(state => state.app.bottomSheetIds);

  return (
    <BottomSheetHeader label="Create" bottomSheetId={bottomSheetIds?.addPost} />
  );
};
