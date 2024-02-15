import {
  useFetchLocationData,
  useHandleRecentLocation,
} from "../../../utils/customHooks/locationData";
import { TabNav } from "../../../SharedComponentsAux";
import WeatherDisplayContainer from "./WeatherDisplayContainer";
import Error from "./Error";
import Skeleton from "./Skeleton";

type DataContainerPropsType = {
  location: string;
};

function DataContainer({ location }: DataContainerPropsType) {
  const { data, error, isLoading, name } = useFetchLocationData(location);

  useHandleRecentLocation(location, name);

  if (isLoading) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <Error error={error} />;
  }

  const { daily, timezone_offset } = data;

  return (
    <>
      <div className="spacer" />
      <h1>{name}</h1>
      <div className="spacer" />
      <TabNav location={location} />
      <div className="spacer" />
      <h2>Daily</h2>
      <div className="spacer" />
      <WeatherDisplayContainer data={daily} timezoneOffset={timezone_offset} />
    </>
  );
}

export default DataContainer;
