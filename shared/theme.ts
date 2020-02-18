import { Platform, StatusBar } from "react-native";
import Color from "color";

export const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const color1 = "#5093BF";
const color2 = "#F7DAB8";
const color3 = "#FAECD3";
const color4 = "#BF5841";
const color5 = "#8C4842";
const color6 = "#E7C196";
const color7 = "#BA9973";

const primary = color1;
const background = color2;

const color = {
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  color7,
  primary,
  background,
  button: primary,
  text: "#333",
  placeholder: color7,
  navbarBackground: color3,
  navbarBorder: color6,
  flatListButtonBackground: color3,
  flatListButtonBorder: color3
};

export const theme = {
  color,
  font: {
    serif: "LibreBaskerville-Regular",
    serifBold: "LibreBaskerville-Bold",
    serifItalic: "LibreBaskerville-Italic",
    sans: "Roboto-Regular",
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
