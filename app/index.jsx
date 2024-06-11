import { useNavigation } from "expo-router";
import React from "react";
import { View, Text, StatusBar, Image, Dimensions, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import IntroScreen from "../screens/IntroScreen";

const { width, height } = Dimensions.get("window");

const index = () => {
  const navigation = useNavigation();
  return (
    // <View style={{ backgroundColor: "#19C3FB", flex: 1 }}>
    //   <SafeAreaView className="justify-center items-center">
    //     <Image source={require("../assets/images/frontpageimage.png")} />
    //     <Text className="text-6xl font-bold text-white mb-2">Weather</Text>
    //     <Text className="text-6xl font-medium mb-10" style={{color:"#DDB130"}}>ForeCast</Text>
    //     <TouchableOpacity className="rounded-full p-3 justify-center items-center" style={{width:"70%",backgroundColor:"#DDB130"}}>
    //       <Text className="text-bold text-xl text-black">Get Start</Text>
    //     </TouchableOpacity>
    //   </SafeAreaView>
    // </View>
    <IntroScreen/>
  );
};

export default index;
