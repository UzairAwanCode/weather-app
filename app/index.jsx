import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import IntroScreen from "../screens/IntroScreen";
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


const index = () => {
  const navigation = useNavigation()
  const [showIntro, setShowIntro] = useState(false);

  useEffect(()=>{
    getRedirectValue()
  },[])

  const getRedirectValue = async()=>{
    const redirect = await AsyncStorage.getItem("redirect")
    if(redirect==='true'){
      navigation.navigate("(tabs)")
    }
    else{
      setShowIntro(true)
    }
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00BCD4" />
      {showIntro && <IntroScreen />}
    </>
  );
};

export default index;
