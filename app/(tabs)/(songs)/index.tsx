import { View, Text, ScrollView } from "react-native";
import React, { useMemo } from "react";
import { defaultStyles } from "@/styles";
import TrackList from "@/components/TrackList";
import { screenPadding } from "@/constants/tokens";
import { useNavigationSearch } from "@/hooks/useNavigationSearch";
import library from "@/assets/data/library.json";
import { tractTitleFilter } from "@/helper/filter";
// import service from "@/helper/service";

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: "Find in songs",
    },
  });

  const filteredTracks = useMemo(() => {
    if (!search) return library;

    return library.filter(tractTitleFilter(search));
  }, [search]);
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        style={{
          paddingHorizontal: screenPadding.horizontal,
        }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <TrackList tracks={filteredTracks} scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
