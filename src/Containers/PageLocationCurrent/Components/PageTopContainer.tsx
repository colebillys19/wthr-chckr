import { useContext } from 'react';

import { TimeTypeContext } from "../../../contexts/timeTypeContext";
// import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import { getTimeData } from "../../../utils/helpers";
// import { RecentLocationManager } from "../../../SharedComponents";
import { TabNav } from "../../../SharedComponents";
import WeatherDisplayContainer from "./WeatherDisplayContainer";
// import ErrorComponent from "./ErrorComponent";
// import Skeleton from "./Skeleton";

import { currentMock, dailyObjMock } from "../temp";

type PageTopContainerPropsType = {
  location: string;
};

function PageTopContainer({ location }: PageTopContainerPropsType) {
  const { timeType } = useContext(TimeTypeContext);

  // const { isFetching, error, data, name } =
  //   useFetchLocationDataAndName(location);

  // if (isFetching) {
  //   return <Skeleton />;
  // }

  // if (error !== "") {
  //   return <ErrorComponent error={error} />;
  // }

  // const { current, daily, timezone_offset } = data;

  const { dt, sunrise, sunset } = currentMock;
  const timezone_offset = -14400;

  const {
    // day,
    // isDayTime,
    // time,
  } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezone_offset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  return (
    <>
      {/* <h1>{name}</h1> */}
      <div className="flex flex-col items-center gap-1 w-full mb-8 px-6 sm:flex-row sm:justify-center sm:items-baseline sm:gap-4">
        <h2 className="text-2xl text-center font-bold line-clamp-1">
          Wilkes-Barre, PA
        </h2>
        {/* <span className="shrink-0">{time}</span> */}
        <span className="shrink-0">2:38 PM</span>
      </div>
      {/* <TabNav location={location} /> */}
      <div className="flex justify-center">
        <TabNav location="41.2459149,-75.88130749999999" />
      </div>
      <WeatherDisplayContainer
        // currentData={current}
        currentData={currentMock}
        // todayData={daily[0]}
        todayData={dailyObjMock}
        // timezoneOffset={timezone_offset}
        timezoneOffset={timezone_offset}
        // day={day}
        // isDayTime={isDayTime}
      />
      {/* <RecentLocationManager location={location} name={name} /> */}
    </>
  );
}

export default PageTopContainer;
