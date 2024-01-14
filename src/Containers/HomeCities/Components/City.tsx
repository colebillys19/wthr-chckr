import { useFetchLocationData } from "../../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../../Components";

type CityPropsType = { location: string };

function City({ location }: CityPropsType) {
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

export default City;
