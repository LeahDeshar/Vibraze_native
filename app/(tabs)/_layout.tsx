import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useColorScheme } from "@/hooks/useColorScheme";
import { colors, fontSize } from "@/constants/tokens";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 8,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="favorites"
        options={{
          title: "favorites",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: "playlists",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen name="(songs)" />
      <Tabs.Screen
        name="artists"
        options={{
          title: "artists",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
