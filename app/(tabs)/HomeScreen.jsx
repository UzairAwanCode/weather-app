import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { weatherImages } from "../../constants";
import { fetchWeatherForcast } from "../../api/Weather";
import { WeatherContext } from "../../contaxt/WeatherContaxt";

const HomeScreen = () => {
  const weather = useContext(WeatherContext)
  const {current} = weather
  
  return (
    <LinearGradient
      colors={["#3E2D8F", "#9D52AC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: -2, y: 1 }}
      locations={[0.1, 0.7]}
      style={{ backgroundColor: "#362A84", flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <View className=" flex-2 items-center">
          <Image source={weatherImages[current?.condition?.text]} className="w-36 h-36 mt-10 mb-5"/>
          <Text className="font-medium text-5xl" style={{ color: "#ffffff" }}>
            {current?.temp_c}°
          </Text>
          <Text className="font-normal text-base" style={{ color: "#ffffff" }}>
            Precipitations
          </Text>
          <View className="flex-row">
            <Text
              className="font-normal text-base mr-2"
              style={{ color: "#ffffff" }}
            >
              Max: {current?.precip_mm}°
            </Text>
            <Text
              className="font-normal text-base"
              style={{ color: "#ffffff" }}
            >
              Min: {current?.precip_in}°
            </Text>
          </View>
          <Image
            source={require("../../assets/images/house.png")}
            className="mr-4 mt-6"
          />
        </View>

        <View
          className="rounded-2xl  items-center mt-0 border"
          style={{ borderColor: "#3E2D8F", height: "30%" }}
        >
          <View
            className="flex-row justify-between pt-5"
            style={{ width: "80%" }}
          >
            <Text className="" style={{ color: "#ffffff" }}>
              Today
            </Text>
            <Text style={{ color: "#ffffff" }}>July, 21</Text>
          </View>
          <LinearGradient
            colors={["#8E78C8", "#492BA1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[1, 1]}
            style={{
              width: "100%",
              height: 1,
            }}
            className="mt-4"
          />
          <View
            className="flex-1 flex-row justify-between items-center"
            style={{ width: "80%" }}
          >
            <View
              className="flex-col justify-center items-center"
              style={{ height: "100%" }}
            >
              <Text className="text-white">{current?.temp_c}°C</Text>
              <Image
                source={weatherImages[current?.condition?.text]}
                className="w-14 h-14 my-2"
              />
              <Text className="text-white mt-1">15.00</Text>
            </View>
            <View
              className="flex-col justify-center items-center"
              style={{ height: "100%" }}
            >
              <Text className="text-white">{current?.temp_c}°C</Text>
              <Image
                source={weatherImages[current?.condition?.text]}
                className="w-14 h-14 my-2"
              />
              <Text className="text-white mt-1">15.00</Text>
            </View>
            <View
              className="flex-col justify-center items-center"
              style={{ height: "100%" }}
            >
              <Text className="text-white">{current?.temp_c}°C</Text>
              <Image
                source={weatherImages[current?.condition?.text]}
                className="w-14 h-14 my-2"
              />
              <Text className="text-white mt-1">15.00</Text>
            </View>
            <View
              className="flex-col justify-center items-center"
              style={{ height: "100%" }}
            >
              <Text className="text-white">{current?.temp_c}°C</Text>
              <Image
                source={weatherImages[current?.condition?.text]}
                className="w-14 h-14 my-2"
              />
              <Text className="text-white mt-1">15.00</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
