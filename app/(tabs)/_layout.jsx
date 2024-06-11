import { Tabs } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="chats" options={{ headerShown: false}} />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default _layout;
