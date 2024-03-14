import { useContext } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { DailyType } from "../../../utils/types/openWeatherMap";
import { getHighLow, getTimeData } from "../../../utils/helpers";

type WeatherDisplayPropsType = {
  data: DailyType;
  timezoneOffset: number;
  isToday: boolean;
};

function WeatherDisplay({
  data,
  timezoneOffset,
  isToday,
}: WeatherDisplayPropsType) {
  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const {
    dt,
    temp,
    feels_like,
    weather,
    humidity,
    pop,
    rain,
    snow,
    summary,
    wind_speed,
  } = data;

  const { day } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezoneOffset,
    timeType,
  });

  const { high: feelsLikeHigh, low: feelsLikeLow } = getHighLow(feels_like);

  const tempUnit = unitType === "imperial" ? "°F" : "°C";
  const windUnit = unitType === "imperial" ? "mph" : "m/s";

  const dataArr = [
    {
      label: "Temperature (high)",
      value: `${Math.round(temp.max)}${tempUnit}`,
    },
    { label: "Temperature (low)", value: `${Math.round(temp.min)}${tempUnit}` },
    {
      label: "Feels like (high)",
      value: `${Math.round(feelsLikeHigh)}${tempUnit}`,
    },
    {
      label: "Feels like (low)",
      value: `${Math.round(feelsLikeLow)}${tempUnit}`,
    },
    { label: "Likelihood of precipitation", value: `${pop * 100}%` },
    { label: "Avg. wind speed", value: `${Math.round(wind_speed)}${windUnit}` },
    { label: "Avg. humidity", value: `${humidity}%` },
  ];

  if (typeof rain === "number" && rain > 0) {
    dataArr.push({ label: "Rain", value: `${rain} mm` });
  }

  if (typeof snow === "number" && snow > 0) {
    dataArr.push({ label: "Snow", value: `${snow} mm` });
  }

  return (
    <div>
      <h3>{isToday ? "Today" : day}</h3>
      <div>
        <WeatherSvg id={weather[0].id} isDayTime size={120} />
      </div>
      <div>{summary}</div>
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WeatherDisplay;
