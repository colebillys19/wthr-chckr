import { useContext, useMemo } from "react";

import {
  WeatherDisplaySmallWide,
  WeatherDisplaySmallTall,
  InternalLink,
} from "../../../BaseComponents";
import ArrowIcon from "../../../svg/iconSvgs/Components/Arrow";
import { UnitTypeContext } from "../../../contexts/unitTypeContext";
import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import { getTimeData } from "../../../utils/helpers";

type RecentLocationDisplayPropsType = {
  data: OpenWeatherMapDataType;
  name: string;
  location: string;
};

function RecentLocationDisplay({
  data,
  name,
  location,
}: RecentLocationDisplayPropsType) {
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
        <InternalLink
          href={`/location/current?location=${location}`}
          isTextLink={false}
        >
          <div className="flex justify-between items-center">
            <WeatherDisplaySmallWide
              svgId={weather[0].id}
              isDayTime={isDayTime}
              mainText={name}
              temp={`${Math.round(temp)}${tempUnit}`}
              weatherName={weather[0].main}
            />
            <ArrowIcon />
          </div>
        </InternalLink>
      </div>
      <div className="hidden sm:block">
        <InternalLink
          href={`/location/current?location=${location}`}
          isTextLink={false}
        >
          <div className="w-40 px-8 py-6 text-center border border-t-grey-b border-r-grey-a border-b-grey-a border-l-grey-b">
            <WeatherDisplaySmallTall
              svgId={weather[0].id}
              isDayTime={isDayTime}
              mainText={name}
              temp={`${Math.round(temp)}${tempUnit}`}
              weatherName={weather[0].main}
            />
          </div>
        </InternalLink>
      </div>
    </>
  );
}

export default RecentLocationDisplay;
