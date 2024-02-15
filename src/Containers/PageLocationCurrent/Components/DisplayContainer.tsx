import {
  useFetchLocationData,
  useHandleRecentLocation,
} from "../../../utils/customHooks/locationData";
import { TabNav } from "../../../SharedComponentsAux";
import Display from "./Display";
import Error from "./Error";
import Skeleton from "./Skeleton";

type DisplayContainerPropsType = {
  location: string;
};

function DisplayContainer({ location }: DisplayContainerPropsType) {
  const { data, error, isLoading, name } = useFetchLocationData(location);

  useHandleRecentLocation(location, name);

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
        location={location}
        currentData={current}
        todayData={daily[0]}
        timezoneOffset={timezone_offset}
      />
    </>
  );
}

export default DisplayContainer;
