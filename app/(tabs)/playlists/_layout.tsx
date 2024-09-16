import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const PlaylistScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Songs",
          }}
        />
      </Stack>
    </View>
  );
};
export default PlaylistScreenLayout;
