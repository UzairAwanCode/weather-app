import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Image } from "react-native";

const Sunrise = () => {
  return (
    <View className="mt-8 items-center flex-row" style={{ width: "80%" }}>
      {/* SunRise */}
      <View className="flex-1 mr-4">
        <LinearGradient
          colors={["#3E2D8F", "#9D52AC"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.2, 1]}
          className="flex-col items-start pt-2 pl-1 rounded-xl  border border-white"
        >
          <View className="flex-row items-center">
            <Image source={require("../../assets/images/star.png")} />
            <Text className="text-white text-sm ml-1">SUNRISE</Text>
          </View>
          <View className="p-2 bg-transparent">
            <Text className="text-white text-lg font-bold mb-1">5:28 AM</Text>
            <Text className="mb-1" style={{ color: "#F7CBFD" }}>
              Sunset: 7:25PM
            </Text>
          </View>
        </LinearGradient>
      </View>

      {/* UV Index */}
      <View className="flex-1">
        <LinearGradient
          colors={["#3E2D8F", "#9D52AC"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.2, 1]}
          className="flex-col items-start pt-2 pl-1 rounded-xl  border border-white"
        >
          <View className="flex-row items-center">
            <Image source={require("../../assets/images/star.png")} />
            <Text className="text-white text-sm ml-1">UV INDEX</Text>
          </View>
          <View className="p-2 bg-transparent">
            <Text className="text-white text-lg font-bold mb-1">4</Text>
            <Text className="mb-1 font-bold" style={{ color: "#FFFFFF" }}>
              Moderate
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Sunrise;
