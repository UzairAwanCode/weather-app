import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";
import TabBar from "../../components/bottomtab/TabBar";

const _layout = () => {
  return (
    <Tabs tabBar={props=> <TabBar  {...props}/>}>
      <Tabs.Screen name="HomeScreen" options={{ headerShown: false }} />
      <Tabs.Screen name="Details" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default _layout;
