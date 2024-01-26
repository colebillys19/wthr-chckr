import { CSSProperties } from "react";

import { useGlobalState } from "../../../context";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { CurrentType, DailyType } from "../../../utils/types/openWeatherMap";
import { getTimeData, getHighLow } from "../../../utils/helpers";

const tempStylesA: CSSProperties = {
  border: "1px solid black",
  display: "inline-block",
  padding: "16px",
};

const tempStylesB: CSSProperties = {
  backgroundColor: "#eeeeee",
  display: "inline-block",
  padding: "16px",
};

type DisplayPropsType = {
  currentData: CurrentType;
  todayData: DailyType;
  timezoneOffset: number;
};

function Display({ currentData, todayData, timezoneOffset }: DisplayPropsType) {
  const { unitType, timeType } = useGlobalState();
  const {
    dt: currentDt,
    temp: currentTemp,
    feels_like: currentFeelsLike,
    weather: currentWeather,
    humidity: currentHumidity,
    wind_speed: currentWindSpeed,
    sunrise,
    sunset,
  } = currentData;
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

  const tempUnit = unitType === "imperial" ? "°F" : "°C";
  const windUnit = unitType === "imperial" ? "mph" : "m/s";

  const currentDataArr = [
    { label: "Temperature", value: `${Math.round(currentTemp)}${tempUnit}` },
    {
      label: "Feels like",
      value: `${Math.round(currentFeelsLike)}${tempUnit}`,
    },
    {
      label: "Wind speed",
      value: `${Math.round(currentWindSpeed)}${windUnit}`,
    },
    { label: "Humidity", value: `${currentHumidity}%` },
  ];

  const {
    sunrise: todaySunrise,
    sunset: todaySunset,
    summary: todaySummary,
    feels_like: todayFeelsLike,
    temp: todayTemp,
    // weather: todayWeather,
    humidity: todayHumidity,
    wind_speed: todayWindSpeed,
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
    { label: "Wind speed", value: `${Math.round(todayWindSpeed)}${windUnit}` },
    { label: "Humidity", value: `${todayHumidity}%` },
    // { label: "Weather", value: todayWeather[0].main },
  ];

  return (
    <div>
      <h2>Current</h2>
      <br />
      <div style={tempStylesA}>
        <h3>{currentTime}</h3>
        <div>
          <WeatherSvg
            id={currentWeather[0].id}
            isDayTime={isDayTime}
            size={120}
          />
        </div>
        <div>{currentWeather[0].main}</div>
        <br />
        <ul>
          {currentDataArr.map(({ label, value }) => (
            <li key={label}>
              <span>{label}:&nbsp;</span>
              <b>{value}</b>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div style={tempStylesB}>
        <h3>{day} Summary</h3>
        <br />
        <div>{todaySummary}</div>
        <br />
        <ul>
          {todayDataArr.map(({ label, value }) => (
            <li key={label}>
              <span>{label}:&nbsp;</span>
              <b>{value}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Display;
