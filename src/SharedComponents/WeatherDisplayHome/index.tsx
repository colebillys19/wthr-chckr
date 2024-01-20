import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
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

  return error ? <Error /> : <Display data={data} name={name} />;
}

export default WeatherDisplayHome;
