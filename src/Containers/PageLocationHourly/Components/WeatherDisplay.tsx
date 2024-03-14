import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";

type WeatherDisplayPropsType = {
  data: HourlyType;
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function WeatherDisplay({
  data,
  timezoneOffset,
  sunrise,
  sunset,
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
    wind_speed,
    rain,
    snow,
  } = data;

  const { time, isDayTime } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezoneOffset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  const tempUnit = useMemo(() => unitType === "imperial" ? "°F" : "°C", [unitType]);
  const windUnit = useMemo(() => unitType === "imperial" ? "mph" : "m/s", [unitType]);

  const dataArr = [
    { label: "Temperature", value: `${Math.round(temp)}${tempUnit}` },
    { label: "Feels like", value: `${Math.round(feels_like)}${tempUnit}` },
    { label: "Wind speed", value: `${Math.round(wind_speed)}${windUnit}` },
    { label: "Humidity", value: `${humidity}%` },
    { label: "Likelihood of precipitation", value: `${pop * 100}%` },
  ];

  if (rain && rain["1h"]) {
    dataArr.push({ label: "Rain", value: `${rain["1h"]} mm/h` });
  }

  if (snow && snow["1h"]) {
    dataArr.push({ label: "Snow", value: `${snow["1h"]} mm/h` });
  }

  return (
    <div>
      <div>{time}</div>
      <div>
        <WeatherSvg id={weather[0].id} isDayTime={isDayTime} size={120} />
      </div>
      <div>{weather[0].main}</div>
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
