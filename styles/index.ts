import { colors, fontSize } from "@/constants/tokens";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
    fontSize: fontSize.base,
  },
});

export const utilStyles = StyleSheet.create({});
