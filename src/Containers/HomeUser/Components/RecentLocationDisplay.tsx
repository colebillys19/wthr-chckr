import { WeatherDisplayHome } from "../../../SharedComponents";
import useFetchLocationData from "../../../utils/customHooks/useFetchLocationData";

type RecentLocationDisplayPropsType = { location: string; name: string };

function RecentLocationDisplay({
  location,
  name,
}: RecentLocationDisplayPropsType) {
  const { isLoading, error, data } = useFetchLocationData(location);

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
