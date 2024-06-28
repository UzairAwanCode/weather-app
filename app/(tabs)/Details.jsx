import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AirQuality from "../../components/details/AirQuality";
import WeeklyForcast from "../../components/details/WeeklyForcast";
import Sunrise from "../../components/details/Sunrise";
import { useLocalSearchParams } from "expo-router";
import { fetchWeatherForcast } from "../../api/Weather";
import { WeatherContext } from "../../contaxt/WeatherContaxt";

const Details = () => {
  const weatherDetails = useContext(WeatherContext)
  const sevenDaysForcast = weatherDetails?.forecast?.forecastday
  const today = new Date();

  const formatDate = (date) => {
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const todayDate = formatDate(today)

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
            {weatherDetails?.location?.region}
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
          {
            sevenDaysForcast ? <WeeklyForcast forecast={sevenDaysForcast} /> : null 
          }
          

          {/* Air Quality */}
          <AirQuality />

          {/* Sunrise */}
          {weatherDetails?.forecast?.forecastday.map((item,index)=>{
            if(todayDate===item.date){
              return(
                <Sunrise key={index} sunrise={item.astro.sunrise} sunset={item.astro.sunset} uvIndex={item.day.uv}/>
              )
            }
          })}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Details;
