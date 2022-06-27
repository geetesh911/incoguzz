import React, { FC } from "react";
import { MessageItem } from "./MessageItem";
import { StyledMessagesHeading, StyledMessagesView } from "./styled";
import LocalMasonryList, {
  LocalMasonryListProps,
} from "../../shared/List/MasonryList";
import { useTheme } from "../../../styles/theme";

export const MessagesList: FC = () => {
  const theme = useTheme();

  const renderItem: LocalMasonryListProps<number>["renderItem"] = ({
    item,
  }) => <MessageItem key={item} />;

  return (
    <StyledMessagesView>
      <LocalMasonryList
        contentContainerStyle={{ backgroundColor: theme?.backgrounds?.primary }}
        StickyComponent={
          <StyledMessagesHeading>Messages</StyledMessagesHeading>
        }
        stickyHeaderIndices={[1]}
        numColumns={1}
        data={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </StyledMessagesView>
  );
};
