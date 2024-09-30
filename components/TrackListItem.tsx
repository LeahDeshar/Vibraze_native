import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
} from "react-native";
import React from "react";
import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyles } from "@/styles";
import { Track, useActiveTrack } from "react-native-track-player";

export type TrackListItemProps = {
  track: Track;
};

const TrackListItem = ({ track }: TrackListItemProps) => {
  const isActiveTrack = useActiveTrack()?.url === track.url;
  // const isActiveTrack = false;
  return (
    <TouchableHighlight>
      <View style={styles.trackItemContainer}>
        {/* <View> */}
        <View>
          <Image
            source={{
              uri: track.artwork ?? unknownTrackImageUri,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />
        </View>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}
          >
            {track.title}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} style={styles.trackArtistText}>
              {track.artist}
            </Text>
          )}
          {/* </View> */}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default TrackListItem;

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: "row",
    columnGap: 14,
    alignItems: "center",
    paddingRight: 20,
  },
  trackArtworkImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: "600",
    maxWidth: "90%",
  },
  trackArtistText: {
    ...defaultStyles.text,
    fontSize: fontSize.xs,
    color: colors.textMuted,
  },
});
