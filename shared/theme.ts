import { Platform, StatusBar } from "react-native";

export const paddingTop = `${Platform.OS == "ios" ? 30 + 32 : StatusBar.currentHeight + 32}px`;

const primary = "#4281A4";

const color = {
  primary,
  background: "#EAD2AC",
  button: primary,
  text: "#333",
  placeholder: "#888"
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
