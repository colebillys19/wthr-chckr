import { useContext, useMemo } from "react";

import {
  WeatherDisplaySmallWide,
  WeatherDisplaySmallTall,
  InternalLinkContent,
} from "../../ComponentsBase";
import ArrowIcon from "../../svg/iconSvgs/Components/Arrow";
import { UnitTypeContext } from "../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../contexts/timeTypeContext";
import { OpenWeatherMapDataType } from "../../utils/types/openWeatherMap";
import { getTimeData } from "../../utils/helpers";

type LocationDisplayPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
  location: string;
};

function LocationDisplay({ data, name, location }: LocationDisplayPropsType) {
  const { unitType } = useContext(UnitTypeContext);
  const { timeType } = useContext(TimeTypeContext);

  const { current, timezone_offset } = data;

  const { dt, temp, weather, sunrise, sunset } = current;

  const { isDayTime } = getTimeData({
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

  return (
    <>
      <div className="sm:hidden">
        <InternalLinkContent href={`/location/current?location=${location}`}>
          <div className="flex justify-between items-center min-h-20">
            <WeatherDisplaySmallWide
              svgId={weather[0].id}
              isDayTime={isDayTime}
              mainText={name}
              temp={`${Math.round(temp)}${tempUnit}`}
              weatherName={weather[0].main}
            />
            <ArrowIcon />
          </div>
        </InternalLinkContent>
      </div>
      <div className="hidden sm:block">
        <InternalLinkContent href={`/location/current?location=${location}`}>
          <div className="flex flex-col justify-center w-40 min-h-56 px-8 text-center border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
            <WeatherDisplaySmallTall
              svgId={weather[0].id}
              isDayTime={isDayTime}
              mainText={name}
              temp={`${Math.round(temp)}${tempUnit}`}
              weatherName={weather[0].main}
            />
          </div>
        </InternalLinkContent>
      </div>
    </>
  );
}

export default LocationDisplay;
