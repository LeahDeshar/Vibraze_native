import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { View } from "react-native";

const FavoriteScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Favorites",
          }}
        />
      </Stack>
    </View>
  );
};
export default FavoriteScreenLayout;
