import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";
import {
    ChevronRightIcon
} from "react-native-heroicons/outline";

const AirQuality = () => {
  return (
    <View style={{width: "82%", elevation: 2 }} className="mt-8">
      <LinearGradient
        colors={["#3E2D8F", "#9D52AC"]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1.5 }}
        locations={[0.1, 1]}
        className="flex-col justify-center items-start p-2 rounded-xl border-purple-700"
      >
        <View className="flex-row p-1 items-center mb-2">
          <Image source={require("../../assets/images/air.png")} />
          <Text className="text-white ml-3 text-sm">AIR QUALITY</Text>
        </View>
        <Text className="text-white text-2xl font-semibold ml-2">
          3-Low Health Risk
        </Text>

        <LinearGradient
          colors={["#805BCA", "#362A84"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.7, 1]}
          style={{
            width: "100%",
            height: 3,
          }}
          className="mt-2 rounded-xl"
        />

        <View
          className="flex-row items-center justify-between pl-1 pr-1 mt-2"
          style={{ width: "100%" }}
        >
          <Text className="text-white">See more</Text>
          <ChevronRightIcon size="25" color={"white"} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default AirQuality;
