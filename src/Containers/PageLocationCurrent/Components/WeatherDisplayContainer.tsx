import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { CurrentType, DailyType } from "../../../utils/types/openWeatherMap";
import { getTimeData, getHighLow, getPrecStrHourly } from "../../../utils/helpers";
import { getTodayDataArr } from "../helpers";
import WeatherDisplay from "./WeatherDisplay";

type WeatherDisplayContainerPropsType = {
  currentData: CurrentType;
  todayData: DailyType;
  timezoneOffset: number;
  dayName: string;
  isDayTime: boolean;
};

function WeatherDisplayContainer({
  currentData,
  todayData,
  timezoneOffset,
  dayName,
  isDayTime,
}: WeatherDisplayContainerPropsType) {
  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const {
    temp: currentTemp,
    feels_like: currentFeelsLike,
    weather: currentWeather,
    humidity: currentHumidity,
    wind_speed: currentWindSpeed,
    rain: currentRain,
    snow: currentSnow,
  } = currentData;

  const tempUnit = useMemo(
    () => (unitType === "imperial" ? "°F" : "°C"),
    [unitType]
  );
  const windUnit = useMemo(
    () => (unitType === "imperial" ? "mph" : "m/s"),
    [unitType]
  );
  const currentRainVolume = useMemo(
    () => getPrecStrHourly(unitType, currentRain),
    [unitType]
  );
  const currentSnowVolume = useMemo(
    () => getPrecStrHourly(unitType, currentSnow),
    [unitType]
  );

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

  const todaySummaryHasPeriod = todaySummary[todaySummary.length - 1] === ".";
  const todaySummaryToUse = todaySummaryHasPeriod
    ? todaySummary
    : `${todaySummary}.`;

  const todayDataArr = getTodayDataArr({
    todayRain,
    todaySnow,
    todaySunriseTime,
    todaySunsetTime,
    todayTempMax: todayTemp.max,
    todayTempMin: todayTemp.min,
    todayFeelsLikeHigh,
    todayFeelsLikeLow,
    todayWindSpeed,
    todayPop,
    todayHumidity,
    tempUnit,
    windUnit,
    unitType,
  });

  return (
    <WeatherDisplay
      svgId={currentWeather[0].id}
      isDayTime={isDayTime}
      weatherName={currentWeather[0].main}
      temp={`${Math.round(currentTemp)}${tempUnit}`}
      feelsLike={`${Math.round(currentFeelsLike)}${tempUnit}`}
      windSpeed={`${Math.round(currentWindSpeed)}${windUnit}`}
      humidity={`${currentHumidity}%`}
      rainVolume={currentRainVolume}
      snowVolume={currentSnowVolume}
      dayName={dayName}
      todaySummary={todaySummaryToUse}
      todayDataArr={todayDataArr}
    />
  );
}

export default WeatherDisplayContainer;
