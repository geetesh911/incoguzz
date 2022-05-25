import React, { FC } from "react";
import { Text, View } from "react-native";
import ReactionButton from "../../Components/explore/Post/ReactionButton";

export const MessagesScreen: FC = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>
        <ReactionButton />
      </Text>
    </View>
  );
};
