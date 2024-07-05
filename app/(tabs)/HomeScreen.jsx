import { LinearGradient } from "expo-linear-gradient";
import React, { useContext } from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { weatherImages } from "../../constants";
import { WeatherContext } from "../../contaxt/WeatherContaxt";
import {
  HorizontalScale,
  ModerateScale,
  VerticalScale,
} from "../../responsive/Metics";

const HomeScreen = () => {
  const weather = useContext(WeatherContext);
  const { current } = weather;
  const { height } = Dimensions.get("window");

  return (
    <LinearGradient
      colors={["#3E2D8F", "#9D52AC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: -2, y: 1 }}
      locations={[0.1, 0.7]}
      style={{ backgroundColor: "#362A84", flex: 1 }}
    >
      <ScrollView>
        <SafeAreaView className="flex-1 mb-14">
          <View className=" flex-2 items-center">
            <Image
              style={{
                width: HorizontalScale(100),
                height: VerticalScale(100),
                marginTop: VerticalScale(40),
                marginBottom: VerticalScale(10),
              }}
              source={weatherImages[current?.condition?.text]}
            />
            <Text
              className="font-medium"
              style={{ fontSize: ModerateScale(48), color: "#ffffff" }}
            >
              {current?.temp_c}°
            </Text>
            <Text
              className="font-normal"
              style={{ fontSize: ModerateScale(16), color: "#ffffff" }}
            >
              Precipitations
            </Text>
            <View className="flex-row">
              <Text
                className="font-normal mr-2"
                style={{ fontSize: ModerateScale(16), color: "#ffffff" }}
              >
                Max: {current?.precip_mm}°
              </Text>
              <Text
                className="font-normal"
                style={{ fontSize: ModerateScale(16), color: "#ffffff" }}
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
            className="rounded-2xl  items-center border"
            style={{
              borderColor: "#3E2D8F",
              height: height >= 780 ? VerticalScale(240) : VerticalScale(300),
            }}
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
            <View className="flex-row justify-between" style={{ width: "80%" }}>
              <View
                className="flex-col justify-center items-center"
                style={{ height: "100%" }}
              >
                <Text className="text-white">{current?.temp_c}°C</Text>
                <Image
                  style={{
                    width: HorizontalScale(50),
                    height: VerticalScale(50),
                  }}
                  source={weatherImages[current?.condition?.text]}
                  className="my-4"
                />
                <Text className="text-white mt-1">15.00</Text>
              </View>
              <View
                className="flex-col justify-center items-center"
                style={{ height: "100%" }}
              >
                <Text className="text-white">{current?.temp_c}°C</Text>
                <Image
                  style={{
                    width: HorizontalScale(50),
                    height: VerticalScale(50),
                  }}
                  source={weatherImages[current?.condition?.text]}
                  className="my-4"
                />
                <Text className="text-white mt-1">15.00</Text>
              </View>
              <View
                className="flex-col justify-center items-center"
                style={{ height: "100%" }}
              >
                <Text className="text-white">{current?.temp_c}°C</Text>
                <Image
                  style={{
                    width: HorizontalScale(50),
                    height: VerticalScale(50),
                  }}
                  source={weatherImages[current?.condition?.text]}
                  className="my-4"
                />
                <Text className="text-white mt-1">15.00</Text>
              </View>
              <View
                className="flex-col justify-center items-center"
                style={{ height: "100%" }}
              >
                <Text className="text-white">{current?.temp_c}°C</Text>
                <Image
                  style={{
                    width: HorizontalScale(50),
                    height: VerticalScale(50),
                  }}
                  source={weatherImages[current?.condition?.text]}
                  className="my-4"
                />
                <Text className="text-white mt-1">15.00</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
