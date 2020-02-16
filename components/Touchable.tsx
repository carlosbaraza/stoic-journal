import React from "react";
import { TouchableOpacity, Platform, TouchableNativeFeedback } from "react-native";

export class Touchable extends TouchableOpacity {
  render() {
    const Component: any = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
    return <Component {...this.props} />;
  }
}
