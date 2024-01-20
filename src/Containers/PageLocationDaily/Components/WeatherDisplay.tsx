import { CSSProperties } from "react";

import { WeatherSvg } from "../../../SharedComponentsAux";
import { DailyType } from "../../../utils/types/openWeatherMap";
import { getHighLow, getTimeData } from "../../../utils/helpers";

const tempStyles: CSSProperties = {
  outline: "3px solid orange",
  padding: "16px",
  display: "inline-block",
};

type WeatherDisplayPropsType = {
  data: DailyType;
  timezoneOffset: number;
};

function WeatherDisplay({ data, timezoneOffset }: WeatherDisplayPropsType) {
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

  const { day, isDayTime } = getTimeData(dt, timezoneOffset);

  const { high: feelsLikeHigh, low: feelsLikeLow } = getHighLow(feels_like);

  const dataArr = [
    { label: "Day", value: day },
    { label: "Summary", value: summary },
    { label: "Temperature (high)", value: temp.max },
    { label: "Temperature (low)", value: temp.min },
    { label: "Feels like (high)", value: feelsLikeHigh },
    { label: "Feels like (low)", value: feelsLikeLow },
    { label: "Weather", value: weather[0].main },
    { label: "Humidity", value: humidity },
    { label: "Wind speed", value: wind_speed },
  ];

  if (typeof rain === "number" && rain > 0) {
    dataArr.push({ label: "Rain (inches)", value: rain });
  }

  if (typeof snow === "number" && snow > 0) {
    dataArr.push({ label: "Snow (inches)", value: snow });
  }

  return (
    <div style={tempStyles}>
      <ul>
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
    </div>
  );
}

export default WeatherDisplay;
