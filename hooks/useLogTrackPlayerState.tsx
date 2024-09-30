import { Event, useTrackPlayerEvents } from "react-native-track-player";

const events = [
  Event.PlaybackState,
  Event.PlayerError,
  Event.PlaybackActiveTrackChanged,
];

export const useLogTrackPlayerState = () => {
  useTrackPlayerEvents(events, async (event) => {
    if (event.type === Event.PlaybackError) {
      console.error("An error occurred while playing the track.");
    }
    if (event.type === Event.PlaybackState) {
      console.log("The playback state changed.", event.state);
    }
    if (event.type === Event.PlaybackActiveTrackChanged) {
      console.log("The active track has changed.", event.index);
    }
  });
};
