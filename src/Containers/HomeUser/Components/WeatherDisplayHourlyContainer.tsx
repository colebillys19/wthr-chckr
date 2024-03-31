import { useContext } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { WeatherDisplaySmallWide } from "../../../ComponentsBase";
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";

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

  return (
    <WeatherDisplaySmallWide
      svgId={weather[0].id}
      isDayTime={isDayTime}
      mainText={time}
      temp={`${Math.round(temp)}${unitType === "imperial" ? "°F" : "°C"}`}
      weatherName={weather[0].main}
    />
  );
}

export default WeatherDisplayHourlyContainer;
