import React, { FC } from "react";
import { ScrollView } from "react-native";
import { UserBody, UserHeader } from "../../Components/user";

export const UserInfoScreen: FC = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <UserHeader />
      <UserBody />
    </ScrollView>
  );
};
