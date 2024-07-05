import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import { weatherImages } from "../../constants";

const WeeklyForcast = ({ forecast }) => {
  return (
    <View className="mt-7 items-center" style={{ width: "100%" }}>
      <View className="mb-2" style={{ width: "82%" }}>
        <Text className="text-white font-bold text-lg">7-Days Forecasts</Text>
      </View>
      
      <View className="flex-row items-center" style={{ width: "100%" }}>
        <ChevronLeftIcon size="35" color={"white"} />
        <ScrollView
          horizontal
          className="space-y-1 space-x-2"
          showsHorizontalScrollIndicator={false}
          style={{ width: "85%" }}
        >
          {forecast.map((item, index) => {
            const weeks = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
            if (index === 0) {
              return (
                <LinearGradient
                  colors={["#3E2D8F", "#9D52AC"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0.1, 0.7]}
                  className="flex-col justify-center items-center p-2 rounded-full"
                  width={60}
                  key={index}
                >
                  <Text className="text-white">{item?.day?.avgtemp_c}°C</Text>
                  <Image
                    source={weatherImages[item?.day?.condition?.text]}
                    className="w-11 h-11 my-2"
                  />
                  <Text className="text-white mt-1">{weeks[index]}</Text>
                </LinearGradient>
              );
            } else {
              return (
                <LinearGradient
                  colors={["#3E2D8F", "#8E78C8"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  locations={[0.1, 0.7]}
                  className="flex-col justify-center items-center p-2 rounded-full"
                  width={60}
                  key={index}
                >
                  <Text className="text-white">{item?.day?.avgtemp_c}°C</Text>
                  <Image
                    source={weatherImages[item?.day?.condition?.text]}
                    className="w-11 h-11 my-2"
                  />
                  <Text className="text-white mt-1">{weeks[index]}</Text>
                </LinearGradient>
              );
            }
          })}
        </ScrollView>
        <ChevronRightIcon size="35" color={"white"} />
      </View>
    </View>
  );
};

export default WeeklyForcast;
