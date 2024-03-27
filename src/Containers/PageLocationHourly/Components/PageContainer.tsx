import { useContext } from "react";

import { TimeTypeContext } from "../../../contexts/timeTypeContext";
import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import { getTimeData } from "../../../utils/helpers";
import { RecentLocationManager } from "../../../SharedComponents";
import { TabNav } from "../../../SharedComponents";
import ListContainer from "./ListContainer";
import ErrorComponent from "./ErrorComponent";
import Skeleton from "./Skeleton";

type PageContainerPropsType = {
  location: string;
};

function PageContainer({ location }: PageContainerPropsType) {
  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(location);

  const { timeType } = useContext(TimeTypeContext);

  if (isFetching) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <ErrorComponent error={error} />;
  }

  const { current, hourly, timezone_offset } = data;
  const { dt, sunrise, sunset } = current;

  const { time } = getTimeData({
    dtSec: dt,
    apiTimezoneOffsetSec: timezone_offset,
    sunriseSec: sunrise,
    sunsetSec: sunset,
    timeType,
  });

  return (
    <div className="pt-8 px-6 pb-36">
      <div className="flex flex-col items-center gap-1 w-full mb-8 sm:flex-row sm:items-baseline sm:gap-4">
        <h2 className="text-2xl text-center font-bold line-clamp-1">{name}</h2>
        <span className="shrink-0">{time}</span>
      </div>
      <div className="flex justify-center sm:justify-start">
        <TabNav location={location} />
      </div>
      <ListContainer
        data={hourly}
        timezoneOffset={timezone_offset}
        sunrise={sunrise}
        sunset={sunset}
      />
      <RecentLocationManager location={location} name={name} />
    </div>
  );
}

export default PageContainer;
