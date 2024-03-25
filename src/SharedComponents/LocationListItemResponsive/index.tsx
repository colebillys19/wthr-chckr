import useFetchLocationData from "../../utils/customHooks/useFetchLocationData";
import { Spinner } from "../../SharedComponentsAux";
import LocationDisplay from "./LocationDisplay";
import ErrorComponent from "./ErrorComponent";

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
    return (
      <div className="flex">
        <Spinner />
      </div>
    );
  }

  if (!!error) {
    return <ErrorComponent />;
  }

  return <LocationDisplay data={data} name={name} location={location} />;
}

export default LocationListItemResponsive;
