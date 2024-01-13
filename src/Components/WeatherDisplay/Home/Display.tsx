import { CSSProperties } from "react";

import { HomeDataType } from "./types";

const tempStyles: CSSProperties = {
  outline: "3px solid orange",
  display: "inline-block",
};

type DisplayProps = {
  data: HomeDataType;
  name: string;
};

function Display({ data, name }: DisplayProps) {
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
    <div style={tempStyles}>
      <div>
        <b>{name}</b>
      </div>
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Display;
