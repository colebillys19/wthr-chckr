import WeatherDisplay from "./WeatherDisplay";
import Skeleton from "./WeatherDisplaySkeleton";
import Error from "./WeatherDisplayError";
import { OpenWeatherMapDataType } from "../../../utils/types/openWeatherMap";

type WeatherDisplayHomePropsType = {
  data: OpenWeatherMapDataType;
  error: string;
  isLoading: boolean;
  name: string;
};

function WeatherDisplayHome({ data, error, isLoading, name }: WeatherDisplayHomePropsType) {
  if (isLoading) {
    return <Skeleton />;
  }

  if (!!error) {
    return <Error />;
  }

  return <WeatherDisplay data={data} name={name} />;
}

export default WeatherDisplayHome;
