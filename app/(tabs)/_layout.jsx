import { Tabs, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import TabBar from "../../components/bottomtab/TabBar";
import { WeatherContext } from "../../contaxt/WeatherContaxt";
import { getDefaultWeatherForcast, getDifferentWeatherForcast } from "../../constants/SendDataRequest";

const _layout = () => {
  const [weather, setWeather] = useState({})
  const params = useLocalSearchParams();

  useEffect(()=>{
    if(params.location){
      const location = JSON.parse(params.location)
      console.log(location.name);
      fetchNewLocationWeatherData(location.name)
    }
    else{
      fetchDefaultWeatherData()
    }
  }, [params.location])

  const fetchNewLocationWeatherData = async(loc)=>{
    const result = await fetchNewLocationWeatherData(loc);
    setWeather(result)
  }

  const fetchDefaultWeatherData = async()=>{
    const result = await getDefaultWeatherForcast();
    setWeather(result)
  }

  return (
    <WeatherContext.Provider value={weather}>
      <Tabs tabBar={props=> <TabBar  {...props}/>} initialRouteName="HomeScreen">
        <Tabs.Screen name="Location" options={{headerShown: false}} />
        <Tabs.Screen name="HomeScreen" options={{ headerShown: false }} />
        <Tabs.Screen name="Details" options={{ headerShown: false }} />
      </Tabs>
    </WeatherContext.Provider>
  );
};

export default _layout;
