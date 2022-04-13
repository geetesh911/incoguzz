import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  RefreshControlProps,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import React, { MutableRefObject, ReactElement, memo, useState } from "react";
import Animated from "react-native-reanimated";

type ReactComponent = React.ComponentType<any> | React.ReactElement | null;

export interface LocalMasonryListProps<T>
  extends Omit<ScrollViewProps, "refreshControl"> {
  innerRef?: MutableRefObject<Animated.ScrollView | null>;
  keyPrefix?: string;
  loading?: boolean;
  refreshing?: RefreshControlProps["refreshing"];
  onRefresh?: RefreshControlProps["onRefresh"];
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  style?: StyleProp<ViewStyle>;
  data: T[];
  renderItem: (info: { item: T; i: number }) => ReactElement;
  LoadingView?: ReactComponent;
  ListHeaderComponent?: ReactComponent;
  StickyComponent?: ReactComponent;
  ListEmptyComponent?: ReactComponent;
  ListFooterComponent?: ReactComponent;
  ListHeaderComponentStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  numColumns?: number;
}

export const isCloseToBottom = (
  { layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent,
  onEndReachedThreshold: number,
): boolean => {
  const paddingToBottom = contentSize.height * onEndReachedThreshold;

  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

function LocalMasonryList<T>(props: LocalMasonryListProps<T>): ReactElement {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const {
    keyPrefix,
    refreshing,
    data,
    innerRef,
    ListHeaderComponent,
    ListEmptyComponent = <></>,
    ListFooterComponent,
    ListHeaderComponentStyle,
    StickyComponent,
    containerStyle,
    contentContainerStyle,
    renderItem,
    onEndReachedThreshold,
    onEndReached,
    onRefresh,
    onScroll,
    loading,
    LoadingView,
    numColumns = 2,
    horizontal,
  } = props;

  const { style, ...propsWithoutStyle } = props;

  const handleScroll = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isCloseToBottom(nativeEvent, onEndReachedThreshold || 0.1))
      onEndReached?.();
  };

  return (
    <Animated.ScrollView
      {...propsWithoutStyle}
      ref={innerRef}
      style={[{ flex: 1, alignSelf: "stretch" }, containerStyle]}
      contentContainerStyle={contentContainerStyle}
      removeClippedSubviews={true}
      refreshControl={
        <RefreshControl
          refreshing={!!(refreshing || isRefreshing)}
          onRefresh={() => {
            setIsRefreshing(true);
            onRefresh?.();
            setIsRefreshing(false);
          }}
        />
      }
      scrollEventThrottle={16}
      onScroll={onScroll || handleScroll}
    >
      <View style={ListHeaderComponentStyle}>{ListHeaderComponent}</View>
      {StickyComponent}
      {data.length === 0 && ListEmptyComponent ? (
        ListEmptyComponent
      ) : (
        <View
          style={[
            {
              flex: 1,
              flexDirection: horizontal ? "column" : "row",
            },
            style,
          ]}
        >
          {Array.from(Array(numColumns), (_, num) => {
            return (
              <View
                key={`${keyPrefix}-${num.toString()}`}
                style={{
                  flex: 1 / numColumns,
                  flexDirection: horizontal ? "row" : "column",
                }}
              >
                {data
                  .map((element, index) =>
                    index % numColumns === num
                      ? renderItem({ item: element, i: index })
                      : null,
                  )
                  .filter(element => !!element)}
              </View>
            );
          })}
        </View>
      )}
      {loading && LoadingView}
      {ListFooterComponent}
    </Animated.ScrollView>
  );
}

export default memo(LocalMasonryList) as typeof LocalMasonryList;
