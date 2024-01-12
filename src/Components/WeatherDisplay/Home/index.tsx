import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { HomeDataType } from "./types";

type WeatherDisplayLgProps = {
  data: HomeDataType;
  error: string;
  isLoading: boolean;
};

function WeatherDisplayLg({ data, error, isLoading }: WeatherDisplayLgProps) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} />;
}

export default WeatherDisplayLg;
