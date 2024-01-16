import { CSSProperties } from "react";

import { WeatherSvg } from "../../../SharedComponentsAux";
import { DailyType } from "../../../utils/types/openWeatherMap";
import { getHighLow, getTimeData } from "../../../utils/helpers";

const tempStyles: CSSProperties = {
  outline: "3px solid orange",
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

/*

dt: 1705251600,
sunrise: 1705234694,
sunset: 1705269058,
moonrise: 1705243500,
moonset: 1705283520,
moon_phase: 0.12,
summary: "Expect a day of partly cloudy with snow",
temp: {
  day: 43.3,
  min: 28.71,
  max: 43.3,
  night: 28.71,
  eve: 30.38,
  morn: 33.67,
},
feels_like: {
  day: 34.32,
  night: 18,
  eve: 17.78,
  morn: 23.88,
},
pressure: 1008,
humidity: 45,
dew_point: 23.47,
wind_speed: 26.84,
wind_deg: 269,
wind_gust: 58.47,
weather: [
  {
    id: 600,
    main: "Snow",
    description: "light snow",
    icon: "13d",
  },
],
clouds: 16,
pop: 0.64,
snow: 0.2,
uvi: 1.45,

*/
