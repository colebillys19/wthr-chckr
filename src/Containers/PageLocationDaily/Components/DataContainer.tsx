import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import { RecentLocationManager } from "../../../SharedComponents";
import { TabNav } from "../../../SharedComponentsAux";
import WeatherDisplayContainer from "./WeatherDisplayContainer";
import ErrorComponent from "./ErrorComponent";
import Skeleton from "./Skeleton";

type DataContainerPropsType = {
  location: string;
};

function DataContainer({ location }: DataContainerPropsType) {
  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(location);
  
  if (isFetching) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <ErrorComponent error={error} />;
  }

  const { daily, timezone_offset } = data;

  return (
    <>
      <h1>{name}</h1>
      <TabNav location={location} />
      <h2>Daily</h2>
      <WeatherDisplayContainer data={daily} timezoneOffset={timezone_offset} />
      <RecentLocationManager location={location} name={name} />
    </>
  );
}

export default DataContainer;
