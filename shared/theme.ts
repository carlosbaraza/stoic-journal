import { Platform, StatusBar } from "react-native";
import Color from "color";

export const paddingTop = `${Platform.OS == "ios" ? 30 + 32 : StatusBar.currentHeight + 32}px`;

const primary = "#4281A4";
const background = "#EAD2AC";

const color = {
  primary,
  background,
  button: primary,
  text: "#333",
  placeholder: "#888",
  flatListButtonBackground: Color(background)
    .lighten(0.1)
    .toString(),
  flatListButtonBorder: Color(background)
    .darken(0.1)
    .toString()
};

export const theme = {
  color,
  space: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px"
  }
};
