import { CSSProperties } from "react";

import { useGlobalState } from "../../../context";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { DailyType } from "../../../utils/types/openWeatherMap";
import { getHighLow, getTimeData } from "../../../utils/helpers";

const tempStylesA: CSSProperties = {
  padding: "16px",
  borderBottom: "1px solid black",
  display: "inline-block",
};

const tempStylesB: CSSProperties = {
  fontWeight: "bold",
};

type WeatherDisplayPropsType = {
  data: DailyType;
  timezoneOffset: number;
  isToday: boolean;
};

function WeatherDisplay({
  data,
  timezoneOffset,
  isToday,
}: WeatherDisplayPropsType) {
  const { unitType, timeType } = useGlobalState();

  const {
    dt,
    temp,
    feels_like,
    weather,
    humidity,
    rain,
    snow,
    summary,
    wind_speed,
  } = data;

  const { day } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezoneOffset,
    timeType,
  });

  const { high: feelsLikeHigh, low: feelsLikeLow } = getHighLow(feels_like);

  const tempUnit = unitType === "imperial" ? "°F" : "°C";
  const windUnit = unitType === "imperial" ? "mph" : "m/s";

  const dataArr = [
    {
      label: "Temperature (high)",
      value: `${Math.round(temp.max)}${tempUnit}`,
    },
    { label: "Temperature (low)", value: `${Math.round(temp.min)}${tempUnit}` },
    {
      label: "Feels like (high)",
      value: `${Math.round(feelsLikeHigh)}${tempUnit}`,
    },
    {
      label: "Feels like (low)",
      value: `${Math.round(feelsLikeLow)}${tempUnit}`,
    },
    { label: "Avg. wind speed", value: `${Math.round(wind_speed)}${windUnit}` },
    { label: "Avg. humidity", value: `${humidity}%` },
  ];

  if (typeof rain === "number" && rain > 0) {
    dataArr.push({ label: "Rain (inches)", value: `${rain}` });
  }

  if (typeof snow === "number" && snow > 0) {
    dataArr.push({ label: "Snow (inches)", value: `${snow}` });
  }

  return (
    <div style={tempStylesA}>
      <h3 style={tempStylesB}>{isToday ? "Today" : day}</h3>
      <div className="spacer" />
      <div>
        <WeatherSvg id={weather[0].id} isDayTime={true} size={120} />
      </div>
      <div className="spacer" />
      <div>{summary}</div>
      <div className="spacer" />
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <b>{value}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDisplay;
