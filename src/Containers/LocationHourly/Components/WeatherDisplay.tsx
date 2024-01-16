import { CSSProperties } from "react";

import { WeatherSvg } from "../../../SharedComponentsAux";
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";

const tempStyles: CSSProperties = {
  outline: "3px solid orange",
  display: "inline-block",
};

type WeatherDisplayPropsType = {
  data: HourlyType;
  timezoneOffset: number;
};

function WeatherDisplay({ data, timezoneOffset }: WeatherDisplayPropsType) {
  const { dt, temp, feels_like, weather, humidity, wind_speed, rain, snow } =
    data;

  const { timeStandard, isDayTime } = getTimeData(dt, timezoneOffset);

  const dataArr = [
    { label: "Time", value: timeStandard },
    { label: "Temperature", value: temp },
    { label: "Feels like", value: feels_like },
    { label: "Weather", value: weather[0].main },
    { label: "Humidity", value: humidity },
    { label: "Wind speed", value: wind_speed },
  ];

  if (rain && rain["1h"]) {
    dataArr.push({ label: "Rain (inches)", value: rain["1h"] });
  }

  if (snow && snow["1h"]) {
    dataArr.push({ label: "Snow (inches)", value: snow["1h"] });
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

dt: 1705276800,
temp: 30.2,
feels_like: 18.03,
pressure: 1019,
humidity: 38,
dew_point: 10.08,
uvi: 0,
clouds: 8,
visibility: 10000,
wind_speed: 18.68,
wind_deg: 281,
wind_gust: 28.52,
weather: [
  {
    id: 800,
    main: "Clear",
    description: "clear sky",
    icon: "01n",
  },
],
pop: 0,

*/
