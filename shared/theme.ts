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
const color8 = "#333";

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
  text: color8,
  placeholder: color7,

  navbarBackground: color3,
  navbarBorder: color6,

  flatListButtonBackground: color3,
  flatListButtonBorder: color3,

  topbar: {
    background: color3,
    color: color8
  }
};

const font = {
  serif: "LibreBaskerville-Regular",
  serifBold: "LibreBaskerville-Bold",
  serifItalic: "LibreBaskerville-Italic",
  sans: "Roboto-Regular",
  sansBold: "Roboto-Bold",
  sansLight: "Roboto-Light",
  sansBlack: "Roboto-Black"
};

export const theme = {
  color,
  font,
  space: {
    xs: "4px",
    s: "8px",
    m: "16px",
    l: "32px",
    xl: "64px"
  },
  calendar: {
    backgroundColor: "#ffffff",
    calendarBackground: color.background,
    textSectionTitleColor: color5,
    selectedDayBackgroundColor: color5,
    selectedDayTextColor: "#ffffff",
    todayTextColor: color4,
    dayTextColor: color8,
    textDisabledColor: color6,
    dotColor: color1,
    selectedDotColor: "#ffffff",
    arrowColor: "orange",
    disabledArrowColor: "#d9e1e8",
    monthTextColor: color5,
    indicatorColor: color5,
    textDayFontFamily: font.sans,
    textMonthFontFamily: font.serifBold,
    textDayHeaderFontFamily: font.serifItalic,
    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "300",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 12
  }
};
