import { View, Text, FlatList, FlatListProps } from "react-native";
import library from "@/assets/data/library.json";
import TrackListItem from "./TrackListItem";
import { utilStyles } from "@/styles";

export type TrackListProps = Partial<FlatListProps<unknown>>;

const ItemDivider = () => (
  <View
    style={{ ...utilStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);
const TrackList = ({ ...flatlistProps }: TrackListProps) => {
  return (
    <FlatList
      data={library}
      ItemSeparatorComponent={ItemDivider}
      renderItem={({ item: track }) => (
        <TrackListItem
          track={{
            ...track,
            image: track.artwork,
          }}
        />
      )}
      {...flatlistProps}
    />
  );
};

export default TrackList;
