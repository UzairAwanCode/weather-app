import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Chats = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        style={{ height: "100%" }}
        colors={["#805BCA", "#DFDEFE", "#F6C6EC", "#F7CBFD"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 0 }}
        locations={[0.5, 1, 1, 1]}
      >
        <Text className="text-green-950">Chats</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Chats;
