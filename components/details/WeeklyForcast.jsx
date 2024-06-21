import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import {
    ChevronLeftIcon,
    ChevronRightIcon,
} from "react-native-heroicons/outline";
const WeeklyForcast = () => {
  return (
    <View className="mt-7 items-center" style={{ width: "100%" }}>
      <View className="mb-2" style={{ width: "82%" }}>
        <Text className="text-white font-bold text-lg">7-Days Forcasts</Text>
      </View>

      <View className="flex-row items-center" style={{ width: "100%" }}>
        <ChevronLeftIcon size="35" color={"white"} />
        <ScrollView
          horizontal
          className="space-y-1 space-x-2"
          showsHorizontalScrollIndicator={false}
          style={{ width: "85%" }}
        >
          <LinearGradient
            colors={["#3E2D8F", "#9D52AC"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}
            className="flex-col justify-center items-center p-2 rounded-full"
            width={60}
          >
            <Text className="text-white">39°C</Text>
            <Image
              source={require("../../assets/images/partelyrain.png")}
              width={10}
              height={10}
            />
            <Text className="text-white mt-1">Mon</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#3E2D8F", "#8E78C8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}
            className="flex-col justify-center items-center p-2 rounded-full"
            width={60}
          >
            <Text className="text-white">39°C</Text>
            <Image
              source={require("../../assets/images/partelyrain.png")}
              width={10}
              height={10}
            />
            <Text className="text-white mt-1">Tue</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#3E2D8F", "#8E78C8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}
            className="flex-col justify-center items-center p-2 rounded-full"
            width={60}
          >
            <Text className="text-white">39°C</Text>
            <Image
              source={require("../../assets/images/partelyrain.png")}
              width={10}
              height={10}
            />
            <Text className="text-white mt-1">Wed</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#3E2D8F", "#8E78C8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}
            className="flex-col justify-center items-center p-2 rounded-full"
            width={60}
          >
            <Text className="text-white">39°C</Text>
            <Image
              source={require("../../assets/images/partelyrain.png")}
              width={10}
              height={10}
            />
            <Text className="text-white mt-1">Thu</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#3E2D8F", "#8E78C8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}
            className="flex-col justify-center items-center p-2 rounded-full"
            width={60}
          >
            <Text className="text-white">39°C</Text>
            <Image
              source={require("../../assets/images/partelyrain.png")}
              width={10}
              height={10}
            />
            <Text className="text-white mt-1">Fri</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#3E2D8F", "#8E78C8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}
            className="flex-col justify-center items-center p-2 rounded-full"
            width={60}
          >
            <Text className="text-white">39°C</Text>
            <Image
              source={require("../../assets/images/partelyrain.png")}
              width={10}
              height={10}
            />
            <Text className="text-white mt-1">Sat</Text>
          </LinearGradient>

          <LinearGradient
            colors={["#3E2D8F", "#8E78C8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}
            className="flex-col justify-center items-center p-2 rounded-full"
            width={60}
          >
            <Text className="text-white">39°C</Text>
            <Image
              source={require("../../assets/images/partelyrain.png")}
              width={10}
              height={10}
            />
            <Text className="text-white mt-1">Sun</Text>
          </LinearGradient>
        </ScrollView>
        <ChevronRightIcon size="35" color={"white"} />
      </View>
    </View>
  );
};

export default WeeklyForcast;
