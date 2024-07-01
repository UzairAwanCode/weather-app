import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import TabBar from "../../components/bottomtab/TabBar";
import {
  getDefaultWeatherForcast,
  getNewWeatherForcast,
} from "../../constants/SendDataRequest";
import { WeatherContext } from "../../contaxt/WeatherContaxt";
import { EventRegister } from "react-native-event-listeners";

const _layout = () => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState();

  const asyncStorageValue = async () => {
    const value = await AsyncStorage.getItem("location");
    setLocation(value);
    // await AsyncStorage.removeItem("location");
  };

  useEffect(() => {
    asyncStorageValue();

    const listner = EventRegister.on("locationChanged", (newLocation) => {
      setLocation(newLocation);
    });

    return () => {
      EventRegister.removeListener(listner);
    };
  }, []);

  useEffect(() => {
    if (location) {
      fetchNewLocationWeatherData(location);
    } else {
      fetchDefaultWeatherData();
    }
  }, [location]);

  const fetchNewLocationWeatherData = async (loc) => {
    const result = await getNewWeatherForcast(loc);
    setWeather(result);
  };

  const fetchDefaultWeatherData = async () => {
    const result = await getDefaultWeatherForcast();
    setWeather(result);
  };

  return (
    <WeatherContext.Provider value={weather}>
      <Tabs
        tabBar={(props) => <TabBar {...props} />}
        initialRouteName="HomeScreen"
      >
        <Tabs.Screen name="Location" options={{ headerShown: false }} />
        <Tabs.Screen name="HomeScreen" options={{ headerShown: false }} />
        <Tabs.Screen name="Details" options={{ headerShown: false }} />
      </Tabs>
    </WeatherContext.Provider>
  );
};

export default _layout;
