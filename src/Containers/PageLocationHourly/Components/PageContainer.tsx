import { useContext } from "react";

import { TimeTypeContext } from "../../../contexts/timeTypeContext";
// import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import { getTimeData } from "../../../utils/helpers";
// import { RecentLocationManager } from "../../../SharedComponents";
import { TabNav } from "../../../SharedComponents";
import ListContainer from "./ListContainer";
// import ErrorComponent from "./ErrorComponent";
// import Skeleton from "./Skeleton";

import { currentMock, hourlyMock } from "../temp";

type PageContainerPropsType = {
  location: string;
};

function PageContainer({ location }: PageContainerPropsType) {
  // const { isFetching, error, data, name } =
  //   useFetchLocationDataAndName(location);

  const { timeType } = useContext(TimeTypeContext);

  // if (isFetching) {
  //   return <Skeleton />;
  // }

  // if (error !== "") {
  //   return <ErrorComponent error={error} />;
  // }

  // const { current, hourly, timezone_offset } = data;
  // const { sunrise, sunset } = current;

  const timezone_offset = -18000;
  const hourly = new Array(12).fill(hourlyMock);
  const { dt, sunrise, sunset } = currentMock;

  const { time } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezone_offset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  return (
    <div className="pt-8 px-6 pb-36">
      <div className="flex flex-col items-center gap-1 w-full mb-8 px-6 sm:flex-row sm:items-baseline sm:gap-4">
        {/* <h2 className="text-2xl text-center font-bold line-clamp-1">{name}</h2> */}
        <h2 className="text-2xl text-center font-bold line-clamp-1">
          Houston, TX
        </h2>
        <span className="shrink-0">{time}</span>
      </div>
      <div className="flex justify-center px-6 sm:justify-start">
        <TabNav location={location} />
      </div>
      <ListContainer
        data={hourly}
        timezoneOffset={timezone_offset}
        sunrise={sunrise}
        sunset={sunset}
      />
      {/* <RecentLocationManager location={location} name={name} /> */}
    </div>
  );
}

export default PageContainer;
