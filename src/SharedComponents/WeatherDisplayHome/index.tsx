import Display from "./Display";
import Skeleton from "./Skeleton";
import ErrorComponent from "./Error";
import { OpenWeatherMapDataType } from "../../utils/types/openWeatherMap";

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
    return <ErrorComponent />;
  }

  return <Display data={data} name={name} />;
}

export default WeatherDisplayHome;
