import { useContext, useMemo } from "react";

import { WeatherSvg } from "../../../SharedComponentsAux";
import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";

type WeatherDisplayHourPropsType = {
  data: HourlyType;
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function WeatherDisplayHour({
  data,
  timezoneOffset,
  sunrise,
  sunset,
}: WeatherDisplayHourPropsType) {
  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const { dt, temp, weather } = data;

  const { time, isDayTime } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezoneOffset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  const tempUnit = useMemo(
    () => (unitType === "imperial" ? "°F" : "°C"),
    [unitType]
  );

  return (
    <>
      <div>{time}</div>
      <WeatherSvg id={weather[0].id} isDayTime={isDayTime} size={60} />
      <div>{`${Math.round(temp)}${tempUnit}`}</div>
      <div>{weather[0].main}</div>
    </>
  );
}

export default WeatherDisplayHour;
