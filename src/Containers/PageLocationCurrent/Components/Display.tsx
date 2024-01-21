import { useGlobalState } from "../../../context";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { CurrentType, DailyType } from "../../../utils/types/openWeatherMap";
import { getTimeData, getHighLow } from "../../../utils/helpers";

type DisplayPropsType = {
  currentData: CurrentType;
  todayData: DailyType;
  timezoneOffset: number;
};

function Display({ currentData, todayData, timezoneOffset }: DisplayPropsType) {
  const { unitType } = useGlobalState();
  const {
    dt: currentDt,
    temp: currentTemp,
    feels_like: currentFeelsLike,
    weather: currentWeather,
    humidity: currentHumidity,
    wind_speed: currentWindSpeed,
  } = currentData;
  const {
    day,
    isDayTime,
    timeStandard: currentTimeStandard,
  } = getTimeData(currentDt, timezoneOffset);

  const tempUnit = unitType === "imperial" ? "°F" : "°C";
  const windUnit = unitType === "imperial" ? "mph" : "m/s";

  const currentDataArr = [
    { label: "Temperature", value: `${Math.round(currentTemp)}${tempUnit}` },
    {
      label: "Feels like",
      value: `${Math.round(currentFeelsLike)}${tempUnit}`,
    },
    { label: "Weather", value: currentWeather[0].main },
    { label: "Humidity", value: `${currentHumidity}%` },
    {
      label: "Wind speed",
      value: `${Math.round(currentWindSpeed)}${windUnit}`,
    },
  ];

  const {
    sunrise: todaySunrise,
    sunset: todaySunset,
    summary: todaySummary,
    feels_like: todayFeelsLike,
    temp: todayTemp,
    weather: todayWeather,
    humidity: todayHumidity,
    wind_speed: todayWindSpeed,
  } = todayData;
  const { timeStandard: todaySunriseTimeStandard } = getTimeData(
    todaySunrise,
    timezoneOffset
  );
  const { timeStandard: todaySunsetTimeStandard } = getTimeData(
    todaySunset,
    timezoneOffset
  );
  const { high: todayFeelsLikeHigh, low: todayFeelsLikeLow } =
    getHighLow(todayFeelsLike);

  const todayDataArr = [
    { label: "sunrise", value: todaySunriseTimeStandard },
    { label: "sunset", value: todaySunsetTimeStandard },
    { label: "summary", value: todaySummary },
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
    { label: "Weather", value: todayWeather[0].main },
    { label: "Humidity", value: `${todayHumidity}%` },
    { label: "Wind speed", value: `${Math.round(todayWindSpeed)}${windUnit}` },
  ];

  return (
    <div>
      <h3>current</h3>
      <br />
      <div>
        {day}, {currentTimeStandard}
      </div>
      <br />
      <ul>
        {currentDataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <b>{value}</b>
          </li>
        ))}
      </ul>
      <div>
        <WeatherSvg id={currentWeather[0].id} isDayTime={isDayTime} size={120} />
      </div>
      <br />
      <h3>today</h3>
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
  );
}

export default Display;
