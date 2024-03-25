import useFetchLocationData from "../../utils/customHooks/useFetchLocationData";
import LocationDisplay from "./LocationDisplay";
import ErrorComponent from "./ErrorComponent";
import Skeleton from "./Skeleton";

type LocationListItemResponsivePropsType = {
  location: string;
  name: string;
};

function LocationListItemResponsive({
  location,
  name,
}: LocationListItemResponsivePropsType) {
  const { isLoading, error, data } = useFetchLocationData(location);

  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <ErrorComponent />;
  }

  return <LocationDisplay data={data} name={name} location={location} />;
}

export default LocationListItemResponsive;
