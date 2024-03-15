import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { WeatherSvg } from "../../../SharedComponentsAux";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";
import WeatherDisplayHour from "./WeatherDisplayHour";

type DisplayPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
};

function Display({ data, name }: DisplayPropsType) {
  const navigate = useNavigate();

  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const { current, hourly, timezone_offset, lat, lon } = data;

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

  const tempUnit = useMemo(
    () => (unitType === "imperial" ? "°F" : "°C"),
    [unitType]
  );
  const windUnit = useMemo(
    () => (unitType === "imperial" ? "mph" : "m/s"),
    [unitType]
  );

  const dataArr = [
    { label: "Temperature", value: `${Math.round(temp)}${tempUnit}` },
    { label: "Feels like", value: `${Math.round(feels_like)}${tempUnit}` },
    { label: "Wind speed", value: `${Math.round(wind_speed)}${windUnit}` },
    { label: "Humidity", value: `${humidity}%` },
  ];

  //
  const hourlyDataToUse = hourly.slice(1, 4);

  /*
   *
   */
  const handleSeeMore = () => {
    const locationStr = `${lat},${lon}`;
    navigate(`/location/current?location=${locationStr}`);
  };

  return (
    <div>
      <div>{name}</div>
      <div>{time}</div>
      <div>
        <WeatherSvg id={weather[0].id} isDayTime={isDayTime} size={120} />
      </div>
      <div>{weather[0].main}</div>
      <ul>
        {dataArr.map(({ label, value }) => (
          <li key={label}>
            <span>{label}:&nbsp;</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      <ul>
        {hourlyDataToUse.map((hourlyData) => {
          const { dt } = hourlyData;
          return (
            <li key={dt}>
              <WeatherDisplayHour
                data={hourlyData}
                timezoneOffset={timezone_offset}
                sunrise={sunrise}
                sunset={sunset}
              />
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={handleSeeMore}>see more</button>
      </div>
    </div>
  );
}

export default Display;
