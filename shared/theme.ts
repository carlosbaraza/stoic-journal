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
  navbarBackground: Color(background)
    .lighten(0.1)
    .toString(),
  navbarBorder: Color(background)
    .darken(0.1)
    .toString(),
  flatListButtonBackground: Color(background)
    .lighten(0.1)
    .toString(),
  flatListButtonBorder: Color(background)
    .darken(0.1)
    .toString()
};

export const theme = {
  color,
  font: {
    serif: "LibreBaskerville-Regular",
    serifBold: "LibreBaskerville-Bold",
    serifItalic: "LibreBaskerville-Italic",
    sans: "Roboto-Medium",
    sansBold: "Roboto-Bold",
    sansLight: "Roboto-Light",
    sansBlack: "Roboto-Black"
  },
  space: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px"
  }
};
