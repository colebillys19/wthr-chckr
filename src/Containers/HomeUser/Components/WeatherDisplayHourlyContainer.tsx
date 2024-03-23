import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { WeatherDisplaySmallWide } from '../../../BaseComponents';
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";
// import WeatherDisplayHourly from './WeatherDisplayHourly';

type WeatherDisplayHourlyContainerPropsType = {
  data: HourlyType;
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
};

function WeatherDisplayHourlyContainer({
  data,
  timezoneOffset,
  sunrise,
  sunset,
}: WeatherDisplayHourlyContainerPropsType) {
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
    <WeatherDisplaySmallWide
      svgId={weather[0].id}
      isDayTime={isDayTime}
      mainText={time}
      temp={`${Math.round(temp)}${tempUnit}`}
      weatherName={weather[0].main}
    />
  );
}

export default WeatherDisplayHourlyContainer;
