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

  const { current, hourly, timezone_offset } = data;
  const { sunrise, sunset } = current;

  return (
    <>
      <h1>{name}</h1>
      <TabNav location={location} />
      <h2>Hourly</h2>
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
