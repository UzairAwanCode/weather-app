import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

const IntroScreen = () => {
  const navigation = useNavigation()
  return (
    <LinearGradient
      colors={["#3E2D8F", "#9D52AC"]}
      start={{ x: 0, y: 0.2 }}
      end={{ x: 1, y: 1 }}
      locations={[0.2,0.7]}
      style={{ backgroundColor: "#362A84", flex: 1 }}
    >
      <SafeAreaView className="justify-between items-center">
        <View className="mb-20">
          <Image source={require("../assets/images/frontpageimage.png")} />
        </View>
        <Text className="text-6xl font-bold text-white mb-2">Weather</Text>
        <Text
          className="text-6xl font-medium mb-20"
          style={{ color: "#DDB130" }}
        >
          ForeCast
        </Text>
        <TouchableOpacity
          className="rounded-full p-2 justify-center items-center"
          style={{ width: "55%", backgroundColor: "#DDB130" }}
          onPress={()=>navigation.navigate("(tabs)")}
        >
          <Text className="text-2xl font-medium text-black">Get Start</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default IntroScreen;
