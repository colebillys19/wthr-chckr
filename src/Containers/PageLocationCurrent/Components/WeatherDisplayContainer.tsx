import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { CurrentType, DailyType } from "../../../utils/types/openWeatherMap";
import { getTimeData, getHighLow } from "../../../utils/helpers";
import WeatherDisplay from "./WeatherDisplay";

type WeatherDisplayContainerPropsType = {
  currentData: CurrentType;
  todayData: DailyType;
  timezoneOffset: number;
};

function WeatherDisplayContainer({
  currentData,
  todayData,
  timezoneOffset,
}: WeatherDisplayContainerPropsType) {
  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const {
    dt: currentDt,
    temp: currentTemp,
    feels_like: currentFeelsLike,
    weather: currentWeather,
    humidity: currentHumidity,
    wind_speed: currentWindSpeed,
    sunrise,
    sunset,
    // rain: currentRain,
    // snow: currentSnow,
  } = currentData;

  const tempUnit = useMemo(
    () => (unitType === "imperial" ? "°F" : "°C"),
    [unitType]
  );
  const windUnit = useMemo(
    () => (unitType === "imperial" ? "mph" : "m/s"),
    [unitType]
  );
  // const rainVolume = useMemo(
  //   () => (currentRain && currentRain["1h"] ? `${currentRain["1h"]} mm/h` : ""),
  //   [currentRain]
  // );
  // const snowVolume = useMemo(
  //   () => (currentSnow && currentSnow["1h"] ? `${currentSnow["1h"]} mm/h` : ""),
  //   [currentSnow]
  // );

  const {
    day,
    isDayTime,
    time: currentTime,
  } = getTimeData({
    dtSec: currentDt,
    apiTimezoneOffsetSec: timezoneOffset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  const {
    sunrise: todaySunrise,
    sunset: todaySunset,
    summary: todaySummary,
    feels_like: todayFeelsLike,
    temp: todayTemp,
    humidity: todayHumidity,
    wind_speed: todayWindSpeed,
    rain: todayRain,
    snow: todaySnow,
    pop: todayPop,
  } = todayData;

  const { time: todaySunriseTime } = getTimeData({
    dtSec: todaySunrise,
    apiTimezoneOffsetSec: timezoneOffset,
    timeType,
  });

  const { time: todaySunsetTime } = getTimeData({
    dtSec: todaySunset,
    apiTimezoneOffsetSec: timezoneOffset,
    timeType,
  });

  const { high: todayFeelsLikeHigh, low: todayFeelsLikeLow } =
    getHighLow(todayFeelsLike);

  const todayDataArr = [
    { label: "sunrise", value: todaySunriseTime },
    { label: "sunset", value: todaySunsetTime },
    {
      label: "Temperature (high)",
      value: `${Math.round(todayTemp.max)}${tempUnit}`,
    },
    {
      label: "Temperature (low)",
      value: `${Math.round(todayTemp.min)}${tempUnit}`,
    },
    {
      label: "Feels like (high)",
      value: `${Math.round(todayFeelsLikeHigh)}${tempUnit}`,
    },
    {
      label: "Feels like (low)",
      value: `${Math.round(todayFeelsLikeLow)}${tempUnit}`,
    },
    {
      label: "Avg. wind speed",
      value: `${Math.round(todayWindSpeed)}${windUnit}`,
    },
    { label: "Avg. humidity", value: `${todayHumidity}%` },
  ];

  if (!!todayRain) {
    todayDataArr.push({ label: "Rain volume", value: `${todayRain} mm` });
  }

  if (!!todaySnow) {
    todayDataArr.push({ label: "Snow volume", value: `${todaySnow} mm` });
  }

  if (!!todayPop) {
    todayDataArr.push({
      label: "Chance of precipitation",
      value: `${todayPop}%`,
    });
  }

  return (
    <WeatherDisplay
      currentTime={currentTime}
      svgId={currentWeather[0].id}
      isDayTime={isDayTime}
      weatherName={currentWeather[0].main}
      temp={`${Math.round(currentTemp)}${tempUnit}`}
      feelsLike={`${Math.round(currentFeelsLike)}${tempUnit}`}
      windSpeed={`${Math.round(currentWindSpeed)}${windUnit}`}
      humidity={`${currentHumidity}%`}
      // rainVolume={rainVolume}
      // snowVolume={snowVolume}
      dayName={day}
      todaySummary={todaySummary}
      todayDataArr={todayDataArr}
    />
  );
}

export default WeatherDisplayContainer;
