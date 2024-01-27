import { useEffect } from "react";

import { useGlobalState } from "../../../context";
import { useFetchLocationData } from "../../../utils/customHooks/locationData";
import { useUpdateRecentLocations } from "../../../utils/customHooks/localStorage";
import { TabNav } from "../../../SharedComponentsAux";
import WeatherDisplayContainer from "./WeatherDisplayContainer";
import Error from "./Error";
import Skeleton from "./Skeleton";

type DataContainerPropsType = {
  location: string;
};

function DataContainer({ location }: DataContainerPropsType) {
  const { recentLocations } = useGlobalState();

  const { data, error, isLoading, name } = useFetchLocationData(location);

  const updateRecentLocations = useUpdateRecentLocations();

  useEffect(() => {
    const isRecent = recentLocations.some((loc) => loc === location);
    if (!isRecent) {
      updateRecentLocations([location, ...recentLocations.slice(0, 2)]);
    }
  }, [location, recentLocations, updateRecentLocations]);

  if (isLoading) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <Error error={error} />;
  }

  const { current, hourly, timezone_offset } = data;
  const { sunrise, sunset } = current;

  return (
    <>
      <div className="spacer" />
      <h1>{name}</h1>
      <div className="spacer" />
      <TabNav location={location} />
      <div className="spacer" />
      <h2>Hourly</h2>
      <div className="spacer" />
      <WeatherDisplayContainer
        data={hourly}
        timezoneOffset={timezone_offset}
        sunrise={sunrise}
        sunset={sunset}
      />
    </>
  );
}

export default DataContainer;
