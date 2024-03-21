import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { DailyType } from "../../../utils/types/openWeatherMap";
import { getHighLow, getTimeData } from "../../../utils/helpers";
import WeatherDisplay from './WeatherDisplay';

type WeatherDisplayContainerPropsType = {
  data: DailyType;
  timezoneOffset: number;
  isToday: boolean;
};

function WeatherDisplayContainer({
  data,
  timezoneOffset,
  isToday,
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

  const tempUnit = useMemo(() => unitType === "imperial" ? "°F" : "°C", [unitType]);
  const windUnit = useMemo(() => unitType === "imperial" ? "mph" : "m/s", [unitType]);
  const rainVolume = useMemo(() => typeof rain === "number" && rain > 0 ? `${rain} mm` : "", [rain]);
  const snowVolume = useMemo(() => typeof snow === "number" && snow > 0 ? `${snow} mm` : "", [snow]);

  return (
      <WeatherDisplay
        dayName={isToday ? "Today" : day}
        svgId={weather[0].id}
        summary={summary}
        tempMax={`${Math.round(temp.max)}${tempUnit}`}
        tempMin={`${Math.round(temp.min)}${tempUnit}`}
        feelsLikeMax={`${Math.round(feelsLikeHigh)}${tempUnit}`}
        feelsLikeMin={`${Math.round(feelsLikeLow)}${tempUnit}`}
        precChance={`${pop * 100}%`}
        windSpeed={`${Math.round(wind_speed)}${windUnit}`}
        humidity={`${humidity}%`}
        rainVolume={rainVolume}
        snowVolume={snowVolume}
      />
  );
}

export default WeatherDisplayContainer;
