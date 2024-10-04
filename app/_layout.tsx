import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { SplashScreen, Stack } from "expo-router";

import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useSetupTrackPlayer } from "@/hooks/useSetupTrackPlayer";
import { useCallback } from "react";
import { useLogTrackPlayerState } from "@/hooks/useLogTrackPlayerState";

SplashScreen.preventAutoHideAsync();

const App = () => {
  useLogTrackPlayerState();
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);
  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  });
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <RootLayout />
    </SafeAreaProvider>
  );
};

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default App;
