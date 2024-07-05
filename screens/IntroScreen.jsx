import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  HorizontalScale,
  ModerateScale,
  VerticalScale,
} from "../responsive/Metics";
import AsyncStorage from "@react-native-async-storage/async-storage";

const IntroScreen = () => {
  const navigation = useNavigation();

  const getStarted = async()=>{
    await AsyncStorage.setItem("redirect", "true");
    navigation.navigate("(tabs)")
  }
  return (
    <LinearGradient
      colors={["#3E2D8F", "#9D52AC"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 1 }}
      locations={[0.2, 0.7]}
      style={{ backgroundColor: "#362A84", flex: 1, alignItems:'center' }}
    >
      <SafeAreaView className="justify-between items-center">
        <View style={{ marginBottom: VerticalScale(20) }}>
          <Image
            style={{ width: HorizontalScale(300), height: VerticalScale(300) }}
            source={require("../assets/images/frontpageimage.png")}
          />
        </View>
        <Text
          style={{
            fontSize: ModerateScale(60),
            marginBottom: VerticalScale(-10),
          }}
          className="font-bold text-white"
        >
          Weather
        </Text>
        <Text
          className="font-medium"
          style={{ color: "#DDB130", fontSize: ModerateScale(60) }}
        >
          ForeCast
        </Text>
      </SafeAreaView>
      <TouchableOpacity
        className="rounded-full justify-center items-center"
        style={{
          width: "55%",
          backgroundColor: "#DDB130",
          padding: ModerateScale(6),
          position: "absolute",
          bottom: 0,
          marginBottom:VerticalScale(60)
        }}
        onPress={getStarted}
      >
        <Text
          className="font-medium text-black"
          style={{ fontSize: ModerateScale(24)}}
        >
          Get Start
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default IntroScreen;
