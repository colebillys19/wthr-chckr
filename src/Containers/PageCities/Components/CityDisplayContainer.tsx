import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";
import CityDisplayMobile from "./CityDisplayMobile";
import CityDisplayDesktop from "./CityDisplayDesktop";

type CityDisplayContainerPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
  location: string;
};

function CityDisplayContainer({
  data,
  location,
  name,
}: CityDisplayContainerPropsType) {
  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const { current, timezone_offset } = data;

  const {
    dt,
    feels_like,
    humidity,
    wind_speed,
    temp,
    weather,
    sunrise,
    sunset,
  } = current;

  const { time, isDayTime } = getTimeData({
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

  return (
    <>
      <div className="sm:hidden">
        <CityDisplayMobile
          name={name}
          time={time}
          svgId={weather[0].id}
          isDayTime={isDayTime}
          temp={`${Math.round(temp)}${tempUnit}`}
          weatherName={weather[0].main}
          feelsLike={`${Math.round(feels_like)}${tempUnit}`}
          windSpeed={`${Math.round(wind_speed)} ${windUnit}`}
          humidity={`${humidity}%`}
          location={location}
        />
      </div>
      <div className="hidden sm:block">
        <CityDisplayDesktop
          name={name}
          time={time}
          svgId={weather[0].id}
          isDayTime={isDayTime}
          temp={`${Math.round(temp)}${tempUnit}`}
          weatherName={weather[0].main}
          feelsLike={`${Math.round(feels_like)}${tempUnit}`}
          windSpeed={`${Math.round(wind_speed)}${windUnit}`}
          humidity={`${humidity}%`}
          location={location}
        />
      </div>
    </>
  );
}

export default CityDisplayContainer;
