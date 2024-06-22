import { Tabs } from "expo-router";
import React from "react";
import TabBar from "../../components/bottomtab/TabBar";

const _layout = () => {
  return (
    <Tabs tabBar={props=> <TabBar  {...props}/>} initialRouteName="HomeScreen">
      <Tabs.Screen name="Location" options={{headerShown: false}} />
      <Tabs.Screen name="HomeScreen" options={{ headerShown: false }} />
      <Tabs.Screen name="Details" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default _layout;
