import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

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
  color: 'grey',
};

type DisplayPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
};

function Display({ data, name }: DisplayPropsType) {
  const navigate = useNavigate();

  const { current, timezone_offset, lat, lon } = data;
  const { dt, temp, feels_like, weather, humidity, wind_speed } = current;

  const { day, isDayTime, timeStandard } = getTimeData(dt, timezone_offset);

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
    const locationStr = `${lat},${lon}`;
    navigate(`/location/current?location=${locationStr}`);
  };

  return (
    <div style={tempStylesA}>
      <div><b>{name}</b></div>
      <div>
        <WeatherSvg id={weather[0].id} isDayTime={isDayTime} size={120} />
      </div>
      <div><b>{day}, {timeStandard}</b></div>
      <br />
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span style={tempStylesB}>{label}:&nbsp;</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      <br />
      <div>
        <button onClick={handleSeeMore}>see more</button>
      </div>
    </div>
  );
}

export default Display;
