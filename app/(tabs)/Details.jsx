import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";

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
          <View className="mt-7 items-center" style={{ width: "100%" }}>
            <View className="mb-2" style={{ width: "82%" }}>
              <Text className="text-white font-bold text-lg">
                7-Days Forcasts
              </Text>
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

          {/* Air Quality */}
          <View style={{ width: "82%", elevation: 2 }} className="mt-8">
            <LinearGradient
              colors={["#3E2D8F", "#9D52AC"]}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1.5 }} 
              locations={[0.1, 1]}
              className="flex-col justify-center items-start p-2 rounded-xl border-purple-700"
            >
              <View className="flex-row p-1 items-center mb-2">
                <Image source={require("../../assets/images/air.png")} />
                <Text className="text-white ml-3 text-base">AIR QUALITY</Text>
              </View>
              <Text className="text-white ml-3 text-2xl font-semibold ml-2">
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

              <View className="flex-row items-center justify-between pl-1 pr-1 mt-2" style={{width: "100%"}}>
                <Text className="text-white">See more</Text>
                <ChevronRightIcon size="25" color={"white"} />
              </View>
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Details;
