import { useFetchLocationData } from "../../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../../SharedComponents";

type RecentLocationDisplayPropsType = { location: string };

function RecentLocationDisplay({ location }: RecentLocationDisplayPropsType) {
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

export default RecentLocationDisplay;
