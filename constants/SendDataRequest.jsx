import { useState } from "react";
import { fetchWeatherForcast } from "../api/Weather";

export const getNewWeatherForcast = async (loc) => {
  const result = await fetchWeatherForcast({
    cityName: loc,
    days: "7",
  });
  return result;
};

export const getDefaultWeatherForcast = async () => {
  const result = await fetchWeatherForcast({
    cityName: "islamabad",
    days: "7",
  });
  return result
};
