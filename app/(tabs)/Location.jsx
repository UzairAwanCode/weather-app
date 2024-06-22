import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fontisto } from "@expo/vector-icons";

const Location = () => {
  return (
    <LinearGradient
      colors={["#3E2D8F", "#9D52AC"]}
      start={{ x: 0, y: 0 }}
      end={{ x: -2, y: 1 }}
      locations={[0.1, 0.7]}
      style={{ backgroundColor: "#362A84", flex: 1 }}
    >
      <SafeAreaView className="" style={{height:"93%"}}>
        {/* Search Field */}
        <View style={{ width: "100%" }} className="items-center mt-7 mb-4">
          <View style={{ width: "80%" }}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={"#9D52AC"}
              className="bg-transparent px-5 py-2 text-white border border-purple-500 rounded-full"
            />
          </View>
        </View>

        {/* Countries List */}
        <ScrollView className="flex-1 rounded-2xl bg-black-20">
          <View className="items-center">
            <View
              className="flex-row justify-start items-center mt-5 p-5 bg-slate-400 rounded-xl"
              style={{ width: "90%" }}
            >
              <Fontisto name="world-o" size={24} color="#362A84" />
              <Text className="font-bold text-lg ml-3">Country</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Location;
