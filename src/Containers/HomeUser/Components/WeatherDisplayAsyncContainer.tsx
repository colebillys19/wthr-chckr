import WeatherDisplayContainer from "./WeatherDisplayContainer";
import Skeleton from "./WeatherDisplaySkeleton";
import Error from "./WeatherDisplayError";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";

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
    return <Error />;
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
