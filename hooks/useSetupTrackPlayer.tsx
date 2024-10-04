import { useEffect, useRef } from "react";
import TrackPlayer, { Capability, RepeatMode } from "react-native-track-player";

const setupPlayer = async () => {
  await TrackPlayer.setupPlayer({
    maxCacheSize: 1024 * 10,
  });
  await TrackPlayer.updateOptions({
    capabilities: [
      Capability.Play,
      Capability.Pause,
      Capability.SkipToNext,
      Capability.SkipToPrevious,
    ],
  });
  //   await TrackPlayer.updateOptions({
  //     stopWithApp: true,
  //     capabilities: [
  //       TrackPlayer.CAPABILITY_PLAY,
  //       TrackPlayer.CAPABILITY_PAUSE,
  //       TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
  //       TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  //       TrackPlayer.CAPABILITY_STOP,
  //     ],
  //     compactCapabilities: [
  //       TrackPlayer.CAPABILITY_PLAY,
  //       TrackPlayer.CAPABILITY_PAUSE,
  //     ],
  //   });

  await TrackPlayer.setVolume(0.03);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
export const useSetupTrackPlayer = ({ onLoad }: { onLoad?: () => void }) => {
  const isInitialized = useRef(false);

  useEffect(() => {
    setupPlayer()
      .then(() => {
        isInitialized.current = true;
        onLoad?.();
      })
      .catch((error) => {
        isInitialized.current = false;
        console.error(error);
      });
  }, [onLoad]);
};
