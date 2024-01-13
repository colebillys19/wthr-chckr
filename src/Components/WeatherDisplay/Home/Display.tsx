import { CSSProperties } from "react";

import { HomeDataType } from "./types";

const tempStylesA: CSSProperties = {
  outline: "3px solid orange",
  display: "inline-block",
};

const tempStylesB: CSSProperties = {
  color: "purple",
};

type DisplayProps = {
  data: HomeDataType;
  nameData: { label: string; value: string }[];
};

function Display({ data, nameData }: DisplayProps) {
  const { current } = data;
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
    </div>
  );
}

export default Display;
