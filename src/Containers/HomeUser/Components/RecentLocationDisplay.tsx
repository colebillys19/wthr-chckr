import { useFetchLocationData } from "../../../utils/customHooks/locationData";
import { WeatherDisplayHome } from "../../../SharedComponents";

type RecentLocationDisplayPropsType = { location: string };

function RecentLocationDisplay({ location }: RecentLocationDisplayPropsType) {
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

export default RecentLocationDisplay;
