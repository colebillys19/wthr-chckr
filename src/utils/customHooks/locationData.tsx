import { useEffect, useState } from "react";

import { useGlobalState } from "../../context";

const emptyData = {
  current: {
    dt: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    dew_point: 0,
    uvi: 0,
    clouds: 0,
    visibility: 0,
    wind_speed: 0,
    wind_deg: 0,
    weather: [],
  },
  daily: [],
  hourly: [],
  lat: 0,
  lon: 0,
  minutely: [],
  timezone_offset: 0,
  timezone: "",
};

export const useFetchLocationData = (location: string) => {
  const [data, setData] = useState(emptyData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const { unitType } = useGlobalState();

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    const [lat, lon] = location.split(",");
    try {
      fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${unitType}&appid=${process.env.REACT_APP_OWM_KEY}`
      )
        .then((res) => {
          if (!res.ok) {
            setError("Issue fetching location data.");
            setIsLoading(false);
          }
          return res.json();
        })
        .then((resData) => {
          setData(resData);
          setIsLoading(false);
        });
    } catch (error: any) {
      console.error(error);
      setError("Issue fetching location data.");
      setIsLoading(false);
    }
  }, [unitType, location]);

  return { data, error, isLoading };
};
