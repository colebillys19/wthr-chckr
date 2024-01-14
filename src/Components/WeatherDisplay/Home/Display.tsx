import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import { WeatherSvg } from "../../../AuxComponents";
import { HomeDataType } from "./types";

const tempStylesA: CSSProperties = {
  outline: "3px solid orange",
  display: "inline-block",
};

const tempStylesB: CSSProperties = {
  color: "purple",
};

type DisplayPropsType = {
  data: HomeDataType;
  nameData: { label: string; value: string }[];
};

function Display({ data, nameData }: DisplayPropsType) {
  const navigate = useNavigate();

  const { current, timezone_offset, lat, lon } = data;
  const { temp, feels_like, weather, humidity, wind_speed } = current;

  const dataArr = [
    { label: "Temperature", value: temp },
    { label: "Feels like", value: feels_like },
    { label: "Weather", value: weather[0].main },
    { label: "Humidity", value: humidity },
    { label: "Wind speed", value: wind_speed },
  ];

  /*
   *
   */
  const handleSeeMore = () => {
    navigate(`/location?location=${lat},${lon}`);
  };

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
      <div>
        <button onClick={handleSeeMore}>see more</button>
      </div>
    </div>
  );
}

export default Display;
