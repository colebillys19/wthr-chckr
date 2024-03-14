import { WeatherDisplayHome } from "../../../SharedComponents";
import useFetchLocationDataAndName from "../../../utils/customHooks/useFetchLocationDataAndName";

type CityDisplayPropsType = { location: string };

function CityDisplay({ location }: CityDisplayPropsType) {
  const { isFetching, error, data, name } =
    useFetchLocationDataAndName(location);

  return (
    <WeatherDisplayHome
      data={data}
      error={error}
      isLoading={isFetching}
      name={name}
    />
  );
}

export default CityDisplay;
