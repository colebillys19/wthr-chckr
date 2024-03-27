import { useContext, useMemo } from "react";

import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { HourlyType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";
import WeatherDisplayTall from "./WeatherDisplayTall";
import WeatherDisplayWide from "./WeatherDisplayWide";

type WeatherDisplayContainerPropsType = {
  data: HourlyType;
  timezoneOffset: number;
  sunrise: number;
  sunset: number;
  showDivider: boolean;
};

function WeatherDisplayContainer({
  data,
  timezoneOffset,
  sunrise,
  sunset,
  showDivider,
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

  const tempUnit = useMemo(
    () => (unitType === "imperial" ? "°F" : "°C"),
    [unitType]
  );
  const windUnit = useMemo(
    () => (unitType === "imperial" ? "mph" : "m/s"),
    [unitType]
  );
  const rainVolume = rain && rain["1h"] ? `${rain["1h"]} mm/h` : "";
  const snowVolume = snow && snow["1h"] ? `${snow["1h"]} mm/h` : "";

  return (
    <div className="flex flex-col items-center sm:items-start">
      <div className="sm:hidden">
        <WeatherDisplayTall
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
      </div>
      <div className="hidden sm:block">
        <WeatherDisplayWide
          svdId={weather[0].id}
          isDayTime={isDayTime}
          time={time}
          temp={`${Math.round(temp)}${tempUnit}`}
          weatherName={weather[0].main}
          feelsLike={`${Math.round(feels_like)}${tempUnit}`}
          windSpeed={`${Math.round(wind_speed)}${windUnit}`}
          precChance={`${Math.round(pop * 100)}%`}
          rainVolume={rainVolume}
          snowVolume={snowVolume}
          humidity={`${humidity}%`}
        />
      </div>
      {showDivider && (
        <div className="flex justify-center mt-8 w-screen sm:justify-start">
          <hr className="w-1/2 border-grey-b" />
        </div>
      )}
    </div>
  );
}

export default WeatherDisplayContainer;
