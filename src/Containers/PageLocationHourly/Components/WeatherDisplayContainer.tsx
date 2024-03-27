import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";
import WeatherDisplay from './WeatherDisplay';

type WeatherDisplayContainerPropsType = {
  data: HourlyType;
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function WeatherDisplayContainer({
  data,
  timezoneOffset,
  sunrise,
  sunset,
}: WeatherDisplayContainerPropsType) {
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
  const rainVolume = rain && rain["1h"] ? `${rain["1h"]} mm/h` : "";
  const snowVolume = snow && snow["1h"] ? `${snow["1h"]} mm/h` : "";

  return (
    <WeatherDisplay
      svdId={weather[0].id}
      isDayTime={isDayTime}
      time={time}
      temp={`${Math.round(temp)}${tempUnit}`}
      weatherName={weather[0].main}
      feelsLike={`${Math.round(feels_like)}${tempUnit}`}
      windSpeed={`${Math.round(wind_speed)}${windUnit}`}
      precChance={`${pop * 100}%`}
      rainVolume={rainVolume}
      snowVolume={snowVolume}
      humidity={`${humidity}%`}
    />
  );
}

export default WeatherDisplayContainer;
