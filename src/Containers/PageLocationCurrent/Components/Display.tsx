import { useGlobalState } from "../../../context";
// import { WeatherMap } from "../../../SharedComponents";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { CurrentType, DailyType } from "../../../utils/types/openWeatherMap";
import { getTimeData, getHighLow } from "../../../utils/helpers";
import WindDisplay from "./WindDisplay";

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
    rain: currentRain,
    snow: currentSnow,
  } = currentData;

  let currentRainStr = '';
  if (currentRain && currentRain["1h"]) {
    currentRainStr = `${currentRain["1h"]} mm/h`;
  }

  let currentSnowStr = '';
  if (currentSnow && currentSnow["1h"]) {
    currentSnowStr = `${currentSnow["1h"]} mm/h`;
  }

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
    {
      label: "Avg. wind speed",
      value: `${Math.round(todayWindSpeed)}${windUnit}`,
    },
    { label: "Avg. humidity", value: `${todayHumidity}%` },
  ];

  return (
    <div>
      <h2>Current</h2>
      <div>
        <h3>{currentTime}</h3>
        <div>
          <WeatherSvg
            id={currentWeather[0].id}
            isDayTime={isDayTime}
            size={120}
          />
        </div>
        <div>{currentWeather[0].main}</div>
        <div>Temperature: {`${Math.round(currentTemp)}${tempUnit}`}</div>
        <div>Feels like: {`${Math.round(currentFeelsLike)}${tempUnit}`}</div>
        <WindDisplay
          speedStr={`${Math.round(currentWindSpeed)}${windUnit}`}
          deg={wind_deg}
        />
        <div>Humidity: {`${currentHumidity}%`}</div>
        {!!currentRainStr && <div>Rain: {currentRainStr}</div>}
        {!!currentSnowStr && <div>Snow: {currentSnowStr}</div>}
      </div>
      <div>
        <h3>{day} Summary</h3>
        <div>{todaySummary}</div>
        <ul>
          {todayDataArr.map(({ label, value }) => (
            <li key={label}>
              <span>{label}:&nbsp;</span>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Display;
