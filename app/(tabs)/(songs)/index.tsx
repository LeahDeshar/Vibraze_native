import { View, Text, ScrollView } from "react-native";
import React from "react";
import { defaultStyles } from "@/styles";
import TrackList from "@/components/TrackList";
import { screenPadding } from "@/constants/tokens";

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView
        style={{
          paddingHorizontal: screenPadding.horizontal,
        }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <TrackList scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
