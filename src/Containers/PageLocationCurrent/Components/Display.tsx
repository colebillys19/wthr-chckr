import { CSSProperties } from "react";

import { useGlobalState } from "../../../context";
import { WeatherMap } from "../../../SharedComponents";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { CurrentType, DailyType } from "../../../utils/types/openWeatherMap";
import { getTimeData, getHighLow } from "../../../utils/helpers";
import WindDisplay from "./WindDisplay";

const tempStylesA: CSSProperties = {
  border: "1px solid black",
  display: "inline-block",
  padding: "16px",
  width: "240px",
  verticalAlign: "top",
};

const tempStylesB: CSSProperties = {
  backgroundColor: "#eeeeee",
  display: "inline-block",
  padding: "16px",
  verticalAlign: "top",
};

type DisplayPropsType = {
  location: string;
  currentData: CurrentType;
  todayData: DailyType;
  timezoneOffset: number;
};

function Display({
  location,
  currentData,
  todayData,
  timezoneOffset,
}: DisplayPropsType) {
  const { unitType, timeType } = useGlobalState();

  const {
    dt: currentDt,
    temp: currentTemp,
    feels_like: currentFeelsLike,
    weather: currentWeather,
    humidity: currentHumidity,
    wind_deg,
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

  const {
    sunrise: todaySunrise,
    sunset: todaySunset,
    summary: todaySummary,
    feels_like: todayFeelsLike,
    temp: todayTemp,
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
    { label: "Avg. wind speed", value: `${Math.round(todayWindSpeed)}${windUnit}` },
    { label: "Avg. humidity", value: `${todayHumidity}%` },
  ];

  return (
    <div>
      <h2>Current</h2>
      <div className="spacer" />
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
        <div className="spacer" />
        <div>
          Temperature: <b>{`${Math.round(currentTemp)}${tempUnit}`}</b>
        </div>
        <div>
          Feels like: <b>{`${Math.round(currentFeelsLike)}${tempUnit}`}</b>
        </div>
        <div className="spacer" />
        <WindDisplay
          speedStr={`${Math.round(currentWindSpeed)}${windUnit}`}
          deg={wind_deg}
        />
        <div className="spacer" />
        <div>
          Humidity: <b>{`${currentHumidity}%`}</b>
        </div>
      </div>
      <div style={tempStylesB}>
        <h3>{day} Summary</h3>
        <div className="spacer" />
        <div>{todaySummary}</div>
        <div className="spacer" />
        <ul>
          {todayDataArr.map(({ label, value }) => (
            <li key={label}>
              <span>{label}:&nbsp;</span>
              <b>{value}</b>
            </li>
          ))}
        </ul>
      </div>
      <div className="spacer" />
      <div>
        <h2>Map</h2>
        <div className="spacer" />
        <WeatherMap location={location} zoom={8} />
      </div>
    </div>
  );
}

export default Display;
