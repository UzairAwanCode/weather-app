import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
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
          <Image source={require("../../assets/images/homepageheader.png")} />
          <Text className="font-medium text-5xl" style={{ color: "#ffffff" }}>
            19°
          </Text>
          <Text className="font-normal text-base" style={{ color: "#ffffff" }}>
            Precipitations
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
          <Image
            source={require("../../assets/images/house.png")}
            className="mr-4 mt-6"
          />
        </View>

        <View className="flex-1 rounded-xl  items-center mt-5">
          <View className="flex-row justify-between" style={{width:"80%"}}>
            <Text className="" style={{ color: "#ffffff" }}>
              Today
            </Text>
            <Text style={{ color: "#ffffff" }}>July, 21</Text>
          </View>
          <LinearGradient
            colors={["#8E78C8", "#492BA1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1}}
            locations={[1, 1]}
            style={{
              width: "100%",
              height: 1
            }}
            className="mt-2"
          />
          <View className="flex-1 flex-row justify-between items-center" style={{width:"80%"}}>
            <View className="flex-col justify-center items-center" style={{height:"100%"}}>
              <Text className="text-white">39°C</Text>
              <Image source={require("../../assets/images/partelyrain.png")} width={10} height={10}/>
              <Text className="text-white mt-1">15.00</Text>
            </View>
            <View className="flex-col justify-center items-center" style={{height:"100%"}}>
              <Text className="text-white">39°C</Text>
              <Image source={require("../../assets/images/partelyrain.png")} width={10} height={10}/>
              <Text className="text-white mt-1">15.00</Text>
            </View>
            <View className="flex-col justify-center items-center" style={{height:"100%"}}>
              <Text className="text-white">39°C</Text>
              <Image source={require("../../assets/images/partelyrain.png")} width={10} height={10}/>
              <Text className="text-white mt-1">15.00</Text>
            </View>
            <View className="flex-col justify-center items-center" style={{height:"100%"}}>
              <Text className="text-white">39°C</Text>
              <Image source={require("../../assets/images/partelyrain.png")} width={10} height={10}/>
              <Text className="text-white mt-1">15.00</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
