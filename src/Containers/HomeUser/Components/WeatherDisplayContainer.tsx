import { useContext, useMemo } from "react";

import { InternalLinkText } from "../../../ComponentsBase";
import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";
import WeatherDisplay from "./WeatherDisplay";

type WeatherDisplayContainerPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
  userLocation: string;
};

function WeatherDisplayContainer({
  data,
  name,
  userLocation,
}: WeatherDisplayContainerPropsType) {
  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const { current, hourly, timezone_offset } = data;

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

  const hourlyDataToUse = hourly.slice(1, 4);

  return (
    <div className="mb-2">
      <WeatherDisplay
        locationName={name}
        currentTime={time}
        svgId={weather[0].id}
        isDayTime={isDayTime}
        temp={`${Math.round(temp)}${tempUnit}`}
        weatherName={weather[0].main}
        feelsLike={`${Math.round(feels_like)}${tempUnit}`}
        windSpeed={`${Math.round(wind_speed)}${windUnit}`}
        humidity={`${humidity}%`}
        hourlyDataArr={hourlyDataToUse}
        timezoneOffset={timezone_offset}
        sunrise={sunrise}
        sunset={sunset}
      />
      <div>
        <InternalLinkText href={`/location/current?location=${userLocation}`}>
          See more
        </InternalLinkText>
      </div>
    </div>
  );
}

export default WeatherDisplayContainer;
