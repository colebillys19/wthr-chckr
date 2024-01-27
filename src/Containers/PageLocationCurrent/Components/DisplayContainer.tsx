import { useEffect } from "react";

import { useGlobalState } from "../../../context";
import { useFetchLocationData } from "../../../utils/customHooks/locationData";
import { useUpdateRecentLocations } from "../../../utils/customHooks/localStorage";
import { TabNav } from "../../../SharedComponentsAux";
import Display from "./Display";
import Error from "./Error";
import Skeleton from "./Skeleton";

type DisplayContainerPropsType = {
  location: string;
};

function DisplayContainer({ location }: DisplayContainerPropsType) {
  const { recentLocations } = useGlobalState();

  const { data, error, isLoading, name } = useFetchLocationData(location);

  const updateRecentLocations = useUpdateRecentLocations();

  useEffect(() => {
    const isRecent = recentLocations.some((loc) => loc === location);
    if (!isRecent) {
      updateRecentLocations([location, ...recentLocations.slice(0, 2)]);
    }
  }, []);

  if (isLoading) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <Error error={error} />;
  }

  const { current, daily, timezone_offset } = data;

  return (
    <>
      <div className="spacer" />
      <h1>{name}</h1>
      <div className="spacer" />
      <TabNav location={location} />
      <div className="spacer" />
      <Display
        currentData={current}
        todayData={daily[0]}
        timezoneOffset={timezone_offset}
      />
    </>
  );
}

export default DisplayContainer;
