import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AirQuality from "../../components/details/AirQuality";
import WeeklyForcast from "../../components/details/WeeklyForcast";
import Sunrise from "../../components/details/Sunrise";

const Details = () => {
  return (
    <LinearGradient
      colors={["#3E2D8F", "#9D52AC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: -2, y: 1 }}
      locations={[0.1, 0.7]}
      style={{ backgroundColor: "#362A84", flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className=" flex-2 items-center mt-9">
          <Text className="font-normal text-xl" style={{ color: "#ffffff" }}>
            North America
          </Text>

          <View className="flex-row">
            <Text
              className="font-normal text-base mr-2"
              style={{ color: "#ffffff" }}
            >
              Max: 24°
            </Text>
            <Text
              className="font-normal text-base"
              style={{ color: "#ffffff" }}
            >
              Min:18°
            </Text>
          </View>

          {/* 7 days forcast */}
          <WeeklyForcast/>

          {/* Air Quality */}
          <AirQuality/>

          {/* Sunrise */}
          <Sunrise/>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Details;
