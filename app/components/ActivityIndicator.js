import { Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
export default function ActivityIndicator({ visible = true }) {
  if (!visible) return null;
  else
    return (
      <LottieView
        autoPlay
        loop
        speed={require("../assets/animation/loader.json").speed}
      />
    );
}
