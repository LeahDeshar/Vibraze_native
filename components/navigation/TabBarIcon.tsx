// // You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

// import Ionicons from '@expo/vector-icons/Ionicons';
// import { type IconProps } from '@expo/vector-icons/build/createIconSet';
// import { type ComponentProps } from 'react';

// export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
//   return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
// }
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { type IconProps } from "@expo/vector-icons/build/createIconSet";
import { type ComponentProps } from "react";

type IconType = "ionicon" | "materialicon";

interface TabBarIconProps
  extends IconProps<ComponentProps<typeof Ionicons>["name"]> {
  iconType?: IconType;
}

export function TabBarIcon({
  iconType = "ionicon",
  style,
  ...rest
}: TabBarIconProps) {
  const IconComponent = iconType === "materialicon" ? MaterialIcons : Ionicons;

  return (
    <IconComponent size={24} style={[{ marginBottom: 4 }, style]} {...rest} />
  );
}
