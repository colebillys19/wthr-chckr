import { useContext } from "react";

import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import { getTimeData } from "../../../utils/helpers";
import { RecentLocationManager } from "../../../SharedComponents";
import { TabNav } from "../../../SharedComponents";
import WeatherDisplayContainer from "./WeatherDisplayContainer";
import ErrorComponent from "./ErrorComponent";
import Skeleton from "./Skeleton";

type PageTopContainerPropsType = {
  location: string;
};

function PageTopContainer({ location }: PageTopContainerPropsType) {
  const { timeType } = useContext(TimeTypeContext);

  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(location);

  if (isFetching) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <ErrorComponent error={error} />;
  }

  const { current, daily, timezone_offset } = data;

  const { dt, sunrise, sunset } = current;

  const { day, isDayTime, time } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezone_offset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  return (
    <>
      <div className="flex flex-col items-center gap-1 w-full mb-8 px-6 sm:flex-row sm:items-baseline sm:gap-4">
        <h2 className="text-2xl text-center font-bold line-clamp-1">{name}</h2>
        <span className="shrink-0">{time}</span>
      </div>
      <div className="flex justify-center px-6 sm:justify-start">
        <TabNav location={location} />
      </div>
      <WeatherDisplayContainer
        currentData={current}
        todayData={daily[0]}
        timezoneOffset={timezone_offset}
        dayName={day}
        isDayTime={isDayTime}
      />
      <RecentLocationManager location={location} name={name} />
    </>
  );
}

export default PageTopContainer;
