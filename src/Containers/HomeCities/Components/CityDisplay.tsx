import { useFetchLocationData } from "../../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../../SharedComponents";

type CityDisplayPropsType = { location: string };

function CityDisplay({ location }: CityDisplayPropsType) {
  const { data, error, isLoading, name } = useFetchLocationData(location);

  return (
    <WeatherDisplayHome
      data={data}
      error={error}
      isLoading={isLoading}
      name={name}
    />
  );
}

export default CityDisplay;
