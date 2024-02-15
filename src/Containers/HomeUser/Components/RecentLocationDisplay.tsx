import { useFetchRecentLocationData } from "../../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../../SharedComponents";

type RecentLocationDisplayPropsType = { location: string; name: string };

function RecentLocationDisplay({
  location,
  name,
}: RecentLocationDisplayPropsType) {
  const { data, error, isLoading } = useFetchRecentLocationData(location);

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
