import { useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions } from "react-native";
import IntroScreen from "../screens/IntroScreen";
import { WeatherProvider } from "../contaxt/WeatherContaxt";

const { width, height } = Dimensions.get("window");

const index = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00BCD4" />
      <IntroScreen />
    </>
  );
};

export default index;
