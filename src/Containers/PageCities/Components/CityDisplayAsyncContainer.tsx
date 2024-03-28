import useFetchLocationData from "../../../utils/customHooks/useFetchLocationData";
import CityDisplayContainer from "./CityDisplayContainer";
import Skeleton from "./Skeleton";
import ErrorComponent from "./ErrorComponent";

type CityDisplayAsyncContainerPropsType = {
  location: string;
  name: string;
};

function CityDisplayAsyncContainer({
  location,
  name,
}: CityDisplayAsyncContainerPropsType) {
  const { isLoading, error, data } = useFetchLocationData(location);

  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <ErrorComponent error={error} />;
  }

  return <CityDisplayContainer location={location} name={name} data={data} />;
}

export default CityDisplayAsyncContainer;
