import Display from "./Display";
import Skeleton from "./Skeleton";
import Error from "./Error";
import { HomeDataType } from "./types";

type WeatherDisplayLgProps = {
  data: HomeDataType;
  error: string;
  isLoading: boolean;
  name: string;
};

function WeatherDisplayLg({ data, error, isLoading, name }: WeatherDisplayLgProps) {
  if (isLoading) {
    return <Skeleton />;
  }

  return error ? <Error /> : <Display data={data} name={name} />;
}

export default WeatherDisplayLg;
