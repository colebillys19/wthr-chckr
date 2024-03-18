import WeatherDisplayContainer from "./WeatherDisplayContainer";
import Skeleton from "./WeatherDisplaySkeleton";
import Error from "./WeatherDisplayError";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";

type WeatherDisplayAsyncContainerPropsType = {
  data: OpenWeatherMapDataType;
  error: string;
  isLoading: boolean;
  name: string;
};

function WeatherDisplayAsyncContainer({
  data,
  error,
  isLoading,
  name,
}: WeatherDisplayAsyncContainerPropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <Error />;
  }

  return <WeatherDisplayContainer data={data} name={name} />;
}

export default WeatherDisplayAsyncContainer;
