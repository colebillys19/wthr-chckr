import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";
import { RecentLocationManager } from "../../../SharedComponents";
import { TabNav } from "../../../SharedComponentsAux";
import ListContainer from "./ListContainer";
import ErrorComponent from "./ErrorComponent";
import Skeleton from "./Skeleton";

type PageContainerPropsType = {
  location: string;
};

function PageContainer({ location }: PageContainerPropsType) {
  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(location);

  if (isFetching) {
    return <Skeleton />;
  }

  if (error !== "") {
    return <ErrorComponent error={error} />;
  }

  const { current, hourly, timezone_offset } = data;
  const { sunrise, sunset } = current;

  return (
    <>
      <h1>{name}</h1>
      <TabNav location={location} />
      <h2>Hourly</h2>
      <ListContainer
        data={hourly}
        timezoneOffset={timezone_offset}
        sunrise={sunrise}
        sunset={sunset}
      />
      <RecentLocationManager location={location} name={name} />
    </>
  );
}

export default PageContainer;
