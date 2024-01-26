import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalState } from "../../context";
import { WeatherSvg } from "../../SharedComponentsAux";
import { OpenWeatherMapDataType } from "../../utils/types/openWeatherMap";
import { getTimeData } from "../../utils/helpers";

const tempStylesA: CSSProperties = {
  border: "1px solid black",
  display: "inline-block",
  width: "240px",
  height: "360px",
  padding: "16px",
};

const tempStylesB: CSSProperties = {
  color: "grey",
};

type DisplayPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
};

function Display({ data, name }: DisplayPropsType) {
  const navigate = useNavigate();

  const { unitType, timeType } = useGlobalState();

  const { current, timezone_offset, lat, lon } = data;
  const {
    dt,
    temp,
    feels_like,
    weather,
    humidity,
    wind_speed,
    sunrise,
    sunset,
  } = current;

  const { isDayTime, time } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezone_offset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  const tempUnit = unitType === "imperial" ? "°F" : "°C";
  const windUnit = unitType === "imperial" ? "mph" : "m/s";

  const dataArr = [
    { label: "Temperature", value: `${Math.round(temp)}${tempUnit}` },
    { label: "Feels like", value: `${Math.round(feels_like)}${tempUnit}` },
    { label: "Wind speed", value: `${Math.round(wind_speed)}${windUnit}` },
    { label: "Humidity", value: `${humidity}%` },
  ];

  /*
   *
   */
  const handleSeeMore = () => {
    const locationStr = `${lat},${lon}`;
    navigate(`/location/current?location=${locationStr}`);
  };

  return (
    <div style={tempStylesA}>
      <div>
        <b>{name}</b>
      </div>
      <div>{time}</div>
      <div className="spacer" />
      <div>
        <WeatherSvg id={weather[0].id} isDayTime={isDayTime} size={120} />
      </div>
      <div>{weather[0].main}</div>
      <div className="spacer" />
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span style={tempStylesB}>{label}:&nbsp;</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      <div className="spacer" />
      <div>
        <button onClick={handleSeeMore}>see more</button>
      </div>
    </div>
  );
}

export default Display;
