import { View, Text, ScrollView } from "react-native";
import React from "react";
import { defaultStyles } from "@/styles";
import TrackList from "@/components/TrackList";

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView>
        <TrackList scrollEnabled={false} />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
