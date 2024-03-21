import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";
import WeatherDisplay from "./WeatherDisplay";

type WeatherDisplayContainerPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
};

function WeatherDisplayContainer({
  data,
  name,
}: WeatherDisplayContainerPropsType) {
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
    // rain,
    // snow,
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
  // const rainVolume = useMemo(
  //   () => (rain && rain["1h"] ? `${rain["1h"]} mm/h` : ""),
  //   [rain]
  // );
  // const snowVolume = useMemo(
  //   () => (snow && snow["1h"] ? `${snow["1h"]} mm/h` : ""),
  //   [snow]
  // );

  const hourlyDataToUse = hourly.slice(1, 4);

  /*
   *
   */
  const handleSeeMore = () => {
    const locationStr = `${lat},${lon}`;
    navigate(`/location/current?location=${locationStr}`);
  };

  return (
    <>
      <WeatherDisplay
        locationName={name}
        currentTime={time}
        svgId={weather[0].id}
        isDayTime={isDayTime}
        temp={`${Math.round(temp)}${tempUnit}`}
        weatherName={weather[0].main}
        feelsLike={`${Math.round(feels_like)}${tempUnit}`}
        windSpeed={`${Math.round(wind_speed)}${windUnit}`}
        // rainVolume={rainVolume}
        // snowVolume={snowVolume}
        humidity={`${humidity}%`}
        hourlyDataArr={hourlyDataToUse}
        timezoneOffset={timezone_offset}
        sunrise={sunrise}
        sunset={sunset}
      />
      <div>
        <button onClick={handleSeeMore}>see more</button>
      </div>
    </>
  );
}

export default WeatherDisplayContainer;
