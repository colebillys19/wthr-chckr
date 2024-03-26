import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";
import WeatherDisplayContainer from "./WeatherDisplayContainer";
import ErrorComponent from "./WeatherDisplayError";
import Skeleton from "./WeatherDisplaySkeleton";

type WeatherDisplayAsyncContainerPropsType = {
  data: OpenWeatherMapDataType;
  error: string;
  isLoading: boolean;
  name: string;
  userLocation: string;
};

function WeatherDisplayAsyncContainer({
  data,
  error,
  isLoading,
  name,
  userLocation,
}: WeatherDisplayAsyncContainerPropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <WeatherDisplayContainer
      data={data}
      name={name}
      userLocation={userLocation}
    />
  );
}

export default WeatherDisplayAsyncContainer;
