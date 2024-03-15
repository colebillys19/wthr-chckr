import WeatherDisplay from "./WeatherDisplay";
import Skeleton from "./WeatherDisplaySkeleton";
import Error from "./WeatherDisplayError";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";

type WeatherDisplayContainerPropsType = {
  data: OpenWeatherMapDataType;
  error: string;
  isLoading: boolean;
  name: string;
};

function WeatherDisplayContainer({ data, error, isLoading, name }: WeatherDisplayContainerPropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <Error />;
  }

  return <WeatherDisplay data={data} name={name} />;
}

export default WeatherDisplayContainer;
