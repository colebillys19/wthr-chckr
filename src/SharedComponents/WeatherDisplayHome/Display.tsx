import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

import { WeatherSvg } from "../../SharedComponentsAux";
import { OpenWeatherMapDataType } from "../../utils/types/openWeatherMap";
import { getTimeData } from "../../utils/helpers";

const tempStylesA: CSSProperties = {
  outline: "3px solid orange",
  display: "inline-block",
};

const tempStylesB: CSSProperties = {
  color: "purple",
};

type DisplayPropsType = {
  data: OpenWeatherMapDataType;
  nameData: { label: string; value: string }[];
};

function Display({ data, nameData }: DisplayPropsType) {
  const navigate = useNavigate();

  const { current, timezone_offset, lat, lon } = data;
  const { dt, temp, feels_like, weather, humidity, wind_speed } = current;

  const { day, isDayTime, timeStandard } = getTimeData(dt, timezone_offset);

  const dataArr = [
    { label: "Day", value: day },
    { label: "Time", value: timeStandard },
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
    const locationStr = `${lat},${lon}`;
    navigate(`/location?location=${locationStr}`);
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
        <WeatherSvg id={weather[0].id} isDayTime={isDayTime} size={120} />
      </div>
      <div>
        <button onClick={handleSeeMore}>see more</button>
      </div>
    </div>
  );
}

export default Display;
