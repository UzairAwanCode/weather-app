import { createContext, useState, useEffect, useContext } from "react";
import { fetchLocationForcast } from "../api/Weather";

export const WeatherContext = createContext(null);

export const WeatherProvider = ({ children, initialData }) => {
  const [weatherLocation, setWeatherLocation] = useState(initialData);

  useEffect(() => {
    if (initialData) {
      setWeatherLocation(initialData);
    }
  }, [initialData]);

  return (
    <WeatherContext.Provider value={{ weatherLocation, setWeatherLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const getWeatherLocation = (value) => {
  const { setWeatherLocation } = useContext(WeatherContext);
  console.log(value);

  useEffect(() => {
    fetchLocationForcast({ cityName: value }).then((data) => {
      setWeatherLocation(data);
    });
  }, [value, setWeatherLocation]);

  return null; // This component does not render anything
};
