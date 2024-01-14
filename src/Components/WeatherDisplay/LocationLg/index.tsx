import { CSSProperties } from "react";

import { WeatherSvg } from "../../../AuxComponents";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import { NameDataType } from "../../../utils/types/geocoder";

const tempStylesA: CSSProperties = {
  outline: "3px solid orange",
  display: "inline-block",
};

const tempStylesB: CSSProperties = {
  color: "purple",
};

type WeatherDisplayLocationLgPropsType = {
  data: OpenWeatherMapDataType;
  nameData: NameDataType;
};

function WeatherDisplayLocationLg({
  data,
  nameData,
}: WeatherDisplayLocationLgPropsType) {
  const { current, timezone_offset } = data;
  const { temp, feels_like, weather, humidity, wind_speed } = current;

  const dataArr = [
    { label: "Temperature", value: temp },
    { label: "Feels like", value: feels_like },
    { label: "Weather", value: weather[0].main },
    { label: "Humidity", value: humidity },
    { label: "Wind speed", value: wind_speed },
  ];

  return (
    <div style={tempStylesA}>
      <ul>
        {nameData.map(({ label, value }) => (
          <li key={label} style={tempStylesB}>
            <span>{label}:&nbsp;</span>
            <b>{value}</b>
          </li>
        ))}
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <b>{value}</b>
          </li>
        ))}
      </ul>
      <div>
        <WeatherSvg
          id={weather[0].id}
          timezoneOffset={timezone_offset}
          size={120}
        />
      </div>
    </div>
  );
}

export default WeatherDisplayLocationLg;
