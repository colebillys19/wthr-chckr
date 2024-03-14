import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import { RecentLocationManager } from "../../../SharedComponents";
import { TabNav } from "../../../SharedComponentsAux";
import Display from "./Display";
import ErrorComponent from "./ErrorComponent";
import Skeleton from "./Skeleton";

type DisplayContainerPropsType = {
  location: string;
};

function DisplayContainer({ location }: DisplayContainerPropsType) {
  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(location);

  if (isFetching) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <ErrorComponent error={error} />;
  }

  const { current, daily, timezone_offset } = data;

  return (
    <>
      <h1>{name}</h1>
      <TabNav location={location} />
      <Display
        currentData={current}
        todayData={daily[0]}
        timezoneOffset={timezone_offset}
      />
      <RecentLocationManager location={location} name={name} />
    </>
  );
}

export default DisplayContainer;
