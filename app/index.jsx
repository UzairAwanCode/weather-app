import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions } from "react-native";
import IntroScreen from "../screens/IntroScreen";

const { width, height } = Dimensions.get("window");

const index = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00BCD4" />
      <IntroScreen />
    </>
  );
};

export default index;
