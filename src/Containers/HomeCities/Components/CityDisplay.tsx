import { useFetchLocationData } from "../../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../../Components";

type CityDisplayPropsType = { location: string };

function CityDisplay({ location }: CityDisplayPropsType) {
  const { data, error, isLoading, nameData } = useFetchLocationData(location);

  return (
    <WeatherDisplayHome
      data={data}
      error={error}
      isLoading={isLoading}
      nameData={nameData}
    />
  );
}

export default CityDisplay;
